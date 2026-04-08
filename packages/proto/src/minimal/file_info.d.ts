import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of a FileGetInfoResponse. */
    interface IFileGetInfoResponse {

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        header?: (proto.IResponseHeader|null);

        /**
         * A combination of fields from the requested file metadata.
         * <p>
         * This SHALL NOT be set if the identified file does not exist
         * or has expired.
         */
        fileInfo?: (proto.FileGetInfoResponse.IFileInfo|null);
    }

    /** A response to a query for the metadata of a file in the HFS. */
    class FileGetInfoResponse implements IFileGetInfoResponse {

        /**
         * Constructs a new FileGetInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFileGetInfoResponse);

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        public header?: (proto.IResponseHeader|null);

        /**
         * A combination of fields from the requested file metadata.
         * <p>
         * This SHALL NOT be set if the identified file does not exist
         * or has expired.
         */
        public fileInfo?: (proto.FileGetInfoResponse.IFileInfo|null);

        /**
         * Creates a new FileGetInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileGetInfoResponse instance
         */
        public static create(properties?: proto.IFileGetInfoResponse): proto.FileGetInfoResponse;

        /**
         * Encodes the specified FileGetInfoResponse message. Does not implicitly {@link proto.FileGetInfoResponse.verify|verify} messages.
         * @param message FileGetInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFileGetInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileGetInfoResponse message, length delimited. Does not implicitly {@link proto.FileGetInfoResponse.verify|verify} messages.
         * @param message FileGetInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFileGetInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileGetInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileGetInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FileGetInfoResponse;

        /**
         * Decodes a FileGetInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileGetInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FileGetInfoResponse;

        /**
         * Verifies a FileGetInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileGetInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileGetInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.FileGetInfoResponse;

        /**
         * Creates a plain object from a FileGetInfoResponse message. Also converts values to other types if specified.
         * @param message FileGetInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.FileGetInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileGetInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileGetInfoResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FileGetInfoResponse {

        /** Properties of a FileInfo. */
        interface IFileInfo {

            /**
             * A file identifier.
             * <p>
             * This SHALL be the identifier of a file that exists in HFS.<br/>
             * This value SHALL identify the file that was queried.
             */
            fileID?: (proto.IFileID|null);

            /** A size, in bytes, for the file. */
            size?: (number|Long|null);

            /**
             * An expiration timestamp.
             * <p>
             * The file SHALL NOT expire before the network consensus time
             * exceeds this value.<br/>
             * The file SHALL expire after the network consensus time
             * exceeds this value.<br/>
             */
            expirationTime?: (proto.ITimestamp|null);

            /**
             * A flag indicating this file is deleted.
             * <p>
             * A deleted file SHALL have a size `0` and empty content.
             */
            deleted?: (boolean|null);

            /**
             * A KeyList listing all keys that "own" the file.
             * <p>
             * All keys in this list MUST sign a transaction to append to the
             * file content, or to modify file metadata.<br/>
             * At least _one_ key in this list MUST sign a transaction to delete
             * this file.<br/>
             * If this is an empty `KeyList`, the file is immutable, cannot be
             * modified or deleted, but MAY expire. A `fileUpdate` transaction MAY
             * extend the expiration time for an immutable file.
             */
            keys?: (proto.IKeyList|null);

            /**
             * A short description for this file.
             * <p>
             * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
             * (default 100) bytes when encoded as UTF-8.
             */
            memo?: (string|null);

            /**
             * A ledger identifier for the responding network.
             * <p>
             * This value SHALL identify the distributed ledger that responded to
             * this query.
             */
            ledgerId?: (Uint8Array|null);
        }

        /** Represents a FileInfo. */
        class FileInfo implements IFileInfo {

            /**
             * Constructs a new FileInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.FileGetInfoResponse.IFileInfo);

            /**
             * A file identifier.
             * <p>
             * This SHALL be the identifier of a file that exists in HFS.<br/>
             * This value SHALL identify the file that was queried.
             */
            public fileID?: (proto.IFileID|null);

            /** A size, in bytes, for the file. */
            public size: (number|Long);

            /**
             * An expiration timestamp.
             * <p>
             * The file SHALL NOT expire before the network consensus time
             * exceeds this value.<br/>
             * The file SHALL expire after the network consensus time
             * exceeds this value.<br/>
             */
            public expirationTime?: (proto.ITimestamp|null);

            /**
             * A flag indicating this file is deleted.
             * <p>
             * A deleted file SHALL have a size `0` and empty content.
             */
            public deleted: boolean;

            /**
             * A KeyList listing all keys that "own" the file.
             * <p>
             * All keys in this list MUST sign a transaction to append to the
             * file content, or to modify file metadata.<br/>
             * At least _one_ key in this list MUST sign a transaction to delete
             * this file.<br/>
             * If this is an empty `KeyList`, the file is immutable, cannot be
             * modified or deleted, but MAY expire. A `fileUpdate` transaction MAY
             * extend the expiration time for an immutable file.
             */
            public keys?: (proto.IKeyList|null);

            /**
             * A short description for this file.
             * <p>
             * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
             * (default 100) bytes when encoded as UTF-8.
             */
            public memo: string;

            /**
             * A ledger identifier for the responding network.
             * <p>
             * This value SHALL identify the distributed ledger that responded to
             * this query.
             */
            public ledgerId: Uint8Array;

            /**
             * Creates a new FileInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileInfo instance
             */
            public static create(properties?: proto.FileGetInfoResponse.IFileInfo): proto.FileGetInfoResponse.FileInfo;

            /**
             * Encodes the specified FileInfo message. Does not implicitly {@link proto.FileGetInfoResponse.FileInfo.verify|verify} messages.
             * @param message FileInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.FileGetInfoResponse.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link proto.FileGetInfoResponse.FileInfo.verify|verify} messages.
             * @param message FileInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.FileGetInfoResponse.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FileGetInfoResponse.FileInfo;

            /**
             * Decodes a FileInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FileGetInfoResponse.FileInfo;

            /**
             * Verifies a FileInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileInfo
             */
            public static fromObject(object: { [k: string]: any }): proto.FileGetInfoResponse.FileInfo;

            /**
             * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
             * @param message FileInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.FileGetInfoResponse.FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Timestamp. */
    interface ITimestamp {

        /**
         * The number of complete seconds since the start of the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the UNIX epoch with 0
         * at `1970-01-01T00:00:00.000Z`.<br/>
         * This value MUST be greater than 0.<br/>
         * This value SHOULD be strictly greater than `946684800`.
         */
        seconds?: (number|Long|null);

        /**
         * The number of nanoseconds after the start of the second referenced
         * in `seconds`.
         * <p>
         * This value MUST be greater than or equal to 0.<br/>
         * This value MUST be strictly less than 1,000,000,000.
         */
        nanos?: (number|null);
    }

    /**
     * An exact date and time.<br/>
     * This is the same data structure as the Google protobuf Timestamp.proto.
     *
     * #### Additional Notes
     * Useful information is present in comments on the
     * [Google version](https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto).
     */
    class Timestamp implements ITimestamp {

        /**
         * Constructs a new Timestamp.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITimestamp);

        /**
         * The number of complete seconds since the start of the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the UNIX epoch with 0
         * at `1970-01-01T00:00:00.000Z`.<br/>
         * This value MUST be greater than 0.<br/>
         * This value SHOULD be strictly greater than `946684800`.
         */
        public seconds: (number|Long);

        /**
         * The number of nanoseconds after the start of the second referenced
         * in `seconds`.
         * <p>
         * This value MUST be greater than or equal to 0.<br/>
         * This value MUST be strictly less than 1,000,000,000.
         */
        public nanos: number;

        /**
         * Creates a new Timestamp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Timestamp instance
         */
        public static create(properties?: proto.ITimestamp): proto.Timestamp;

        /**
         * Encodes the specified Timestamp message. Does not implicitly {@link proto.Timestamp.verify|verify} messages.
         * @param message Timestamp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link proto.Timestamp.verify|verify} messages.
         * @param message Timestamp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Timestamp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Timestamp;

        /**
         * Decodes a Timestamp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Timestamp;

        /**
         * Verifies a Timestamp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Timestamp
         */
        public static fromObject(object: { [k: string]: any }): proto.Timestamp;

        /**
         * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
         * @param message Timestamp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Timestamp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Timestamp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileID. */
    interface IFileID {

        /** A whole number shard identifier. */
        shardNum?: (number|Long|null);

        /** A whole number realm identifier. */
        realmNum?: (number|Long|null);

        /** A whole number file identifier, unique within its realm and shard. */
        fileNum?: (number|Long|null);
    }

    /** An identifier for a File within the network. */
    class FileID implements IFileID {

        /**
         * Constructs a new FileID.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFileID);

        /** A whole number shard identifier. */
        public shardNum: (number|Long);

        /** A whole number realm identifier. */
        public realmNum: (number|Long);

        /** A whole number file identifier, unique within its realm and shard. */
        public fileNum: (number|Long);

        /**
         * Creates a new FileID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileID instance
         */
        public static create(properties?: proto.IFileID): proto.FileID;

        /**
         * Encodes the specified FileID message. Does not implicitly {@link proto.FileID.verify|verify} messages.
         * @param message FileID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFileID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileID message, length delimited. Does not implicitly {@link proto.FileID.verify|verify} messages.
         * @param message FileID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFileID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FileID;

        /**
         * Decodes a FileID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FileID;

        /**
         * Verifies a FileID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileID
         */
        public static fromObject(object: { [k: string]: any }): proto.FileID;

        /**
         * Creates a plain object from a FileID message. Also converts values to other types if specified.
         * @param message FileID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.FileID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileID
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ContractID. */
    interface IContractID {

        /** A whole number shard identifier. */
        shardNum?: (number|Long|null);

        /** A whole number realm identifier. */
        realmNum?: (number|Long|null);

        /** A whole number contract identifier, unique within its realm and shard. */
        contractNum?: (number|Long|null);

        /**
         * A 20-byte EVM address of the contract to call.
         * <p>
         * A contract created via a HAPI `ContractCreate` call SHALL have
         * an EVM address determined by its `shard.realm.num` identifier.<br/>
         * This address is as follows
         * <ol>
         * <li>4 byte big-endian shard number</li>
         * <li>8 byte big-endian realm number</li>
         * <li>8 byte big-endian contract number</li>
         * </ol>
         * This address is not stored in state, but is computed when needed.
         * <p>
         * Contracts created by any other means, including a HAPI
         * `EthereumTransaction` whose `to` address is the zero address,
         * SHALL have the EVM address prescribed by the `CREATE` or
         * `CREATE2` opcode, as applicable.
         */
        evmAddress?: (Uint8Array|null);
    }

    /** An identifier for a smart contract within the network. */
    class ContractID implements IContractID {

        /**
         * Constructs a new ContractID.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IContractID);

        /** A whole number shard identifier. */
        public shardNum: (number|Long);

        /** A whole number realm identifier. */
        public realmNum: (number|Long);

        /** A whole number contract identifier, unique within its realm and shard. */
        public contractNum?: (number|Long|null);

        /**
         * A 20-byte EVM address of the contract to call.
         * <p>
         * A contract created via a HAPI `ContractCreate` call SHALL have
         * an EVM address determined by its `shard.realm.num` identifier.<br/>
         * This address is as follows
         * <ol>
         * <li>4 byte big-endian shard number</li>
         * <li>8 byte big-endian realm number</li>
         * <li>8 byte big-endian contract number</li>
         * </ol>
         * This address is not stored in state, but is computed when needed.
         * <p>
         * Contracts created by any other means, including a HAPI
         * `EthereumTransaction` whose `to` address is the zero address,
         * SHALL have the EVM address prescribed by the `CREATE` or
         * `CREATE2` opcode, as applicable.
         */
        public evmAddress?: (Uint8Array|null);

        /** ContractID contract. */
        public contract?: ("contractNum"|"evmAddress");

        /**
         * Creates a new ContractID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractID instance
         */
        public static create(properties?: proto.IContractID): proto.ContractID;

        /**
         * Encodes the specified ContractID message. Does not implicitly {@link proto.ContractID.verify|verify} messages.
         * @param message ContractID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IContractID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractID message, length delimited. Does not implicitly {@link proto.ContractID.verify|verify} messages.
         * @param message ContractID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IContractID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ContractID;

        /**
         * Decodes a ContractID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ContractID;

        /**
         * Verifies a ContractID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractID
         */
        public static fromObject(object: { [k: string]: any }): proto.ContractID;

        /**
         * Creates a plain object from a ContractID message. Also converts values to other types if specified.
         * @param message ContractID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ContractID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ContractID
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Key. */
    interface IKey {

        /**
         * A smart contract instance that is authorized implicitly.
         * <p>
         * This key type SHALL require that the code in the active message frame
         * belong to the contract with the given id.
         */
        contractID?: (proto.IContractID|null);

        /** An array of Ed25519 public key bytes. */
        ed25519?: (Uint8Array|null);

        /**
         * This option is not currently supported.<br/>
         * An array of RSA-3072 public key bytes.
         */
        RSA_3072?: (Uint8Array|null);

        /**
         * This option is not currently supported.<br/>
         * An array of ECDSA, using the p-384 curve, public key bytes.
         */
        ECDSA_384?: (Uint8Array|null);

        /**
         * A threshold, M, combined with a list of N keys, any M of which are
         * sufficient to form a valid signature.
         */
        thresholdKey?: (proto.IThresholdKey|null);

        /**
         * A list of keys. This may be treated like a "N-of-N" threshold key,
         * as a component of another key, or in some other manner as documented.
         */
        keyList?: (proto.IKeyList|null);

        /**
         * A set of compressed ECDSA(secp256k1) public key bytes.<br/>
         * This is an EVM compatibility format.
         */
        ECDSASecp256k1?: (Uint8Array|null);

        /**
         * A smart contract that, if the recipient of the active message frame,
         * SHALL be imputed authorization.<br/>
         * Setting this key type is a more permissive version of setting a
         * contractID key.
         * <p>
         * This key form SHALL NOT strictly require that the code being executed
         * in the frame belong to the given contract. The code in frame MAY be
         * running another contract via a `delegatecall`.
         */
        delegatableContractId?: (proto.IContractID|null);
    }

    /**
     * A Key is an entity representing one or more cryptographic public/private key
     * pairs and, optionally, the structure for how multiple signatures may be
     * composed to meet complex multiple-signature authorization requirements.
     *
     * A Key can be a public key from either the Ed25519 or ECDSA(secp256k1)
     * signature schemes. In the ECDSA(secp256k1) case we require the 33-byte
     * compressed form of the public key. For simplicity, we call these
     * cryptographic public keys `primitive` keys.<br/>
     * If an entity has a primitive key associated to it, then the corresponding
     * private key must sign any transaction to send tokens or perform other
     * actions requiring authorization.
     *
     * A Key can also be the ID of a smart contract, which SHALL authorize that
     * contract to execute any system contract with signing requirements that are
     * met by the key.<br/>
     * > Example
     * >> If account `0.0.A` has a threshold key whose threshold is satisfied
     * >> by a contract ID key for contract `0.0.C`, then when `0.0.C` is called,
     * >> it is authorized to use system contracts to manage any asset owned by
     * >> `0.0.A`. If the contract ID key is "delegatable", then `0.0.C` can even
     * >> perform these actions when running code accessed via `DELEGATECALL`.
     *
     * A Key can be a "threshold key", which is a list of N keys, any M of which
     * may sign in order for the signature to be considered valid. The value of
     * M for a given threshold key MUST be less than or equal to N. A threshold
     * key is sometimes called a "M-of-N" key.
     *
     * A Key can be a "key list" where all keys in the list must sign unless
     * specified otherwise in the documentation for a specific transaction
     * type (e.g. FileDeleteTransactionBody).<br/>
     * This implies that the use of a key list is dependent on context. For
     * example, an Hedera file that is created with a list of keys, SHALL require
     * that all of those keys must sign a transaction to create or modify the file,
     * but only one key from that list MUST sign a transaction to delete the file.
     * So it is a single list that sometimes acts as a N-of-N threshold key, and
     * sometimes acts as a 1-of-N threshold key.<br/>
     * To reduce confusion this may cause, a key list SHALL always be considered
     * N-of-N, unless specified otherwise in official documentation.<br/>
     * A key list MAY have repeated primitive public keys, but the signature
     * requirement for all keys in a repeated set SHALL be satisfied by a single
     * valid signature. There is no mechanism to require a single key to sign a
     * single transaction more than once.
     *
     * Any list or threshold key MAY have nested key lists or threshold keys.
     * This allows, for example, the keys within a threshold signature to
     * themselves be threshold, list, contract, or primitive keys. This nesting
     * structure enables complex asymmetric multi-party signature requirements to
     * be met.
     *
     * To ensure adequate performance and transaction security, key nesting is
     * limited to at most fifteen(15) levels.
     */
    class Key implements IKey {

        /**
         * Constructs a new Key.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IKey);

        /**
         * A smart contract instance that is authorized implicitly.
         * <p>
         * This key type SHALL require that the code in the active message frame
         * belong to the contract with the given id.
         */
        public contractID?: (proto.IContractID|null);

        /** An array of Ed25519 public key bytes. */
        public ed25519?: (Uint8Array|null);

        /**
         * This option is not currently supported.<br/>
         * An array of RSA-3072 public key bytes.
         */
        public RSA_3072?: (Uint8Array|null);

        /**
         * This option is not currently supported.<br/>
         * An array of ECDSA, using the p-384 curve, public key bytes.
         */
        public ECDSA_384?: (Uint8Array|null);

        /**
         * A threshold, M, combined with a list of N keys, any M of which are
         * sufficient to form a valid signature.
         */
        public thresholdKey?: (proto.IThresholdKey|null);

        /**
         * A list of keys. This may be treated like a "N-of-N" threshold key,
         * as a component of another key, or in some other manner as documented.
         */
        public keyList?: (proto.IKeyList|null);

        /**
         * A set of compressed ECDSA(secp256k1) public key bytes.<br/>
         * This is an EVM compatibility format.
         */
        public ECDSASecp256k1?: (Uint8Array|null);

        /**
         * A smart contract that, if the recipient of the active message frame,
         * SHALL be imputed authorization.<br/>
         * Setting this key type is a more permissive version of setting a
         * contractID key.
         * <p>
         * This key form SHALL NOT strictly require that the code being executed
         * in the frame belong to the given contract. The code in frame MAY be
         * running another contract via a `delegatecall`.
         */
        public delegatableContractId?: (proto.IContractID|null);

        /** Key key. */
        public key?: ("contractID"|"ed25519"|"RSA_3072"|"ECDSA_384"|"thresholdKey"|"keyList"|"ECDSASecp256k1"|"delegatableContractId");

        /**
         * Creates a new Key instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Key instance
         */
        public static create(properties?: proto.IKey): proto.Key;

        /**
         * Encodes the specified Key message. Does not implicitly {@link proto.Key.verify|verify} messages.
         * @param message Key message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Key message, length delimited. Does not implicitly {@link proto.Key.verify|verify} messages.
         * @param message Key message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Key message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Key
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Key;

        /**
         * Decodes a Key message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Key
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Key;

        /**
         * Verifies a Key message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Key message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Key
         */
        public static fromObject(object: { [k: string]: any }): proto.Key;

        /**
         * Creates a plain object from a Key message. Also converts values to other types if specified.
         * @param message Key
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Key, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Key to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Key
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ThresholdKey. */
    interface IThresholdKey {

        /**
         * A transaction MUST have valid signatures from at least this number of
         * separate keys, from the `keys` list to be authorized by this key.
         */
        threshold?: (number|null);

        /** A list of the keys that MAY satisfy signature requirements of this key. */
        keys?: (proto.IKeyList|null);
    }

    /**
     * A threshold value and a list of public keys that, together, form a threshold
     * signature requirement. Any subset of the keys in the list may satisfy the
     * signature requirements of this type of key, provided the number of keys meets
     * or exceeds the threshold. For example, if a particular key has a threshold of
     * three(3) and eight(8) keys in the list, then any three(3) signatures, from
     * the list of eight(8), is sufficient to authorize that key.
     *
     * For threshold purposes, all signatures from a single `primitive` key are
     * considered a single signature, so that signature(s) from a single key SHALL
     * NOT _directly_ meet a threshold greater than one(1).
     *
     * #### Note
     * > It is possible to construct a complex key structure that _would_ enable a
     * > single primitive key to successfully meet a threshold requirement. All
     * > threshold keys SHOULD be carefully audited to ensure no one `primitive`
     * > key, or smart contract, has disproportionate capability.
     */
    class ThresholdKey implements IThresholdKey {

        /**
         * Constructs a new ThresholdKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IThresholdKey);

        /**
         * A transaction MUST have valid signatures from at least this number of
         * separate keys, from the `keys` list to be authorized by this key.
         */
        public threshold: number;

        /** A list of the keys that MAY satisfy signature requirements of this key. */
        public keys?: (proto.IKeyList|null);

        /**
         * Creates a new ThresholdKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThresholdKey instance
         */
        public static create(properties?: proto.IThresholdKey): proto.ThresholdKey;

        /**
         * Encodes the specified ThresholdKey message. Does not implicitly {@link proto.ThresholdKey.verify|verify} messages.
         * @param message ThresholdKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IThresholdKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThresholdKey message, length delimited. Does not implicitly {@link proto.ThresholdKey.verify|verify} messages.
         * @param message ThresholdKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IThresholdKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThresholdKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThresholdKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ThresholdKey;

        /**
         * Decodes a ThresholdKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThresholdKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ThresholdKey;

        /**
         * Verifies a ThresholdKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ThresholdKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ThresholdKey
         */
        public static fromObject(object: { [k: string]: any }): proto.ThresholdKey;

        /**
         * Creates a plain object from a ThresholdKey message. Also converts values to other types if specified.
         * @param message ThresholdKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ThresholdKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ThresholdKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ThresholdKey
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyList. */
    interface IKeyList {

        /**
         * A list of keys. All values in this list SHALL be non-null.
         * <p>
         */
        keys?: (proto.IKey[]|null);
    }

    /**
     * A list of keys.<br/>
     * A `KeyList` requires all keys (N-of-N) to sign, unless otherwise
     * specified in official documentation. A KeyList may contain repeated keys,
     * but all such repeated keys are considered a single key when determining
     * signature authorization.
     *
     * ### Additional Notes
     * 1. An empty key list is the "standard" mechanism to represent an
     * unassigned key. For example, if the `admin_key` of a token is set
     * to the empty key list, then that token has no admin key, and
     * functionality that requires an admin key to sign the
     * transaction is disabled.
     */
    class KeyList implements IKeyList {

        /**
         * Constructs a new KeyList.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IKeyList);

        /**
         * A list of keys. All values in this list SHALL be non-null.
         * <p>
         */
        public keys: proto.IKey[];

        /**
         * Creates a new KeyList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyList instance
         */
        public static create(properties?: proto.IKeyList): proto.KeyList;

        /**
         * Encodes the specified KeyList message. Does not implicitly {@link proto.KeyList.verify|verify} messages.
         * @param message KeyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IKeyList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyList message, length delimited. Does not implicitly {@link proto.KeyList.verify|verify} messages.
         * @param message KeyList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IKeyList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.KeyList;

        /**
         * Decodes a KeyList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.KeyList;

        /**
         * Verifies a KeyList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyList
         */
        public static fromObject(object: { [k: string]: any }): proto.KeyList;

        /**
         * Creates a plain object from a KeyList message. Also converts values to other types if specified.
         * @param message KeyList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.KeyList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /**
     * The type of query response.<br/>
     *
     * This SHALL be answer-only as a default.<br/>
     * This value SHALL support an "estimated cost" type.<br/>
     * This value SHOULD support a "state proof" type, when available.
     */
    enum ResponseType {
        ANSWER_ONLY = 0,
        ANSWER_STATE_PROOF = 1,
        COST_ANSWER = 2,
        COST_ANSWER_STATE_PROOF = 3
    }

    /** Properties of a ResponseHeader. */
    interface IResponseHeader {

        /**
         * The result code for this query.
         * <p>
         * This value SHALL indicate either success or the reason for failure.
         */
        nodeTransactionPrecheckCode?: (proto.ResponseCodeEnum|null);

        /**
         * The response type requested for this query.
         * <p>
         * This SHALL be the response type requested in the query header.
         */
        responseType?: (proto.ResponseType|null);

        /**
         * Requested cost estimate.<br/>
         * This is the fee that _would be_ charged if the query was executed.
         * <p>
         * This value SHALL be set if the response type requested requires cost
         * information, and SHALL NOT be set otherwise.<br/>
         * This value SHALL include the query fee, but SHALL NOT include the
         * transfer fee required to execute the fee payment transaction.
         */
        cost?: (number|Long|null);

        /**
         * A state proof for the information requested.
         *
         * This field SHALL NOT be set if the response type does not require
         * a state proof.<br/>
         * This field SHALL NOT be set if a state proof is not available for
         * the query type.<br/>
         * This field SHALL be set if the response type requested a state proof
         * and a state proof is available.
         */
        stateProof?: (Uint8Array|null);
    }

    /**
     * A standard header returned with every query response.
     *
     * The fields for `cost` or `stateProof` MAY be unset if the requested
     * `ResponseType` does not request those values.<br/>
     * The `responseType` SHALL match the request response type.<br/>
     * The `nodeTransactionPrecheckCode` field SHALL contain the result code
     * for the query.
     */
    class ResponseHeader implements IResponseHeader {

        /**
         * Constructs a new ResponseHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IResponseHeader);

        /**
         * The result code for this query.
         * <p>
         * This value SHALL indicate either success or the reason for failure.
         */
        public nodeTransactionPrecheckCode: proto.ResponseCodeEnum;

        /**
         * The response type requested for this query.
         * <p>
         * This SHALL be the response type requested in the query header.
         */
        public responseType: proto.ResponseType;

        /**
         * Requested cost estimate.<br/>
         * This is the fee that _would be_ charged if the query was executed.
         * <p>
         * This value SHALL be set if the response type requested requires cost
         * information, and SHALL NOT be set otherwise.<br/>
         * This value SHALL include the query fee, but SHALL NOT include the
         * transfer fee required to execute the fee payment transaction.
         */
        public cost: (number|Long);

        /**
         * A state proof for the information requested.
         *
         * This field SHALL NOT be set if the response type does not require
         * a state proof.<br/>
         * This field SHALL NOT be set if a state proof is not available for
         * the query type.<br/>
         * This field SHALL be set if the response type requested a state proof
         * and a state proof is available.
         */
        public stateProof: Uint8Array;

        /**
         * Creates a new ResponseHeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseHeader instance
         */
        public static create(properties?: proto.IResponseHeader): proto.ResponseHeader;

        /**
         * Encodes the specified ResponseHeader message. Does not implicitly {@link proto.ResponseHeader.verify|verify} messages.
         * @param message ResponseHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IResponseHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseHeader message, length delimited. Does not implicitly {@link proto.ResponseHeader.verify|verify} messages.
         * @param message ResponseHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IResponseHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ResponseHeader;

        /**
         * Decodes a ResponseHeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ResponseHeader;

        /**
         * Verifies a ResponseHeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseHeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseHeader
         */
        public static fromObject(object: { [k: string]: any }): proto.ResponseHeader;

        /**
         * Creates a plain object from a ResponseHeader message. Also converts values to other types if specified.
         * @param message ResponseHeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ResponseHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseHeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResponseHeader
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** An enumeration of possible response codes. */
    enum ResponseCodeEnum {
        OK = 0,
        INVALID_TRANSACTION = 1,
        PAYER_ACCOUNT_NOT_FOUND = 2,
        INVALID_NODE_ACCOUNT = 3,
        TRANSACTION_EXPIRED = 4,
        INVALID_TRANSACTION_START = 5,
        INVALID_TRANSACTION_DURATION = 6,
        INVALID_SIGNATURE = 7,
        MEMO_TOO_LONG = 8,
        INSUFFICIENT_TX_FEE = 9,
        INSUFFICIENT_PAYER_BALANCE = 10,
        DUPLICATE_TRANSACTION = 11,
        BUSY = 12,
        NOT_SUPPORTED = 13,
        INVALID_FILE_ID = 14,
        INVALID_ACCOUNT_ID = 15,
        INVALID_CONTRACT_ID = 16,
        INVALID_TRANSACTION_ID = 17,
        RECEIPT_NOT_FOUND = 18,
        RECORD_NOT_FOUND = 19,
        INVALID_SOLIDITY_ID = 20,
        UNKNOWN = 21,
        SUCCESS = 22,
        FAIL_INVALID = 23,
        FAIL_FEE = 24,
        FAIL_BALANCE = 25,
        KEY_REQUIRED = 26,
        BAD_ENCODING = 27,
        INSUFFICIENT_ACCOUNT_BALANCE = 28,
        INVALID_SOLIDITY_ADDRESS = 29,
        INSUFFICIENT_GAS = 30,
        CONTRACT_SIZE_LIMIT_EXCEEDED = 31,
        LOCAL_CALL_MODIFICATION_EXCEPTION = 32,
        CONTRACT_REVERT_EXECUTED = 33,
        CONTRACT_EXECUTION_EXCEPTION = 34,
        INVALID_RECEIVING_NODE_ACCOUNT = 35,
        MISSING_QUERY_HEADER = 36,
        ACCOUNT_UPDATE_FAILED = 37,
        INVALID_KEY_ENCODING = 38,
        NULL_SOLIDITY_ADDRESS = 39,
        CONTRACT_UPDATE_FAILED = 40,
        INVALID_QUERY_HEADER = 41,
        INVALID_FEE_SUBMITTED = 42,
        INVALID_PAYER_SIGNATURE = 43,
        KEY_NOT_PROVIDED = 44,
        INVALID_EXPIRATION_TIME = 45,
        NO_WACL_KEY = 46,
        FILE_CONTENT_EMPTY = 47,
        INVALID_ACCOUNT_AMOUNTS = 48,
        EMPTY_TRANSACTION_BODY = 49,
        INVALID_TRANSACTION_BODY = 50,
        INVALID_SIGNATURE_TYPE_MISMATCHING_KEY = 51,
        INVALID_SIGNATURE_COUNT_MISMATCHING_KEY = 52,
        EMPTY_LIVE_HASH_BODY = 53,
        EMPTY_LIVE_HASH = 54,
        EMPTY_LIVE_HASH_KEYS = 55,
        INVALID_LIVE_HASH_SIZE = 56,
        EMPTY_QUERY_BODY = 57,
        EMPTY_LIVE_HASH_QUERY = 58,
        LIVE_HASH_NOT_FOUND = 59,
        ACCOUNT_ID_DOES_NOT_EXIST = 60,
        LIVE_HASH_ALREADY_EXISTS = 61,
        INVALID_FILE_WACL = 62,
        SERIALIZATION_FAILED = 63,
        TRANSACTION_OVERSIZE = 64,
        TRANSACTION_TOO_MANY_LAYERS = 65,
        CONTRACT_DELETED = 66,
        PLATFORM_NOT_ACTIVE = 67,
        KEY_PREFIX_MISMATCH = 68,
        PLATFORM_TRANSACTION_NOT_CREATED = 69,
        INVALID_RENEWAL_PERIOD = 70,
        INVALID_PAYER_ACCOUNT_ID = 71,
        ACCOUNT_DELETED = 72,
        FILE_DELETED = 73,
        ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS = 74,
        SETTING_NEGATIVE_ACCOUNT_BALANCE = 75,
        OBTAINER_REQUIRED = 76,
        OBTAINER_SAME_CONTRACT_ID = 77,
        OBTAINER_DOES_NOT_EXIST = 78,
        MODIFYING_IMMUTABLE_CONTRACT = 79,
        FILE_SYSTEM_EXCEPTION = 80,
        AUTORENEW_DURATION_NOT_IN_RANGE = 81,
        ERROR_DECODING_BYTESTRING = 82,
        CONTRACT_FILE_EMPTY = 83,
        CONTRACT_BYTECODE_EMPTY = 84,
        INVALID_INITIAL_BALANCE = 85,
        INVALID_RECEIVE_RECORD_THRESHOLD = 86,
        INVALID_SEND_RECORD_THRESHOLD = 87,
        ACCOUNT_IS_NOT_GENESIS_ACCOUNT = 88,
        PAYER_ACCOUNT_UNAUTHORIZED = 89,
        INVALID_FREEZE_TRANSACTION_BODY = 90,
        FREEZE_TRANSACTION_BODY_NOT_FOUND = 91,
        TRANSFER_LIST_SIZE_LIMIT_EXCEEDED = 92,
        RESULT_SIZE_LIMIT_EXCEEDED = 93,
        NOT_SPECIAL_ACCOUNT = 94,
        CONTRACT_NEGATIVE_GAS = 95,
        CONTRACT_NEGATIVE_VALUE = 96,
        INVALID_FEE_FILE = 97,
        INVALID_EXCHANGE_RATE_FILE = 98,
        INSUFFICIENT_LOCAL_CALL_GAS = 99,
        ENTITY_NOT_ALLOWED_TO_DELETE = 100,
        AUTHORIZATION_FAILED = 101,
        FILE_UPLOADED_PROTO_INVALID = 102,
        FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK = 103,
        FEE_SCHEDULE_FILE_PART_UPLOADED = 104,
        EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED = 105,
        MAX_CONTRACT_STORAGE_EXCEEDED = 106,
        TRANSFER_ACCOUNT_SAME_AS_DELETE_ACCOUNT = 107,
        TOTAL_LEDGER_BALANCE_INVALID = 108,
        EXPIRATION_REDUCTION_NOT_ALLOWED = 110,
        MAX_GAS_LIMIT_EXCEEDED = 111,
        MAX_FILE_SIZE_EXCEEDED = 112,
        RECEIVER_SIG_REQUIRED = 113,
        INVALID_TOPIC_ID = 150,
        INVALID_ADMIN_KEY = 155,
        INVALID_SUBMIT_KEY = 156,
        UNAUTHORIZED = 157,
        INVALID_TOPIC_MESSAGE = 158,
        INVALID_AUTORENEW_ACCOUNT = 159,
        AUTORENEW_ACCOUNT_NOT_ALLOWED = 160,
        TOPIC_EXPIRED = 162,
        INVALID_CHUNK_NUMBER = 163,
        INVALID_CHUNK_TRANSACTION_ID = 164,
        ACCOUNT_FROZEN_FOR_TOKEN = 165,
        TOKENS_PER_ACCOUNT_LIMIT_EXCEEDED = 166,
        INVALID_TOKEN_ID = 167,
        INVALID_TOKEN_DECIMALS = 168,
        INVALID_TOKEN_INITIAL_SUPPLY = 169,
        INVALID_TREASURY_ACCOUNT_FOR_TOKEN = 170,
        INVALID_TOKEN_SYMBOL = 171,
        TOKEN_HAS_NO_FREEZE_KEY = 172,
        TRANSFERS_NOT_ZERO_SUM_FOR_TOKEN = 173,
        MISSING_TOKEN_SYMBOL = 174,
        TOKEN_SYMBOL_TOO_LONG = 175,
        ACCOUNT_KYC_NOT_GRANTED_FOR_TOKEN = 176,
        TOKEN_HAS_NO_KYC_KEY = 177,
        INSUFFICIENT_TOKEN_BALANCE = 178,
        TOKEN_WAS_DELETED = 179,
        TOKEN_HAS_NO_SUPPLY_KEY = 180,
        TOKEN_HAS_NO_WIPE_KEY = 181,
        INVALID_TOKEN_MINT_AMOUNT = 182,
        INVALID_TOKEN_BURN_AMOUNT = 183,
        TOKEN_NOT_ASSOCIATED_TO_ACCOUNT = 184,
        CANNOT_WIPE_TOKEN_TREASURY_ACCOUNT = 185,
        INVALID_KYC_KEY = 186,
        INVALID_WIPE_KEY = 187,
        INVALID_FREEZE_KEY = 188,
        INVALID_SUPPLY_KEY = 189,
        MISSING_TOKEN_NAME = 190,
        TOKEN_NAME_TOO_LONG = 191,
        INVALID_WIPING_AMOUNT = 192,
        TOKEN_IS_IMMUTABLE = 193,
        TOKEN_ALREADY_ASSOCIATED_TO_ACCOUNT = 194,
        TRANSACTION_REQUIRES_ZERO_TOKEN_BALANCES = 195,
        ACCOUNT_IS_TREASURY = 196,
        TOKEN_ID_REPEATED_IN_TOKEN_LIST = 197,
        TOKEN_TRANSFER_LIST_SIZE_LIMIT_EXCEEDED = 198,
        EMPTY_TOKEN_TRANSFER_BODY = 199,
        EMPTY_TOKEN_TRANSFER_ACCOUNT_AMOUNTS = 200,
        INVALID_SCHEDULE_ID = 201,
        SCHEDULE_IS_IMMUTABLE = 202,
        INVALID_SCHEDULE_PAYER_ID = 203,
        INVALID_SCHEDULE_ACCOUNT_ID = 204,
        NO_NEW_VALID_SIGNATURES = 205,
        UNRESOLVABLE_REQUIRED_SIGNERS = 206,
        SCHEDULED_TRANSACTION_NOT_IN_WHITELIST = 207,
        SOME_SIGNATURES_WERE_INVALID = 208,
        TRANSACTION_ID_FIELD_NOT_ALLOWED = 209,
        IDENTICAL_SCHEDULE_ALREADY_CREATED = 210,
        INVALID_ZERO_BYTE_IN_STRING = 211,
        SCHEDULE_ALREADY_DELETED = 212,
        SCHEDULE_ALREADY_EXECUTED = 213,
        MESSAGE_SIZE_TOO_LARGE = 214,
        OPERATION_REPEATED_IN_BUCKET_GROUPS = 215,
        BUCKET_CAPACITY_OVERFLOW = 216,
        NODE_CAPACITY_NOT_SUFFICIENT_FOR_OPERATION = 217,
        BUCKET_HAS_NO_THROTTLE_GROUPS = 218,
        THROTTLE_GROUP_HAS_ZERO_OPS_PER_SEC = 219,
        SUCCESS_BUT_MISSING_EXPECTED_OPERATION = 220,
        UNPARSEABLE_THROTTLE_DEFINITIONS = 221,
        INVALID_THROTTLE_DEFINITIONS = 222,
        ACCOUNT_EXPIRED_AND_PENDING_REMOVAL = 223,
        INVALID_TOKEN_MAX_SUPPLY = 224,
        INVALID_TOKEN_NFT_SERIAL_NUMBER = 225,
        INVALID_NFT_ID = 226,
        METADATA_TOO_LONG = 227,
        BATCH_SIZE_LIMIT_EXCEEDED = 228,
        INVALID_QUERY_RANGE = 229,
        FRACTION_DIVIDES_BY_ZERO = 230,
        INSUFFICIENT_PAYER_BALANCE_FOR_CUSTOM_FEE = 231,
        CUSTOM_FEES_LIST_TOO_LONG = 232,
        INVALID_CUSTOM_FEE_COLLECTOR = 233,
        INVALID_TOKEN_ID_IN_CUSTOM_FEES = 234,
        TOKEN_NOT_ASSOCIATED_TO_FEE_COLLECTOR = 235,
        TOKEN_MAX_SUPPLY_REACHED = 236,
        SENDER_DOES_NOT_OWN_NFT_SERIAL_NO = 237,
        CUSTOM_FEE_NOT_FULLY_SPECIFIED = 238,
        CUSTOM_FEE_MUST_BE_POSITIVE = 239,
        TOKEN_HAS_NO_FEE_SCHEDULE_KEY = 240,
        CUSTOM_FEE_OUTSIDE_NUMERIC_RANGE = 241,
        ROYALTY_FRACTION_CANNOT_EXCEED_ONE = 242,
        FRACTIONAL_FEE_MAX_AMOUNT_LESS_THAN_MIN_AMOUNT = 243,
        CUSTOM_SCHEDULE_ALREADY_HAS_NO_FEES = 244,
        CUSTOM_FEE_DENOMINATION_MUST_BE_FUNGIBLE_COMMON = 245,
        CUSTOM_FRACTIONAL_FEE_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON = 246,
        INVALID_CUSTOM_FEE_SCHEDULE_KEY = 247,
        INVALID_TOKEN_MINT_METADATA = 248,
        INVALID_TOKEN_BURN_METADATA = 249,
        CURRENT_TREASURY_STILL_OWNS_NFTS = 250,
        ACCOUNT_STILL_OWNS_NFTS = 251,
        TREASURY_MUST_OWN_BURNED_NFT = 252,
        ACCOUNT_DOES_NOT_OWN_WIPED_NFT = 253,
        ACCOUNT_AMOUNT_TRANSFERS_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON = 254,
        MAX_NFTS_IN_PRICE_REGIME_HAVE_BEEN_MINTED = 255,
        PAYER_ACCOUNT_DELETED = 256,
        CUSTOM_FEE_CHARGING_EXCEEDED_MAX_RECURSION_DEPTH = 257,
        CUSTOM_FEE_CHARGING_EXCEEDED_MAX_ACCOUNT_AMOUNTS = 258,
        INSUFFICIENT_SENDER_ACCOUNT_BALANCE_FOR_CUSTOM_FEE = 259,
        SERIAL_NUMBER_LIMIT_REACHED = 260,
        CUSTOM_ROYALTY_FEE_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE = 261,
        NO_REMAINING_AUTOMATIC_ASSOCIATIONS = 262,
        EXISTING_AUTOMATIC_ASSOCIATIONS_EXCEED_GIVEN_LIMIT = 263,
        REQUESTED_NUM_AUTOMATIC_ASSOCIATIONS_EXCEEDS_ASSOCIATION_LIMIT = 264,
        TOKEN_IS_PAUSED = 265,
        TOKEN_HAS_NO_PAUSE_KEY = 266,
        INVALID_PAUSE_KEY = 267,
        FREEZE_UPDATE_FILE_DOES_NOT_EXIST = 268,
        FREEZE_UPDATE_FILE_HASH_DOES_NOT_MATCH = 269,
        NO_UPGRADE_HAS_BEEN_PREPARED = 270,
        NO_FREEZE_IS_SCHEDULED = 271,
        UPDATE_FILE_HASH_CHANGED_SINCE_PREPARE_UPGRADE = 272,
        FREEZE_START_TIME_MUST_BE_FUTURE = 273,
        PREPARED_UPDATE_FILE_IS_IMMUTABLE = 274,
        FREEZE_ALREADY_SCHEDULED = 275,
        FREEZE_UPGRADE_IN_PROGRESS = 276,
        UPDATE_FILE_ID_DOES_NOT_MATCH_PREPARED = 277,
        UPDATE_FILE_HASH_DOES_NOT_MATCH_PREPARED = 278,
        CONSENSUS_GAS_EXHAUSTED = 279,
        REVERTED_SUCCESS = 280,
        MAX_STORAGE_IN_PRICE_REGIME_HAS_BEEN_USED = 281,
        INVALID_ALIAS_KEY = 282,
        UNEXPECTED_TOKEN_DECIMALS = 283,
        INVALID_PROXY_ACCOUNT_ID = 284,
        INVALID_TRANSFER_ACCOUNT_ID = 285,
        INVALID_FEE_COLLECTOR_ACCOUNT_ID = 286,
        ALIAS_IS_IMMUTABLE = 287,
        SPENDER_ACCOUNT_SAME_AS_OWNER = 288,
        AMOUNT_EXCEEDS_TOKEN_MAX_SUPPLY = 289,
        NEGATIVE_ALLOWANCE_AMOUNT = 290,
        CANNOT_APPROVE_FOR_ALL_FUNGIBLE_COMMON = 291,
        SPENDER_DOES_NOT_HAVE_ALLOWANCE = 292,
        AMOUNT_EXCEEDS_ALLOWANCE = 293,
        MAX_ALLOWANCES_EXCEEDED = 294,
        EMPTY_ALLOWANCES = 295,
        SPENDER_ACCOUNT_REPEATED_IN_ALLOWANCES = 296,
        REPEATED_SERIAL_NUMS_IN_NFT_ALLOWANCES = 297,
        FUNGIBLE_TOKEN_IN_NFT_ALLOWANCES = 298,
        NFT_IN_FUNGIBLE_TOKEN_ALLOWANCES = 299,
        INVALID_ALLOWANCE_OWNER_ID = 300,
        INVALID_ALLOWANCE_SPENDER_ID = 301,
        REPEATED_ALLOWANCES_TO_DELETE = 302,
        INVALID_DELEGATING_SPENDER = 303,
        DELEGATING_SPENDER_CANNOT_GRANT_APPROVE_FOR_ALL = 304,
        DELEGATING_SPENDER_DOES_NOT_HAVE_APPROVE_FOR_ALL = 305,
        SCHEDULE_EXPIRATION_TIME_TOO_FAR_IN_FUTURE = 306,
        SCHEDULE_EXPIRATION_TIME_MUST_BE_HIGHER_THAN_CONSENSUS_TIME = 307,
        SCHEDULE_FUTURE_THROTTLE_EXCEEDED = 308,
        SCHEDULE_FUTURE_GAS_LIMIT_EXCEEDED = 309,
        INVALID_ETHEREUM_TRANSACTION = 310,
        WRONG_CHAIN_ID = 311,
        WRONG_NONCE = 312,
        ACCESS_LIST_UNSUPPORTED = 313,
        SCHEDULE_PENDING_EXPIRATION = 314,
        CONTRACT_IS_TOKEN_TREASURY = 315,
        CONTRACT_HAS_NON_ZERO_TOKEN_BALANCES = 316,
        CONTRACT_EXPIRED_AND_PENDING_REMOVAL = 317,
        CONTRACT_HAS_NO_AUTO_RENEW_ACCOUNT = 318,
        PERMANENT_REMOVAL_REQUIRES_SYSTEM_INITIATION = 319,
        PROXY_ACCOUNT_ID_FIELD_IS_DEPRECATED = 320,
        SELF_STAKING_IS_NOT_ALLOWED = 321,
        INVALID_STAKING_ID = 322,
        STAKING_NOT_ENABLED = 323,
        INVALID_PRNG_RANGE = 324,
        MAX_ENTITIES_IN_PRICE_REGIME_HAVE_BEEN_CREATED = 325,
        INVALID_FULL_PREFIX_SIGNATURE_FOR_PRECOMPILE = 326,
        INSUFFICIENT_BALANCES_FOR_STORAGE_RENT = 327,
        MAX_CHILD_RECORDS_EXCEEDED = 328,
        INSUFFICIENT_BALANCES_FOR_RENEWAL_FEES = 329,
        TRANSACTION_HAS_UNKNOWN_FIELDS = 330,
        ACCOUNT_IS_IMMUTABLE = 331,
        ALIAS_ALREADY_ASSIGNED = 332,
        INVALID_METADATA_KEY = 333,
        TOKEN_HAS_NO_METADATA_KEY = 334,
        MISSING_TOKEN_METADATA = 335,
        MISSING_SERIAL_NUMBERS = 336,
        TOKEN_HAS_NO_ADMIN_KEY = 337,
        NODE_DELETED = 338,
        INVALID_NODE_ID = 339,
        INVALID_GOSSIP_ENDPOINT = 340,
        INVALID_NODE_ACCOUNT_ID = 341,
        INVALID_NODE_DESCRIPTION = 342,
        INVALID_SERVICE_ENDPOINT = 343,
        INVALID_GOSSIP_CA_CERTIFICATE = 344,
        INVALID_GRPC_CERTIFICATE = 345,
        INVALID_MAX_AUTO_ASSOCIATIONS = 346,
        MAX_NODES_CREATED = 347,
        IP_FQDN_CANNOT_BE_SET_FOR_SAME_ENDPOINT = 348,
        GOSSIP_ENDPOINT_CANNOT_HAVE_FQDN = 349,
        FQDN_SIZE_TOO_LARGE = 350,
        INVALID_ENDPOINT = 351,
        GOSSIP_ENDPOINTS_EXCEEDED_LIMIT = 352,
        TOKEN_REFERENCE_REPEATED = 353,
        INVALID_OWNER_ID = 354,
        TOKEN_REFERENCE_LIST_SIZE_LIMIT_EXCEEDED = 355,
        SERVICE_ENDPOINTS_EXCEEDED_LIMIT = 356,
        INVALID_IPV4_ADDRESS = 357,
        EMPTY_TOKEN_REFERENCE_LIST = 358,
        UPDATE_NODE_ACCOUNT_NOT_ALLOWED = 359,
        TOKEN_HAS_NO_METADATA_OR_SUPPLY_KEY = 360,
        EMPTY_PENDING_AIRDROP_ID_LIST = 361,
        PENDING_AIRDROP_ID_REPEATED = 362,
        PENDING_AIRDROP_ID_LIST_TOO_LONG = 363,
        PENDING_NFT_AIRDROP_ALREADY_EXISTS = 364,
        ACCOUNT_HAS_PENDING_AIRDROPS = 365,
        THROTTLED_AT_CONSENSUS = 366,
        INVALID_PENDING_AIRDROP_ID = 367,
        TOKEN_AIRDROP_WITH_FALLBACK_ROYALTY = 368,
        INVALID_TOKEN_IN_PENDING_AIRDROP = 369,
        SCHEDULE_EXPIRY_IS_BUSY = 370,
        INVALID_GRPC_CERTIFICATE_HASH = 371,
        MISSING_EXPIRY_TIME = 372,
        NO_SCHEDULING_ALLOWED_AFTER_SCHEDULED_RECURSION = 373,
        RECURSIVE_SCHEDULING_LIMIT_REACHED = 374,
        WAITING_FOR_LEDGER_ID = 375,
        MAX_ENTRIES_FOR_FEE_EXEMPT_KEY_LIST_EXCEEDED = 376,
        FEE_EXEMPT_KEY_LIST_CONTAINS_DUPLICATED_KEYS = 377,
        INVALID_KEY_IN_FEE_EXEMPT_KEY_LIST = 378,
        INVALID_FEE_SCHEDULE_KEY = 379,
        FEE_SCHEDULE_KEY_CANNOT_BE_UPDATED = 380,
        FEE_SCHEDULE_KEY_NOT_SET = 381,
        MAX_CUSTOM_FEE_LIMIT_EXCEEDED = 382,
        NO_VALID_MAX_CUSTOM_FEE = 383,
        INVALID_MAX_CUSTOM_FEES = 384,
        DUPLICATE_DENOMINATION_IN_MAX_CUSTOM_FEE_LIST = 385,
        DUPLICATE_ACCOUNT_ID_IN_MAX_CUSTOM_FEE_LIST = 386,
        MAX_CUSTOM_FEES_IS_NOT_SUPPORTED = 387,
        BATCH_LIST_EMPTY = 388,
        BATCH_LIST_CONTAINS_DUPLICATES = 389,
        BATCH_TRANSACTION_IN_BLACKLIST = 390,
        INNER_TRANSACTION_FAILED = 391,
        MISSING_BATCH_KEY = 392,
        BATCH_KEY_SET_ON_NON_INNER_TRANSACTION = 393,
        INVALID_BATCH_KEY = 394,
        SCHEDULE_EXPIRY_NOT_CONFIGURABLE = 395,
        CREATING_SYSTEM_ENTITIES = 396,
        THROTTLE_GROUP_LCM_OVERFLOW = 397,
        AIRDROP_CONTAINS_MULTIPLE_SENDERS_FOR_A_TOKEN = 398,
        GRPC_WEB_PROXY_NOT_SUPPORTED = 399,
        NFT_TRANSFERS_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE = 400,
        INVALID_SERIALIZED_TX_MESSAGE_HASH_ALGORITHM = 401,
        WRONG_HOOK_ENTITY_TYPE = 499,
        EVM_HOOK_GAS_THROTTLED = 500,
        HOOK_ID_IN_USE = 501,
        BAD_HOOK_REQUEST = 502,
        REJECTED_BY_ACCOUNT_ALLOWANCE_HOOK = 503,
        HOOK_NOT_FOUND = 504,
        EVM_HOOK_STORAGE_UPDATE_BYTES_TOO_LONG = 505,
        EVM_HOOK_STORAGE_UPDATE_BYTES_MUST_USE_MINIMAL_REPRESENTATION = 506,
        INVALID_HOOK_ID = 507,
        EMPTY_EVM_HOOK_STORAGE_UPDATE = 508,
        HOOK_ID_REPEATED_IN_CREATION_DETAILS = 509,
        HOOKS_NOT_ENABLED = 510,
        HOOK_IS_NOT_AN_EVM_HOOK = 511,
        HOOK_DELETED = 512,
        TOO_MANY_EVM_HOOK_STORAGE_UPDATES = 513,
        HOOK_CREATION_BYTES_MUST_USE_MINIMAL_REPRESENTATION = 514,
        HOOK_CREATION_BYTES_TOO_LONG = 515,
        INVALID_HOOK_CREATION_SPEC = 516,
        HOOK_EXTENSION_EMPTY = 517,
        INVALID_HOOK_ADMIN_KEY = 518,
        HOOK_DELETION_REQUIRES_ZERO_STORAGE_SLOTS = 519,
        CANNOT_SET_HOOKS_AND_APPROVAL = 520,
        TRANSACTION_REQUIRES_ZERO_HOOKS = 521,
        INVALID_HOOK_CALL = 522,
        HOOKS_ARE_NOT_SUPPORTED_IN_AIRDROPS = 523,
        ACCOUNT_IS_LINKED_TO_A_NODE = 524,
        HOOKS_EXECUTIONS_REQUIRE_TOP_LEVEL_CRYPTO_TRANSFER = 525,
        NODE_ACCOUNT_HAS_ZERO_BALANCE = 526,
        TRANSFER_TO_FEE_COLLECTION_ACCOUNT_NOT_ALLOWED = 527,
        TOO_MANY_HOOK_INVOCATIONS = 528
    }

    /** Properties of a FileGetContentsResponse. */
    interface IFileGetContentsResponse {

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        header?: (proto.IResponseHeader|null);

        /**
         * A combination of File identifier and content bytes.
         * <p>
         * This SHALL NOT be set if the file does not exist.<br/>
         * The network MAY generate a state proof for this field.
         */
        fileContents?: (proto.FileGetContentsResponse.IFileContents|null);
    }

    /**
     * A response to a query for the content of a file in the
     * Hedera File Service (HFS).
     *
     * This message SHALL contain the full content of the requested file, but
     * SHALL NOT contain any metadata.
     */
    class FileGetContentsResponse implements IFileGetContentsResponse {

        /**
         * Constructs a new FileGetContentsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFileGetContentsResponse);

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        public header?: (proto.IResponseHeader|null);

        /**
         * A combination of File identifier and content bytes.
         * <p>
         * This SHALL NOT be set if the file does not exist.<br/>
         * The network MAY generate a state proof for this field.
         */
        public fileContents?: (proto.FileGetContentsResponse.IFileContents|null);

        /**
         * Creates a new FileGetContentsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileGetContentsResponse instance
         */
        public static create(properties?: proto.IFileGetContentsResponse): proto.FileGetContentsResponse;

        /**
         * Encodes the specified FileGetContentsResponse message. Does not implicitly {@link proto.FileGetContentsResponse.verify|verify} messages.
         * @param message FileGetContentsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFileGetContentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileGetContentsResponse message, length delimited. Does not implicitly {@link proto.FileGetContentsResponse.verify|verify} messages.
         * @param message FileGetContentsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFileGetContentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileGetContentsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileGetContentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FileGetContentsResponse;

        /**
         * Decodes a FileGetContentsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileGetContentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FileGetContentsResponse;

        /**
         * Verifies a FileGetContentsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileGetContentsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileGetContentsResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.FileGetContentsResponse;

        /**
         * Creates a plain object from a FileGetContentsResponse message. Also converts values to other types if specified.
         * @param message FileGetContentsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.FileGetContentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileGetContentsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileGetContentsResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FileGetContentsResponse {

        /** Properties of a FileContents. */
        interface IFileContents {

            /**
             * A file identifier.
             * <p>
             * This SHALL be the identifier of a file that exists in HFS.<br/>
             * This value SHALL identify the file that was queried.
             */
            fileID?: (proto.IFileID|null);

            /**
             * A byte array of file content.
             * <p>
             * This SHALL contain the full content of the requested file.<br/>
             * This SHALL be empty if, and only if, the file content is empty.
             */
            contents?: (Uint8Array|null);
        }

        /** Represents a FileContents. */
        class FileContents implements IFileContents {

            /**
             * Constructs a new FileContents.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.FileGetContentsResponse.IFileContents);

            /**
             * A file identifier.
             * <p>
             * This SHALL be the identifier of a file that exists in HFS.<br/>
             * This value SHALL identify the file that was queried.
             */
            public fileID?: (proto.IFileID|null);

            /**
             * A byte array of file content.
             * <p>
             * This SHALL contain the full content of the requested file.<br/>
             * This SHALL be empty if, and only if, the file content is empty.
             */
            public contents: Uint8Array;

            /**
             * Creates a new FileContents instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileContents instance
             */
            public static create(properties?: proto.FileGetContentsResponse.IFileContents): proto.FileGetContentsResponse.FileContents;

            /**
             * Encodes the specified FileContents message. Does not implicitly {@link proto.FileGetContentsResponse.FileContents.verify|verify} messages.
             * @param message FileContents message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.FileGetContentsResponse.IFileContents, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileContents message, length delimited. Does not implicitly {@link proto.FileGetContentsResponse.FileContents.verify|verify} messages.
             * @param message FileContents message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.FileGetContentsResponse.IFileContents, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileContents message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileContents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FileGetContentsResponse.FileContents;

            /**
             * Decodes a FileContents message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileContents
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FileGetContentsResponse.FileContents;

            /**
             * Verifies a FileContents message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileContents message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileContents
             */
            public static fromObject(object: { [k: string]: any }): proto.FileGetContentsResponse.FileContents;

            /**
             * Creates a plain object from a FileContents message. Also converts values to other types if specified.
             * @param message FileContents
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.FileGetContentsResponse.FileContents, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileContents to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileContents
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
