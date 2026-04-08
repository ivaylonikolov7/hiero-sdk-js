/**
 * Compatibility wrapper that adapts protobuf-es v2 schemas to the
 * protobufjs-style API used by the SDK (proto.X.encode/decode/create).
 *
 * Handles:
 * - Long <-> BigInt conversion for int64/sint64/uint64 fields
 * - Oneof field format: flat {fieldName: value} <-> {case, value}
 */
import { create, toBinary, fromBinary } from "@bufbuild/protobuf";
import Long from "long";

/**
 * Convert a protobufjs-style plain object to protobuf-es format.
 * - Long -> BigInt
 * - Flat oneof fields -> {case, value}
 */
function toProtobufEs(obj, schema) {
    if (obj == null) return obj;
    const result = convertLongToBigInt(obj);
    return convertOneofToStructured(result, schema);
}

/**
 * Convert a protobuf-es decoded message to protobufjs-style plain object.
 * - BigInt -> Long
 * - {case, value} oneof -> flat fields + discriminator
 * - Remove $typeName/$unknown metadata
 */
function fromProtobufEs(obj, schema) {
    if (obj == null) return obj;
    const result = convertBigIntToLong(obj);
    return convertOneofToFlat(result, schema);
}

/**
 * Deep convert Long -> BigInt.
 */
function convertLongToBigInt(obj) {
    if (obj == null) return obj;
    if (Long.isLong(obj)) return BigInt(obj.toString());
    if (typeof obj === "number") return obj;
    if (typeof obj === "string") return obj;
    if (typeof obj === "boolean") return obj;
    if (typeof obj === "bigint") return obj;
    if (obj instanceof Uint8Array) return obj;
    if (Array.isArray(obj)) return obj.map(convertLongToBigInt);
    if (typeof obj === "object") {
        const result = {};
        for (const key of Object.keys(obj)) {
            if (key === "$typeName" || key === "$unknown") continue;
            result[key] = convertLongToBigInt(obj[key]);
        }
        return result;
    }
    return obj;
}

/**
 * Deep convert BigInt -> Long. Also strips $typeName/$unknown.
 */
function convertBigIntToLong(obj) {
    if (obj == null) return obj;
    if (typeof obj === "bigint") return Long.fromString(obj.toString());
    if (typeof obj === "number") return obj;
    if (typeof obj === "string") return obj;
    if (typeof obj === "boolean") return obj;
    if (obj instanceof Uint8Array) return obj;
    if (Long.isLong(obj)) return obj;
    if (Array.isArray(obj)) return obj.map(convertBigIntToLong);
    if (typeof obj === "object") {
        const result = {};
        for (const key of Object.keys(obj)) {
            if (key === "$typeName" || key === "$unknown") continue;
            result[key] = convertBigIntToLong(obj[key]);
        }
        return result;
    }
    return obj;
}

/**
 * Build a map of oneof field names to their oneof group name from a schema.
 * Cached per schema for performance.
 */
const oneofCache = new WeakMap();

function getOneofMap(schema) {
    if (oneofCache.has(schema)) return oneofCache.get(schema);
    const map = {};
    for (const oneof of schema.oneofs) {
        for (const field of oneof.fields) {
            map[field.name] = oneof.name;
        }
    }
    oneofCache.set(schema, map);
    return map;
}

/**
 * Convert flat oneof fields to protobuf-es {case, value} format.
 * E.g., { accountNum: 42n } -> { account: { case: "accountNum", value: 42n } }
 */
function convertOneofToStructured(obj, schema) {
    if (obj == null || typeof obj !== "object" || obj instanceof Uint8Array) return obj;

    const oneofMap = getOneofMap(schema);
    if (Object.keys(oneofMap).length === 0) return obj;

    const result = {};
    const processedOneofs = new Set();

    for (const [key, value] of Object.entries(obj)) {
        if (key in oneofMap) {
            const oneofName = oneofMap[key];
            if (!processedOneofs.has(oneofName) && value != null) {
                result[oneofName] = { case: key, value: value };
                processedOneofs.add(oneofName);
            }
        } else {
            result[key] = value;
        }
    }
    return result;
}

/**
 * Convert protobuf-es {case, value} oneof to flat field format.
 * E.g., { account: { case: "accountNum", value: 42 } } -> { accountNum: 42 }
 */
function convertOneofToFlat(obj, schema) {
    if (obj == null || typeof obj !== "object" || obj instanceof Uint8Array) return obj;

    const result = {};
    const oneofNames = new Set();
    for (const oneof of schema.oneofs) {
        oneofNames.add(oneof.name);
    }

    for (const [key, value] of Object.entries(obj)) {
        if (oneofNames.has(key) && value != null && typeof value === "object" && "case" in value) {
            // Oneof field: flatten to { fieldName: value }
            if (value.case !== "" && value.value != null) {
                result[value.case] = value.value;
            }
            // Also set the discriminator (protobufjs convention)
            result[key] = value.case;
        } else {
            result[key] = value;
        }
    }
    return result;
}

/**
 * Wrap a protobuf-es schema with protobufjs-compatible encode/decode/create API.
 *
 * @param {import("@bufbuild/protobuf").DescMessage} schema
 * @returns {{ encode: Function, decode: Function, create: Function }}
 */
export function wrapSchema(schema) {
    return {
        encode(obj) {
            const converted = toProtobufEs(obj, schema);
            const msg = create(schema, converted);
            const bytes = toBinary(schema, msg);
            return {
                finish() {
                    return bytes;
                },
                len: bytes.length,
            };
        },
        decode(reader) {
            const bytes =
                reader instanceof Uint8Array
                    ? reader
                    : reader.buf || reader;
            const msg = fromBinary(schema, bytes);
            return fromProtobufEs(msg, schema);
        },
        create(init) {
            if (init == null) return create(schema);
            const converted = toProtobufEs(init, schema);
            return create(schema, converted);
        },
    };
}

/**
 * Create a lightweight gRPC service stub matching protobufjs RPCImpl contract.
 * The service stubs serialize requests to bytes and deserialize responses.
 *
 * @param {string} serviceName - Service name (unused but kept for clarity)
 * @param {string[]} methodNames - Array of RPC method names
 * @param {import("@bufbuild/protobuf").DescMessage} requestSchema - Schema for request messages
 * @param {import("@bufbuild/protobuf").DescMessage} responseSchema - Schema for response messages
 */
export function createServiceStub(
    serviceName,
    methodNames,
    requestSchema,
    responseSchema,
) {
    return {
        create(rpcImpl) {
            const service = {};
            for (const methodName of methodNames) {
                service[methodName] = function (request, callback) {
                    // If called with a callback (protobufjs style)
                    if (typeof callback === "function") {
                        const reqConverted = toProtobufEs(request, requestSchema);
                        const msg = create(requestSchema, reqConverted);
                        const reqBytes = toBinary(requestSchema, msg);
                        rpcImpl(
                            { name: methodName },
                            reqBytes,
                            (err, resBytes) => {
                                if (err) {
                                    callback(err);
                                    return;
                                }
                                const resMsg = fromBinary(
                                    responseSchema,
                                    resBytes,
                                );
                                callback(
                                    null,
                                    fromProtobufEs(resMsg, responseSchema),
                                );
                            },
                        );
                    } else {
                        // Promise-based call (SDK actually uses this pattern)
                        return new Promise((resolve, reject) => {
                            const reqConverted = toProtobufEs(
                                request,
                                requestSchema,
                            );
                            const msg = create(requestSchema, reqConverted);
                            const reqBytes = toBinary(requestSchema, msg);
                            rpcImpl(
                                { name: methodName },
                                reqBytes,
                                (err, resBytes) => {
                                    if (err) {
                                        reject(err);
                                        return;
                                    }
                                    const resMsg = fromBinary(
                                        responseSchema,
                                        resBytes,
                                    );
                                    resolve(
                                        fromProtobufEs(
                                            resMsg,
                                            responseSchema,
                                        ),
                                    );
                                },
                            );
                        });
                    }
                };
            }
            return service;
        },
    };
}
