/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.hashgraph_network_info || ($protobuf.roots.hashgraph_network_info = {});

export const proto = $root.proto = (() => {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    const proto = {};

    proto.NetworkGetVersionInfoResponse = (function() {

        /**
         * Properties of a NetworkGetVersionInfoResponse.
         * @memberof proto
         * @interface INetworkGetVersionInfoResponse
         * @property {proto.IResponseHeader|null} [header] The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         * @property {proto.ISemanticVersion|null} [hapiProtoVersion] An API version.
         * <p>
         * This SHALL be the current Hedera API (HAPI) protobuf message version
         * accepted by the network.
         * @property {proto.ISemanticVersion|null} [hederaServicesVersion] A Services version.
         * <p>
         * This SHALL be the current version of the Hedera Services software
         * operating the network.
         */

        /**
         * Constructs a new NetworkGetVersionInfoResponse.
         * @memberof proto
         * @classdesc A response to a `NetworkGetVersionInfoQuery`.
         * 
         * This SHALL return `SemanticVersion` information for both Hedera API (HAPI)
         * and Hedera Services.
         * @implements INetworkGetVersionInfoResponse
         * @constructor
         * @param {proto.INetworkGetVersionInfoResponse=} [properties] Properties to set
         */
        function NetworkGetVersionInfoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         * @member {proto.IResponseHeader|null|undefined} header
         * @memberof proto.NetworkGetVersionInfoResponse
         * @instance
         */
        NetworkGetVersionInfoResponse.prototype.header = null;

        /**
         * An API version.
         * <p>
         * This SHALL be the current Hedera API (HAPI) protobuf message version
         * accepted by the network.
         * @member {proto.ISemanticVersion|null|undefined} hapiProtoVersion
         * @memberof proto.NetworkGetVersionInfoResponse
         * @instance
         */
        NetworkGetVersionInfoResponse.prototype.hapiProtoVersion = null;

        /**
         * A Services version.
         * <p>
         * This SHALL be the current version of the Hedera Services software
         * operating the network.
         * @member {proto.ISemanticVersion|null|undefined} hederaServicesVersion
         * @memberof proto.NetworkGetVersionInfoResponse
         * @instance
         */
        NetworkGetVersionInfoResponse.prototype.hederaServicesVersion = null;

        /**
         * Creates a new NetworkGetVersionInfoResponse instance using the specified properties.
         * @function create
         * @memberof proto.NetworkGetVersionInfoResponse
         * @static
         * @param {proto.INetworkGetVersionInfoResponse=} [properties] Properties to set
         * @returns {proto.NetworkGetVersionInfoResponse} NetworkGetVersionInfoResponse instance
         */
        NetworkGetVersionInfoResponse.create = function create(properties) {
            return new NetworkGetVersionInfoResponse(properties);
        };

        /**
         * Encodes the specified NetworkGetVersionInfoResponse message. Does not implicitly {@link proto.NetworkGetVersionInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.NetworkGetVersionInfoResponse
         * @static
         * @param {proto.INetworkGetVersionInfoResponse} message NetworkGetVersionInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetworkGetVersionInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.proto.ResponseHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.hapiProtoVersion != null && Object.hasOwnProperty.call(message, "hapiProtoVersion"))
                $root.proto.SemanticVersion.encode(message.hapiProtoVersion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.hederaServicesVersion != null && Object.hasOwnProperty.call(message, "hederaServicesVersion"))
                $root.proto.SemanticVersion.encode(message.hederaServicesVersion, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NetworkGetVersionInfoResponse message, length delimited. Does not implicitly {@link proto.NetworkGetVersionInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NetworkGetVersionInfoResponse
         * @static
         * @param {proto.INetworkGetVersionInfoResponse} message NetworkGetVersionInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetworkGetVersionInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NetworkGetVersionInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NetworkGetVersionInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NetworkGetVersionInfoResponse} NetworkGetVersionInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetworkGetVersionInfoResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NetworkGetVersionInfoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.header = $root.proto.ResponseHeader.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.hapiProtoVersion = $root.proto.SemanticVersion.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.hederaServicesVersion = $root.proto.SemanticVersion.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NetworkGetVersionInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NetworkGetVersionInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NetworkGetVersionInfoResponse} NetworkGetVersionInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetworkGetVersionInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NetworkGetVersionInfoResponse message.
         * @function verify
         * @memberof proto.NetworkGetVersionInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetworkGetVersionInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.proto.ResponseHeader.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.hapiProtoVersion != null && message.hasOwnProperty("hapiProtoVersion")) {
                let error = $root.proto.SemanticVersion.verify(message.hapiProtoVersion);
                if (error)
                    return "hapiProtoVersion." + error;
            }
            if (message.hederaServicesVersion != null && message.hasOwnProperty("hederaServicesVersion")) {
                let error = $root.proto.SemanticVersion.verify(message.hederaServicesVersion);
                if (error)
                    return "hederaServicesVersion." + error;
            }
            return null;
        };

        /**
         * Creates a NetworkGetVersionInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.NetworkGetVersionInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.NetworkGetVersionInfoResponse} NetworkGetVersionInfoResponse
         */
        NetworkGetVersionInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.NetworkGetVersionInfoResponse)
                return object;
            let message = new $root.proto.NetworkGetVersionInfoResponse();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".proto.NetworkGetVersionInfoResponse.header: object expected");
                message.header = $root.proto.ResponseHeader.fromObject(object.header);
            }
            if (object.hapiProtoVersion != null) {
                if (typeof object.hapiProtoVersion !== "object")
                    throw TypeError(".proto.NetworkGetVersionInfoResponse.hapiProtoVersion: object expected");
                message.hapiProtoVersion = $root.proto.SemanticVersion.fromObject(object.hapiProtoVersion);
            }
            if (object.hederaServicesVersion != null) {
                if (typeof object.hederaServicesVersion !== "object")
                    throw TypeError(".proto.NetworkGetVersionInfoResponse.hederaServicesVersion: object expected");
                message.hederaServicesVersion = $root.proto.SemanticVersion.fromObject(object.hederaServicesVersion);
            }
            return message;
        };

        /**
         * Creates a plain object from a NetworkGetVersionInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.NetworkGetVersionInfoResponse
         * @static
         * @param {proto.NetworkGetVersionInfoResponse} message NetworkGetVersionInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetworkGetVersionInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.hapiProtoVersion = null;
                object.hederaServicesVersion = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.proto.ResponseHeader.toObject(message.header, options);
            if (message.hapiProtoVersion != null && message.hasOwnProperty("hapiProtoVersion"))
                object.hapiProtoVersion = $root.proto.SemanticVersion.toObject(message.hapiProtoVersion, options);
            if (message.hederaServicesVersion != null && message.hasOwnProperty("hederaServicesVersion"))
                object.hederaServicesVersion = $root.proto.SemanticVersion.toObject(message.hederaServicesVersion, options);
            return object;
        };

        /**
         * Converts this NetworkGetVersionInfoResponse to JSON.
         * @function toJSON
         * @memberof proto.NetworkGetVersionInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetworkGetVersionInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NetworkGetVersionInfoResponse
         * @function getTypeUrl
         * @memberof proto.NetworkGetVersionInfoResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NetworkGetVersionInfoResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.NetworkGetVersionInfoResponse";
        };

        return NetworkGetVersionInfoResponse;
    })();

    proto.AccountID = (function() {

        /**
         * Properties of an AccountID.
         * @memberof proto
         * @interface IAccountID
         * @property {number|Long|null} [shardNum] A whole number shard identifier.
         * @property {number|Long|null} [realmNum] A whole number realm identifier.
         * @property {number|Long|null} [accountNum] A whole number account number, unique within its realm and shard.
         * <p>
         * For any AccountID fields in the query response, transaction records,
         * transaction receipts, or block stream `accountNum` MUST be used.
         * @property {Uint8Array|null} [alias] An alias value.<br/>
         * Alias is a value used in some contexts to refer to an account when
         * account number is not available, and may be an alias public key, or
         * an EVM address.
         */

        /**
         * Constructs a new AccountID.
         * @memberof proto
         * @classdesc A unique identifier for an Hedera account.
         * 
         * An account identifier is of the form `shard.realm.[number|alias]`.<br/>
         * The identifier MAY use the alias form when transferring HBAR to a public key
         * before the account for that key is created, when only the alias value is
         * known, or in some smart contracts that use the EVM address style alias to
         * refer to Accounts.<br/>
         * When the account entry is completed, the alias SHALL be stored separately in
         * the Account record, and the identifier in the Account SHALL use the
         * `accountNum` form.
         * 
         * ---
         * ### Additional Notes
         * 
         * #### Alias
         * There is considerable complexity with `alias` (aka `evm_address`) for
         * Accounts. Much of this comes from the existence of a "hidden" alias for
         * almost all accounts, and the reuse of the alias field for both EVM reference
         * and "automatic" account creation.<br/>
         * For the purposes of this specification, we will use the following terms for
         * clarity.
         * - `key_alias`<br/>
         * The account public key as a protobuf serialized message and used for
         * auto-creation and subsequent lookup. This is only valid if the account
         * key is a single `primitive` key, either Ed25519 or ECDSA_SECP256K1.
         * - `evm_address`<br/>
         * Exists for every account and is one of
         * - `contract_address`<br/>
         * The 20 byte EVM address prescribed by `CREATE` or `CREATE2`
         * - `evm_key_address`<br/>
         * An arbitrary 20 byte EVM address that, for a usable externally owned
         * account (EOA) SHALL be the rightmost 20 bytes of the Keccak-256 hash
         * of a ECDSA_SECP256K1 key.<br/>
         * Such accounts may be created in one of three ways:
         * - Sending hbar or fungible tokens to an unused
         * ECDSA_SECP256K1 key alias.
         * - Sending hbar or fungible tokens to an unassigned 20-byte
         * EVM address.
         * - Submitting a `CryptoCreate` signed with the corresponding
         * private key.
         * - `long_zero`<br/>
         * A synthetic 20 byte address inferred for "normally" created accounts.
         * It is constructed from the "standard" AccountID as follows.
         * 1. 4 byte big-endian shard number
         * 1. 8 byte big-endian realm number
         * 1. 8 byte big-endian entity number<br/>
         * 
         * The `alias` field in the `Account` message SHALL contain one of four values
         * for any given account.
         * - The `key_alias`, if the account was created by transferring HBAR to the
         * `key_alias` public key value.
         * - The `evm_key_address` if the account was created from an EVM public key
         * - The `contract_address` if the account belongs to an EVM contract
         * - Not-Set/null/Bytes.EMPTY (collectively `null`) if the account was
         * created normally
         * 
         * If the `alias` field of an `Account` is any form of `null`, then the account
         * MAY be referred to by `alias` in an `AccountID` by using the `long_zero`
         * address for the account.<br/>
         * This "hidden default" alias SHALL NOT be stored, but is synthesized by the
         * node software as needed, and may be synthesized by an EVM contract or client
         * software as well.
         * 
         * ---
         * 
         * #### Alias forms
         * An `AccountID` in a transaction MAY reference an `Account` with
         * `shard.realm.alias`.<br/>
         * If the account `alias` field is set for an Account, that value SHALL be the
         * account alias.<br/>
         * If the account `alias` field is not set for an Account, the `long_zero` alias
         * SHALL be the account alias.
         * @implements IAccountID
         * @constructor
         * @param {proto.IAccountID=} [properties] Properties to set
         */
        function AccountID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A whole number shard identifier.
         * @member {number|Long} shardNum
         * @memberof proto.AccountID
         * @instance
         */
        AccountID.prototype.shardNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number realm identifier.
         * @member {number|Long} realmNum
         * @memberof proto.AccountID
         * @instance
         */
        AccountID.prototype.realmNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number account number, unique within its realm and shard.
         * <p>
         * For any AccountID fields in the query response, transaction records,
         * transaction receipts, or block stream `accountNum` MUST be used.
         * @member {number|Long|null|undefined} accountNum
         * @memberof proto.AccountID
         * @instance
         */
        AccountID.prototype.accountNum = null;

        /**
         * An alias value.<br/>
         * Alias is a value used in some contexts to refer to an account when
         * account number is not available, and may be an alias public key, or
         * an EVM address.
         * @member {Uint8Array|null|undefined} alias
         * @memberof proto.AccountID
         * @instance
         */
        AccountID.prototype.alias = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * AccountID account.
         * @member {"accountNum"|"alias"|undefined} account
         * @memberof proto.AccountID
         * @instance
         */
        Object.defineProperty(AccountID.prototype, "account", {
            get: $util.oneOfGetter($oneOfFields = ["accountNum", "alias"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AccountID instance using the specified properties.
         * @function create
         * @memberof proto.AccountID
         * @static
         * @param {proto.IAccountID=} [properties] Properties to set
         * @returns {proto.AccountID} AccountID instance
         */
        AccountID.create = function create(properties) {
            return new AccountID(properties);
        };

        /**
         * Encodes the specified AccountID message. Does not implicitly {@link proto.AccountID.verify|verify} messages.
         * @function encode
         * @memberof proto.AccountID
         * @static
         * @param {proto.IAccountID} message AccountID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shardNum != null && Object.hasOwnProperty.call(message, "shardNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.shardNum);
            if (message.realmNum != null && Object.hasOwnProperty.call(message, "realmNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.realmNum);
            if (message.accountNum != null && Object.hasOwnProperty.call(message, "accountNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.accountNum);
            if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.alias);
            return writer;
        };

        /**
         * Encodes the specified AccountID message, length delimited. Does not implicitly {@link proto.AccountID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AccountID
         * @static
         * @param {proto.IAccountID} message AccountID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountID message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AccountID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AccountID} AccountID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AccountID();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.shardNum = reader.int64();
                        break;
                    }
                case 2: {
                        message.realmNum = reader.int64();
                        break;
                    }
                case 3: {
                        message.accountNum = reader.int64();
                        break;
                    }
                case 4: {
                        message.alias = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AccountID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AccountID} AccountID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountID message.
         * @function verify
         * @memberof proto.AccountID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.shardNum != null && message.hasOwnProperty("shardNum"))
                if (!$util.isInteger(message.shardNum) && !(message.shardNum && $util.isInteger(message.shardNum.low) && $util.isInteger(message.shardNum.high)))
                    return "shardNum: integer|Long expected";
            if (message.realmNum != null && message.hasOwnProperty("realmNum"))
                if (!$util.isInteger(message.realmNum) && !(message.realmNum && $util.isInteger(message.realmNum.low) && $util.isInteger(message.realmNum.high)))
                    return "realmNum: integer|Long expected";
            if (message.accountNum != null && message.hasOwnProperty("accountNum")) {
                properties.account = 1;
                if (!$util.isInteger(message.accountNum) && !(message.accountNum && $util.isInteger(message.accountNum.low) && $util.isInteger(message.accountNum.high)))
                    return "accountNum: integer|Long expected";
            }
            if (message.alias != null && message.hasOwnProperty("alias")) {
                if (properties.account === 1)
                    return "account: multiple values";
                properties.account = 1;
                if (!(message.alias && typeof message.alias.length === "number" || $util.isString(message.alias)))
                    return "alias: buffer expected";
            }
            return null;
        };

        /**
         * Creates an AccountID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.AccountID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.AccountID} AccountID
         */
        AccountID.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.AccountID)
                return object;
            let message = new $root.proto.AccountID();
            if (object.shardNum != null)
                if ($util.Long)
                    (message.shardNum = $util.Long.fromValue(object.shardNum)).unsigned = false;
                else if (typeof object.shardNum === "string")
                    message.shardNum = parseInt(object.shardNum, 10);
                else if (typeof object.shardNum === "number")
                    message.shardNum = object.shardNum;
                else if (typeof object.shardNum === "object")
                    message.shardNum = new $util.LongBits(object.shardNum.low >>> 0, object.shardNum.high >>> 0).toNumber();
            if (object.realmNum != null)
                if ($util.Long)
                    (message.realmNum = $util.Long.fromValue(object.realmNum)).unsigned = false;
                else if (typeof object.realmNum === "string")
                    message.realmNum = parseInt(object.realmNum, 10);
                else if (typeof object.realmNum === "number")
                    message.realmNum = object.realmNum;
                else if (typeof object.realmNum === "object")
                    message.realmNum = new $util.LongBits(object.realmNum.low >>> 0, object.realmNum.high >>> 0).toNumber();
            if (object.accountNum != null)
                if ($util.Long)
                    (message.accountNum = $util.Long.fromValue(object.accountNum)).unsigned = false;
                else if (typeof object.accountNum === "string")
                    message.accountNum = parseInt(object.accountNum, 10);
                else if (typeof object.accountNum === "number")
                    message.accountNum = object.accountNum;
                else if (typeof object.accountNum === "object")
                    message.accountNum = new $util.LongBits(object.accountNum.low >>> 0, object.accountNum.high >>> 0).toNumber();
            if (object.alias != null)
                if (typeof object.alias === "string")
                    $util.base64.decode(object.alias, message.alias = $util.newBuffer($util.base64.length(object.alias)), 0);
                else if (object.alias.length >= 0)
                    message.alias = object.alias;
            return message;
        };

        /**
         * Creates a plain object from an AccountID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.AccountID
         * @static
         * @param {proto.AccountID} message AccountID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.shardNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.shardNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.realmNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.realmNum = options.longs === String ? "0" : 0;
            }
            if (message.shardNum != null && message.hasOwnProperty("shardNum"))
                if (typeof message.shardNum === "number")
                    object.shardNum = options.longs === String ? String(message.shardNum) : message.shardNum;
                else
                    object.shardNum = options.longs === String ? $util.Long.prototype.toString.call(message.shardNum) : options.longs === Number ? new $util.LongBits(message.shardNum.low >>> 0, message.shardNum.high >>> 0).toNumber() : message.shardNum;
            if (message.realmNum != null && message.hasOwnProperty("realmNum"))
                if (typeof message.realmNum === "number")
                    object.realmNum = options.longs === String ? String(message.realmNum) : message.realmNum;
                else
                    object.realmNum = options.longs === String ? $util.Long.prototype.toString.call(message.realmNum) : options.longs === Number ? new $util.LongBits(message.realmNum.low >>> 0, message.realmNum.high >>> 0).toNumber() : message.realmNum;
            if (message.accountNum != null && message.hasOwnProperty("accountNum")) {
                if (typeof message.accountNum === "number")
                    object.accountNum = options.longs === String ? String(message.accountNum) : message.accountNum;
                else
                    object.accountNum = options.longs === String ? $util.Long.prototype.toString.call(message.accountNum) : options.longs === Number ? new $util.LongBits(message.accountNum.low >>> 0, message.accountNum.high >>> 0).toNumber() : message.accountNum;
                if (options.oneofs)
                    object.account = "accountNum";
            }
            if (message.alias != null && message.hasOwnProperty("alias")) {
                object.alias = options.bytes === String ? $util.base64.encode(message.alias, 0, message.alias.length) : options.bytes === Array ? Array.prototype.slice.call(message.alias) : message.alias;
                if (options.oneofs)
                    object.account = "alias";
            }
            return object;
        };

        /**
         * Converts this AccountID to JSON.
         * @function toJSON
         * @memberof proto.AccountID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountID
         * @function getTypeUrl
         * @memberof proto.AccountID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.AccountID";
        };

        return AccountID;
    })();

    proto.ServiceEndpoint = (function() {

        /**
         * Properties of a ServiceEndpoint.
         * @memberof proto
         * @interface IServiceEndpoint
         * @property {Uint8Array|null} [ipAddressV4] A 32-bit IPv4 address.<br/>
         * This is the address of the endpoint, encoded in pure "big-endian"
         * (i.e. left to right) order (e.g. `127.0.0.1` has hex bytes in the
         * order `7F`, `00`, `00`, `01`).
         * @property {number|null} [port] A TCP port to use.
         * <p>
         * This value MUST be between 0 and 65535, inclusive.
         * @property {string|null} [domainName] A node domain name.
         * <p>
         * This MUST be the fully qualified domain name of the node.<br/>
         * This value MUST NOT exceed 253 characters.<br/>
         * When the `domain_name` field is set, the `ipAddressV4`
         * field MUST NOT be set.<br/>
         * When the `ipAddressV4` field is set, the `domain_name`
         * field MUST NOT be set.
         */

        /**
         * Constructs a new ServiceEndpoint.
         * @memberof proto
         * @classdesc A network node endpoint.<br/>
         * Each network node in the global address book publishes one or more endpoints
         * which enable the nodes to communicate both with other nodes, for gossip, and
         * with clients to receive transaction requests.
         * 
         * This message supports IPv4 with address and TCP port,
         * and MAY include a FQDN instead of an IP address.<br/>
         * IPv6 is not currently supported.
         * 
         * When the `domain_name` field is set, the `ipAddressV4` field
         * MUST NOT be set.<br/>
         * When the `ipAddressV4` field is set, the `domain_name` field
         * MUST NOT be set.
         * @implements IServiceEndpoint
         * @constructor
         * @param {proto.IServiceEndpoint=} [properties] Properties to set
         */
        function ServiceEndpoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A 32-bit IPv4 address.<br/>
         * This is the address of the endpoint, encoded in pure "big-endian"
         * (i.e. left to right) order (e.g. `127.0.0.1` has hex bytes in the
         * order `7F`, `00`, `00`, `01`).
         * @member {Uint8Array} ipAddressV4
         * @memberof proto.ServiceEndpoint
         * @instance
         */
        ServiceEndpoint.prototype.ipAddressV4 = $util.newBuffer([]);

        /**
         * A TCP port to use.
         * <p>
         * This value MUST be between 0 and 65535, inclusive.
         * @member {number} port
         * @memberof proto.ServiceEndpoint
         * @instance
         */
        ServiceEndpoint.prototype.port = 0;

        /**
         * A node domain name.
         * <p>
         * This MUST be the fully qualified domain name of the node.<br/>
         * This value MUST NOT exceed 253 characters.<br/>
         * When the `domain_name` field is set, the `ipAddressV4`
         * field MUST NOT be set.<br/>
         * When the `ipAddressV4` field is set, the `domain_name`
         * field MUST NOT be set.
         * @member {string} domainName
         * @memberof proto.ServiceEndpoint
         * @instance
         */
        ServiceEndpoint.prototype.domainName = "";

        /**
         * Creates a new ServiceEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {proto.IServiceEndpoint=} [properties] Properties to set
         * @returns {proto.ServiceEndpoint} ServiceEndpoint instance
         */
        ServiceEndpoint.create = function create(properties) {
            return new ServiceEndpoint(properties);
        };

        /**
         * Encodes the specified ServiceEndpoint message. Does not implicitly {@link proto.ServiceEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {proto.IServiceEndpoint} message ServiceEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ipAddressV4 != null && Object.hasOwnProperty.call(message, "ipAddressV4"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ipAddressV4);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
            if (message.domainName != null && Object.hasOwnProperty.call(message, "domainName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.domainName);
            return writer;
        };

        /**
         * Encodes the specified ServiceEndpoint message, length delimited. Does not implicitly {@link proto.ServiceEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {proto.IServiceEndpoint} message ServiceEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServiceEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ServiceEndpoint} ServiceEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ServiceEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.ipAddressV4 = reader.bytes();
                        break;
                    }
                case 2: {
                        message.port = reader.int32();
                        break;
                    }
                case 3: {
                        message.domainName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServiceEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ServiceEndpoint} ServiceEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServiceEndpoint message.
         * @function verify
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServiceEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ipAddressV4 != null && message.hasOwnProperty("ipAddressV4"))
                if (!(message.ipAddressV4 && typeof message.ipAddressV4.length === "number" || $util.isString(message.ipAddressV4)))
                    return "ipAddressV4: buffer expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.domainName != null && message.hasOwnProperty("domainName"))
                if (!$util.isString(message.domainName))
                    return "domainName: string expected";
            return null;
        };

        /**
         * Creates a ServiceEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ServiceEndpoint} ServiceEndpoint
         */
        ServiceEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ServiceEndpoint)
                return object;
            let message = new $root.proto.ServiceEndpoint();
            if (object.ipAddressV4 != null)
                if (typeof object.ipAddressV4 === "string")
                    $util.base64.decode(object.ipAddressV4, message.ipAddressV4 = $util.newBuffer($util.base64.length(object.ipAddressV4)), 0);
                else if (object.ipAddressV4.length >= 0)
                    message.ipAddressV4 = object.ipAddressV4;
            if (object.port != null)
                message.port = object.port | 0;
            if (object.domainName != null)
                message.domainName = String(object.domainName);
            return message;
        };

        /**
         * Creates a plain object from a ServiceEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {proto.ServiceEndpoint} message ServiceEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServiceEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.ipAddressV4 = "";
                else {
                    object.ipAddressV4 = [];
                    if (options.bytes !== Array)
                        object.ipAddressV4 = $util.newBuffer(object.ipAddressV4);
                }
                object.port = 0;
                object.domainName = "";
            }
            if (message.ipAddressV4 != null && message.hasOwnProperty("ipAddressV4"))
                object.ipAddressV4 = options.bytes === String ? $util.base64.encode(message.ipAddressV4, 0, message.ipAddressV4.length) : options.bytes === Array ? Array.prototype.slice.call(message.ipAddressV4) : message.ipAddressV4;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.domainName != null && message.hasOwnProperty("domainName"))
                object.domainName = message.domainName;
            return object;
        };

        /**
         * Converts this ServiceEndpoint to JSON.
         * @function toJSON
         * @memberof proto.ServiceEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServiceEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServiceEndpoint
         * @function getTypeUrl
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServiceEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ServiceEndpoint";
        };

        return ServiceEndpoint;
    })();

    proto.NodeAddress = (function() {

        /**
         * Properties of a NodeAddress.
         * @memberof proto
         * @interface INodeAddress
         * @property {Uint8Array|null} [ipAddress] ServiceEndpoint is now used to retrieve a node's list of IP
         * addresses and ports.<br/>
         * The IP address of the Node, as a string, encoded in UTF-8.<br/>
         * This value SHALL NOT be populated.
         * @property {number|null} [portno] ServiceEndpoint is now used to retrieve a node's list of IP
         * addresses and ports.<br/>
         * The port number of the grpc server for the node.<br/>
         * This value SHALL NOT be populated.
         * @property {Uint8Array|null} [memo] Description provides short text functionality.<br/>
         * A short description of the node.
         * <p>
         * This field SHALL NOT be populated.
         * @property {string|null} [RSA_PubKey] A hexadecimal String encoding of an X509 public key.
         * <p>
         * This X509 RSA _public_ key SHALL be used to verify record stream files
         * (e.g., record stream files).<br/>
         * This field SHALL be a string of hexadecimal characters, encoded UTF-8,
         * which, translated to binary, form the public key DER encoding.
         * @property {number|Long|null} [nodeId] A numeric identifier for the node.
         * <p>
         * This value SHALL NOT be sequential.
         * <p>
         * A `0.0.101` field
         * @property {proto.IAccountID|null} [nodeAccountId] An account to be paid the "node" portion of transaction fees.<br/>
         * The "node" fees are paid to the node that submitted the transaction.
         * <p>
         * A `0.0.101` field
         * @property {Uint8Array|null} [nodeCertHash] A hash of the node's TLS certificate.
         * <p>
         * This field SHALL be a string of hexadecimal characters, encoded UTF-8,
         * which, translated to binary, form a SHA-384 hash of the node's TLS
         * certificate in PEM format.
         * This TLS certificate MUST be encoded UTF-8 and normalized according to
         * the NFKD form prior to computing the hash value.<br/>
         * The value of this field SHALL be used to verify the node TLS
         * certificate when presented during protocol negotiation.
         * <p>
         * A `0.0.101` field
         * @property {Array.<proto.IServiceEndpoint>|null} [serviceEndpoint] A node's service IP addresses and TCP ports.<br/>
         * Nodes require multiple endpoints to ensure that inter-node communication
         * (e.g. gossip) is properly separated from client communication to
         * API endpoints.
         * <p>
         * A `0.0.101` field
         * @property {string|null} [description] A short description of the node.
         * <p>
         * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
         * (default 100) bytes when encoded as UTF-8.
         * @property {number|Long|null} [stake] This is replaced by per-account stake tracking and dynamic
         * calculation.<br/>
         * The amount of tinybar staked to the node.<br/>
         * This value SHOULD NOT be populated, and SHALL be ignored.
         */

        /**
         * Constructs a new NodeAddress.
         * @memberof proto
         * @classdesc The data about a node, including its service endpoints and the Hedera account
         * to be paid for services provided by the node (that is, queries answered and
         * transactions submitted).
         * 
         * All active fields are populated in the `0.0.102` address book file.<br/>
         * Only fields documented with "`0.0.101` field" are populated in the 0.0.101
         * address book file.
         * 
         * This message MAY be superseded by messages in state/addressbook/node.proto
         * and node_get_info.proto.
         * @implements INodeAddress
         * @constructor
         * @param {proto.INodeAddress=} [properties] Properties to set
         */
        function NodeAddress(properties) {
            this.serviceEndpoint = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServiceEndpoint is now used to retrieve a node's list of IP
         * addresses and ports.<br/>
         * The IP address of the Node, as a string, encoded in UTF-8.<br/>
         * This value SHALL NOT be populated.
         * @member {Uint8Array} ipAddress
         * @memberof proto.NodeAddress
         * @instance
         */
        NodeAddress.prototype.ipAddress = $util.newBuffer([]);

        /**
         * ServiceEndpoint is now used to retrieve a node's list of IP
         * addresses and ports.<br/>
         * The port number of the grpc server for the node.<br/>
         * This value SHALL NOT be populated.
         * @member {number} portno
         * @memberof proto.NodeAddress
         * @instance
         */
        NodeAddress.prototype.portno = 0;

        /**
         * Description provides short text functionality.<br/>
         * A short description of the node.
         * <p>
         * This field SHALL NOT be populated.
         * @member {Uint8Array} memo
         * @memberof proto.NodeAddress
         * @instance
         */
        NodeAddress.prototype.memo = $util.newBuffer([]);

        /**
         * A hexadecimal String encoding of an X509 public key.
         * <p>
         * This X509 RSA _public_ key SHALL be used to verify record stream files
         * (e.g., record stream files).<br/>
         * This field SHALL be a string of hexadecimal characters, encoded UTF-8,
         * which, translated to binary, form the public key DER encoding.
         * @member {string} RSA_PubKey
         * @memberof proto.NodeAddress
         * @instance
         */
        NodeAddress.prototype.RSA_PubKey = "";

        /**
         * A numeric identifier for the node.
         * <p>
         * This value SHALL NOT be sequential.
         * <p>
         * A `0.0.101` field
         * @member {number|Long} nodeId
         * @memberof proto.NodeAddress
         * @instance
         */
        NodeAddress.prototype.nodeId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * An account to be paid the "node" portion of transaction fees.<br/>
         * The "node" fees are paid to the node that submitted the transaction.
         * <p>
         * A `0.0.101` field
         * @member {proto.IAccountID|null|undefined} nodeAccountId
         * @memberof proto.NodeAddress
         * @instance
         */
        NodeAddress.prototype.nodeAccountId = null;

        /**
         * A hash of the node's TLS certificate.
         * <p>
         * This field SHALL be a string of hexadecimal characters, encoded UTF-8,
         * which, translated to binary, form a SHA-384 hash of the node's TLS
         * certificate in PEM format.
         * This TLS certificate MUST be encoded UTF-8 and normalized according to
         * the NFKD form prior to computing the hash value.<br/>
         * The value of this field SHALL be used to verify the node TLS
         * certificate when presented during protocol negotiation.
         * <p>
         * A `0.0.101` field
         * @member {Uint8Array} nodeCertHash
         * @memberof proto.NodeAddress
         * @instance
         */
        NodeAddress.prototype.nodeCertHash = $util.newBuffer([]);

        /**
         * A node's service IP addresses and TCP ports.<br/>
         * Nodes require multiple endpoints to ensure that inter-node communication
         * (e.g. gossip) is properly separated from client communication to
         * API endpoints.
         * <p>
         * A `0.0.101` field
         * @member {Array.<proto.IServiceEndpoint>} serviceEndpoint
         * @memberof proto.NodeAddress
         * @instance
         */
        NodeAddress.prototype.serviceEndpoint = $util.emptyArray;

        /**
         * A short description of the node.
         * <p>
         * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
         * (default 100) bytes when encoded as UTF-8.
         * @member {string} description
         * @memberof proto.NodeAddress
         * @instance
         */
        NodeAddress.prototype.description = "";

        /**
         * This is replaced by per-account stake tracking and dynamic
         * calculation.<br/>
         * The amount of tinybar staked to the node.<br/>
         * This value SHOULD NOT be populated, and SHALL be ignored.
         * @member {number|Long} stake
         * @memberof proto.NodeAddress
         * @instance
         */
        NodeAddress.prototype.stake = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new NodeAddress instance using the specified properties.
         * @function create
         * @memberof proto.NodeAddress
         * @static
         * @param {proto.INodeAddress=} [properties] Properties to set
         * @returns {proto.NodeAddress} NodeAddress instance
         */
        NodeAddress.create = function create(properties) {
            return new NodeAddress(properties);
        };

        /**
         * Encodes the specified NodeAddress message. Does not implicitly {@link proto.NodeAddress.verify|verify} messages.
         * @function encode
         * @memberof proto.NodeAddress
         * @static
         * @param {proto.INodeAddress} message NodeAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeAddress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ipAddress != null && Object.hasOwnProperty.call(message, "ipAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ipAddress);
            if (message.portno != null && Object.hasOwnProperty.call(message, "portno"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.portno);
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.memo);
            if (message.RSA_PubKey != null && Object.hasOwnProperty.call(message, "RSA_PubKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.RSA_PubKey);
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.nodeId);
            if (message.nodeAccountId != null && Object.hasOwnProperty.call(message, "nodeAccountId"))
                $root.proto.AccountID.encode(message.nodeAccountId, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.nodeCertHash != null && Object.hasOwnProperty.call(message, "nodeCertHash"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.nodeCertHash);
            if (message.serviceEndpoint != null && message.serviceEndpoint.length)
                for (let i = 0; i < message.serviceEndpoint.length; ++i)
                    $root.proto.ServiceEndpoint.encode(message.serviceEndpoint[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.description);
            if (message.stake != null && Object.hasOwnProperty.call(message, "stake"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.stake);
            return writer;
        };

        /**
         * Encodes the specified NodeAddress message, length delimited. Does not implicitly {@link proto.NodeAddress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NodeAddress
         * @static
         * @param {proto.INodeAddress} message NodeAddress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeAddress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeAddress message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NodeAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NodeAddress} NodeAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeAddress.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NodeAddress();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.ipAddress = reader.bytes();
                        break;
                    }
                case 2: {
                        message.portno = reader.int32();
                        break;
                    }
                case 3: {
                        message.memo = reader.bytes();
                        break;
                    }
                case 4: {
                        message.RSA_PubKey = reader.string();
                        break;
                    }
                case 5: {
                        message.nodeId = reader.int64();
                        break;
                    }
                case 6: {
                        message.nodeAccountId = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.nodeCertHash = reader.bytes();
                        break;
                    }
                case 8: {
                        if (!(message.serviceEndpoint && message.serviceEndpoint.length))
                            message.serviceEndpoint = [];
                        message.serviceEndpoint.push($root.proto.ServiceEndpoint.decode(reader, reader.uint32()));
                        break;
                    }
                case 9: {
                        message.description = reader.string();
                        break;
                    }
                case 10: {
                        message.stake = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeAddress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NodeAddress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NodeAddress} NodeAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeAddress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeAddress message.
         * @function verify
         * @memberof proto.NodeAddress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeAddress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                if (!(message.ipAddress && typeof message.ipAddress.length === "number" || $util.isString(message.ipAddress)))
                    return "ipAddress: buffer expected";
            if (message.portno != null && message.hasOwnProperty("portno"))
                if (!$util.isInteger(message.portno))
                    return "portno: integer expected";
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!(message.memo && typeof message.memo.length === "number" || $util.isString(message.memo)))
                    return "memo: buffer expected";
            if (message.RSA_PubKey != null && message.hasOwnProperty("RSA_PubKey"))
                if (!$util.isString(message.RSA_PubKey))
                    return "RSA_PubKey: string expected";
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (!$util.isInteger(message.nodeId) && !(message.nodeId && $util.isInteger(message.nodeId.low) && $util.isInteger(message.nodeId.high)))
                    return "nodeId: integer|Long expected";
            if (message.nodeAccountId != null && message.hasOwnProperty("nodeAccountId")) {
                let error = $root.proto.AccountID.verify(message.nodeAccountId);
                if (error)
                    return "nodeAccountId." + error;
            }
            if (message.nodeCertHash != null && message.hasOwnProperty("nodeCertHash"))
                if (!(message.nodeCertHash && typeof message.nodeCertHash.length === "number" || $util.isString(message.nodeCertHash)))
                    return "nodeCertHash: buffer expected";
            if (message.serviceEndpoint != null && message.hasOwnProperty("serviceEndpoint")) {
                if (!Array.isArray(message.serviceEndpoint))
                    return "serviceEndpoint: array expected";
                for (let i = 0; i < message.serviceEndpoint.length; ++i) {
                    let error = $root.proto.ServiceEndpoint.verify(message.serviceEndpoint[i]);
                    if (error)
                        return "serviceEndpoint." + error;
                }
            }
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.stake != null && message.hasOwnProperty("stake"))
                if (!$util.isInteger(message.stake) && !(message.stake && $util.isInteger(message.stake.low) && $util.isInteger(message.stake.high)))
                    return "stake: integer|Long expected";
            return null;
        };

        /**
         * Creates a NodeAddress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.NodeAddress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.NodeAddress} NodeAddress
         */
        NodeAddress.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.NodeAddress)
                return object;
            let message = new $root.proto.NodeAddress();
            if (object.ipAddress != null)
                if (typeof object.ipAddress === "string")
                    $util.base64.decode(object.ipAddress, message.ipAddress = $util.newBuffer($util.base64.length(object.ipAddress)), 0);
                else if (object.ipAddress.length >= 0)
                    message.ipAddress = object.ipAddress;
            if (object.portno != null)
                message.portno = object.portno | 0;
            if (object.memo != null)
                if (typeof object.memo === "string")
                    $util.base64.decode(object.memo, message.memo = $util.newBuffer($util.base64.length(object.memo)), 0);
                else if (object.memo.length >= 0)
                    message.memo = object.memo;
            if (object.RSA_PubKey != null)
                message.RSA_PubKey = String(object.RSA_PubKey);
            if (object.nodeId != null)
                if ($util.Long)
                    (message.nodeId = $util.Long.fromValue(object.nodeId)).unsigned = false;
                else if (typeof object.nodeId === "string")
                    message.nodeId = parseInt(object.nodeId, 10);
                else if (typeof object.nodeId === "number")
                    message.nodeId = object.nodeId;
                else if (typeof object.nodeId === "object")
                    message.nodeId = new $util.LongBits(object.nodeId.low >>> 0, object.nodeId.high >>> 0).toNumber();
            if (object.nodeAccountId != null) {
                if (typeof object.nodeAccountId !== "object")
                    throw TypeError(".proto.NodeAddress.nodeAccountId: object expected");
                message.nodeAccountId = $root.proto.AccountID.fromObject(object.nodeAccountId);
            }
            if (object.nodeCertHash != null)
                if (typeof object.nodeCertHash === "string")
                    $util.base64.decode(object.nodeCertHash, message.nodeCertHash = $util.newBuffer($util.base64.length(object.nodeCertHash)), 0);
                else if (object.nodeCertHash.length >= 0)
                    message.nodeCertHash = object.nodeCertHash;
            if (object.serviceEndpoint) {
                if (!Array.isArray(object.serviceEndpoint))
                    throw TypeError(".proto.NodeAddress.serviceEndpoint: array expected");
                message.serviceEndpoint = [];
                for (let i = 0; i < object.serviceEndpoint.length; ++i) {
                    if (typeof object.serviceEndpoint[i] !== "object")
                        throw TypeError(".proto.NodeAddress.serviceEndpoint: object expected");
                    message.serviceEndpoint[i] = $root.proto.ServiceEndpoint.fromObject(object.serviceEndpoint[i]);
                }
            }
            if (object.description != null)
                message.description = String(object.description);
            if (object.stake != null)
                if ($util.Long)
                    (message.stake = $util.Long.fromValue(object.stake)).unsigned = false;
                else if (typeof object.stake === "string")
                    message.stake = parseInt(object.stake, 10);
                else if (typeof object.stake === "number")
                    message.stake = object.stake;
                else if (typeof object.stake === "object")
                    message.stake = new $util.LongBits(object.stake.low >>> 0, object.stake.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a NodeAddress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.NodeAddress
         * @static
         * @param {proto.NodeAddress} message NodeAddress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeAddress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.serviceEndpoint = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.ipAddress = "";
                else {
                    object.ipAddress = [];
                    if (options.bytes !== Array)
                        object.ipAddress = $util.newBuffer(object.ipAddress);
                }
                object.portno = 0;
                if (options.bytes === String)
                    object.memo = "";
                else {
                    object.memo = [];
                    if (options.bytes !== Array)
                        object.memo = $util.newBuffer(object.memo);
                }
                object.RSA_PubKey = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.nodeId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nodeId = options.longs === String ? "0" : 0;
                object.nodeAccountId = null;
                if (options.bytes === String)
                    object.nodeCertHash = "";
                else {
                    object.nodeCertHash = [];
                    if (options.bytes !== Array)
                        object.nodeCertHash = $util.newBuffer(object.nodeCertHash);
                }
                object.description = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.stake = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stake = options.longs === String ? "0" : 0;
            }
            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                object.ipAddress = options.bytes === String ? $util.base64.encode(message.ipAddress, 0, message.ipAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ipAddress) : message.ipAddress;
            if (message.portno != null && message.hasOwnProperty("portno"))
                object.portno = message.portno;
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = options.bytes === String ? $util.base64.encode(message.memo, 0, message.memo.length) : options.bytes === Array ? Array.prototype.slice.call(message.memo) : message.memo;
            if (message.RSA_PubKey != null && message.hasOwnProperty("RSA_PubKey"))
                object.RSA_PubKey = message.RSA_PubKey;
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (typeof message.nodeId === "number")
                    object.nodeId = options.longs === String ? String(message.nodeId) : message.nodeId;
                else
                    object.nodeId = options.longs === String ? $util.Long.prototype.toString.call(message.nodeId) : options.longs === Number ? new $util.LongBits(message.nodeId.low >>> 0, message.nodeId.high >>> 0).toNumber() : message.nodeId;
            if (message.nodeAccountId != null && message.hasOwnProperty("nodeAccountId"))
                object.nodeAccountId = $root.proto.AccountID.toObject(message.nodeAccountId, options);
            if (message.nodeCertHash != null && message.hasOwnProperty("nodeCertHash"))
                object.nodeCertHash = options.bytes === String ? $util.base64.encode(message.nodeCertHash, 0, message.nodeCertHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodeCertHash) : message.nodeCertHash;
            if (message.serviceEndpoint && message.serviceEndpoint.length) {
                object.serviceEndpoint = [];
                for (let j = 0; j < message.serviceEndpoint.length; ++j)
                    object.serviceEndpoint[j] = $root.proto.ServiceEndpoint.toObject(message.serviceEndpoint[j], options);
            }
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.stake != null && message.hasOwnProperty("stake"))
                if (typeof message.stake === "number")
                    object.stake = options.longs === String ? String(message.stake) : message.stake;
                else
                    object.stake = options.longs === String ? $util.Long.prototype.toString.call(message.stake) : options.longs === Number ? new $util.LongBits(message.stake.low >>> 0, message.stake.high >>> 0).toNumber() : message.stake;
            return object;
        };

        /**
         * Converts this NodeAddress to JSON.
         * @function toJSON
         * @memberof proto.NodeAddress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeAddress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NodeAddress
         * @function getTypeUrl
         * @memberof proto.NodeAddress
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NodeAddress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.NodeAddress";
        };

        return NodeAddress;
    })();

    proto.NodeAddressBook = (function() {

        /**
         * Properties of a NodeAddressBook.
         * @memberof proto
         * @interface INodeAddressBook
         * @property {Array.<proto.INodeAddress>|null} [nodeAddress] Published data for all nodes in the network
         */

        /**
         * Constructs a new NodeAddressBook.
         * @memberof proto
         * @classdesc A list of nodes and their metadata that contains details of the nodes
         * running the network.
         * 
         * Used to parse the contents of system files `0.0.101` and `0.0.102`.
         * @implements INodeAddressBook
         * @constructor
         * @param {proto.INodeAddressBook=} [properties] Properties to set
         */
        function NodeAddressBook(properties) {
            this.nodeAddress = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Published data for all nodes in the network
         * @member {Array.<proto.INodeAddress>} nodeAddress
         * @memberof proto.NodeAddressBook
         * @instance
         */
        NodeAddressBook.prototype.nodeAddress = $util.emptyArray;

        /**
         * Creates a new NodeAddressBook instance using the specified properties.
         * @function create
         * @memberof proto.NodeAddressBook
         * @static
         * @param {proto.INodeAddressBook=} [properties] Properties to set
         * @returns {proto.NodeAddressBook} NodeAddressBook instance
         */
        NodeAddressBook.create = function create(properties) {
            return new NodeAddressBook(properties);
        };

        /**
         * Encodes the specified NodeAddressBook message. Does not implicitly {@link proto.NodeAddressBook.verify|verify} messages.
         * @function encode
         * @memberof proto.NodeAddressBook
         * @static
         * @param {proto.INodeAddressBook} message NodeAddressBook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeAddressBook.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodeAddress != null && message.nodeAddress.length)
                for (let i = 0; i < message.nodeAddress.length; ++i)
                    $root.proto.NodeAddress.encode(message.nodeAddress[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NodeAddressBook message, length delimited. Does not implicitly {@link proto.NodeAddressBook.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NodeAddressBook
         * @static
         * @param {proto.INodeAddressBook} message NodeAddressBook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeAddressBook.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeAddressBook message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NodeAddressBook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NodeAddressBook} NodeAddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeAddressBook.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NodeAddressBook();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.nodeAddress && message.nodeAddress.length))
                            message.nodeAddress = [];
                        message.nodeAddress.push($root.proto.NodeAddress.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeAddressBook message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NodeAddressBook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NodeAddressBook} NodeAddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeAddressBook.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeAddressBook message.
         * @function verify
         * @memberof proto.NodeAddressBook
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeAddressBook.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nodeAddress != null && message.hasOwnProperty("nodeAddress")) {
                if (!Array.isArray(message.nodeAddress))
                    return "nodeAddress: array expected";
                for (let i = 0; i < message.nodeAddress.length; ++i) {
                    let error = $root.proto.NodeAddress.verify(message.nodeAddress[i]);
                    if (error)
                        return "nodeAddress." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NodeAddressBook message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.NodeAddressBook
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.NodeAddressBook} NodeAddressBook
         */
        NodeAddressBook.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.NodeAddressBook)
                return object;
            let message = new $root.proto.NodeAddressBook();
            if (object.nodeAddress) {
                if (!Array.isArray(object.nodeAddress))
                    throw TypeError(".proto.NodeAddressBook.nodeAddress: array expected");
                message.nodeAddress = [];
                for (let i = 0; i < object.nodeAddress.length; ++i) {
                    if (typeof object.nodeAddress[i] !== "object")
                        throw TypeError(".proto.NodeAddressBook.nodeAddress: object expected");
                    message.nodeAddress[i] = $root.proto.NodeAddress.fromObject(object.nodeAddress[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NodeAddressBook message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.NodeAddressBook
         * @static
         * @param {proto.NodeAddressBook} message NodeAddressBook
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeAddressBook.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.nodeAddress = [];
            if (message.nodeAddress && message.nodeAddress.length) {
                object.nodeAddress = [];
                for (let j = 0; j < message.nodeAddress.length; ++j)
                    object.nodeAddress[j] = $root.proto.NodeAddress.toObject(message.nodeAddress[j], options);
            }
            return object;
        };

        /**
         * Converts this NodeAddressBook to JSON.
         * @function toJSON
         * @memberof proto.NodeAddressBook
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeAddressBook.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NodeAddressBook
         * @function getTypeUrl
         * @memberof proto.NodeAddressBook
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NodeAddressBook.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.NodeAddressBook";
        };

        return NodeAddressBook;
    })();

    proto.SemanticVersion = (function() {

        /**
         * Properties of a SemanticVersion.
         * @memberof proto
         * @interface ISemanticVersion
         * @property {number|null} [major] A major version.<br/>
         * Hedera does not increment this value and retains a `0` value to
         * indicate that API may change for any release.
         * <p>
         * This value SHALL increment for an incompatible API change.<br/>
         * @property {number|null} [minor] A minor version.<br/>
         * Hedera increments this value with each release.<br/>
         * There may be incompatible API changes in any Hedera Services release.
         * <p>
         * This value SHALL increment for backwards-compatible new
         * functionality.
         * @property {number|null} [patch] A patch version.
         * <p>
         * This value SHALL increment for backwards-compatible bug fixes.
         * @property {string|null} [pre] A pre-release version.
         * <p>
         * This MAY be denoted by appending a hyphen and a series of dot separated
         * identifiers per [Semver Specification](https://semver.org/#spec-item-9);
         * given a string `0.14.0-alpha.1+21AF26D3`, this field would contain
         * 'alpha.1'
         * @property {string|null} [build] A build version.
         * <p>
         * Build version MAY be denoted by appending a plus sign and a series of
         * dot separated identifiers immediately following the patch or pre-release
         * version per [Semver Specification](https://semver.org/#spec-item-10); so
         * given a string `0.14.0-alpha.1+21AF26D3`, this field
         * would contain '21AF26D3'
         */

        /**
         * Constructs a new SemanticVersion.
         * @memberof proto
         * @classdesc A software version according to "[semantic versioning](https://semver.org/)"
         * or "date versioning".
         * 
         * Hedera currently modifies the "typical" semantic versioning somewhat, the
         * `major` version is always `0`, and each release increments the `minor`
         * version. The `patch` and `pre` components are used in the typical manner.
         * The `build` component is not generally used.
         * @implements ISemanticVersion
         * @constructor
         * @param {proto.ISemanticVersion=} [properties] Properties to set
         */
        function SemanticVersion(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A major version.<br/>
         * Hedera does not increment this value and retains a `0` value to
         * indicate that API may change for any release.
         * <p>
         * This value SHALL increment for an incompatible API change.<br/>
         * @member {number} major
         * @memberof proto.SemanticVersion
         * @instance
         */
        SemanticVersion.prototype.major = 0;

        /**
         * A minor version.<br/>
         * Hedera increments this value with each release.<br/>
         * There may be incompatible API changes in any Hedera Services release.
         * <p>
         * This value SHALL increment for backwards-compatible new
         * functionality.
         * @member {number} minor
         * @memberof proto.SemanticVersion
         * @instance
         */
        SemanticVersion.prototype.minor = 0;

        /**
         * A patch version.
         * <p>
         * This value SHALL increment for backwards-compatible bug fixes.
         * @member {number} patch
         * @memberof proto.SemanticVersion
         * @instance
         */
        SemanticVersion.prototype.patch = 0;

        /**
         * A pre-release version.
         * <p>
         * This MAY be denoted by appending a hyphen and a series of dot separated
         * identifiers per [Semver Specification](https://semver.org/#spec-item-9);
         * given a string `0.14.0-alpha.1+21AF26D3`, this field would contain
         * 'alpha.1'
         * @member {string} pre
         * @memberof proto.SemanticVersion
         * @instance
         */
        SemanticVersion.prototype.pre = "";

        /**
         * A build version.
         * <p>
         * Build version MAY be denoted by appending a plus sign and a series of
         * dot separated identifiers immediately following the patch or pre-release
         * version per [Semver Specification](https://semver.org/#spec-item-10); so
         * given a string `0.14.0-alpha.1+21AF26D3`, this field
         * would contain '21AF26D3'
         * @member {string} build
         * @memberof proto.SemanticVersion
         * @instance
         */
        SemanticVersion.prototype.build = "";

        /**
         * Creates a new SemanticVersion instance using the specified properties.
         * @function create
         * @memberof proto.SemanticVersion
         * @static
         * @param {proto.ISemanticVersion=} [properties] Properties to set
         * @returns {proto.SemanticVersion} SemanticVersion instance
         */
        SemanticVersion.create = function create(properties) {
            return new SemanticVersion(properties);
        };

        /**
         * Encodes the specified SemanticVersion message. Does not implicitly {@link proto.SemanticVersion.verify|verify} messages.
         * @function encode
         * @memberof proto.SemanticVersion
         * @static
         * @param {proto.ISemanticVersion} message SemanticVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SemanticVersion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.major != null && Object.hasOwnProperty.call(message, "major"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.major);
            if (message.minor != null && Object.hasOwnProperty.call(message, "minor"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.minor);
            if (message.patch != null && Object.hasOwnProperty.call(message, "patch"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.patch);
            if (message.pre != null && Object.hasOwnProperty.call(message, "pre"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pre);
            if (message.build != null && Object.hasOwnProperty.call(message, "build"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.build);
            return writer;
        };

        /**
         * Encodes the specified SemanticVersion message, length delimited. Does not implicitly {@link proto.SemanticVersion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SemanticVersion
         * @static
         * @param {proto.ISemanticVersion} message SemanticVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SemanticVersion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SemanticVersion message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SemanticVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SemanticVersion} SemanticVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SemanticVersion.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SemanticVersion();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.major = reader.int32();
                        break;
                    }
                case 2: {
                        message.minor = reader.int32();
                        break;
                    }
                case 3: {
                        message.patch = reader.int32();
                        break;
                    }
                case 4: {
                        message.pre = reader.string();
                        break;
                    }
                case 5: {
                        message.build = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SemanticVersion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.SemanticVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SemanticVersion} SemanticVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SemanticVersion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SemanticVersion message.
         * @function verify
         * @memberof proto.SemanticVersion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SemanticVersion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.major != null && message.hasOwnProperty("major"))
                if (!$util.isInteger(message.major))
                    return "major: integer expected";
            if (message.minor != null && message.hasOwnProperty("minor"))
                if (!$util.isInteger(message.minor))
                    return "minor: integer expected";
            if (message.patch != null && message.hasOwnProperty("patch"))
                if (!$util.isInteger(message.patch))
                    return "patch: integer expected";
            if (message.pre != null && message.hasOwnProperty("pre"))
                if (!$util.isString(message.pre))
                    return "pre: string expected";
            if (message.build != null && message.hasOwnProperty("build"))
                if (!$util.isString(message.build))
                    return "build: string expected";
            return null;
        };

        /**
         * Creates a SemanticVersion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.SemanticVersion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SemanticVersion} SemanticVersion
         */
        SemanticVersion.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SemanticVersion)
                return object;
            let message = new $root.proto.SemanticVersion();
            if (object.major != null)
                message.major = object.major | 0;
            if (object.minor != null)
                message.minor = object.minor | 0;
            if (object.patch != null)
                message.patch = object.patch | 0;
            if (object.pre != null)
                message.pre = String(object.pre);
            if (object.build != null)
                message.build = String(object.build);
            return message;
        };

        /**
         * Creates a plain object from a SemanticVersion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SemanticVersion
         * @static
         * @param {proto.SemanticVersion} message SemanticVersion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SemanticVersion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.major = 0;
                object.minor = 0;
                object.patch = 0;
                object.pre = "";
                object.build = "";
            }
            if (message.major != null && message.hasOwnProperty("major"))
                object.major = message.major;
            if (message.minor != null && message.hasOwnProperty("minor"))
                object.minor = message.minor;
            if (message.patch != null && message.hasOwnProperty("patch"))
                object.patch = message.patch;
            if (message.pre != null && message.hasOwnProperty("pre"))
                object.pre = message.pre;
            if (message.build != null && message.hasOwnProperty("build"))
                object.build = message.build;
            return object;
        };

        /**
         * Converts this SemanticVersion to JSON.
         * @function toJSON
         * @memberof proto.SemanticVersion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SemanticVersion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SemanticVersion
         * @function getTypeUrl
         * @memberof proto.SemanticVersion
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SemanticVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.SemanticVersion";
        };

        return SemanticVersion;
    })();

    proto.StakingInfo = (function() {

        /**
         * Properties of a StakingInfo.
         * @memberof proto
         * @interface IStakingInfo
         * @property {boolean|null} [declineReward] A flag indicating that the holder of this account has chosen to decline
         * staking rewards.
         * @property {proto.ITimestamp|null} [stakePeriodStart] A `Timestamp` of the start time for the latest active staking period.
         * <p>
         * This MUST be a period during which either the staking settings for this
         * account or contract changed or the account or contract received staking
         * rewards, whichever is later. Examples of a change in staking settings
         * include starting staking or changing the staked_node_id.<br/>
         * If this account or contract is not currently staked to a node, then this
         * field SHALL NOT be set.
         * @property {number|Long|null} [pendingReward] An amount, in tinybar, to be received in the next reward payout.<br/>
         * Rewards are not paid out immediately; for efficiency reasons rewards are
         * only paid out as part of another transaction involving that account.
         * @property {number|Long|null} [stakedToMe] A proxy-staked balance.<br/>
         * The total HBAR balance of all accounts that delegate staking to this
         * account or contract.
         * @property {proto.IAccountID|null} [stakedAccountId] A delegated stake.
         * <p>
         * This account delegates to the indicated account for staking purposes.
         * @property {number|Long|null} [stakedNodeId] A direct stake.
         * <p>
         * This accounts stakes its balance to the designated node.
         */

        /**
         * Constructs a new StakingInfo.
         * @memberof proto
         * @classdesc Staking information for an account or a contract.
         * 
         * This is used for responses returned from `CryptoGetInfo` or
         * `ContractGetInfo` queries.
         * @implements IStakingInfo
         * @constructor
         * @param {proto.IStakingInfo=} [properties] Properties to set
         */
        function StakingInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A flag indicating that the holder of this account has chosen to decline
         * staking rewards.
         * @member {boolean} declineReward
         * @memberof proto.StakingInfo
         * @instance
         */
        StakingInfo.prototype.declineReward = false;

        /**
         * A `Timestamp` of the start time for the latest active staking period.
         * <p>
         * This MUST be a period during which either the staking settings for this
         * account or contract changed or the account or contract received staking
         * rewards, whichever is later. Examples of a change in staking settings
         * include starting staking or changing the staked_node_id.<br/>
         * If this account or contract is not currently staked to a node, then this
         * field SHALL NOT be set.
         * @member {proto.ITimestamp|null|undefined} stakePeriodStart
         * @memberof proto.StakingInfo
         * @instance
         */
        StakingInfo.prototype.stakePeriodStart = null;

        /**
         * An amount, in tinybar, to be received in the next reward payout.<br/>
         * Rewards are not paid out immediately; for efficiency reasons rewards are
         * only paid out as part of another transaction involving that account.
         * @member {number|Long} pendingReward
         * @memberof proto.StakingInfo
         * @instance
         */
        StakingInfo.prototype.pendingReward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A proxy-staked balance.<br/>
         * The total HBAR balance of all accounts that delegate staking to this
         * account or contract.
         * @member {number|Long} stakedToMe
         * @memberof proto.StakingInfo
         * @instance
         */
        StakingInfo.prototype.stakedToMe = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A delegated stake.
         * <p>
         * This account delegates to the indicated account for staking purposes.
         * @member {proto.IAccountID|null|undefined} stakedAccountId
         * @memberof proto.StakingInfo
         * @instance
         */
        StakingInfo.prototype.stakedAccountId = null;

        /**
         * A direct stake.
         * <p>
         * This accounts stakes its balance to the designated node.
         * @member {number|Long|null|undefined} stakedNodeId
         * @memberof proto.StakingInfo
         * @instance
         */
        StakingInfo.prototype.stakedNodeId = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * StakingInfo stakedId.
         * @member {"stakedAccountId"|"stakedNodeId"|undefined} stakedId
         * @memberof proto.StakingInfo
         * @instance
         */
        Object.defineProperty(StakingInfo.prototype, "stakedId", {
            get: $util.oneOfGetter($oneOfFields = ["stakedAccountId", "stakedNodeId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new StakingInfo instance using the specified properties.
         * @function create
         * @memberof proto.StakingInfo
         * @static
         * @param {proto.IStakingInfo=} [properties] Properties to set
         * @returns {proto.StakingInfo} StakingInfo instance
         */
        StakingInfo.create = function create(properties) {
            return new StakingInfo(properties);
        };

        /**
         * Encodes the specified StakingInfo message. Does not implicitly {@link proto.StakingInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.StakingInfo
         * @static
         * @param {proto.IStakingInfo} message StakingInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StakingInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.declineReward != null && Object.hasOwnProperty.call(message, "declineReward"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.declineReward);
            if (message.stakePeriodStart != null && Object.hasOwnProperty.call(message, "stakePeriodStart"))
                $root.proto.Timestamp.encode(message.stakePeriodStart, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.pendingReward != null && Object.hasOwnProperty.call(message, "pendingReward"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.pendingReward);
            if (message.stakedToMe != null && Object.hasOwnProperty.call(message, "stakedToMe"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.stakedToMe);
            if (message.stakedAccountId != null && Object.hasOwnProperty.call(message, "stakedAccountId"))
                $root.proto.AccountID.encode(message.stakedAccountId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.stakedNodeId != null && Object.hasOwnProperty.call(message, "stakedNodeId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.stakedNodeId);
            return writer;
        };

        /**
         * Encodes the specified StakingInfo message, length delimited. Does not implicitly {@link proto.StakingInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.StakingInfo
         * @static
         * @param {proto.IStakingInfo} message StakingInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StakingInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StakingInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.StakingInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.StakingInfo} StakingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StakingInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.StakingInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.declineReward = reader.bool();
                        break;
                    }
                case 2: {
                        message.stakePeriodStart = $root.proto.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.pendingReward = reader.int64();
                        break;
                    }
                case 4: {
                        message.stakedToMe = reader.int64();
                        break;
                    }
                case 5: {
                        message.stakedAccountId = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.stakedNodeId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StakingInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.StakingInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.StakingInfo} StakingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StakingInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StakingInfo message.
         * @function verify
         * @memberof proto.StakingInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StakingInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.declineReward != null && message.hasOwnProperty("declineReward"))
                if (typeof message.declineReward !== "boolean")
                    return "declineReward: boolean expected";
            if (message.stakePeriodStart != null && message.hasOwnProperty("stakePeriodStart")) {
                let error = $root.proto.Timestamp.verify(message.stakePeriodStart);
                if (error)
                    return "stakePeriodStart." + error;
            }
            if (message.pendingReward != null && message.hasOwnProperty("pendingReward"))
                if (!$util.isInteger(message.pendingReward) && !(message.pendingReward && $util.isInteger(message.pendingReward.low) && $util.isInteger(message.pendingReward.high)))
                    return "pendingReward: integer|Long expected";
            if (message.stakedToMe != null && message.hasOwnProperty("stakedToMe"))
                if (!$util.isInteger(message.stakedToMe) && !(message.stakedToMe && $util.isInteger(message.stakedToMe.low) && $util.isInteger(message.stakedToMe.high)))
                    return "stakedToMe: integer|Long expected";
            if (message.stakedAccountId != null && message.hasOwnProperty("stakedAccountId")) {
                properties.stakedId = 1;
                {
                    let error = $root.proto.AccountID.verify(message.stakedAccountId);
                    if (error)
                        return "stakedAccountId." + error;
                }
            }
            if (message.stakedNodeId != null && message.hasOwnProperty("stakedNodeId")) {
                if (properties.stakedId === 1)
                    return "stakedId: multiple values";
                properties.stakedId = 1;
                if (!$util.isInteger(message.stakedNodeId) && !(message.stakedNodeId && $util.isInteger(message.stakedNodeId.low) && $util.isInteger(message.stakedNodeId.high)))
                    return "stakedNodeId: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a StakingInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.StakingInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.StakingInfo} StakingInfo
         */
        StakingInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.StakingInfo)
                return object;
            let message = new $root.proto.StakingInfo();
            if (object.declineReward != null)
                message.declineReward = Boolean(object.declineReward);
            if (object.stakePeriodStart != null) {
                if (typeof object.stakePeriodStart !== "object")
                    throw TypeError(".proto.StakingInfo.stakePeriodStart: object expected");
                message.stakePeriodStart = $root.proto.Timestamp.fromObject(object.stakePeriodStart);
            }
            if (object.pendingReward != null)
                if ($util.Long)
                    (message.pendingReward = $util.Long.fromValue(object.pendingReward)).unsigned = false;
                else if (typeof object.pendingReward === "string")
                    message.pendingReward = parseInt(object.pendingReward, 10);
                else if (typeof object.pendingReward === "number")
                    message.pendingReward = object.pendingReward;
                else if (typeof object.pendingReward === "object")
                    message.pendingReward = new $util.LongBits(object.pendingReward.low >>> 0, object.pendingReward.high >>> 0).toNumber();
            if (object.stakedToMe != null)
                if ($util.Long)
                    (message.stakedToMe = $util.Long.fromValue(object.stakedToMe)).unsigned = false;
                else if (typeof object.stakedToMe === "string")
                    message.stakedToMe = parseInt(object.stakedToMe, 10);
                else if (typeof object.stakedToMe === "number")
                    message.stakedToMe = object.stakedToMe;
                else if (typeof object.stakedToMe === "object")
                    message.stakedToMe = new $util.LongBits(object.stakedToMe.low >>> 0, object.stakedToMe.high >>> 0).toNumber();
            if (object.stakedAccountId != null) {
                if (typeof object.stakedAccountId !== "object")
                    throw TypeError(".proto.StakingInfo.stakedAccountId: object expected");
                message.stakedAccountId = $root.proto.AccountID.fromObject(object.stakedAccountId);
            }
            if (object.stakedNodeId != null)
                if ($util.Long)
                    (message.stakedNodeId = $util.Long.fromValue(object.stakedNodeId)).unsigned = false;
                else if (typeof object.stakedNodeId === "string")
                    message.stakedNodeId = parseInt(object.stakedNodeId, 10);
                else if (typeof object.stakedNodeId === "number")
                    message.stakedNodeId = object.stakedNodeId;
                else if (typeof object.stakedNodeId === "object")
                    message.stakedNodeId = new $util.LongBits(object.stakedNodeId.low >>> 0, object.stakedNodeId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a StakingInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.StakingInfo
         * @static
         * @param {proto.StakingInfo} message StakingInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StakingInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.declineReward = false;
                object.stakePeriodStart = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pendingReward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pendingReward = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.stakedToMe = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stakedToMe = options.longs === String ? "0" : 0;
            }
            if (message.declineReward != null && message.hasOwnProperty("declineReward"))
                object.declineReward = message.declineReward;
            if (message.stakePeriodStart != null && message.hasOwnProperty("stakePeriodStart"))
                object.stakePeriodStart = $root.proto.Timestamp.toObject(message.stakePeriodStart, options);
            if (message.pendingReward != null && message.hasOwnProperty("pendingReward"))
                if (typeof message.pendingReward === "number")
                    object.pendingReward = options.longs === String ? String(message.pendingReward) : message.pendingReward;
                else
                    object.pendingReward = options.longs === String ? $util.Long.prototype.toString.call(message.pendingReward) : options.longs === Number ? new $util.LongBits(message.pendingReward.low >>> 0, message.pendingReward.high >>> 0).toNumber() : message.pendingReward;
            if (message.stakedToMe != null && message.hasOwnProperty("stakedToMe"))
                if (typeof message.stakedToMe === "number")
                    object.stakedToMe = options.longs === String ? String(message.stakedToMe) : message.stakedToMe;
                else
                    object.stakedToMe = options.longs === String ? $util.Long.prototype.toString.call(message.stakedToMe) : options.longs === Number ? new $util.LongBits(message.stakedToMe.low >>> 0, message.stakedToMe.high >>> 0).toNumber() : message.stakedToMe;
            if (message.stakedAccountId != null && message.hasOwnProperty("stakedAccountId")) {
                object.stakedAccountId = $root.proto.AccountID.toObject(message.stakedAccountId, options);
                if (options.oneofs)
                    object.stakedId = "stakedAccountId";
            }
            if (message.stakedNodeId != null && message.hasOwnProperty("stakedNodeId")) {
                if (typeof message.stakedNodeId === "number")
                    object.stakedNodeId = options.longs === String ? String(message.stakedNodeId) : message.stakedNodeId;
                else
                    object.stakedNodeId = options.longs === String ? $util.Long.prototype.toString.call(message.stakedNodeId) : options.longs === Number ? new $util.LongBits(message.stakedNodeId.low >>> 0, message.stakedNodeId.high >>> 0).toNumber() : message.stakedNodeId;
                if (options.oneofs)
                    object.stakedId = "stakedNodeId";
            }
            return object;
        };

        /**
         * Converts this StakingInfo to JSON.
         * @function toJSON
         * @memberof proto.StakingInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StakingInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StakingInfo
         * @function getTypeUrl
         * @memberof proto.StakingInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StakingInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.StakingInfo";
        };

        return StakingInfo;
    })();

    proto.Timestamp = (function() {

        /**
         * Properties of a Timestamp.
         * @memberof proto
         * @interface ITimestamp
         * @property {number|Long|null} [seconds] The number of complete seconds since the start of the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the UNIX epoch with 0
         * at `1970-01-01T00:00:00.000Z`.<br/>
         * This value MUST be greater than 0.<br/>
         * This value SHOULD be strictly greater than `946684800`.
         * @property {number|null} [nanos] The number of nanoseconds after the start of the second referenced
         * in `seconds`.
         * <p>
         * This value MUST be greater than or equal to 0.<br/>
         * This value MUST be strictly less than 1,000,000,000.
         */

        /**
         * Constructs a new Timestamp.
         * @memberof proto
         * @classdesc An exact date and time.<br/>
         * This is the same data structure as the Google protobuf Timestamp.proto.
         * 
         * #### Additional Notes
         * Useful information is present in comments on the
         * [Google version](https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto).
         * @implements ITimestamp
         * @constructor
         * @param {proto.ITimestamp=} [properties] Properties to set
         */
        function Timestamp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * The number of complete seconds since the start of the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the UNIX epoch with 0
         * at `1970-01-01T00:00:00.000Z`.<br/>
         * This value MUST be greater than 0.<br/>
         * This value SHOULD be strictly greater than `946684800`.
         * @member {number|Long} seconds
         * @memberof proto.Timestamp
         * @instance
         */
        Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * The number of nanoseconds after the start of the second referenced
         * in `seconds`.
         * <p>
         * This value MUST be greater than or equal to 0.<br/>
         * This value MUST be strictly less than 1,000,000,000.
         * @member {number} nanos
         * @memberof proto.Timestamp
         * @instance
         */
        Timestamp.prototype.nanos = 0;

        /**
         * Creates a new Timestamp instance using the specified properties.
         * @function create
         * @memberof proto.Timestamp
         * @static
         * @param {proto.ITimestamp=} [properties] Properties to set
         * @returns {proto.Timestamp} Timestamp instance
         */
        Timestamp.create = function create(properties) {
            return new Timestamp(properties);
        };

        /**
         * Encodes the specified Timestamp message. Does not implicitly {@link proto.Timestamp.verify|verify} messages.
         * @function encode
         * @memberof proto.Timestamp
         * @static
         * @param {proto.ITimestamp} message Timestamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timestamp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
            if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
            return writer;
        };

        /**
         * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link proto.Timestamp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Timestamp
         * @static
         * @param {proto.ITimestamp} message Timestamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Timestamp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Timestamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Timestamp} Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timestamp.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Timestamp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.seconds = reader.int64();
                        break;
                    }
                case 2: {
                        message.nanos = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Timestamp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Timestamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Timestamp} Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timestamp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Timestamp message.
         * @function verify
         * @memberof proto.Timestamp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Timestamp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                    return "seconds: integer|Long expected";
            if (message.nanos != null && message.hasOwnProperty("nanos"))
                if (!$util.isInteger(message.nanos))
                    return "nanos: integer expected";
            return null;
        };

        /**
         * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Timestamp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Timestamp} Timestamp
         */
        Timestamp.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Timestamp)
                return object;
            let message = new $root.proto.Timestamp();
            if (object.seconds != null)
                if ($util.Long)
                    (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                else if (typeof object.seconds === "string")
                    message.seconds = parseInt(object.seconds, 10);
                else if (typeof object.seconds === "number")
                    message.seconds = object.seconds;
                else if (typeof object.seconds === "object")
                    message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
            if (object.nanos != null)
                message.nanos = object.nanos | 0;
            return message;
        };

        /**
         * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Timestamp
         * @static
         * @param {proto.Timestamp} message Timestamp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Timestamp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seconds = options.longs === String ? "0" : 0;
                object.nanos = 0;
            }
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                if (typeof message.seconds === "number")
                    object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                else
                    object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
            if (message.nanos != null && message.hasOwnProperty("nanos"))
                object.nanos = message.nanos;
            return object;
        };

        /**
         * Converts this Timestamp to JSON.
         * @function toJSON
         * @memberof proto.Timestamp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Timestamp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Timestamp
         * @function getTypeUrl
         * @memberof proto.Timestamp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Timestamp";
        };

        return Timestamp;
    })();

    /**
     * The type of query response.<br/>
     * 
     * This SHALL be answer-only as a default.<br/>
     * This value SHALL support an "estimated cost" type.<br/>
     * This value SHOULD support a "state proof" type, when available.
     * @name proto.ResponseType
     * @enum {number}
     * @property {number} ANSWER_ONLY=0 A response with the query answer.
     * @property {number} ANSWER_STATE_PROOF=1 A response with both the query answer and a state proof.
     * @property {number} COST_ANSWER=2 A response with the estimated cost to answer the query.
     * @property {number} COST_ANSWER_STATE_PROOF=3 A response with the estimated cost to answer and a state proof.
     */
    proto.ResponseType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ANSWER_ONLY"] = 0;
        values[valuesById[1] = "ANSWER_STATE_PROOF"] = 1;
        values[valuesById[2] = "COST_ANSWER"] = 2;
        values[valuesById[3] = "COST_ANSWER_STATE_PROOF"] = 3;
        return values;
    })();

    proto.ResponseHeader = (function() {

        /**
         * Properties of a ResponseHeader.
         * @memberof proto
         * @interface IResponseHeader
         * @property {proto.ResponseCodeEnum|null} [nodeTransactionPrecheckCode] The result code for this query.
         * <p>
         * This value SHALL indicate either success or the reason for failure.
         * @property {proto.ResponseType|null} [responseType] The response type requested for this query.
         * <p>
         * This SHALL be the response type requested in the query header.
         * @property {number|Long|null} [cost] Requested cost estimate.<br/>
         * This is the fee that _would be_ charged if the query was executed.
         * <p>
         * This value SHALL be set if the response type requested requires cost
         * information, and SHALL NOT be set otherwise.<br/>
         * This value SHALL include the query fee, but SHALL NOT include the
         * transfer fee required to execute the fee payment transaction.
         * @property {Uint8Array|null} [stateProof] A state proof for the information requested.
         * 
         * This field SHALL NOT be set if the response type does not require
         * a state proof.<br/>
         * This field SHALL NOT be set if a state proof is not available for
         * the query type.<br/>
         * This field SHALL be set if the response type requested a state proof
         * and a state proof is available.
         */

        /**
         * Constructs a new ResponseHeader.
         * @memberof proto
         * @classdesc A standard header returned with every query response.
         * 
         * The fields for `cost` or `stateProof` MAY be unset if the requested
         * `ResponseType` does not request those values.<br/>
         * The `responseType` SHALL match the request response type.<br/>
         * The `nodeTransactionPrecheckCode` field SHALL contain the result code
         * for the query.
         * @implements IResponseHeader
         * @constructor
         * @param {proto.IResponseHeader=} [properties] Properties to set
         */
        function ResponseHeader(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * The result code for this query.
         * <p>
         * This value SHALL indicate either success or the reason for failure.
         * @member {proto.ResponseCodeEnum} nodeTransactionPrecheckCode
         * @memberof proto.ResponseHeader
         * @instance
         */
        ResponseHeader.prototype.nodeTransactionPrecheckCode = 0;

        /**
         * The response type requested for this query.
         * <p>
         * This SHALL be the response type requested in the query header.
         * @member {proto.ResponseType} responseType
         * @memberof proto.ResponseHeader
         * @instance
         */
        ResponseHeader.prototype.responseType = 0;

        /**
         * Requested cost estimate.<br/>
         * This is the fee that _would be_ charged if the query was executed.
         * <p>
         * This value SHALL be set if the response type requested requires cost
         * information, and SHALL NOT be set otherwise.<br/>
         * This value SHALL include the query fee, but SHALL NOT include the
         * transfer fee required to execute the fee payment transaction.
         * @member {number|Long} cost
         * @memberof proto.ResponseHeader
         * @instance
         */
        ResponseHeader.prototype.cost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * A state proof for the information requested.
         * 
         * This field SHALL NOT be set if the response type does not require
         * a state proof.<br/>
         * This field SHALL NOT be set if a state proof is not available for
         * the query type.<br/>
         * This field SHALL be set if the response type requested a state proof
         * and a state proof is available.
         * @member {Uint8Array} stateProof
         * @memberof proto.ResponseHeader
         * @instance
         */
        ResponseHeader.prototype.stateProof = $util.newBuffer([]);

        /**
         * Creates a new ResponseHeader instance using the specified properties.
         * @function create
         * @memberof proto.ResponseHeader
         * @static
         * @param {proto.IResponseHeader=} [properties] Properties to set
         * @returns {proto.ResponseHeader} ResponseHeader instance
         */
        ResponseHeader.create = function create(properties) {
            return new ResponseHeader(properties);
        };

        /**
         * Encodes the specified ResponseHeader message. Does not implicitly {@link proto.ResponseHeader.verify|verify} messages.
         * @function encode
         * @memberof proto.ResponseHeader
         * @static
         * @param {proto.IResponseHeader} message ResponseHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodeTransactionPrecheckCode != null && Object.hasOwnProperty.call(message, "nodeTransactionPrecheckCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nodeTransactionPrecheckCode);
            if (message.responseType != null && Object.hasOwnProperty.call(message, "responseType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.responseType);
            if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.cost);
            if (message.stateProof != null && Object.hasOwnProperty.call(message, "stateProof"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.stateProof);
            return writer;
        };

        /**
         * Encodes the specified ResponseHeader message, length delimited. Does not implicitly {@link proto.ResponseHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ResponseHeader
         * @static
         * @param {proto.IResponseHeader} message ResponseHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseHeader message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResponseHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ResponseHeader} ResponseHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseHeader.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ResponseHeader();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nodeTransactionPrecheckCode = reader.int32();
                        break;
                    }
                case 2: {
                        message.responseType = reader.int32();
                        break;
                    }
                case 3: {
                        message.cost = reader.uint64();
                        break;
                    }
                case 4: {
                        message.stateProof = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ResponseHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ResponseHeader} ResponseHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseHeader message.
         * @function verify
         * @memberof proto.ResponseHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nodeTransactionPrecheckCode != null && message.hasOwnProperty("nodeTransactionPrecheckCode"))
                switch (message.nodeTransactionPrecheckCode) {
                default:
                    return "nodeTransactionPrecheckCode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 110:
                case 111:
                case 112:
                case 113:
                case 150:
                case 155:
                case 156:
                case 157:
                case 158:
                case 159:
                case 160:
                case 162:
                case 163:
                case 164:
                case 165:
                case 166:
                case 167:
                case 168:
                case 169:
                case 170:
                case 171:
                case 172:
                case 173:
                case 174:
                case 175:
                case 176:
                case 177:
                case 178:
                case 179:
                case 180:
                case 181:
                case 182:
                case 183:
                case 184:
                case 185:
                case 186:
                case 187:
                case 188:
                case 189:
                case 190:
                case 191:
                case 192:
                case 193:
                case 194:
                case 195:
                case 196:
                case 197:
                case 198:
                case 199:
                case 200:
                case 201:
                case 202:
                case 203:
                case 204:
                case 205:
                case 206:
                case 207:
                case 208:
                case 209:
                case 210:
                case 211:
                case 212:
                case 213:
                case 214:
                case 215:
                case 216:
                case 217:
                case 218:
                case 219:
                case 220:
                case 221:
                case 222:
                case 223:
                case 224:
                case 225:
                case 226:
                case 227:
                case 228:
                case 229:
                case 230:
                case 231:
                case 232:
                case 233:
                case 234:
                case 235:
                case 236:
                case 237:
                case 238:
                case 239:
                case 240:
                case 241:
                case 242:
                case 243:
                case 244:
                case 245:
                case 246:
                case 247:
                case 248:
                case 249:
                case 250:
                case 251:
                case 252:
                case 253:
                case 254:
                case 255:
                case 256:
                case 257:
                case 258:
                case 259:
                case 260:
                case 261:
                case 262:
                case 263:
                case 264:
                case 265:
                case 266:
                case 267:
                case 268:
                case 269:
                case 270:
                case 271:
                case 272:
                case 273:
                case 274:
                case 275:
                case 276:
                case 277:
                case 278:
                case 279:
                case 280:
                case 281:
                case 282:
                case 283:
                case 284:
                case 285:
                case 286:
                case 287:
                case 288:
                case 289:
                case 290:
                case 291:
                case 292:
                case 293:
                case 294:
                case 295:
                case 296:
                case 297:
                case 298:
                case 299:
                case 300:
                case 301:
                case 302:
                case 303:
                case 304:
                case 305:
                case 306:
                case 307:
                case 308:
                case 309:
                case 310:
                case 311:
                case 312:
                case 313:
                case 314:
                case 315:
                case 316:
                case 317:
                case 318:
                case 319:
                case 320:
                case 321:
                case 322:
                case 323:
                case 324:
                case 325:
                case 326:
                case 327:
                case 328:
                case 329:
                case 330:
                case 331:
                case 332:
                case 333:
                case 334:
                case 335:
                case 336:
                case 337:
                case 338:
                case 339:
                case 340:
                case 341:
                case 342:
                case 343:
                case 344:
                case 345:
                case 346:
                case 347:
                case 348:
                case 349:
                case 350:
                case 351:
                case 352:
                case 353:
                case 354:
                case 355:
                case 356:
                case 357:
                case 358:
                case 359:
                case 360:
                case 361:
                case 362:
                case 363:
                case 364:
                case 365:
                case 366:
                case 367:
                case 368:
                case 369:
                case 370:
                case 371:
                case 372:
                case 373:
                case 374:
                case 375:
                case 376:
                case 377:
                case 378:
                case 379:
                case 380:
                case 381:
                case 382:
                case 383:
                case 384:
                case 385:
                case 386:
                case 387:
                case 388:
                case 389:
                case 390:
                case 391:
                case 392:
                case 393:
                case 394:
                case 395:
                case 396:
                case 397:
                case 398:
                case 399:
                case 400:
                case 401:
                case 499:
                case 500:
                case 501:
                case 502:
                case 503:
                case 504:
                case 505:
                case 506:
                case 507:
                case 508:
                case 509:
                case 510:
                case 511:
                case 512:
                case 513:
                case 514:
                case 515:
                case 516:
                case 517:
                case 518:
                case 519:
                case 520:
                case 521:
                case 522:
                case 523:
                case 524:
                case 525:
                case 526:
                case 527:
                case 528:
                    break;
                }
            if (message.responseType != null && message.hasOwnProperty("responseType"))
                switch (message.responseType) {
                default:
                    return "responseType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.cost != null && message.hasOwnProperty("cost"))
                if (!$util.isInteger(message.cost) && !(message.cost && $util.isInteger(message.cost.low) && $util.isInteger(message.cost.high)))
                    return "cost: integer|Long expected";
            if (message.stateProof != null && message.hasOwnProperty("stateProof"))
                if (!(message.stateProof && typeof message.stateProof.length === "number" || $util.isString(message.stateProof)))
                    return "stateProof: buffer expected";
            return null;
        };

        /**
         * Creates a ResponseHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ResponseHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ResponseHeader} ResponseHeader
         */
        ResponseHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ResponseHeader)
                return object;
            let message = new $root.proto.ResponseHeader();
            switch (object.nodeTransactionPrecheckCode) {
            default:
                if (typeof object.nodeTransactionPrecheckCode === "number") {
                    message.nodeTransactionPrecheckCode = object.nodeTransactionPrecheckCode;
                    break;
                }
                break;
            case "OK":
            case 0:
                message.nodeTransactionPrecheckCode = 0;
                break;
            case "INVALID_TRANSACTION":
            case 1:
                message.nodeTransactionPrecheckCode = 1;
                break;
            case "PAYER_ACCOUNT_NOT_FOUND":
            case 2:
                message.nodeTransactionPrecheckCode = 2;
                break;
            case "INVALID_NODE_ACCOUNT":
            case 3:
                message.nodeTransactionPrecheckCode = 3;
                break;
            case "TRANSACTION_EXPIRED":
            case 4:
                message.nodeTransactionPrecheckCode = 4;
                break;
            case "INVALID_TRANSACTION_START":
            case 5:
                message.nodeTransactionPrecheckCode = 5;
                break;
            case "INVALID_TRANSACTION_DURATION":
            case 6:
                message.nodeTransactionPrecheckCode = 6;
                break;
            case "INVALID_SIGNATURE":
            case 7:
                message.nodeTransactionPrecheckCode = 7;
                break;
            case "MEMO_TOO_LONG":
            case 8:
                message.nodeTransactionPrecheckCode = 8;
                break;
            case "INSUFFICIENT_TX_FEE":
            case 9:
                message.nodeTransactionPrecheckCode = 9;
                break;
            case "INSUFFICIENT_PAYER_BALANCE":
            case 10:
                message.nodeTransactionPrecheckCode = 10;
                break;
            case "DUPLICATE_TRANSACTION":
            case 11:
                message.nodeTransactionPrecheckCode = 11;
                break;
            case "BUSY":
            case 12:
                message.nodeTransactionPrecheckCode = 12;
                break;
            case "NOT_SUPPORTED":
            case 13:
                message.nodeTransactionPrecheckCode = 13;
                break;
            case "INVALID_FILE_ID":
            case 14:
                message.nodeTransactionPrecheckCode = 14;
                break;
            case "INVALID_ACCOUNT_ID":
            case 15:
                message.nodeTransactionPrecheckCode = 15;
                break;
            case "INVALID_CONTRACT_ID":
            case 16:
                message.nodeTransactionPrecheckCode = 16;
                break;
            case "INVALID_TRANSACTION_ID":
            case 17:
                message.nodeTransactionPrecheckCode = 17;
                break;
            case "RECEIPT_NOT_FOUND":
            case 18:
                message.nodeTransactionPrecheckCode = 18;
                break;
            case "RECORD_NOT_FOUND":
            case 19:
                message.nodeTransactionPrecheckCode = 19;
                break;
            case "INVALID_SOLIDITY_ID":
            case 20:
                message.nodeTransactionPrecheckCode = 20;
                break;
            case "UNKNOWN":
            case 21:
                message.nodeTransactionPrecheckCode = 21;
                break;
            case "SUCCESS":
            case 22:
                message.nodeTransactionPrecheckCode = 22;
                break;
            case "FAIL_INVALID":
            case 23:
                message.nodeTransactionPrecheckCode = 23;
                break;
            case "FAIL_FEE":
            case 24:
                message.nodeTransactionPrecheckCode = 24;
                break;
            case "FAIL_BALANCE":
            case 25:
                message.nodeTransactionPrecheckCode = 25;
                break;
            case "KEY_REQUIRED":
            case 26:
                message.nodeTransactionPrecheckCode = 26;
                break;
            case "BAD_ENCODING":
            case 27:
                message.nodeTransactionPrecheckCode = 27;
                break;
            case "INSUFFICIENT_ACCOUNT_BALANCE":
            case 28:
                message.nodeTransactionPrecheckCode = 28;
                break;
            case "INVALID_SOLIDITY_ADDRESS":
            case 29:
                message.nodeTransactionPrecheckCode = 29;
                break;
            case "INSUFFICIENT_GAS":
            case 30:
                message.nodeTransactionPrecheckCode = 30;
                break;
            case "CONTRACT_SIZE_LIMIT_EXCEEDED":
            case 31:
                message.nodeTransactionPrecheckCode = 31;
                break;
            case "LOCAL_CALL_MODIFICATION_EXCEPTION":
            case 32:
                message.nodeTransactionPrecheckCode = 32;
                break;
            case "CONTRACT_REVERT_EXECUTED":
            case 33:
                message.nodeTransactionPrecheckCode = 33;
                break;
            case "CONTRACT_EXECUTION_EXCEPTION":
            case 34:
                message.nodeTransactionPrecheckCode = 34;
                break;
            case "INVALID_RECEIVING_NODE_ACCOUNT":
            case 35:
                message.nodeTransactionPrecheckCode = 35;
                break;
            case "MISSING_QUERY_HEADER":
            case 36:
                message.nodeTransactionPrecheckCode = 36;
                break;
            case "ACCOUNT_UPDATE_FAILED":
            case 37:
                message.nodeTransactionPrecheckCode = 37;
                break;
            case "INVALID_KEY_ENCODING":
            case 38:
                message.nodeTransactionPrecheckCode = 38;
                break;
            case "NULL_SOLIDITY_ADDRESS":
            case 39:
                message.nodeTransactionPrecheckCode = 39;
                break;
            case "CONTRACT_UPDATE_FAILED":
            case 40:
                message.nodeTransactionPrecheckCode = 40;
                break;
            case "INVALID_QUERY_HEADER":
            case 41:
                message.nodeTransactionPrecheckCode = 41;
                break;
            case "INVALID_FEE_SUBMITTED":
            case 42:
                message.nodeTransactionPrecheckCode = 42;
                break;
            case "INVALID_PAYER_SIGNATURE":
            case 43:
                message.nodeTransactionPrecheckCode = 43;
                break;
            case "KEY_NOT_PROVIDED":
            case 44:
                message.nodeTransactionPrecheckCode = 44;
                break;
            case "INVALID_EXPIRATION_TIME":
            case 45:
                message.nodeTransactionPrecheckCode = 45;
                break;
            case "NO_WACL_KEY":
            case 46:
                message.nodeTransactionPrecheckCode = 46;
                break;
            case "FILE_CONTENT_EMPTY":
            case 47:
                message.nodeTransactionPrecheckCode = 47;
                break;
            case "INVALID_ACCOUNT_AMOUNTS":
            case 48:
                message.nodeTransactionPrecheckCode = 48;
                break;
            case "EMPTY_TRANSACTION_BODY":
            case 49:
                message.nodeTransactionPrecheckCode = 49;
                break;
            case "INVALID_TRANSACTION_BODY":
            case 50:
                message.nodeTransactionPrecheckCode = 50;
                break;
            case "INVALID_SIGNATURE_TYPE_MISMATCHING_KEY":
            case 51:
                message.nodeTransactionPrecheckCode = 51;
                break;
            case "INVALID_SIGNATURE_COUNT_MISMATCHING_KEY":
            case 52:
                message.nodeTransactionPrecheckCode = 52;
                break;
            case "EMPTY_LIVE_HASH_BODY":
            case 53:
                message.nodeTransactionPrecheckCode = 53;
                break;
            case "EMPTY_LIVE_HASH":
            case 54:
                message.nodeTransactionPrecheckCode = 54;
                break;
            case "EMPTY_LIVE_HASH_KEYS":
            case 55:
                message.nodeTransactionPrecheckCode = 55;
                break;
            case "INVALID_LIVE_HASH_SIZE":
            case 56:
                message.nodeTransactionPrecheckCode = 56;
                break;
            case "EMPTY_QUERY_BODY":
            case 57:
                message.nodeTransactionPrecheckCode = 57;
                break;
            case "EMPTY_LIVE_HASH_QUERY":
            case 58:
                message.nodeTransactionPrecheckCode = 58;
                break;
            case "LIVE_HASH_NOT_FOUND":
            case 59:
                message.nodeTransactionPrecheckCode = 59;
                break;
            case "ACCOUNT_ID_DOES_NOT_EXIST":
            case 60:
                message.nodeTransactionPrecheckCode = 60;
                break;
            case "LIVE_HASH_ALREADY_EXISTS":
            case 61:
                message.nodeTransactionPrecheckCode = 61;
                break;
            case "INVALID_FILE_WACL":
            case 62:
                message.nodeTransactionPrecheckCode = 62;
                break;
            case "SERIALIZATION_FAILED":
            case 63:
                message.nodeTransactionPrecheckCode = 63;
                break;
            case "TRANSACTION_OVERSIZE":
            case 64:
                message.nodeTransactionPrecheckCode = 64;
                break;
            case "TRANSACTION_TOO_MANY_LAYERS":
            case 65:
                message.nodeTransactionPrecheckCode = 65;
                break;
            case "CONTRACT_DELETED":
            case 66:
                message.nodeTransactionPrecheckCode = 66;
                break;
            case "PLATFORM_NOT_ACTIVE":
            case 67:
                message.nodeTransactionPrecheckCode = 67;
                break;
            case "KEY_PREFIX_MISMATCH":
            case 68:
                message.nodeTransactionPrecheckCode = 68;
                break;
            case "PLATFORM_TRANSACTION_NOT_CREATED":
            case 69:
                message.nodeTransactionPrecheckCode = 69;
                break;
            case "INVALID_RENEWAL_PERIOD":
            case 70:
                message.nodeTransactionPrecheckCode = 70;
                break;
            case "INVALID_PAYER_ACCOUNT_ID":
            case 71:
                message.nodeTransactionPrecheckCode = 71;
                break;
            case "ACCOUNT_DELETED":
            case 72:
                message.nodeTransactionPrecheckCode = 72;
                break;
            case "FILE_DELETED":
            case 73:
                message.nodeTransactionPrecheckCode = 73;
                break;
            case "ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS":
            case 74:
                message.nodeTransactionPrecheckCode = 74;
                break;
            case "SETTING_NEGATIVE_ACCOUNT_BALANCE":
            case 75:
                message.nodeTransactionPrecheckCode = 75;
                break;
            case "OBTAINER_REQUIRED":
            case 76:
                message.nodeTransactionPrecheckCode = 76;
                break;
            case "OBTAINER_SAME_CONTRACT_ID":
            case 77:
                message.nodeTransactionPrecheckCode = 77;
                break;
            case "OBTAINER_DOES_NOT_EXIST":
            case 78:
                message.nodeTransactionPrecheckCode = 78;
                break;
            case "MODIFYING_IMMUTABLE_CONTRACT":
            case 79:
                message.nodeTransactionPrecheckCode = 79;
                break;
            case "FILE_SYSTEM_EXCEPTION":
            case 80:
                message.nodeTransactionPrecheckCode = 80;
                break;
            case "AUTORENEW_DURATION_NOT_IN_RANGE":
            case 81:
                message.nodeTransactionPrecheckCode = 81;
                break;
            case "ERROR_DECODING_BYTESTRING":
            case 82:
                message.nodeTransactionPrecheckCode = 82;
                break;
            case "CONTRACT_FILE_EMPTY":
            case 83:
                message.nodeTransactionPrecheckCode = 83;
                break;
            case "CONTRACT_BYTECODE_EMPTY":
            case 84:
                message.nodeTransactionPrecheckCode = 84;
                break;
            case "INVALID_INITIAL_BALANCE":
            case 85:
                message.nodeTransactionPrecheckCode = 85;
                break;
            case "INVALID_RECEIVE_RECORD_THRESHOLD":
            case 86:
                message.nodeTransactionPrecheckCode = 86;
                break;
            case "INVALID_SEND_RECORD_THRESHOLD":
            case 87:
                message.nodeTransactionPrecheckCode = 87;
                break;
            case "ACCOUNT_IS_NOT_GENESIS_ACCOUNT":
            case 88:
                message.nodeTransactionPrecheckCode = 88;
                break;
            case "PAYER_ACCOUNT_UNAUTHORIZED":
            case 89:
                message.nodeTransactionPrecheckCode = 89;
                break;
            case "INVALID_FREEZE_TRANSACTION_BODY":
            case 90:
                message.nodeTransactionPrecheckCode = 90;
                break;
            case "FREEZE_TRANSACTION_BODY_NOT_FOUND":
            case 91:
                message.nodeTransactionPrecheckCode = 91;
                break;
            case "TRANSFER_LIST_SIZE_LIMIT_EXCEEDED":
            case 92:
                message.nodeTransactionPrecheckCode = 92;
                break;
            case "RESULT_SIZE_LIMIT_EXCEEDED":
            case 93:
                message.nodeTransactionPrecheckCode = 93;
                break;
            case "NOT_SPECIAL_ACCOUNT":
            case 94:
                message.nodeTransactionPrecheckCode = 94;
                break;
            case "CONTRACT_NEGATIVE_GAS":
            case 95:
                message.nodeTransactionPrecheckCode = 95;
                break;
            case "CONTRACT_NEGATIVE_VALUE":
            case 96:
                message.nodeTransactionPrecheckCode = 96;
                break;
            case "INVALID_FEE_FILE":
            case 97:
                message.nodeTransactionPrecheckCode = 97;
                break;
            case "INVALID_EXCHANGE_RATE_FILE":
            case 98:
                message.nodeTransactionPrecheckCode = 98;
                break;
            case "INSUFFICIENT_LOCAL_CALL_GAS":
            case 99:
                message.nodeTransactionPrecheckCode = 99;
                break;
            case "ENTITY_NOT_ALLOWED_TO_DELETE":
            case 100:
                message.nodeTransactionPrecheckCode = 100;
                break;
            case "AUTHORIZATION_FAILED":
            case 101:
                message.nodeTransactionPrecheckCode = 101;
                break;
            case "FILE_UPLOADED_PROTO_INVALID":
            case 102:
                message.nodeTransactionPrecheckCode = 102;
                break;
            case "FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK":
            case 103:
                message.nodeTransactionPrecheckCode = 103;
                break;
            case "FEE_SCHEDULE_FILE_PART_UPLOADED":
            case 104:
                message.nodeTransactionPrecheckCode = 104;
                break;
            case "EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED":
            case 105:
                message.nodeTransactionPrecheckCode = 105;
                break;
            case "MAX_CONTRACT_STORAGE_EXCEEDED":
            case 106:
                message.nodeTransactionPrecheckCode = 106;
                break;
            case "TRANSFER_ACCOUNT_SAME_AS_DELETE_ACCOUNT":
            case 107:
                message.nodeTransactionPrecheckCode = 107;
                break;
            case "TOTAL_LEDGER_BALANCE_INVALID":
            case 108:
                message.nodeTransactionPrecheckCode = 108;
                break;
            case "EXPIRATION_REDUCTION_NOT_ALLOWED":
            case 110:
                message.nodeTransactionPrecheckCode = 110;
                break;
            case "MAX_GAS_LIMIT_EXCEEDED":
            case 111:
                message.nodeTransactionPrecheckCode = 111;
                break;
            case "MAX_FILE_SIZE_EXCEEDED":
            case 112:
                message.nodeTransactionPrecheckCode = 112;
                break;
            case "RECEIVER_SIG_REQUIRED":
            case 113:
                message.nodeTransactionPrecheckCode = 113;
                break;
            case "INVALID_TOPIC_ID":
            case 150:
                message.nodeTransactionPrecheckCode = 150;
                break;
            case "INVALID_ADMIN_KEY":
            case 155:
                message.nodeTransactionPrecheckCode = 155;
                break;
            case "INVALID_SUBMIT_KEY":
            case 156:
                message.nodeTransactionPrecheckCode = 156;
                break;
            case "UNAUTHORIZED":
            case 157:
                message.nodeTransactionPrecheckCode = 157;
                break;
            case "INVALID_TOPIC_MESSAGE":
            case 158:
                message.nodeTransactionPrecheckCode = 158;
                break;
            case "INVALID_AUTORENEW_ACCOUNT":
            case 159:
                message.nodeTransactionPrecheckCode = 159;
                break;
            case "AUTORENEW_ACCOUNT_NOT_ALLOWED":
            case 160:
                message.nodeTransactionPrecheckCode = 160;
                break;
            case "TOPIC_EXPIRED":
            case 162:
                message.nodeTransactionPrecheckCode = 162;
                break;
            case "INVALID_CHUNK_NUMBER":
            case 163:
                message.nodeTransactionPrecheckCode = 163;
                break;
            case "INVALID_CHUNK_TRANSACTION_ID":
            case 164:
                message.nodeTransactionPrecheckCode = 164;
                break;
            case "ACCOUNT_FROZEN_FOR_TOKEN":
            case 165:
                message.nodeTransactionPrecheckCode = 165;
                break;
            case "TOKENS_PER_ACCOUNT_LIMIT_EXCEEDED":
            case 166:
                message.nodeTransactionPrecheckCode = 166;
                break;
            case "INVALID_TOKEN_ID":
            case 167:
                message.nodeTransactionPrecheckCode = 167;
                break;
            case "INVALID_TOKEN_DECIMALS":
            case 168:
                message.nodeTransactionPrecheckCode = 168;
                break;
            case "INVALID_TOKEN_INITIAL_SUPPLY":
            case 169:
                message.nodeTransactionPrecheckCode = 169;
                break;
            case "INVALID_TREASURY_ACCOUNT_FOR_TOKEN":
            case 170:
                message.nodeTransactionPrecheckCode = 170;
                break;
            case "INVALID_TOKEN_SYMBOL":
            case 171:
                message.nodeTransactionPrecheckCode = 171;
                break;
            case "TOKEN_HAS_NO_FREEZE_KEY":
            case 172:
                message.nodeTransactionPrecheckCode = 172;
                break;
            case "TRANSFERS_NOT_ZERO_SUM_FOR_TOKEN":
            case 173:
                message.nodeTransactionPrecheckCode = 173;
                break;
            case "MISSING_TOKEN_SYMBOL":
            case 174:
                message.nodeTransactionPrecheckCode = 174;
                break;
            case "TOKEN_SYMBOL_TOO_LONG":
            case 175:
                message.nodeTransactionPrecheckCode = 175;
                break;
            case "ACCOUNT_KYC_NOT_GRANTED_FOR_TOKEN":
            case 176:
                message.nodeTransactionPrecheckCode = 176;
                break;
            case "TOKEN_HAS_NO_KYC_KEY":
            case 177:
                message.nodeTransactionPrecheckCode = 177;
                break;
            case "INSUFFICIENT_TOKEN_BALANCE":
            case 178:
                message.nodeTransactionPrecheckCode = 178;
                break;
            case "TOKEN_WAS_DELETED":
            case 179:
                message.nodeTransactionPrecheckCode = 179;
                break;
            case "TOKEN_HAS_NO_SUPPLY_KEY":
            case 180:
                message.nodeTransactionPrecheckCode = 180;
                break;
            case "TOKEN_HAS_NO_WIPE_KEY":
            case 181:
                message.nodeTransactionPrecheckCode = 181;
                break;
            case "INVALID_TOKEN_MINT_AMOUNT":
            case 182:
                message.nodeTransactionPrecheckCode = 182;
                break;
            case "INVALID_TOKEN_BURN_AMOUNT":
            case 183:
                message.nodeTransactionPrecheckCode = 183;
                break;
            case "TOKEN_NOT_ASSOCIATED_TO_ACCOUNT":
            case 184:
                message.nodeTransactionPrecheckCode = 184;
                break;
            case "CANNOT_WIPE_TOKEN_TREASURY_ACCOUNT":
            case 185:
                message.nodeTransactionPrecheckCode = 185;
                break;
            case "INVALID_KYC_KEY":
            case 186:
                message.nodeTransactionPrecheckCode = 186;
                break;
            case "INVALID_WIPE_KEY":
            case 187:
                message.nodeTransactionPrecheckCode = 187;
                break;
            case "INVALID_FREEZE_KEY":
            case 188:
                message.nodeTransactionPrecheckCode = 188;
                break;
            case "INVALID_SUPPLY_KEY":
            case 189:
                message.nodeTransactionPrecheckCode = 189;
                break;
            case "MISSING_TOKEN_NAME":
            case 190:
                message.nodeTransactionPrecheckCode = 190;
                break;
            case "TOKEN_NAME_TOO_LONG":
            case 191:
                message.nodeTransactionPrecheckCode = 191;
                break;
            case "INVALID_WIPING_AMOUNT":
            case 192:
                message.nodeTransactionPrecheckCode = 192;
                break;
            case "TOKEN_IS_IMMUTABLE":
            case 193:
                message.nodeTransactionPrecheckCode = 193;
                break;
            case "TOKEN_ALREADY_ASSOCIATED_TO_ACCOUNT":
            case 194:
                message.nodeTransactionPrecheckCode = 194;
                break;
            case "TRANSACTION_REQUIRES_ZERO_TOKEN_BALANCES":
            case 195:
                message.nodeTransactionPrecheckCode = 195;
                break;
            case "ACCOUNT_IS_TREASURY":
            case 196:
                message.nodeTransactionPrecheckCode = 196;
                break;
            case "TOKEN_ID_REPEATED_IN_TOKEN_LIST":
            case 197:
                message.nodeTransactionPrecheckCode = 197;
                break;
            case "TOKEN_TRANSFER_LIST_SIZE_LIMIT_EXCEEDED":
            case 198:
                message.nodeTransactionPrecheckCode = 198;
                break;
            case "EMPTY_TOKEN_TRANSFER_BODY":
            case 199:
                message.nodeTransactionPrecheckCode = 199;
                break;
            case "EMPTY_TOKEN_TRANSFER_ACCOUNT_AMOUNTS":
            case 200:
                message.nodeTransactionPrecheckCode = 200;
                break;
            case "INVALID_SCHEDULE_ID":
            case 201:
                message.nodeTransactionPrecheckCode = 201;
                break;
            case "SCHEDULE_IS_IMMUTABLE":
            case 202:
                message.nodeTransactionPrecheckCode = 202;
                break;
            case "INVALID_SCHEDULE_PAYER_ID":
            case 203:
                message.nodeTransactionPrecheckCode = 203;
                break;
            case "INVALID_SCHEDULE_ACCOUNT_ID":
            case 204:
                message.nodeTransactionPrecheckCode = 204;
                break;
            case "NO_NEW_VALID_SIGNATURES":
            case 205:
                message.nodeTransactionPrecheckCode = 205;
                break;
            case "UNRESOLVABLE_REQUIRED_SIGNERS":
            case 206:
                message.nodeTransactionPrecheckCode = 206;
                break;
            case "SCHEDULED_TRANSACTION_NOT_IN_WHITELIST":
            case 207:
                message.nodeTransactionPrecheckCode = 207;
                break;
            case "SOME_SIGNATURES_WERE_INVALID":
            case 208:
                message.nodeTransactionPrecheckCode = 208;
                break;
            case "TRANSACTION_ID_FIELD_NOT_ALLOWED":
            case 209:
                message.nodeTransactionPrecheckCode = 209;
                break;
            case "IDENTICAL_SCHEDULE_ALREADY_CREATED":
            case 210:
                message.nodeTransactionPrecheckCode = 210;
                break;
            case "INVALID_ZERO_BYTE_IN_STRING":
            case 211:
                message.nodeTransactionPrecheckCode = 211;
                break;
            case "SCHEDULE_ALREADY_DELETED":
            case 212:
                message.nodeTransactionPrecheckCode = 212;
                break;
            case "SCHEDULE_ALREADY_EXECUTED":
            case 213:
                message.nodeTransactionPrecheckCode = 213;
                break;
            case "MESSAGE_SIZE_TOO_LARGE":
            case 214:
                message.nodeTransactionPrecheckCode = 214;
                break;
            case "OPERATION_REPEATED_IN_BUCKET_GROUPS":
            case 215:
                message.nodeTransactionPrecheckCode = 215;
                break;
            case "BUCKET_CAPACITY_OVERFLOW":
            case 216:
                message.nodeTransactionPrecheckCode = 216;
                break;
            case "NODE_CAPACITY_NOT_SUFFICIENT_FOR_OPERATION":
            case 217:
                message.nodeTransactionPrecheckCode = 217;
                break;
            case "BUCKET_HAS_NO_THROTTLE_GROUPS":
            case 218:
                message.nodeTransactionPrecheckCode = 218;
                break;
            case "THROTTLE_GROUP_HAS_ZERO_OPS_PER_SEC":
            case 219:
                message.nodeTransactionPrecheckCode = 219;
                break;
            case "SUCCESS_BUT_MISSING_EXPECTED_OPERATION":
            case 220:
                message.nodeTransactionPrecheckCode = 220;
                break;
            case "UNPARSEABLE_THROTTLE_DEFINITIONS":
            case 221:
                message.nodeTransactionPrecheckCode = 221;
                break;
            case "INVALID_THROTTLE_DEFINITIONS":
            case 222:
                message.nodeTransactionPrecheckCode = 222;
                break;
            case "ACCOUNT_EXPIRED_AND_PENDING_REMOVAL":
            case 223:
                message.nodeTransactionPrecheckCode = 223;
                break;
            case "INVALID_TOKEN_MAX_SUPPLY":
            case 224:
                message.nodeTransactionPrecheckCode = 224;
                break;
            case "INVALID_TOKEN_NFT_SERIAL_NUMBER":
            case 225:
                message.nodeTransactionPrecheckCode = 225;
                break;
            case "INVALID_NFT_ID":
            case 226:
                message.nodeTransactionPrecheckCode = 226;
                break;
            case "METADATA_TOO_LONG":
            case 227:
                message.nodeTransactionPrecheckCode = 227;
                break;
            case "BATCH_SIZE_LIMIT_EXCEEDED":
            case 228:
                message.nodeTransactionPrecheckCode = 228;
                break;
            case "INVALID_QUERY_RANGE":
            case 229:
                message.nodeTransactionPrecheckCode = 229;
                break;
            case "FRACTION_DIVIDES_BY_ZERO":
            case 230:
                message.nodeTransactionPrecheckCode = 230;
                break;
            case "INSUFFICIENT_PAYER_BALANCE_FOR_CUSTOM_FEE":
            case 231:
                message.nodeTransactionPrecheckCode = 231;
                break;
            case "CUSTOM_FEES_LIST_TOO_LONG":
            case 232:
                message.nodeTransactionPrecheckCode = 232;
                break;
            case "INVALID_CUSTOM_FEE_COLLECTOR":
            case 233:
                message.nodeTransactionPrecheckCode = 233;
                break;
            case "INVALID_TOKEN_ID_IN_CUSTOM_FEES":
            case 234:
                message.nodeTransactionPrecheckCode = 234;
                break;
            case "TOKEN_NOT_ASSOCIATED_TO_FEE_COLLECTOR":
            case 235:
                message.nodeTransactionPrecheckCode = 235;
                break;
            case "TOKEN_MAX_SUPPLY_REACHED":
            case 236:
                message.nodeTransactionPrecheckCode = 236;
                break;
            case "SENDER_DOES_NOT_OWN_NFT_SERIAL_NO":
            case 237:
                message.nodeTransactionPrecheckCode = 237;
                break;
            case "CUSTOM_FEE_NOT_FULLY_SPECIFIED":
            case 238:
                message.nodeTransactionPrecheckCode = 238;
                break;
            case "CUSTOM_FEE_MUST_BE_POSITIVE":
            case 239:
                message.nodeTransactionPrecheckCode = 239;
                break;
            case "TOKEN_HAS_NO_FEE_SCHEDULE_KEY":
            case 240:
                message.nodeTransactionPrecheckCode = 240;
                break;
            case "CUSTOM_FEE_OUTSIDE_NUMERIC_RANGE":
            case 241:
                message.nodeTransactionPrecheckCode = 241;
                break;
            case "ROYALTY_FRACTION_CANNOT_EXCEED_ONE":
            case 242:
                message.nodeTransactionPrecheckCode = 242;
                break;
            case "FRACTIONAL_FEE_MAX_AMOUNT_LESS_THAN_MIN_AMOUNT":
            case 243:
                message.nodeTransactionPrecheckCode = 243;
                break;
            case "CUSTOM_SCHEDULE_ALREADY_HAS_NO_FEES":
            case 244:
                message.nodeTransactionPrecheckCode = 244;
                break;
            case "CUSTOM_FEE_DENOMINATION_MUST_BE_FUNGIBLE_COMMON":
            case 245:
                message.nodeTransactionPrecheckCode = 245;
                break;
            case "CUSTOM_FRACTIONAL_FEE_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON":
            case 246:
                message.nodeTransactionPrecheckCode = 246;
                break;
            case "INVALID_CUSTOM_FEE_SCHEDULE_KEY":
            case 247:
                message.nodeTransactionPrecheckCode = 247;
                break;
            case "INVALID_TOKEN_MINT_METADATA":
            case 248:
                message.nodeTransactionPrecheckCode = 248;
                break;
            case "INVALID_TOKEN_BURN_METADATA":
            case 249:
                message.nodeTransactionPrecheckCode = 249;
                break;
            case "CURRENT_TREASURY_STILL_OWNS_NFTS":
            case 250:
                message.nodeTransactionPrecheckCode = 250;
                break;
            case "ACCOUNT_STILL_OWNS_NFTS":
            case 251:
                message.nodeTransactionPrecheckCode = 251;
                break;
            case "TREASURY_MUST_OWN_BURNED_NFT":
            case 252:
                message.nodeTransactionPrecheckCode = 252;
                break;
            case "ACCOUNT_DOES_NOT_OWN_WIPED_NFT":
            case 253:
                message.nodeTransactionPrecheckCode = 253;
                break;
            case "ACCOUNT_AMOUNT_TRANSFERS_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON":
            case 254:
                message.nodeTransactionPrecheckCode = 254;
                break;
            case "MAX_NFTS_IN_PRICE_REGIME_HAVE_BEEN_MINTED":
            case 255:
                message.nodeTransactionPrecheckCode = 255;
                break;
            case "PAYER_ACCOUNT_DELETED":
            case 256:
                message.nodeTransactionPrecheckCode = 256;
                break;
            case "CUSTOM_FEE_CHARGING_EXCEEDED_MAX_RECURSION_DEPTH":
            case 257:
                message.nodeTransactionPrecheckCode = 257;
                break;
            case "CUSTOM_FEE_CHARGING_EXCEEDED_MAX_ACCOUNT_AMOUNTS":
            case 258:
                message.nodeTransactionPrecheckCode = 258;
                break;
            case "INSUFFICIENT_SENDER_ACCOUNT_BALANCE_FOR_CUSTOM_FEE":
            case 259:
                message.nodeTransactionPrecheckCode = 259;
                break;
            case "SERIAL_NUMBER_LIMIT_REACHED":
            case 260:
                message.nodeTransactionPrecheckCode = 260;
                break;
            case "CUSTOM_ROYALTY_FEE_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE":
            case 261:
                message.nodeTransactionPrecheckCode = 261;
                break;
            case "NO_REMAINING_AUTOMATIC_ASSOCIATIONS":
            case 262:
                message.nodeTransactionPrecheckCode = 262;
                break;
            case "EXISTING_AUTOMATIC_ASSOCIATIONS_EXCEED_GIVEN_LIMIT":
            case 263:
                message.nodeTransactionPrecheckCode = 263;
                break;
            case "REQUESTED_NUM_AUTOMATIC_ASSOCIATIONS_EXCEEDS_ASSOCIATION_LIMIT":
            case 264:
                message.nodeTransactionPrecheckCode = 264;
                break;
            case "TOKEN_IS_PAUSED":
            case 265:
                message.nodeTransactionPrecheckCode = 265;
                break;
            case "TOKEN_HAS_NO_PAUSE_KEY":
            case 266:
                message.nodeTransactionPrecheckCode = 266;
                break;
            case "INVALID_PAUSE_KEY":
            case 267:
                message.nodeTransactionPrecheckCode = 267;
                break;
            case "FREEZE_UPDATE_FILE_DOES_NOT_EXIST":
            case 268:
                message.nodeTransactionPrecheckCode = 268;
                break;
            case "FREEZE_UPDATE_FILE_HASH_DOES_NOT_MATCH":
            case 269:
                message.nodeTransactionPrecheckCode = 269;
                break;
            case "NO_UPGRADE_HAS_BEEN_PREPARED":
            case 270:
                message.nodeTransactionPrecheckCode = 270;
                break;
            case "NO_FREEZE_IS_SCHEDULED":
            case 271:
                message.nodeTransactionPrecheckCode = 271;
                break;
            case "UPDATE_FILE_HASH_CHANGED_SINCE_PREPARE_UPGRADE":
            case 272:
                message.nodeTransactionPrecheckCode = 272;
                break;
            case "FREEZE_START_TIME_MUST_BE_FUTURE":
            case 273:
                message.nodeTransactionPrecheckCode = 273;
                break;
            case "PREPARED_UPDATE_FILE_IS_IMMUTABLE":
            case 274:
                message.nodeTransactionPrecheckCode = 274;
                break;
            case "FREEZE_ALREADY_SCHEDULED":
            case 275:
                message.nodeTransactionPrecheckCode = 275;
                break;
            case "FREEZE_UPGRADE_IN_PROGRESS":
            case 276:
                message.nodeTransactionPrecheckCode = 276;
                break;
            case "UPDATE_FILE_ID_DOES_NOT_MATCH_PREPARED":
            case 277:
                message.nodeTransactionPrecheckCode = 277;
                break;
            case "UPDATE_FILE_HASH_DOES_NOT_MATCH_PREPARED":
            case 278:
                message.nodeTransactionPrecheckCode = 278;
                break;
            case "CONSENSUS_GAS_EXHAUSTED":
            case 279:
                message.nodeTransactionPrecheckCode = 279;
                break;
            case "REVERTED_SUCCESS":
            case 280:
                message.nodeTransactionPrecheckCode = 280;
                break;
            case "MAX_STORAGE_IN_PRICE_REGIME_HAS_BEEN_USED":
            case 281:
                message.nodeTransactionPrecheckCode = 281;
                break;
            case "INVALID_ALIAS_KEY":
            case 282:
                message.nodeTransactionPrecheckCode = 282;
                break;
            case "UNEXPECTED_TOKEN_DECIMALS":
            case 283:
                message.nodeTransactionPrecheckCode = 283;
                break;
            case "INVALID_PROXY_ACCOUNT_ID":
            case 284:
                message.nodeTransactionPrecheckCode = 284;
                break;
            case "INVALID_TRANSFER_ACCOUNT_ID":
            case 285:
                message.nodeTransactionPrecheckCode = 285;
                break;
            case "INVALID_FEE_COLLECTOR_ACCOUNT_ID":
            case 286:
                message.nodeTransactionPrecheckCode = 286;
                break;
            case "ALIAS_IS_IMMUTABLE":
            case 287:
                message.nodeTransactionPrecheckCode = 287;
                break;
            case "SPENDER_ACCOUNT_SAME_AS_OWNER":
            case 288:
                message.nodeTransactionPrecheckCode = 288;
                break;
            case "AMOUNT_EXCEEDS_TOKEN_MAX_SUPPLY":
            case 289:
                message.nodeTransactionPrecheckCode = 289;
                break;
            case "NEGATIVE_ALLOWANCE_AMOUNT":
            case 290:
                message.nodeTransactionPrecheckCode = 290;
                break;
            case "CANNOT_APPROVE_FOR_ALL_FUNGIBLE_COMMON":
            case 291:
                message.nodeTransactionPrecheckCode = 291;
                break;
            case "SPENDER_DOES_NOT_HAVE_ALLOWANCE":
            case 292:
                message.nodeTransactionPrecheckCode = 292;
                break;
            case "AMOUNT_EXCEEDS_ALLOWANCE":
            case 293:
                message.nodeTransactionPrecheckCode = 293;
                break;
            case "MAX_ALLOWANCES_EXCEEDED":
            case 294:
                message.nodeTransactionPrecheckCode = 294;
                break;
            case "EMPTY_ALLOWANCES":
            case 295:
                message.nodeTransactionPrecheckCode = 295;
                break;
            case "SPENDER_ACCOUNT_REPEATED_IN_ALLOWANCES":
            case 296:
                message.nodeTransactionPrecheckCode = 296;
                break;
            case "REPEATED_SERIAL_NUMS_IN_NFT_ALLOWANCES":
            case 297:
                message.nodeTransactionPrecheckCode = 297;
                break;
            case "FUNGIBLE_TOKEN_IN_NFT_ALLOWANCES":
            case 298:
                message.nodeTransactionPrecheckCode = 298;
                break;
            case "NFT_IN_FUNGIBLE_TOKEN_ALLOWANCES":
            case 299:
                message.nodeTransactionPrecheckCode = 299;
                break;
            case "INVALID_ALLOWANCE_OWNER_ID":
            case 300:
                message.nodeTransactionPrecheckCode = 300;
                break;
            case "INVALID_ALLOWANCE_SPENDER_ID":
            case 301:
                message.nodeTransactionPrecheckCode = 301;
                break;
            case "REPEATED_ALLOWANCES_TO_DELETE":
            case 302:
                message.nodeTransactionPrecheckCode = 302;
                break;
            case "INVALID_DELEGATING_SPENDER":
            case 303:
                message.nodeTransactionPrecheckCode = 303;
                break;
            case "DELEGATING_SPENDER_CANNOT_GRANT_APPROVE_FOR_ALL":
            case 304:
                message.nodeTransactionPrecheckCode = 304;
                break;
            case "DELEGATING_SPENDER_DOES_NOT_HAVE_APPROVE_FOR_ALL":
            case 305:
                message.nodeTransactionPrecheckCode = 305;
                break;
            case "SCHEDULE_EXPIRATION_TIME_TOO_FAR_IN_FUTURE":
            case 306:
                message.nodeTransactionPrecheckCode = 306;
                break;
            case "SCHEDULE_EXPIRATION_TIME_MUST_BE_HIGHER_THAN_CONSENSUS_TIME":
            case 307:
                message.nodeTransactionPrecheckCode = 307;
                break;
            case "SCHEDULE_FUTURE_THROTTLE_EXCEEDED":
            case 308:
                message.nodeTransactionPrecheckCode = 308;
                break;
            case "SCHEDULE_FUTURE_GAS_LIMIT_EXCEEDED":
            case 309:
                message.nodeTransactionPrecheckCode = 309;
                break;
            case "INVALID_ETHEREUM_TRANSACTION":
            case 310:
                message.nodeTransactionPrecheckCode = 310;
                break;
            case "WRONG_CHAIN_ID":
            case 311:
                message.nodeTransactionPrecheckCode = 311;
                break;
            case "WRONG_NONCE":
            case 312:
                message.nodeTransactionPrecheckCode = 312;
                break;
            case "ACCESS_LIST_UNSUPPORTED":
            case 313:
                message.nodeTransactionPrecheckCode = 313;
                break;
            case "SCHEDULE_PENDING_EXPIRATION":
            case 314:
                message.nodeTransactionPrecheckCode = 314;
                break;
            case "CONTRACT_IS_TOKEN_TREASURY":
            case 315:
                message.nodeTransactionPrecheckCode = 315;
                break;
            case "CONTRACT_HAS_NON_ZERO_TOKEN_BALANCES":
            case 316:
                message.nodeTransactionPrecheckCode = 316;
                break;
            case "CONTRACT_EXPIRED_AND_PENDING_REMOVAL":
            case 317:
                message.nodeTransactionPrecheckCode = 317;
                break;
            case "CONTRACT_HAS_NO_AUTO_RENEW_ACCOUNT":
            case 318:
                message.nodeTransactionPrecheckCode = 318;
                break;
            case "PERMANENT_REMOVAL_REQUIRES_SYSTEM_INITIATION":
            case 319:
                message.nodeTransactionPrecheckCode = 319;
                break;
            case "PROXY_ACCOUNT_ID_FIELD_IS_DEPRECATED":
            case 320:
                message.nodeTransactionPrecheckCode = 320;
                break;
            case "SELF_STAKING_IS_NOT_ALLOWED":
            case 321:
                message.nodeTransactionPrecheckCode = 321;
                break;
            case "INVALID_STAKING_ID":
            case 322:
                message.nodeTransactionPrecheckCode = 322;
                break;
            case "STAKING_NOT_ENABLED":
            case 323:
                message.nodeTransactionPrecheckCode = 323;
                break;
            case "INVALID_PRNG_RANGE":
            case 324:
                message.nodeTransactionPrecheckCode = 324;
                break;
            case "MAX_ENTITIES_IN_PRICE_REGIME_HAVE_BEEN_CREATED":
            case 325:
                message.nodeTransactionPrecheckCode = 325;
                break;
            case "INVALID_FULL_PREFIX_SIGNATURE_FOR_PRECOMPILE":
            case 326:
                message.nodeTransactionPrecheckCode = 326;
                break;
            case "INSUFFICIENT_BALANCES_FOR_STORAGE_RENT":
            case 327:
                message.nodeTransactionPrecheckCode = 327;
                break;
            case "MAX_CHILD_RECORDS_EXCEEDED":
            case 328:
                message.nodeTransactionPrecheckCode = 328;
                break;
            case "INSUFFICIENT_BALANCES_FOR_RENEWAL_FEES":
            case 329:
                message.nodeTransactionPrecheckCode = 329;
                break;
            case "TRANSACTION_HAS_UNKNOWN_FIELDS":
            case 330:
                message.nodeTransactionPrecheckCode = 330;
                break;
            case "ACCOUNT_IS_IMMUTABLE":
            case 331:
                message.nodeTransactionPrecheckCode = 331;
                break;
            case "ALIAS_ALREADY_ASSIGNED":
            case 332:
                message.nodeTransactionPrecheckCode = 332;
                break;
            case "INVALID_METADATA_KEY":
            case 333:
                message.nodeTransactionPrecheckCode = 333;
                break;
            case "TOKEN_HAS_NO_METADATA_KEY":
            case 334:
                message.nodeTransactionPrecheckCode = 334;
                break;
            case "MISSING_TOKEN_METADATA":
            case 335:
                message.nodeTransactionPrecheckCode = 335;
                break;
            case "MISSING_SERIAL_NUMBERS":
            case 336:
                message.nodeTransactionPrecheckCode = 336;
                break;
            case "TOKEN_HAS_NO_ADMIN_KEY":
            case 337:
                message.nodeTransactionPrecheckCode = 337;
                break;
            case "NODE_DELETED":
            case 338:
                message.nodeTransactionPrecheckCode = 338;
                break;
            case "INVALID_NODE_ID":
            case 339:
                message.nodeTransactionPrecheckCode = 339;
                break;
            case "INVALID_GOSSIP_ENDPOINT":
            case 340:
                message.nodeTransactionPrecheckCode = 340;
                break;
            case "INVALID_NODE_ACCOUNT_ID":
            case 341:
                message.nodeTransactionPrecheckCode = 341;
                break;
            case "INVALID_NODE_DESCRIPTION":
            case 342:
                message.nodeTransactionPrecheckCode = 342;
                break;
            case "INVALID_SERVICE_ENDPOINT":
            case 343:
                message.nodeTransactionPrecheckCode = 343;
                break;
            case "INVALID_GOSSIP_CA_CERTIFICATE":
            case 344:
                message.nodeTransactionPrecheckCode = 344;
                break;
            case "INVALID_GRPC_CERTIFICATE":
            case 345:
                message.nodeTransactionPrecheckCode = 345;
                break;
            case "INVALID_MAX_AUTO_ASSOCIATIONS":
            case 346:
                message.nodeTransactionPrecheckCode = 346;
                break;
            case "MAX_NODES_CREATED":
            case 347:
                message.nodeTransactionPrecheckCode = 347;
                break;
            case "IP_FQDN_CANNOT_BE_SET_FOR_SAME_ENDPOINT":
            case 348:
                message.nodeTransactionPrecheckCode = 348;
                break;
            case "GOSSIP_ENDPOINT_CANNOT_HAVE_FQDN":
            case 349:
                message.nodeTransactionPrecheckCode = 349;
                break;
            case "FQDN_SIZE_TOO_LARGE":
            case 350:
                message.nodeTransactionPrecheckCode = 350;
                break;
            case "INVALID_ENDPOINT":
            case 351:
                message.nodeTransactionPrecheckCode = 351;
                break;
            case "GOSSIP_ENDPOINTS_EXCEEDED_LIMIT":
            case 352:
                message.nodeTransactionPrecheckCode = 352;
                break;
            case "TOKEN_REFERENCE_REPEATED":
            case 353:
                message.nodeTransactionPrecheckCode = 353;
                break;
            case "INVALID_OWNER_ID":
            case 354:
                message.nodeTransactionPrecheckCode = 354;
                break;
            case "TOKEN_REFERENCE_LIST_SIZE_LIMIT_EXCEEDED":
            case 355:
                message.nodeTransactionPrecheckCode = 355;
                break;
            case "SERVICE_ENDPOINTS_EXCEEDED_LIMIT":
            case 356:
                message.nodeTransactionPrecheckCode = 356;
                break;
            case "INVALID_IPV4_ADDRESS":
            case 357:
                message.nodeTransactionPrecheckCode = 357;
                break;
            case "EMPTY_TOKEN_REFERENCE_LIST":
            case 358:
                message.nodeTransactionPrecheckCode = 358;
                break;
            case "UPDATE_NODE_ACCOUNT_NOT_ALLOWED":
            case 359:
                message.nodeTransactionPrecheckCode = 359;
                break;
            case "TOKEN_HAS_NO_METADATA_OR_SUPPLY_KEY":
            case 360:
                message.nodeTransactionPrecheckCode = 360;
                break;
            case "EMPTY_PENDING_AIRDROP_ID_LIST":
            case 361:
                message.nodeTransactionPrecheckCode = 361;
                break;
            case "PENDING_AIRDROP_ID_REPEATED":
            case 362:
                message.nodeTransactionPrecheckCode = 362;
                break;
            case "PENDING_AIRDROP_ID_LIST_TOO_LONG":
            case 363:
                message.nodeTransactionPrecheckCode = 363;
                break;
            case "PENDING_NFT_AIRDROP_ALREADY_EXISTS":
            case 364:
                message.nodeTransactionPrecheckCode = 364;
                break;
            case "ACCOUNT_HAS_PENDING_AIRDROPS":
            case 365:
                message.nodeTransactionPrecheckCode = 365;
                break;
            case "THROTTLED_AT_CONSENSUS":
            case 366:
                message.nodeTransactionPrecheckCode = 366;
                break;
            case "INVALID_PENDING_AIRDROP_ID":
            case 367:
                message.nodeTransactionPrecheckCode = 367;
                break;
            case "TOKEN_AIRDROP_WITH_FALLBACK_ROYALTY":
            case 368:
                message.nodeTransactionPrecheckCode = 368;
                break;
            case "INVALID_TOKEN_IN_PENDING_AIRDROP":
            case 369:
                message.nodeTransactionPrecheckCode = 369;
                break;
            case "SCHEDULE_EXPIRY_IS_BUSY":
            case 370:
                message.nodeTransactionPrecheckCode = 370;
                break;
            case "INVALID_GRPC_CERTIFICATE_HASH":
            case 371:
                message.nodeTransactionPrecheckCode = 371;
                break;
            case "MISSING_EXPIRY_TIME":
            case 372:
                message.nodeTransactionPrecheckCode = 372;
                break;
            case "NO_SCHEDULING_ALLOWED_AFTER_SCHEDULED_RECURSION":
            case 373:
                message.nodeTransactionPrecheckCode = 373;
                break;
            case "RECURSIVE_SCHEDULING_LIMIT_REACHED":
            case 374:
                message.nodeTransactionPrecheckCode = 374;
                break;
            case "WAITING_FOR_LEDGER_ID":
            case 375:
                message.nodeTransactionPrecheckCode = 375;
                break;
            case "MAX_ENTRIES_FOR_FEE_EXEMPT_KEY_LIST_EXCEEDED":
            case 376:
                message.nodeTransactionPrecheckCode = 376;
                break;
            case "FEE_EXEMPT_KEY_LIST_CONTAINS_DUPLICATED_KEYS":
            case 377:
                message.nodeTransactionPrecheckCode = 377;
                break;
            case "INVALID_KEY_IN_FEE_EXEMPT_KEY_LIST":
            case 378:
                message.nodeTransactionPrecheckCode = 378;
                break;
            case "INVALID_FEE_SCHEDULE_KEY":
            case 379:
                message.nodeTransactionPrecheckCode = 379;
                break;
            case "FEE_SCHEDULE_KEY_CANNOT_BE_UPDATED":
            case 380:
                message.nodeTransactionPrecheckCode = 380;
                break;
            case "FEE_SCHEDULE_KEY_NOT_SET":
            case 381:
                message.nodeTransactionPrecheckCode = 381;
                break;
            case "MAX_CUSTOM_FEE_LIMIT_EXCEEDED":
            case 382:
                message.nodeTransactionPrecheckCode = 382;
                break;
            case "NO_VALID_MAX_CUSTOM_FEE":
            case 383:
                message.nodeTransactionPrecheckCode = 383;
                break;
            case "INVALID_MAX_CUSTOM_FEES":
            case 384:
                message.nodeTransactionPrecheckCode = 384;
                break;
            case "DUPLICATE_DENOMINATION_IN_MAX_CUSTOM_FEE_LIST":
            case 385:
                message.nodeTransactionPrecheckCode = 385;
                break;
            case "DUPLICATE_ACCOUNT_ID_IN_MAX_CUSTOM_FEE_LIST":
            case 386:
                message.nodeTransactionPrecheckCode = 386;
                break;
            case "MAX_CUSTOM_FEES_IS_NOT_SUPPORTED":
            case 387:
                message.nodeTransactionPrecheckCode = 387;
                break;
            case "BATCH_LIST_EMPTY":
            case 388:
                message.nodeTransactionPrecheckCode = 388;
                break;
            case "BATCH_LIST_CONTAINS_DUPLICATES":
            case 389:
                message.nodeTransactionPrecheckCode = 389;
                break;
            case "BATCH_TRANSACTION_IN_BLACKLIST":
            case 390:
                message.nodeTransactionPrecheckCode = 390;
                break;
            case "INNER_TRANSACTION_FAILED":
            case 391:
                message.nodeTransactionPrecheckCode = 391;
                break;
            case "MISSING_BATCH_KEY":
            case 392:
                message.nodeTransactionPrecheckCode = 392;
                break;
            case "BATCH_KEY_SET_ON_NON_INNER_TRANSACTION":
            case 393:
                message.nodeTransactionPrecheckCode = 393;
                break;
            case "INVALID_BATCH_KEY":
            case 394:
                message.nodeTransactionPrecheckCode = 394;
                break;
            case "SCHEDULE_EXPIRY_NOT_CONFIGURABLE":
            case 395:
                message.nodeTransactionPrecheckCode = 395;
                break;
            case "CREATING_SYSTEM_ENTITIES":
            case 396:
                message.nodeTransactionPrecheckCode = 396;
                break;
            case "THROTTLE_GROUP_LCM_OVERFLOW":
            case 397:
                message.nodeTransactionPrecheckCode = 397;
                break;
            case "AIRDROP_CONTAINS_MULTIPLE_SENDERS_FOR_A_TOKEN":
            case 398:
                message.nodeTransactionPrecheckCode = 398;
                break;
            case "GRPC_WEB_PROXY_NOT_SUPPORTED":
            case 399:
                message.nodeTransactionPrecheckCode = 399;
                break;
            case "NFT_TRANSFERS_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE":
            case 400:
                message.nodeTransactionPrecheckCode = 400;
                break;
            case "INVALID_SERIALIZED_TX_MESSAGE_HASH_ALGORITHM":
            case 401:
                message.nodeTransactionPrecheckCode = 401;
                break;
            case "WRONG_HOOK_ENTITY_TYPE":
            case 499:
                message.nodeTransactionPrecheckCode = 499;
                break;
            case "EVM_HOOK_GAS_THROTTLED":
            case 500:
                message.nodeTransactionPrecheckCode = 500;
                break;
            case "HOOK_ID_IN_USE":
            case 501:
                message.nodeTransactionPrecheckCode = 501;
                break;
            case "BAD_HOOK_REQUEST":
            case 502:
                message.nodeTransactionPrecheckCode = 502;
                break;
            case "REJECTED_BY_ACCOUNT_ALLOWANCE_HOOK":
            case 503:
                message.nodeTransactionPrecheckCode = 503;
                break;
            case "HOOK_NOT_FOUND":
            case 504:
                message.nodeTransactionPrecheckCode = 504;
                break;
            case "EVM_HOOK_STORAGE_UPDATE_BYTES_TOO_LONG":
            case 505:
                message.nodeTransactionPrecheckCode = 505;
                break;
            case "EVM_HOOK_STORAGE_UPDATE_BYTES_MUST_USE_MINIMAL_REPRESENTATION":
            case 506:
                message.nodeTransactionPrecheckCode = 506;
                break;
            case "INVALID_HOOK_ID":
            case 507:
                message.nodeTransactionPrecheckCode = 507;
                break;
            case "EMPTY_EVM_HOOK_STORAGE_UPDATE":
            case 508:
                message.nodeTransactionPrecheckCode = 508;
                break;
            case "HOOK_ID_REPEATED_IN_CREATION_DETAILS":
            case 509:
                message.nodeTransactionPrecheckCode = 509;
                break;
            case "HOOKS_NOT_ENABLED":
            case 510:
                message.nodeTransactionPrecheckCode = 510;
                break;
            case "HOOK_IS_NOT_AN_EVM_HOOK":
            case 511:
                message.nodeTransactionPrecheckCode = 511;
                break;
            case "HOOK_DELETED":
            case 512:
                message.nodeTransactionPrecheckCode = 512;
                break;
            case "TOO_MANY_EVM_HOOK_STORAGE_UPDATES":
            case 513:
                message.nodeTransactionPrecheckCode = 513;
                break;
            case "HOOK_CREATION_BYTES_MUST_USE_MINIMAL_REPRESENTATION":
            case 514:
                message.nodeTransactionPrecheckCode = 514;
                break;
            case "HOOK_CREATION_BYTES_TOO_LONG":
            case 515:
                message.nodeTransactionPrecheckCode = 515;
                break;
            case "INVALID_HOOK_CREATION_SPEC":
            case 516:
                message.nodeTransactionPrecheckCode = 516;
                break;
            case "HOOK_EXTENSION_EMPTY":
            case 517:
                message.nodeTransactionPrecheckCode = 517;
                break;
            case "INVALID_HOOK_ADMIN_KEY":
            case 518:
                message.nodeTransactionPrecheckCode = 518;
                break;
            case "HOOK_DELETION_REQUIRES_ZERO_STORAGE_SLOTS":
            case 519:
                message.nodeTransactionPrecheckCode = 519;
                break;
            case "CANNOT_SET_HOOKS_AND_APPROVAL":
            case 520:
                message.nodeTransactionPrecheckCode = 520;
                break;
            case "TRANSACTION_REQUIRES_ZERO_HOOKS":
            case 521:
                message.nodeTransactionPrecheckCode = 521;
                break;
            case "INVALID_HOOK_CALL":
            case 522:
                message.nodeTransactionPrecheckCode = 522;
                break;
            case "HOOKS_ARE_NOT_SUPPORTED_IN_AIRDROPS":
            case 523:
                message.nodeTransactionPrecheckCode = 523;
                break;
            case "ACCOUNT_IS_LINKED_TO_A_NODE":
            case 524:
                message.nodeTransactionPrecheckCode = 524;
                break;
            case "HOOKS_EXECUTIONS_REQUIRE_TOP_LEVEL_CRYPTO_TRANSFER":
            case 525:
                message.nodeTransactionPrecheckCode = 525;
                break;
            case "NODE_ACCOUNT_HAS_ZERO_BALANCE":
            case 526:
                message.nodeTransactionPrecheckCode = 526;
                break;
            case "TRANSFER_TO_FEE_COLLECTION_ACCOUNT_NOT_ALLOWED":
            case 527:
                message.nodeTransactionPrecheckCode = 527;
                break;
            case "TOO_MANY_HOOK_INVOCATIONS":
            case 528:
                message.nodeTransactionPrecheckCode = 528;
                break;
            }
            switch (object.responseType) {
            default:
                if (typeof object.responseType === "number") {
                    message.responseType = object.responseType;
                    break;
                }
                break;
            case "ANSWER_ONLY":
            case 0:
                message.responseType = 0;
                break;
            case "ANSWER_STATE_PROOF":
            case 1:
                message.responseType = 1;
                break;
            case "COST_ANSWER":
            case 2:
                message.responseType = 2;
                break;
            case "COST_ANSWER_STATE_PROOF":
            case 3:
                message.responseType = 3;
                break;
            }
            if (object.cost != null)
                if ($util.Long)
                    (message.cost = $util.Long.fromValue(object.cost)).unsigned = true;
                else if (typeof object.cost === "string")
                    message.cost = parseInt(object.cost, 10);
                else if (typeof object.cost === "number")
                    message.cost = object.cost;
                else if (typeof object.cost === "object")
                    message.cost = new $util.LongBits(object.cost.low >>> 0, object.cost.high >>> 0).toNumber(true);
            if (object.stateProof != null)
                if (typeof object.stateProof === "string")
                    $util.base64.decode(object.stateProof, message.stateProof = $util.newBuffer($util.base64.length(object.stateProof)), 0);
                else if (object.stateProof.length >= 0)
                    message.stateProof = object.stateProof;
            return message;
        };

        /**
         * Creates a plain object from a ResponseHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ResponseHeader
         * @static
         * @param {proto.ResponseHeader} message ResponseHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nodeTransactionPrecheckCode = options.enums === String ? "OK" : 0;
                object.responseType = options.enums === String ? "ANSWER_ONLY" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.cost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cost = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.stateProof = "";
                else {
                    object.stateProof = [];
                    if (options.bytes !== Array)
                        object.stateProof = $util.newBuffer(object.stateProof);
                }
            }
            if (message.nodeTransactionPrecheckCode != null && message.hasOwnProperty("nodeTransactionPrecheckCode"))
                object.nodeTransactionPrecheckCode = options.enums === String ? $root.proto.ResponseCodeEnum[message.nodeTransactionPrecheckCode] === undefined ? message.nodeTransactionPrecheckCode : $root.proto.ResponseCodeEnum[message.nodeTransactionPrecheckCode] : message.nodeTransactionPrecheckCode;
            if (message.responseType != null && message.hasOwnProperty("responseType"))
                object.responseType = options.enums === String ? $root.proto.ResponseType[message.responseType] === undefined ? message.responseType : $root.proto.ResponseType[message.responseType] : message.responseType;
            if (message.cost != null && message.hasOwnProperty("cost"))
                if (typeof message.cost === "number")
                    object.cost = options.longs === String ? String(message.cost) : message.cost;
                else
                    object.cost = options.longs === String ? $util.Long.prototype.toString.call(message.cost) : options.longs === Number ? new $util.LongBits(message.cost.low >>> 0, message.cost.high >>> 0).toNumber(true) : message.cost;
            if (message.stateProof != null && message.hasOwnProperty("stateProof"))
                object.stateProof = options.bytes === String ? $util.base64.encode(message.stateProof, 0, message.stateProof.length) : options.bytes === Array ? Array.prototype.slice.call(message.stateProof) : message.stateProof;
            return object;
        };

        /**
         * Converts this ResponseHeader to JSON.
         * @function toJSON
         * @memberof proto.ResponseHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResponseHeader
         * @function getTypeUrl
         * @memberof proto.ResponseHeader
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResponseHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ResponseHeader";
        };

        return ResponseHeader;
    })();

    /**
     * An enumeration of possible response codes.
     * @name proto.ResponseCodeEnum
     * @enum {number}
     * @property {number} OK=0 The transaction passed the precheck validations.
     * @property {number} INVALID_TRANSACTION=1 For any error not handled by specific error codes listed below.
     * @property {number} PAYER_ACCOUNT_NOT_FOUND=2 Payer account does not exist.
     * @property {number} INVALID_NODE_ACCOUNT=3 Node Account provided does not match the node account of the node the transaction was submitted
     * to.
     * @property {number} TRANSACTION_EXPIRED=4 Pre-Check error when TransactionValidStart + transactionValidDuration is less than current
     * consensus time.
     * @property {number} INVALID_TRANSACTION_START=5 Transaction start time is greater than current consensus time
     * @property {number} INVALID_TRANSACTION_DURATION=6 The given transactionValidDuration was either non-positive, or greater than the maximum
     * valid duration of 180 secs.
     * @property {number} INVALID_SIGNATURE=7 The transaction signature is not valid
     * @property {number} MEMO_TOO_LONG=8 Transaction memo size exceeded 100 bytes
     * @property {number} INSUFFICIENT_TX_FEE=9 The fee provided in the transaction is insufficient for this type of transaction
     * @property {number} INSUFFICIENT_PAYER_BALANCE=10 The payer account has insufficient cryptocurrency to pay the transaction fee
     * @property {number} DUPLICATE_TRANSACTION=11 This transaction ID is a duplicate of one that was submitted to this node or reached consensus
     * in the last 180 seconds (receipt period)
     * @property {number} BUSY=12 If API is throttled out
     * @property {number} NOT_SUPPORTED=13 The API is not currently supported
     * @property {number} INVALID_FILE_ID=14 The file id is invalid or does not exist
     * @property {number} INVALID_ACCOUNT_ID=15 The account id is invalid or does not exist
     * @property {number} INVALID_CONTRACT_ID=16 The contract id is invalid or does not exist
     * @property {number} INVALID_TRANSACTION_ID=17 Transaction id is not valid
     * @property {number} RECEIPT_NOT_FOUND=18 Receipt for given transaction id does not exist
     * @property {number} RECORD_NOT_FOUND=19 Record for given transaction id does not exist
     * @property {number} INVALID_SOLIDITY_ID=20 The solidity id is invalid or entity with this solidity id does not exist
     * @property {number} UNKNOWN=21 The responding node has submitted the transaction to the network. Its final status is still
     * unknown.
     * @property {number} SUCCESS=22 The transaction succeeded
     * @property {number} FAIL_INVALID=23 There was a system error and the transaction failed because of invalid request parameters.
     * @property {number} FAIL_FEE=24 There was a system error while performing fee calculation, reserved for future.
     * @property {number} FAIL_BALANCE=25 There was a system error while performing balance checks, reserved for future.
     * @property {number} KEY_REQUIRED=26 Key not provided in the transaction body
     * @property {number} BAD_ENCODING=27 Unsupported algorithm/encoding used for keys in the transaction
     * @property {number} INSUFFICIENT_ACCOUNT_BALANCE=28 When the account balance is not sufficient for the transfer
     * @property {number} INVALID_SOLIDITY_ADDRESS=29 During an update transaction when the system is not able to find the Users Solidity address
     * @property {number} INSUFFICIENT_GAS=30 Not enough gas was supplied to execute transaction
     * @property {number} CONTRACT_SIZE_LIMIT_EXCEEDED=31 contract byte code size is over the limit
     * @property {number} LOCAL_CALL_MODIFICATION_EXCEPTION=32 local execution (query) is requested for a function which changes state
     * @property {number} CONTRACT_REVERT_EXECUTED=33 Contract REVERT OPCODE executed
     * @property {number} CONTRACT_EXECUTION_EXCEPTION=34 For any contract execution related error not handled by specific error codes listed above.
     * @property {number} INVALID_RECEIVING_NODE_ACCOUNT=35 In Query validation, account with +ve(amount) value should be Receiving node account, the
     * receiver account should be only one account in the list
     * @property {number} MISSING_QUERY_HEADER=36 Header is missing in Query request
     * @property {number} ACCOUNT_UPDATE_FAILED=37 The update of the account failed
     * @property {number} INVALID_KEY_ENCODING=38 Provided key encoding was not supported by the system
     * @property {number} NULL_SOLIDITY_ADDRESS=39 null solidity address
     * @property {number} CONTRACT_UPDATE_FAILED=40 update of the contract failed
     * @property {number} INVALID_QUERY_HEADER=41 the query header is invalid
     * @property {number} INVALID_FEE_SUBMITTED=42 Invalid fee submitted
     * @property {number} INVALID_PAYER_SIGNATURE=43 Payer signature is invalid
     * @property {number} KEY_NOT_PROVIDED=44 The keys were not provided in the request.
     * @property {number} INVALID_EXPIRATION_TIME=45 Expiration time provided in the transaction was invalid.
     * @property {number} NO_WACL_KEY=46 WriteAccess Control Keys are not provided for the file
     * @property {number} FILE_CONTENT_EMPTY=47 The contents of file are provided as empty.
     * @property {number} INVALID_ACCOUNT_AMOUNTS=48 The crypto transfer credit and debit do not sum equal to 0
     * @property {number} EMPTY_TRANSACTION_BODY=49 Transaction body provided is empty
     * @property {number} INVALID_TRANSACTION_BODY=50 Invalid transaction body provided
     * @property {number} INVALID_SIGNATURE_TYPE_MISMATCHING_KEY=51 the type of key (base ed25519 key, KeyList, or ThresholdKey) does not match the type of
     * signature (base ed25519 signature, SignatureList, or ThresholdKeySignature)
     * @property {number} INVALID_SIGNATURE_COUNT_MISMATCHING_KEY=52 the number of key (KeyList, or ThresholdKey) does not match that of signature (SignatureList,
     * or ThresholdKeySignature). e.g. if a keyList has 3 base keys, then the corresponding
     * signatureList should also have 3 base signatures.
     * @property {number} EMPTY_LIVE_HASH_BODY=53 the livehash body is empty
     * @property {number} EMPTY_LIVE_HASH=54 the livehash data is missing
     * @property {number} EMPTY_LIVE_HASH_KEYS=55 the keys for a livehash are missing
     * @property {number} INVALID_LIVE_HASH_SIZE=56 the livehash data is not the output of a SHA-384 digest
     * @property {number} EMPTY_QUERY_BODY=57 the query body is empty
     * @property {number} EMPTY_LIVE_HASH_QUERY=58 the crypto livehash query is empty
     * @property {number} LIVE_HASH_NOT_FOUND=59 the livehash is not present
     * @property {number} ACCOUNT_ID_DOES_NOT_EXIST=60 the account id passed has not yet been created.
     * @property {number} LIVE_HASH_ALREADY_EXISTS=61 the livehash already exists for a given account
     * @property {number} INVALID_FILE_WACL=62 File WACL keys are invalid
     * @property {number} SERIALIZATION_FAILED=63 Serialization failure
     * @property {number} TRANSACTION_OVERSIZE=64 The size of the Transaction is greater than transactionMaxBytes
     * @property {number} TRANSACTION_TOO_MANY_LAYERS=65 The Transaction has more than 50 levels
     * @property {number} CONTRACT_DELETED=66 Contract is marked as deleted
     * @property {number} PLATFORM_NOT_ACTIVE=67 the platform node is either disconnected or lagging behind.
     * @property {number} KEY_PREFIX_MISMATCH=68 one public key matches more than one prefixes on the signature map
     * @property {number} PLATFORM_TRANSACTION_NOT_CREATED=69 transaction not created by platform due to large backlog
     * @property {number} INVALID_RENEWAL_PERIOD=70 auto renewal period is not a positive number of seconds
     * @property {number} INVALID_PAYER_ACCOUNT_ID=71 the response code when a smart contract id is passed for a crypto API request
     * @property {number} ACCOUNT_DELETED=72 the account has been marked as deleted
     * @property {number} FILE_DELETED=73 the file has been marked as deleted
     * @property {number} ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS=74 same accounts repeated in the transfer account list
     * @property {number} SETTING_NEGATIVE_ACCOUNT_BALANCE=75 attempting to set negative balance value for crypto account
     * @property {number} OBTAINER_REQUIRED=76 when deleting smart contract that has crypto balance either transfer account or transfer smart
     * contract is required
     * @property {number} OBTAINER_SAME_CONTRACT_ID=77 when deleting smart contract that has crypto balance you can not use the same contract id as
     * transferContractId as the one being deleted
     * @property {number} OBTAINER_DOES_NOT_EXIST=78 transferAccountId or transferContractId specified for contract delete does not exist
     * @property {number} MODIFYING_IMMUTABLE_CONTRACT=79 attempting to modify (update or delete a immutable smart contract, i.e. one created without a
     * admin key)
     * @property {number} FILE_SYSTEM_EXCEPTION=80 Unexpected exception thrown by file system functions
     * @property {number} AUTORENEW_DURATION_NOT_IN_RANGE=81 the duration is not a subset of [MINIMUM_AUTORENEW_DURATION,MAXIMUM_AUTORENEW_DURATION]
     * @property {number} ERROR_DECODING_BYTESTRING=82 Decoding the smart contract binary to a byte array failed. Check that the input is a valid hex
     * string.
     * @property {number} CONTRACT_FILE_EMPTY=83 File to create a smart contract was of length zero
     * @property {number} CONTRACT_BYTECODE_EMPTY=84 Bytecode for smart contract is of length zero
     * @property {number} INVALID_INITIAL_BALANCE=85 Attempt to set negative initial balance
     * @property {number} INVALID_RECEIVE_RECORD_THRESHOLD=86 Attempt to set negative receive record threshold
     * @property {number} INVALID_SEND_RECORD_THRESHOLD=87 Attempt to set negative send record threshold
     * @property {number} ACCOUNT_IS_NOT_GENESIS_ACCOUNT=88 Special Account Operations should be performed by only Genesis account, return this code if it
     * is not Genesis Account
     * @property {number} PAYER_ACCOUNT_UNAUTHORIZED=89 The fee payer account doesn't have permission to submit such Transaction
     * @property {number} INVALID_FREEZE_TRANSACTION_BODY=90 FreezeTransactionBody is invalid
     * @property {number} FREEZE_TRANSACTION_BODY_NOT_FOUND=91 FreezeTransactionBody does not exist
     * @property {number} TRANSFER_LIST_SIZE_LIMIT_EXCEEDED=92 Exceeded the number of accounts (both from and to) allowed for crypto transfer list
     * @property {number} RESULT_SIZE_LIMIT_EXCEEDED=93 Smart contract result size greater than specified maxResultSize
     * @property {number} NOT_SPECIAL_ACCOUNT=94 The payer account is not a special account(account 0.0.55)
     * @property {number} CONTRACT_NEGATIVE_GAS=95 Negative gas was offered in smart contract call
     * @property {number} CONTRACT_NEGATIVE_VALUE=96 Negative value / initial balance was specified in a smart contract call / create
     * @property {number} INVALID_FEE_FILE=97 Failed to update fee file
     * @property {number} INVALID_EXCHANGE_RATE_FILE=98 Failed to update exchange rate file
     * @property {number} INSUFFICIENT_LOCAL_CALL_GAS=99 Payment tendered for contract local call cannot cover both the fee and the gas
     * @property {number} ENTITY_NOT_ALLOWED_TO_DELETE=100 Entities with Entity ID below 1000 are not allowed to be deleted
     * @property {number} AUTHORIZATION_FAILED=101 Violating one of these rules: 1) treasury account can update all entities below 0.0.1000, 2)
     * account 0.0.50 can update all entities from 0.0.51 - 0.0.80, 3) Network Function Master Account
     * A/c 0.0.50 - Update all Network Function accounts & perform all the Network Functions listed
     * below, 4) Network Function Accounts: i) A/c 0.0.55 - Update Address Book files (0.0.101/102),
     * ii) A/c 0.0.56 - Update Fee schedule (0.0.111), iii) A/c 0.0.57 - Update Exchange Rate
     * (0.0.112).
     * @property {number} FILE_UPLOADED_PROTO_INVALID=102 Fee Schedule Proto uploaded but not valid (append or update is required)
     * @property {number} FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK=103 Fee Schedule Proto uploaded but not valid (append or update is required)
     * @property {number} FEE_SCHEDULE_FILE_PART_UPLOADED=104 Fee Schedule Proto File Part uploaded
     * @property {number} EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED=105 The change on Exchange Rate exceeds Exchange_Rate_Allowed_Percentage
     * @property {number} MAX_CONTRACT_STORAGE_EXCEEDED=106 Contract permanent storage exceeded the currently allowable limit
     * @property {number} TRANSFER_ACCOUNT_SAME_AS_DELETE_ACCOUNT=107 Transfer Account should not be same as Account to be deleted
     * @property {number} TOTAL_LEDGER_BALANCE_INVALID=108 TOTAL_LEDGER_BALANCE_INVALID value
     * @property {number} EXPIRATION_REDUCTION_NOT_ALLOWED=110 The expiration date/time on a smart contract may not be reduced
     * @property {number} MAX_GAS_LIMIT_EXCEEDED=111 Gas exceeded currently allowable gas limit per transaction
     * @property {number} MAX_FILE_SIZE_EXCEEDED=112 File size exceeded the currently allowable limit
     * @property {number} RECEIVER_SIG_REQUIRED=113 When a valid signature is not provided for operations on account with receiverSigRequired=true
     * @property {number} INVALID_TOPIC_ID=150 The Topic ID specified is not in the system.
     * @property {number} INVALID_ADMIN_KEY=155 A provided admin key was invalid. Verify the bytes for an Ed25519 public key are exactly 32 bytes; and the bytes for a compressed ECDSA(secp256k1) key are exactly 33 bytes, with the first byte either 0x02 or 0x03..
     * @property {number} INVALID_SUBMIT_KEY=156 A provided submit key was invalid.
     * @property {number} UNAUTHORIZED=157 An attempted operation was not authorized (ie - a deleteTopic for a topic with no adminKey).
     * @property {number} INVALID_TOPIC_MESSAGE=158 A ConsensusService message is empty.
     * @property {number} INVALID_AUTORENEW_ACCOUNT=159 The autoRenewAccount specified is not a valid, active account.
     * @property {number} AUTORENEW_ACCOUNT_NOT_ALLOWED=160 An adminKey was not specified on the topic, so there must not be an autoRenewAccount.
     * @property {number} TOPIC_EXPIRED=162 The topic has expired, was not automatically renewed, and is in a 7 day grace period before the
     * topic will be deleted unrecoverably. This error response code will not be returned until
     * autoRenew functionality is supported by HAPI.
     * @property {number} INVALID_CHUNK_NUMBER=163 INVALID_CHUNK_NUMBER value
     * @property {number} INVALID_CHUNK_TRANSACTION_ID=164 INVALID_CHUNK_TRANSACTION_ID value
     * @property {number} ACCOUNT_FROZEN_FOR_TOKEN=165 ACCOUNT_FROZEN_FOR_TOKEN value
     * @property {number} TOKENS_PER_ACCOUNT_LIMIT_EXCEEDED=166 TOKENS_PER_ACCOUNT_LIMIT_EXCEEDED value
     * @property {number} INVALID_TOKEN_ID=167 INVALID_TOKEN_ID value
     * @property {number} INVALID_TOKEN_DECIMALS=168 INVALID_TOKEN_DECIMALS value
     * @property {number} INVALID_TOKEN_INITIAL_SUPPLY=169 INVALID_TOKEN_INITIAL_SUPPLY value
     * @property {number} INVALID_TREASURY_ACCOUNT_FOR_TOKEN=170 INVALID_TREASURY_ACCOUNT_FOR_TOKEN value
     * @property {number} INVALID_TOKEN_SYMBOL=171 INVALID_TOKEN_SYMBOL value
     * @property {number} TOKEN_HAS_NO_FREEZE_KEY=172 TOKEN_HAS_NO_FREEZE_KEY value
     * @property {number} TRANSFERS_NOT_ZERO_SUM_FOR_TOKEN=173 TRANSFERS_NOT_ZERO_SUM_FOR_TOKEN value
     * @property {number} MISSING_TOKEN_SYMBOL=174 MISSING_TOKEN_SYMBOL value
     * @property {number} TOKEN_SYMBOL_TOO_LONG=175 TOKEN_SYMBOL_TOO_LONG value
     * @property {number} ACCOUNT_KYC_NOT_GRANTED_FOR_TOKEN=176 ACCOUNT_KYC_NOT_GRANTED_FOR_TOKEN value
     * @property {number} TOKEN_HAS_NO_KYC_KEY=177 TOKEN_HAS_NO_KYC_KEY value
     * @property {number} INSUFFICIENT_TOKEN_BALANCE=178 INSUFFICIENT_TOKEN_BALANCE value
     * @property {number} TOKEN_WAS_DELETED=179 TOKEN_WAS_DELETED value
     * @property {number} TOKEN_HAS_NO_SUPPLY_KEY=180 TOKEN_HAS_NO_SUPPLY_KEY value
     * @property {number} TOKEN_HAS_NO_WIPE_KEY=181 TOKEN_HAS_NO_WIPE_KEY value
     * @property {number} INVALID_TOKEN_MINT_AMOUNT=182 INVALID_TOKEN_MINT_AMOUNT value
     * @property {number} INVALID_TOKEN_BURN_AMOUNT=183 INVALID_TOKEN_BURN_AMOUNT value
     * @property {number} TOKEN_NOT_ASSOCIATED_TO_ACCOUNT=184 TOKEN_NOT_ASSOCIATED_TO_ACCOUNT value
     * @property {number} CANNOT_WIPE_TOKEN_TREASURY_ACCOUNT=185 CANNOT_WIPE_TOKEN_TREASURY_ACCOUNT value
     * @property {number} INVALID_KYC_KEY=186 INVALID_KYC_KEY value
     * @property {number} INVALID_WIPE_KEY=187 INVALID_WIPE_KEY value
     * @property {number} INVALID_FREEZE_KEY=188 INVALID_FREEZE_KEY value
     * @property {number} INVALID_SUPPLY_KEY=189 INVALID_SUPPLY_KEY value
     * @property {number} MISSING_TOKEN_NAME=190 MISSING_TOKEN_NAME value
     * @property {number} TOKEN_NAME_TOO_LONG=191 TOKEN_NAME_TOO_LONG value
     * @property {number} INVALID_WIPING_AMOUNT=192 INVALID_WIPING_AMOUNT value
     * @property {number} TOKEN_IS_IMMUTABLE=193 TOKEN_IS_IMMUTABLE value
     * @property {number} TOKEN_ALREADY_ASSOCIATED_TO_ACCOUNT=194 TOKEN_ALREADY_ASSOCIATED_TO_ACCOUNT value
     * @property {number} TRANSACTION_REQUIRES_ZERO_TOKEN_BALANCES=195 TRANSACTION_REQUIRES_ZERO_TOKEN_BALANCES value
     * @property {number} ACCOUNT_IS_TREASURY=196 ACCOUNT_IS_TREASURY value
     * @property {number} TOKEN_ID_REPEATED_IN_TOKEN_LIST=197 TOKEN_ID_REPEATED_IN_TOKEN_LIST value
     * @property {number} TOKEN_TRANSFER_LIST_SIZE_LIMIT_EXCEEDED=198 TOKEN_TRANSFER_LIST_SIZE_LIMIT_EXCEEDED value
     * @property {number} EMPTY_TOKEN_TRANSFER_BODY=199 EMPTY_TOKEN_TRANSFER_BODY value
     * @property {number} EMPTY_TOKEN_TRANSFER_ACCOUNT_AMOUNTS=200 EMPTY_TOKEN_TRANSFER_ACCOUNT_AMOUNTS value
     * @property {number} INVALID_SCHEDULE_ID=201 The Scheduled entity does not exist; or has now expired, been deleted, or been executed
     * @property {number} SCHEDULE_IS_IMMUTABLE=202 The Scheduled entity cannot be modified. Admin key not set
     * @property {number} INVALID_SCHEDULE_PAYER_ID=203 The provided Scheduled Payer does not exist
     * @property {number} INVALID_SCHEDULE_ACCOUNT_ID=204 The Schedule Create Transaction TransactionID account does not exist
     * @property {number} NO_NEW_VALID_SIGNATURES=205 The provided sig map did not contain any new valid signatures from required signers of the scheduled transaction
     * @property {number} UNRESOLVABLE_REQUIRED_SIGNERS=206 The required signers for a scheduled transaction cannot be resolved, for example because they do not exist or have been deleted
     * @property {number} SCHEDULED_TRANSACTION_NOT_IN_WHITELIST=207 Only whitelisted transaction types may be scheduled
     * @property {number} SOME_SIGNATURES_WERE_INVALID=208 At least one of the signatures in the provided sig map did not represent a valid signature for any required signer
     * @property {number} TRANSACTION_ID_FIELD_NOT_ALLOWED=209 The scheduled field in the TransactionID may not be set to true
     * @property {number} IDENTICAL_SCHEDULE_ALREADY_CREATED=210 A schedule already exists with the same identifying fields of an attempted ScheduleCreate (that is, all fields other than scheduledPayerAccountID)
     * @property {number} INVALID_ZERO_BYTE_IN_STRING=211 A string field in the transaction has a UTF-8 encoding with the prohibited zero byte
     * @property {number} SCHEDULE_ALREADY_DELETED=212 A schedule being signed or deleted has already been deleted
     * @property {number} SCHEDULE_ALREADY_EXECUTED=213 A schedule being signed or deleted has already been executed
     * @property {number} MESSAGE_SIZE_TOO_LARGE=214 ConsensusSubmitMessage request's message size is larger than allowed.
     * @property {number} OPERATION_REPEATED_IN_BUCKET_GROUPS=215 An operation was assigned to more than one throttle group in a given bucket
     * @property {number} BUCKET_CAPACITY_OVERFLOW=216 The capacity needed to satisfy all opsPerSec groups in a bucket overflowed a signed 8-byte integral type
     * @property {number} NODE_CAPACITY_NOT_SUFFICIENT_FOR_OPERATION=217 Given the network size in the address book, the node-level capacity for an operation would never be enough to accept a single request; usually means a bucket burstPeriod should be increased
     * @property {number} BUCKET_HAS_NO_THROTTLE_GROUPS=218 A bucket was defined without any throttle groups
     * @property {number} THROTTLE_GROUP_HAS_ZERO_OPS_PER_SEC=219 A throttle group was granted zero opsPerSec
     * @property {number} SUCCESS_BUT_MISSING_EXPECTED_OPERATION=220 The throttle definitions file was updated, but some supported operations were not assigned a bucket
     * @property {number} UNPARSEABLE_THROTTLE_DEFINITIONS=221 The new contents for the throttle definitions system file were not valid protobuf
     * @property {number} INVALID_THROTTLE_DEFINITIONS=222 The new throttle definitions system file were invalid, and no more specific error could be divined
     * @property {number} ACCOUNT_EXPIRED_AND_PENDING_REMOVAL=223 The transaction references an account which has passed its expiration without renewal funds available, and currently remains in the ledger only because of the grace period given to expired entities
     * @property {number} INVALID_TOKEN_MAX_SUPPLY=224 Invalid token max supply
     * @property {number} INVALID_TOKEN_NFT_SERIAL_NUMBER=225 Invalid token nft serial number
     * @property {number} INVALID_NFT_ID=226 Invalid nft id
     * @property {number} METADATA_TOO_LONG=227 Nft metadata is too long
     * @property {number} BATCH_SIZE_LIMIT_EXCEEDED=228 Repeated operations count exceeds the limit
     * @property {number} INVALID_QUERY_RANGE=229 The range of data to be gathered is out of the set boundaries
     * @property {number} FRACTION_DIVIDES_BY_ZERO=230 A custom fractional fee set a denominator of zero
     * @property {number} INSUFFICIENT_PAYER_BALANCE_FOR_CUSTOM_FEE=231 The transaction payer could not afford a custom fee
     * @property {number} CUSTOM_FEES_LIST_TOO_LONG=232 More than 10 custom fees were specified
     * @property {number} INVALID_CUSTOM_FEE_COLLECTOR=233 Any of the feeCollector accounts for customFees is invalid
     * @property {number} INVALID_TOKEN_ID_IN_CUSTOM_FEES=234 Any of the token Ids in customFees is invalid
     * @property {number} TOKEN_NOT_ASSOCIATED_TO_FEE_COLLECTOR=235 Any of the token Ids in customFees are not associated to feeCollector
     * @property {number} TOKEN_MAX_SUPPLY_REACHED=236 A token cannot have more units minted due to its configured supply ceiling
     * @property {number} SENDER_DOES_NOT_OWN_NFT_SERIAL_NO=237 The transaction attempted to move an NFT serial number from an account other than its owner
     * @property {number} CUSTOM_FEE_NOT_FULLY_SPECIFIED=238 A custom fee schedule entry did not specify either a fixed or fractional fee
     * @property {number} CUSTOM_FEE_MUST_BE_POSITIVE=239 Only positive fees may be assessed at this time
     * @property {number} TOKEN_HAS_NO_FEE_SCHEDULE_KEY=240 Fee schedule key is not set on token
     * @property {number} CUSTOM_FEE_OUTSIDE_NUMERIC_RANGE=241 A fractional custom fee exceeded the range of a 64-bit signed integer
     * @property {number} ROYALTY_FRACTION_CANNOT_EXCEED_ONE=242 A royalty cannot exceed the total fungible value exchanged for an NFT
     * @property {number} FRACTIONAL_FEE_MAX_AMOUNT_LESS_THAN_MIN_AMOUNT=243 Each fractional custom fee must have its maximum_amount, if specified, at least its minimum_amount
     * @property {number} CUSTOM_SCHEDULE_ALREADY_HAS_NO_FEES=244 A fee schedule update tried to clear the custom fees from a token whose fee schedule was already empty
     * @property {number} CUSTOM_FEE_DENOMINATION_MUST_BE_FUNGIBLE_COMMON=245 Only tokens of type FUNGIBLE_COMMON can be used to as fee schedule denominations
     * @property {number} CUSTOM_FRACTIONAL_FEE_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON=246 Only tokens of type FUNGIBLE_COMMON can have fractional fees
     * @property {number} INVALID_CUSTOM_FEE_SCHEDULE_KEY=247 The provided custom fee schedule key was invalid
     * @property {number} INVALID_TOKEN_MINT_METADATA=248 The requested token mint metadata was invalid
     * @property {number} INVALID_TOKEN_BURN_METADATA=249 The requested token burn metadata was invalid
     * @property {number} CURRENT_TREASURY_STILL_OWNS_NFTS=250 The treasury for a unique token cannot be changed until it owns no NFTs
     * @property {number} ACCOUNT_STILL_OWNS_NFTS=251 An account cannot be dissociated from a unique token if it owns NFTs for the token
     * @property {number} TREASURY_MUST_OWN_BURNED_NFT=252 A NFT can only be burned when owned by the unique token's treasury
     * @property {number} ACCOUNT_DOES_NOT_OWN_WIPED_NFT=253 An account did not own the NFT to be wiped
     * @property {number} ACCOUNT_AMOUNT_TRANSFERS_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON=254 An AccountAmount token transfers list referenced a token type other than FUNGIBLE_COMMON
     * @property {number} MAX_NFTS_IN_PRICE_REGIME_HAVE_BEEN_MINTED=255 All the NFTs allowed in the current price regime have already been minted
     * @property {number} PAYER_ACCOUNT_DELETED=256 The payer account has been marked as deleted
     * @property {number} CUSTOM_FEE_CHARGING_EXCEEDED_MAX_RECURSION_DEPTH=257 The reference chain of custom fees for a transferred token exceeded the maximum length of 2
     * @property {number} CUSTOM_FEE_CHARGING_EXCEEDED_MAX_ACCOUNT_AMOUNTS=258 More than 20 balance adjustments were to satisfy a CryptoTransfer and its implied custom fee payments
     * @property {number} INSUFFICIENT_SENDER_ACCOUNT_BALANCE_FOR_CUSTOM_FEE=259 The sender account in the token transfer transaction could not afford a custom fee
     * @property {number} SERIAL_NUMBER_LIMIT_REACHED=260 Currently no more than 4,294,967,295 NFTs may be minted for a given unique token type
     * @property {number} CUSTOM_ROYALTY_FEE_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE=261 Only tokens of type NON_FUNGIBLE_UNIQUE can have royalty fees
     * @property {number} NO_REMAINING_AUTOMATIC_ASSOCIATIONS=262 The account has reached the limit on the automatic associations count.
     * @property {number} EXISTING_AUTOMATIC_ASSOCIATIONS_EXCEED_GIVEN_LIMIT=263 Already existing automatic associations are more than the new maximum automatic associations.
     * @property {number} REQUESTED_NUM_AUTOMATIC_ASSOCIATIONS_EXCEEDS_ASSOCIATION_LIMIT=264 Cannot set the number of automatic associations for an account more than the maximum allowed
     * token associations <tt>tokens.maxPerAccount</tt>.
     * @property {number} TOKEN_IS_PAUSED=265 Token is paused. This Token cannot be a part of any kind of Transaction until unpaused.
     * @property {number} TOKEN_HAS_NO_PAUSE_KEY=266 Pause key is not set on token
     * @property {number} INVALID_PAUSE_KEY=267 The provided pause key was invalid
     * @property {number} FREEZE_UPDATE_FILE_DOES_NOT_EXIST=268 The update file in a freeze transaction body must exist.
     * @property {number} FREEZE_UPDATE_FILE_HASH_DOES_NOT_MATCH=269 The hash of the update file in a freeze transaction body must match the in-memory hash.
     * @property {number} NO_UPGRADE_HAS_BEEN_PREPARED=270 A FREEZE_UPGRADE transaction was handled with no previous update prepared.
     * @property {number} NO_FREEZE_IS_SCHEDULED=271 A FREEZE_ABORT transaction was handled with no scheduled freeze.
     * @property {number} UPDATE_FILE_HASH_CHANGED_SINCE_PREPARE_UPGRADE=272 The update file hash when handling a FREEZE_UPGRADE transaction differs from the file
     * hash at the time of handling the PREPARE_UPGRADE transaction.
     * @property {number} FREEZE_START_TIME_MUST_BE_FUTURE=273 The given freeze start time was in the (consensus) past.
     * @property {number} PREPARED_UPDATE_FILE_IS_IMMUTABLE=274 The prepared update file cannot be updated or appended until either the upgrade has
     * been completed, or a FREEZE_ABORT has been handled.
     * @property {number} FREEZE_ALREADY_SCHEDULED=275 Once a freeze is scheduled, it must be aborted before any other type of freeze can
     * can be performed.
     * @property {number} FREEZE_UPGRADE_IN_PROGRESS=276 If an NMT upgrade has been prepared, the following operation must be a FREEZE_UPGRADE.
     * (To issue a FREEZE_ONLY, submit a FREEZE_ABORT first.)
     * @property {number} UPDATE_FILE_ID_DOES_NOT_MATCH_PREPARED=277 If an NMT upgrade has been prepared, the subsequent FREEZE_UPGRADE transaction must
     * confirm the id of the file to be used in the upgrade.
     * @property {number} UPDATE_FILE_HASH_DOES_NOT_MATCH_PREPARED=278 If an NMT upgrade has been prepared, the subsequent FREEZE_UPGRADE transaction must
     * confirm the hash of the file to be used in the upgrade.
     * @property {number} CONSENSUS_GAS_EXHAUSTED=279 Consensus throttle did not allow execution of this transaction. System is throttled at
     * consensus level.
     * @property {number} REVERTED_SUCCESS=280 A precompiled contract succeeded, but was later reverted.
     * @property {number} MAX_STORAGE_IN_PRICE_REGIME_HAS_BEEN_USED=281 All contract storage allocated to the current price regime has been consumed.
     * @property {number} INVALID_ALIAS_KEY=282 An alias used in a CryptoTransfer transaction is not the serialization of a primitive Key
     * message--that is, a Key with a single Ed25519 or ECDSA(secp256k1) public key and no
     * unknown protobuf fields.
     * @property {number} UNEXPECTED_TOKEN_DECIMALS=283 A fungible token transfer expected a different number of decimals than the involved
     * type actually has.
     * @property {number} INVALID_PROXY_ACCOUNT_ID=284 The proxy account id is invalid or does not exist.
     * @property {number} INVALID_TRANSFER_ACCOUNT_ID=285 The transfer account id in CryptoDelete transaction is invalid or does not exist.
     * @property {number} INVALID_FEE_COLLECTOR_ACCOUNT_ID=286 The fee collector account id in TokenFeeScheduleUpdate is invalid or does not exist.
     * @property {number} ALIAS_IS_IMMUTABLE=287 The alias already set on an account cannot be updated using CryptoUpdate transaction.
     * @property {number} SPENDER_ACCOUNT_SAME_AS_OWNER=288 An approved allowance specifies a spender account that is the same as the hbar/token
     * owner account.
     * @property {number} AMOUNT_EXCEEDS_TOKEN_MAX_SUPPLY=289 The establishment or adjustment of an approved allowance cause the token allowance
     * to exceed the token maximum supply.
     * @property {number} NEGATIVE_ALLOWANCE_AMOUNT=290 The specified amount for an approved allowance cannot be negative.
     * @property {number} CANNOT_APPROVE_FOR_ALL_FUNGIBLE_COMMON=291 The approveForAll flag cannot be set for a fungible token.
     * @property {number} SPENDER_DOES_NOT_HAVE_ALLOWANCE=292 The spender does not have an existing approved allowance with the hbar/token owner.
     * @property {number} AMOUNT_EXCEEDS_ALLOWANCE=293 The transfer amount exceeds the current approved allowance for the spender account.
     * @property {number} MAX_ALLOWANCES_EXCEEDED=294 The payer account of an approveAllowances or adjustAllowance transaction is attempting
     * to go beyond the maximum allowed number of allowances.
     * @property {number} EMPTY_ALLOWANCES=295 No allowances have been specified in the approval transaction.
     * @property {number} SPENDER_ACCOUNT_REPEATED_IN_ALLOWANCES=296 Spender is repeated more than once in Crypto or Token or NFT allowance lists in a single
     * CryptoApproveAllowance transaction.
     * @property {number} REPEATED_SERIAL_NUMS_IN_NFT_ALLOWANCES=297 Serial numbers are repeated in nft allowance for a single spender account
     * @property {number} FUNGIBLE_TOKEN_IN_NFT_ALLOWANCES=298 Fungible common token used in NFT allowances
     * @property {number} NFT_IN_FUNGIBLE_TOKEN_ALLOWANCES=299 Non fungible token used in fungible token allowances
     * @property {number} INVALID_ALLOWANCE_OWNER_ID=300 The account id specified as the owner is invalid or does not exist.
     * @property {number} INVALID_ALLOWANCE_SPENDER_ID=301 The account id specified as the spender is invalid or does not exist.
     * @property {number} REPEATED_ALLOWANCES_TO_DELETE=302 [Deprecated] If the CryptoDeleteAllowance transaction has repeated crypto or token or Nft allowances to delete.
     * @property {number} INVALID_DELEGATING_SPENDER=303 If the account Id specified as the delegating spender is invalid or does not exist.
     * @property {number} DELEGATING_SPENDER_CANNOT_GRANT_APPROVE_FOR_ALL=304 The delegating Spender cannot grant approveForAll allowance on a NFT token type for another spender.
     * @property {number} DELEGATING_SPENDER_DOES_NOT_HAVE_APPROVE_FOR_ALL=305 The delegating Spender cannot grant allowance on a NFT serial for another spender as it doesnt not have approveForAll
     * granted on token-owner.
     * @property {number} SCHEDULE_EXPIRATION_TIME_TOO_FAR_IN_FUTURE=306 The scheduled transaction could not be created because it's expiration_time was too far in the future.
     * @property {number} SCHEDULE_EXPIRATION_TIME_MUST_BE_HIGHER_THAN_CONSENSUS_TIME=307 The scheduled transaction could not be created because it's expiration_time was less than or equal to the consensus time.
     * @property {number} SCHEDULE_FUTURE_THROTTLE_EXCEEDED=308 The scheduled transaction could not be created because it would cause throttles to be violated on the specified expiration_time.
     * @property {number} SCHEDULE_FUTURE_GAS_LIMIT_EXCEEDED=309 The scheduled transaction could not be created because it would cause the gas limit to be violated on the specified expiration_time.
     * @property {number} INVALID_ETHEREUM_TRANSACTION=310 The ethereum transaction either failed parsing or failed signature validation, or some other EthereumTransaction error not covered by another response code.
     * @property {number} WRONG_CHAIN_ID=311 EthereumTransaction was signed against a chainId that this network does not support.
     * @property {number} WRONG_NONCE=312 This transaction specified an ethereumNonce that is not the current ethereumNonce of the account.
     * @property {number} ACCESS_LIST_UNSUPPORTED=313 The ethereum transaction specified an access list, which the network does not support.
     * @property {number} SCHEDULE_PENDING_EXPIRATION=314 A schedule being signed or deleted has passed it's expiration date and is pending execution if needed and then expiration.
     * @property {number} CONTRACT_IS_TOKEN_TREASURY=315 A selfdestruct or ContractDelete targeted a contract that is a token treasury.
     * @property {number} CONTRACT_HAS_NON_ZERO_TOKEN_BALANCES=316 A selfdestruct or ContractDelete targeted a contract with non-zero token balances.
     * @property {number} CONTRACT_EXPIRED_AND_PENDING_REMOVAL=317 A contract referenced by a transaction is "detached"; that is, expired and lacking any
     * hbar funds for auto-renewal payment---but still within its post-expiry grace period.
     * @property {number} CONTRACT_HAS_NO_AUTO_RENEW_ACCOUNT=318 A ContractUpdate requested removal of a contract's auto-renew account, but that contract has
     * no auto-renew account.
     * @property {number} PERMANENT_REMOVAL_REQUIRES_SYSTEM_INITIATION=319 A delete transaction submitted via HAPI set permanent_removal=true
     * @property {number} PROXY_ACCOUNT_ID_FIELD_IS_DEPRECATED=320 PROXY_ACCOUNT_ID_FIELD_IS_DEPRECATED value
     * @property {number} SELF_STAKING_IS_NOT_ALLOWED=321 An account set the staked_account_id to itself in CryptoUpdate or ContractUpdate transactions.
     * @property {number} INVALID_STAKING_ID=322 The staking account id or staking node id given is invalid or does not exist.
     * @property {number} STAKING_NOT_ENABLED=323 Native staking, while implemented, has not yet enabled by the council.
     * @property {number} INVALID_PRNG_RANGE=324 The range provided in UtilPrng transaction is negative.
     * @property {number} MAX_ENTITIES_IN_PRICE_REGIME_HAVE_BEEN_CREATED=325 The maximum number of entities allowed in the current price regime have been created.
     * @property {number} INVALID_FULL_PREFIX_SIGNATURE_FOR_PRECOMPILE=326 The full prefix signature for precompile is not valid
     * @property {number} INSUFFICIENT_BALANCES_FOR_STORAGE_RENT=327 The combined balances of a contract and its auto-renew account (if any) did not cover
     * the rent charged for net new storage used in a transaction.
     * @property {number} MAX_CHILD_RECORDS_EXCEEDED=328 A contract transaction tried to use more than the allowed number of child records, via
     * either system contract records or internal contract creations.
     * @property {number} INSUFFICIENT_BALANCES_FOR_RENEWAL_FEES=329 The combined balances of a contract and its auto-renew account (if any) or balance of an account did not cover
     * the auto-renewal fees in a transaction.
     * @property {number} TRANSACTION_HAS_UNKNOWN_FIELDS=330 A transaction's protobuf message includes unknown fields; could mean that a client
     * expects not-yet-released functionality to be available.
     * @property {number} ACCOUNT_IS_IMMUTABLE=331 The account cannot be modified. Account's key is not set
     * @property {number} ALIAS_ALREADY_ASSIGNED=332 An alias that is assigned to an account or contract cannot be assigned to another account or contract.
     * @property {number} INVALID_METADATA_KEY=333 A provided metadata key was invalid. Verification includes, for example, checking the size of Ed25519 and ECDSA(secp256k1) public keys.
     * @property {number} TOKEN_HAS_NO_METADATA_KEY=334 Metadata key is not set on token
     * @property {number} MISSING_TOKEN_METADATA=335 Token Metadata is not provided
     * @property {number} MISSING_SERIAL_NUMBERS=336 NFT serial numbers are missing in the TokenUpdateNftsTransactionBody
     * @property {number} TOKEN_HAS_NO_ADMIN_KEY=337 Admin key is not set on token
     * @property {number} NODE_DELETED=338 A transaction failed because the consensus node identified is
     * deleted from the address book.
     * @property {number} INVALID_NODE_ID=339 A transaction failed because the consensus node identified is not valid or
     * does not exist in state.
     * @property {number} INVALID_GOSSIP_ENDPOINT=340 A transaction failed because one or more entries in the list of
     * service endpoints for the `gossip_endpoint` field is invalid.<br/>
     * The most common cause for this response is a service endpoint that has
     * the domain name (DNS) set rather than address and port.
     * @property {number} INVALID_NODE_ACCOUNT_ID=341 A transaction failed because the node account identifier provided
     * does not exist or is not valid.<br/>
     * One common source of this error is providing a node account identifier
     * using the "alias" form rather than "numeric" form.
     * It is also used for atomic batch transaction for child transaction if the node account id is not 0.0.0.
     * @property {number} INVALID_NODE_DESCRIPTION=342 A transaction failed because the description field cannot be encoded
     * as UTF-8 or is more than 100 bytes when encoded.
     * @property {number} INVALID_SERVICE_ENDPOINT=343 A transaction failed because one or more entries in the list of
     * service endpoints for the `service_endpoint` field is invalid.<br/>
     * The most common cause for this response is a service endpoint that has
     * the domain name (DNS) set rather than address and port.
     * @property {number} INVALID_GOSSIP_CA_CERTIFICATE=344 A transaction failed because the TLS certificate provided for the
     * node is missing or invalid.
     * <p>
     * #### Probable Causes
     * The certificate MUST be a TLS certificate of a type permitted for gossip
     * signatures.<br/>
     * The value presented MUST be a UTF-8 NFKD encoding of the TLS
     * certificate.<br/>
     * The certificate encoded MUST be in PEM format.<br/>
     * The `gossip_ca_certificate` field is REQUIRED and MUST NOT be empty.
     * @property {number} INVALID_GRPC_CERTIFICATE=345 A transaction failed because the hash provided for the gRPC certificate
     * is present but invalid.
     * <p>
     * #### Probable Causes
     * The `grpc_certificate_hash` MUST be a SHA-384 hash.<br/>
     * The input hashed MUST be a UTF-8 NFKD encoding of the actual TLS
     * certificate.<br/>
     * The certificate to be encoded MUST be in PEM format.
     * @property {number} INVALID_MAX_AUTO_ASSOCIATIONS=346 The maximum automatic associations value is not valid.<br/>
     * The most common cause for this error is a value less than `-1`.
     * @property {number} MAX_NODES_CREATED=347 The maximum number of nodes allowed in the address book have been created.
     * @property {number} IP_FQDN_CANNOT_BE_SET_FOR_SAME_ENDPOINT=348 In ServiceEndpoint, domain_name and ipAddressV4 are mutually exclusive
     * @property {number} GOSSIP_ENDPOINT_CANNOT_HAVE_FQDN=349 Fully qualified domain name is not allowed in gossip_endpoint
     * @property {number} FQDN_SIZE_TOO_LARGE=350 In ServiceEndpoint, domain_name size too large
     * @property {number} INVALID_ENDPOINT=351 ServiceEndpoint is invalid
     * @property {number} GOSSIP_ENDPOINTS_EXCEEDED_LIMIT=352 The number of gossip endpoints exceeds the limit
     * @property {number} TOKEN_REFERENCE_REPEATED=353 The transaction attempted to use duplicate `TokenReference`.<br/>
     * This affects `TokenReject` attempting to reject same token reference more than once.
     * @property {number} INVALID_OWNER_ID=354 The account id specified as the owner in `TokenReject` is invalid or does not exist.
     * @property {number} TOKEN_REFERENCE_LIST_SIZE_LIMIT_EXCEEDED=355 The transaction attempted to use more than the allowed number of `TokenReference`.
     * @property {number} SERVICE_ENDPOINTS_EXCEEDED_LIMIT=356 The number of service endpoints exceeds the limit
     * @property {number} INVALID_IPV4_ADDRESS=357 INVALID_IPV4_ADDRESS value
     * @property {number} EMPTY_TOKEN_REFERENCE_LIST=358 The transaction attempted to use empty `TokenReference` list.
     * @property {number} UPDATE_NODE_ACCOUNT_NOT_ALLOWED=359 UPDATE_NODE_ACCOUNT_NOT_ALLOWED value
     * @property {number} TOKEN_HAS_NO_METADATA_OR_SUPPLY_KEY=360 TOKEN_HAS_NO_METADATA_OR_SUPPLY_KEY value
     * @property {number} EMPTY_PENDING_AIRDROP_ID_LIST=361 The list of `PendingAirdropId`s is empty and MUST NOT be empty.
     * @property {number} PENDING_AIRDROP_ID_REPEATED=362 A `PendingAirdropId` is repeated in a `claim` or `cancel` transaction.
     * @property {number} PENDING_AIRDROP_ID_LIST_TOO_LONG=363 The number of `PendingAirdropId` values in the list exceeds the maximum
     * allowable number.
     * @property {number} PENDING_NFT_AIRDROP_ALREADY_EXISTS=364 PENDING_NFT_AIRDROP_ALREADY_EXISTS value
     * @property {number} ACCOUNT_HAS_PENDING_AIRDROPS=365 ACCOUNT_HAS_PENDING_AIRDROPS value
     * @property {number} THROTTLED_AT_CONSENSUS=366 Consensus throttle did not allow execution of this transaction.<br/>
     * The transaction should be retried after a modest delay.
     * @property {number} INVALID_PENDING_AIRDROP_ID=367 The provided pending airdrop id is invalid.<br/>
     * This pending airdrop MAY already be claimed or cancelled.
     * <p>
     * The client SHOULD query a mirror node to determine the current status of
     * the pending airdrop.
     * @property {number} TOKEN_AIRDROP_WITH_FALLBACK_ROYALTY=368 The token to be airdropped has a fallback royalty fee and cannot be
     * sent or claimed via an airdrop transaction.
     * @property {number} INVALID_TOKEN_IN_PENDING_AIRDROP=369 This airdrop claim is for a pending airdrop with an invalid token.<br/>
     * The token might be deleted, or the sender may not have enough tokens
     * to fulfill the offer.
     * <p>
     * The client SHOULD query mirror node to determine the status of the
     * pending airdrop and whether the sender can fulfill the offer.
     * @property {number} SCHEDULE_EXPIRY_IS_BUSY=370 A scheduled transaction configured to wait for expiry to execute was given
     * an expiry time at which there is already too many transactions scheduled to
     * expire; its creation must be retried with a different expiry.
     * @property {number} INVALID_GRPC_CERTIFICATE_HASH=371 The provided gRPC certificate hash is invalid.
     * @property {number} MISSING_EXPIRY_TIME=372 A scheduled transaction configured to wait for expiry to execute was not
     * given an explicit expiration time.
     * @property {number} NO_SCHEDULING_ALLOWED_AFTER_SCHEDULED_RECURSION=373 A contract operation attempted to schedule another transaction after it
     * had already scheduled a recursive contract call.
     * @property {number} RECURSIVE_SCHEDULING_LIMIT_REACHED=374 A contract can schedule recursive calls a finite number of times (this is
     * approximately four million times with typical network configuration.)
     * @property {number} WAITING_FOR_LEDGER_ID=375 The target network is waiting for the ledger ID to be set, which is a
     * side effect of finishing the network's TSS construction.
     * @property {number} MAX_ENTRIES_FOR_FEE_EXEMPT_KEY_LIST_EXCEEDED=376 The provided fee exempt key list size exceeded the limit.
     * @property {number} FEE_EXEMPT_KEY_LIST_CONTAINS_DUPLICATED_KEYS=377 The provided fee exempt key list contains duplicated keys.
     * @property {number} INVALID_KEY_IN_FEE_EXEMPT_KEY_LIST=378 The provided fee exempt key list contains an invalid key.
     * @property {number} INVALID_FEE_SCHEDULE_KEY=379 The provided fee schedule key contains an invalid key.
     * @property {number} FEE_SCHEDULE_KEY_CANNOT_BE_UPDATED=380 If a fee schedule key is not set when we create a topic
     * we cannot add it on update.
     * @property {number} FEE_SCHEDULE_KEY_NOT_SET=381 If the topic's custom fees are updated the topic SHOULD have a
     * fee schedule key
     * @property {number} MAX_CUSTOM_FEE_LIMIT_EXCEEDED=382 The fee amount is exceeding the amount that the payer
     * is willing to pay.
     * @property {number} NO_VALID_MAX_CUSTOM_FEE=383 There are no corresponding custom fees.
     * @property {number} INVALID_MAX_CUSTOM_FEES=384 The provided list contains invalid max custom fee.
     * @property {number} DUPLICATE_DENOMINATION_IN_MAX_CUSTOM_FEE_LIST=385 The provided max custom fee list contains fees with
     * duplicate denominations.
     * @property {number} DUPLICATE_ACCOUNT_ID_IN_MAX_CUSTOM_FEE_LIST=386 The provided max custom fee list contains fees with
     * duplicate account id.
     * @property {number} MAX_CUSTOM_FEES_IS_NOT_SUPPORTED=387 Max custom fees list is not supported for this operation.
     * @property {number} BATCH_LIST_EMPTY=388 The list of batch transactions is empty
     * @property {number} BATCH_LIST_CONTAINS_DUPLICATES=389 The list of batch transactions contains duplicated transactions
     * @property {number} BATCH_TRANSACTION_IN_BLACKLIST=390 The list of batch transactions contains a transaction type that is
     * in the AtomicBatch blacklist as configured in the network.
     * @property {number} INNER_TRANSACTION_FAILED=391 The inner transaction of a batch transaction failed
     * @property {number} MISSING_BATCH_KEY=392 The inner transaction of a batch transaction is missing a batch key
     * @property {number} BATCH_KEY_SET_ON_NON_INNER_TRANSACTION=393 The batch key is set for a non batch transaction
     * @property {number} INVALID_BATCH_KEY=394 The batch key is not valid
     * @property {number} SCHEDULE_EXPIRY_NOT_CONFIGURABLE=395 The provided schedule expiry time is not configurable.
     * @property {number} CREATING_SYSTEM_ENTITIES=396 The network just started at genesis and is creating system entities.
     * @property {number} THROTTLE_GROUP_LCM_OVERFLOW=397 The least common multiple of the throttle group's milliOpsPerSec is
     * too large and it's overflowing.
     * @property {number} AIRDROP_CONTAINS_MULTIPLE_SENDERS_FOR_A_TOKEN=398 Token airdrop transactions can not contain multiple senders for a single token.
     * @property {number} GRPC_WEB_PROXY_NOT_SUPPORTED=399 The GRPC proxy endpoint is set in the NodeCreate or NodeUpdate transaction,
     * which the network does not support.
     * @property {number} NFT_TRANSFERS_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE=400 An NFT transfers list referenced a token type other than NON_FUNGIBLE_UNIQUE.
     * @property {number} INVALID_SERIALIZED_TX_MESSAGE_HASH_ALGORITHM=401 A HAPI client cannot set the SignedTransaction#use_serialized_tx_message_hash_algorithm field.
     * @property {number} WRONG_HOOK_ENTITY_TYPE=499 A HookStore referenced a valid entity number but with the wrong entity type.
     * @property {number} EVM_HOOK_GAS_THROTTLED=500 An EVM hook execution was throttled due to high network gas utilization.
     * @property {number} HOOK_ID_IN_USE=501 A user tried to create a hook with an id already in use.
     * @property {number} BAD_HOOK_REQUEST=502 A transaction tried to execute a hook that did not match the specified
     * type or was malformed in some other way.
     * @property {number} REJECTED_BY_ACCOUNT_ALLOWANCE_HOOK=503 A CryptoTransfer relying on a ACCOUNT_ALLOWANCE hook was rejected.
     * @property {number} HOOK_NOT_FOUND=504 A hook id was not found.
     * @property {number} EVM_HOOK_STORAGE_UPDATE_BYTES_TOO_LONG=505 An EVM hook mapping slot, storage key, or storage value exceeded 32 bytes.
     * @property {number} EVM_HOOK_STORAGE_UPDATE_BYTES_MUST_USE_MINIMAL_REPRESENTATION=506 An EVM hook's mapping slot, storage key, or storage value failed to use the
     * minimal representation (i.e., no leading zeros).
     * @property {number} INVALID_HOOK_ID=507 A hook id was invalid.
     * @property {number} EMPTY_EVM_HOOK_STORAGE_UPDATE=508 An EVM hook storage update had no contents.
     * @property {number} HOOK_ID_REPEATED_IN_CREATION_DETAILS=509 A user repeated the same hook id in a creation details list.
     * @property {number} HOOKS_NOT_ENABLED=510 Hooks are not not enabled on the target Hiero network.
     * @property {number} HOOK_IS_NOT_AN_EVM_HOOK=511 The target hook is not an EVM hook.
     * @property {number} HOOK_DELETED=512 A hook was deleted.
     * @property {number} TOO_MANY_EVM_HOOK_STORAGE_UPDATES=513 The HookStore tried to update too many storage slots in a single transaction.
     * @property {number} HOOK_CREATION_BYTES_MUST_USE_MINIMAL_REPRESENTATION=514 An EVM hook mapping slot, storage key, or storage value failed to use the
     * minimal representation (i.e., no leading zeros).
     * @property {number} HOOK_CREATION_BYTES_TOO_LONG=515 A EVM hook mapping slot, storage key, or storage value exceeded 32 bytes.
     * @property {number} INVALID_HOOK_CREATION_SPEC=516 A hook creation spec was not found.
     * @property {number} HOOK_EXTENSION_EMPTY=517 A hook extension point was empty.
     * @property {number} INVALID_HOOK_ADMIN_KEY=518 A hook admin key was invalid.
     * @property {number} HOOK_DELETION_REQUIRES_ZERO_STORAGE_SLOTS=519 The hook deletion requires the hook to have zero storage slots.
     * @property {number} CANNOT_SET_HOOKS_AND_APPROVAL=520 Cannot set both a hook call and an approval on the same AccountAmount or NftTransfer message.
     * @property {number} TRANSACTION_REQUIRES_ZERO_HOOKS=521 The attempted operation is invalid until all the target entity's hooks have been deleted.
     * @property {number} INVALID_HOOK_CALL=522 The HookCall set in the transaction is invalid
     * @property {number} HOOKS_ARE_NOT_SUPPORTED_IN_AIRDROPS=523 Hooks are not supported to be used in TokenAirdrop transactions
     * @property {number} ACCOUNT_IS_LINKED_TO_A_NODE=524 This operation cannot be completed because the target
     * account is a "Node Account".<br/>
     * This account is currently in use as the "Node Account" for a
     * consensus node, and therefore the requested change is
     * not permitted. The transaction may be resubmitted once the
     * account is no longer in use as a "Node Account" for any
     * consensus node.
     * @property {number} HOOKS_EXECUTIONS_REQUIRE_TOP_LEVEL_CRYPTO_TRANSFER=525 Hooks are not supported to be used in Batch transactions and Scheduled transactions.
     * They are only supported in a top level CryptoTransfer transaction.
     * @property {number} NODE_ACCOUNT_HAS_ZERO_BALANCE=526 This operation cannot be completed because the target
     * account has a zero balance.<br/>
     * Node accounts require a positive balance. The transaction may be
     * resubmitted once the account has been funded.
     * @property {number} TRANSFER_TO_FEE_COLLECTION_ACCOUNT_NOT_ALLOWED=527 This operation cannot be completed because the target
     * account is a "Fee Collection Account".<br/>
     * Any attempt to transfer to a fee collection account is not permitted.
     * @property {number} TOO_MANY_HOOK_INVOCATIONS=528 The number of hook invocations exceeds the maximum allowed per transaction.
     */
    proto.ResponseCodeEnum = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OK"] = 0;
        values[valuesById[1] = "INVALID_TRANSACTION"] = 1;
        values[valuesById[2] = "PAYER_ACCOUNT_NOT_FOUND"] = 2;
        values[valuesById[3] = "INVALID_NODE_ACCOUNT"] = 3;
        values[valuesById[4] = "TRANSACTION_EXPIRED"] = 4;
        values[valuesById[5] = "INVALID_TRANSACTION_START"] = 5;
        values[valuesById[6] = "INVALID_TRANSACTION_DURATION"] = 6;
        values[valuesById[7] = "INVALID_SIGNATURE"] = 7;
        values[valuesById[8] = "MEMO_TOO_LONG"] = 8;
        values[valuesById[9] = "INSUFFICIENT_TX_FEE"] = 9;
        values[valuesById[10] = "INSUFFICIENT_PAYER_BALANCE"] = 10;
        values[valuesById[11] = "DUPLICATE_TRANSACTION"] = 11;
        values[valuesById[12] = "BUSY"] = 12;
        values[valuesById[13] = "NOT_SUPPORTED"] = 13;
        values[valuesById[14] = "INVALID_FILE_ID"] = 14;
        values[valuesById[15] = "INVALID_ACCOUNT_ID"] = 15;
        values[valuesById[16] = "INVALID_CONTRACT_ID"] = 16;
        values[valuesById[17] = "INVALID_TRANSACTION_ID"] = 17;
        values[valuesById[18] = "RECEIPT_NOT_FOUND"] = 18;
        values[valuesById[19] = "RECORD_NOT_FOUND"] = 19;
        values[valuesById[20] = "INVALID_SOLIDITY_ID"] = 20;
        values[valuesById[21] = "UNKNOWN"] = 21;
        values[valuesById[22] = "SUCCESS"] = 22;
        values[valuesById[23] = "FAIL_INVALID"] = 23;
        values[valuesById[24] = "FAIL_FEE"] = 24;
        values[valuesById[25] = "FAIL_BALANCE"] = 25;
        values[valuesById[26] = "KEY_REQUIRED"] = 26;
        values[valuesById[27] = "BAD_ENCODING"] = 27;
        values[valuesById[28] = "INSUFFICIENT_ACCOUNT_BALANCE"] = 28;
        values[valuesById[29] = "INVALID_SOLIDITY_ADDRESS"] = 29;
        values[valuesById[30] = "INSUFFICIENT_GAS"] = 30;
        values[valuesById[31] = "CONTRACT_SIZE_LIMIT_EXCEEDED"] = 31;
        values[valuesById[32] = "LOCAL_CALL_MODIFICATION_EXCEPTION"] = 32;
        values[valuesById[33] = "CONTRACT_REVERT_EXECUTED"] = 33;
        values[valuesById[34] = "CONTRACT_EXECUTION_EXCEPTION"] = 34;
        values[valuesById[35] = "INVALID_RECEIVING_NODE_ACCOUNT"] = 35;
        values[valuesById[36] = "MISSING_QUERY_HEADER"] = 36;
        values[valuesById[37] = "ACCOUNT_UPDATE_FAILED"] = 37;
        values[valuesById[38] = "INVALID_KEY_ENCODING"] = 38;
        values[valuesById[39] = "NULL_SOLIDITY_ADDRESS"] = 39;
        values[valuesById[40] = "CONTRACT_UPDATE_FAILED"] = 40;
        values[valuesById[41] = "INVALID_QUERY_HEADER"] = 41;
        values[valuesById[42] = "INVALID_FEE_SUBMITTED"] = 42;
        values[valuesById[43] = "INVALID_PAYER_SIGNATURE"] = 43;
        values[valuesById[44] = "KEY_NOT_PROVIDED"] = 44;
        values[valuesById[45] = "INVALID_EXPIRATION_TIME"] = 45;
        values[valuesById[46] = "NO_WACL_KEY"] = 46;
        values[valuesById[47] = "FILE_CONTENT_EMPTY"] = 47;
        values[valuesById[48] = "INVALID_ACCOUNT_AMOUNTS"] = 48;
        values[valuesById[49] = "EMPTY_TRANSACTION_BODY"] = 49;
        values[valuesById[50] = "INVALID_TRANSACTION_BODY"] = 50;
        values[valuesById[51] = "INVALID_SIGNATURE_TYPE_MISMATCHING_KEY"] = 51;
        values[valuesById[52] = "INVALID_SIGNATURE_COUNT_MISMATCHING_KEY"] = 52;
        values[valuesById[53] = "EMPTY_LIVE_HASH_BODY"] = 53;
        values[valuesById[54] = "EMPTY_LIVE_HASH"] = 54;
        values[valuesById[55] = "EMPTY_LIVE_HASH_KEYS"] = 55;
        values[valuesById[56] = "INVALID_LIVE_HASH_SIZE"] = 56;
        values[valuesById[57] = "EMPTY_QUERY_BODY"] = 57;
        values[valuesById[58] = "EMPTY_LIVE_HASH_QUERY"] = 58;
        values[valuesById[59] = "LIVE_HASH_NOT_FOUND"] = 59;
        values[valuesById[60] = "ACCOUNT_ID_DOES_NOT_EXIST"] = 60;
        values[valuesById[61] = "LIVE_HASH_ALREADY_EXISTS"] = 61;
        values[valuesById[62] = "INVALID_FILE_WACL"] = 62;
        values[valuesById[63] = "SERIALIZATION_FAILED"] = 63;
        values[valuesById[64] = "TRANSACTION_OVERSIZE"] = 64;
        values[valuesById[65] = "TRANSACTION_TOO_MANY_LAYERS"] = 65;
        values[valuesById[66] = "CONTRACT_DELETED"] = 66;
        values[valuesById[67] = "PLATFORM_NOT_ACTIVE"] = 67;
        values[valuesById[68] = "KEY_PREFIX_MISMATCH"] = 68;
        values[valuesById[69] = "PLATFORM_TRANSACTION_NOT_CREATED"] = 69;
        values[valuesById[70] = "INVALID_RENEWAL_PERIOD"] = 70;
        values[valuesById[71] = "INVALID_PAYER_ACCOUNT_ID"] = 71;
        values[valuesById[72] = "ACCOUNT_DELETED"] = 72;
        values[valuesById[73] = "FILE_DELETED"] = 73;
        values[valuesById[74] = "ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS"] = 74;
        values[valuesById[75] = "SETTING_NEGATIVE_ACCOUNT_BALANCE"] = 75;
        values[valuesById[76] = "OBTAINER_REQUIRED"] = 76;
        values[valuesById[77] = "OBTAINER_SAME_CONTRACT_ID"] = 77;
        values[valuesById[78] = "OBTAINER_DOES_NOT_EXIST"] = 78;
        values[valuesById[79] = "MODIFYING_IMMUTABLE_CONTRACT"] = 79;
        values[valuesById[80] = "FILE_SYSTEM_EXCEPTION"] = 80;
        values[valuesById[81] = "AUTORENEW_DURATION_NOT_IN_RANGE"] = 81;
        values[valuesById[82] = "ERROR_DECODING_BYTESTRING"] = 82;
        values[valuesById[83] = "CONTRACT_FILE_EMPTY"] = 83;
        values[valuesById[84] = "CONTRACT_BYTECODE_EMPTY"] = 84;
        values[valuesById[85] = "INVALID_INITIAL_BALANCE"] = 85;
        values[valuesById[86] = "INVALID_RECEIVE_RECORD_THRESHOLD"] = 86;
        values[valuesById[87] = "INVALID_SEND_RECORD_THRESHOLD"] = 87;
        values[valuesById[88] = "ACCOUNT_IS_NOT_GENESIS_ACCOUNT"] = 88;
        values[valuesById[89] = "PAYER_ACCOUNT_UNAUTHORIZED"] = 89;
        values[valuesById[90] = "INVALID_FREEZE_TRANSACTION_BODY"] = 90;
        values[valuesById[91] = "FREEZE_TRANSACTION_BODY_NOT_FOUND"] = 91;
        values[valuesById[92] = "TRANSFER_LIST_SIZE_LIMIT_EXCEEDED"] = 92;
        values[valuesById[93] = "RESULT_SIZE_LIMIT_EXCEEDED"] = 93;
        values[valuesById[94] = "NOT_SPECIAL_ACCOUNT"] = 94;
        values[valuesById[95] = "CONTRACT_NEGATIVE_GAS"] = 95;
        values[valuesById[96] = "CONTRACT_NEGATIVE_VALUE"] = 96;
        values[valuesById[97] = "INVALID_FEE_FILE"] = 97;
        values[valuesById[98] = "INVALID_EXCHANGE_RATE_FILE"] = 98;
        values[valuesById[99] = "INSUFFICIENT_LOCAL_CALL_GAS"] = 99;
        values[valuesById[100] = "ENTITY_NOT_ALLOWED_TO_DELETE"] = 100;
        values[valuesById[101] = "AUTHORIZATION_FAILED"] = 101;
        values[valuesById[102] = "FILE_UPLOADED_PROTO_INVALID"] = 102;
        values[valuesById[103] = "FILE_UPLOADED_PROTO_NOT_SAVED_TO_DISK"] = 103;
        values[valuesById[104] = "FEE_SCHEDULE_FILE_PART_UPLOADED"] = 104;
        values[valuesById[105] = "EXCHANGE_RATE_CHANGE_LIMIT_EXCEEDED"] = 105;
        values[valuesById[106] = "MAX_CONTRACT_STORAGE_EXCEEDED"] = 106;
        values[valuesById[107] = "TRANSFER_ACCOUNT_SAME_AS_DELETE_ACCOUNT"] = 107;
        values[valuesById[108] = "TOTAL_LEDGER_BALANCE_INVALID"] = 108;
        values[valuesById[110] = "EXPIRATION_REDUCTION_NOT_ALLOWED"] = 110;
        values[valuesById[111] = "MAX_GAS_LIMIT_EXCEEDED"] = 111;
        values[valuesById[112] = "MAX_FILE_SIZE_EXCEEDED"] = 112;
        values[valuesById[113] = "RECEIVER_SIG_REQUIRED"] = 113;
        values[valuesById[150] = "INVALID_TOPIC_ID"] = 150;
        values[valuesById[155] = "INVALID_ADMIN_KEY"] = 155;
        values[valuesById[156] = "INVALID_SUBMIT_KEY"] = 156;
        values[valuesById[157] = "UNAUTHORIZED"] = 157;
        values[valuesById[158] = "INVALID_TOPIC_MESSAGE"] = 158;
        values[valuesById[159] = "INVALID_AUTORENEW_ACCOUNT"] = 159;
        values[valuesById[160] = "AUTORENEW_ACCOUNT_NOT_ALLOWED"] = 160;
        values[valuesById[162] = "TOPIC_EXPIRED"] = 162;
        values[valuesById[163] = "INVALID_CHUNK_NUMBER"] = 163;
        values[valuesById[164] = "INVALID_CHUNK_TRANSACTION_ID"] = 164;
        values[valuesById[165] = "ACCOUNT_FROZEN_FOR_TOKEN"] = 165;
        values[valuesById[166] = "TOKENS_PER_ACCOUNT_LIMIT_EXCEEDED"] = 166;
        values[valuesById[167] = "INVALID_TOKEN_ID"] = 167;
        values[valuesById[168] = "INVALID_TOKEN_DECIMALS"] = 168;
        values[valuesById[169] = "INVALID_TOKEN_INITIAL_SUPPLY"] = 169;
        values[valuesById[170] = "INVALID_TREASURY_ACCOUNT_FOR_TOKEN"] = 170;
        values[valuesById[171] = "INVALID_TOKEN_SYMBOL"] = 171;
        values[valuesById[172] = "TOKEN_HAS_NO_FREEZE_KEY"] = 172;
        values[valuesById[173] = "TRANSFERS_NOT_ZERO_SUM_FOR_TOKEN"] = 173;
        values[valuesById[174] = "MISSING_TOKEN_SYMBOL"] = 174;
        values[valuesById[175] = "TOKEN_SYMBOL_TOO_LONG"] = 175;
        values[valuesById[176] = "ACCOUNT_KYC_NOT_GRANTED_FOR_TOKEN"] = 176;
        values[valuesById[177] = "TOKEN_HAS_NO_KYC_KEY"] = 177;
        values[valuesById[178] = "INSUFFICIENT_TOKEN_BALANCE"] = 178;
        values[valuesById[179] = "TOKEN_WAS_DELETED"] = 179;
        values[valuesById[180] = "TOKEN_HAS_NO_SUPPLY_KEY"] = 180;
        values[valuesById[181] = "TOKEN_HAS_NO_WIPE_KEY"] = 181;
        values[valuesById[182] = "INVALID_TOKEN_MINT_AMOUNT"] = 182;
        values[valuesById[183] = "INVALID_TOKEN_BURN_AMOUNT"] = 183;
        values[valuesById[184] = "TOKEN_NOT_ASSOCIATED_TO_ACCOUNT"] = 184;
        values[valuesById[185] = "CANNOT_WIPE_TOKEN_TREASURY_ACCOUNT"] = 185;
        values[valuesById[186] = "INVALID_KYC_KEY"] = 186;
        values[valuesById[187] = "INVALID_WIPE_KEY"] = 187;
        values[valuesById[188] = "INVALID_FREEZE_KEY"] = 188;
        values[valuesById[189] = "INVALID_SUPPLY_KEY"] = 189;
        values[valuesById[190] = "MISSING_TOKEN_NAME"] = 190;
        values[valuesById[191] = "TOKEN_NAME_TOO_LONG"] = 191;
        values[valuesById[192] = "INVALID_WIPING_AMOUNT"] = 192;
        values[valuesById[193] = "TOKEN_IS_IMMUTABLE"] = 193;
        values[valuesById[194] = "TOKEN_ALREADY_ASSOCIATED_TO_ACCOUNT"] = 194;
        values[valuesById[195] = "TRANSACTION_REQUIRES_ZERO_TOKEN_BALANCES"] = 195;
        values[valuesById[196] = "ACCOUNT_IS_TREASURY"] = 196;
        values[valuesById[197] = "TOKEN_ID_REPEATED_IN_TOKEN_LIST"] = 197;
        values[valuesById[198] = "TOKEN_TRANSFER_LIST_SIZE_LIMIT_EXCEEDED"] = 198;
        values[valuesById[199] = "EMPTY_TOKEN_TRANSFER_BODY"] = 199;
        values[valuesById[200] = "EMPTY_TOKEN_TRANSFER_ACCOUNT_AMOUNTS"] = 200;
        values[valuesById[201] = "INVALID_SCHEDULE_ID"] = 201;
        values[valuesById[202] = "SCHEDULE_IS_IMMUTABLE"] = 202;
        values[valuesById[203] = "INVALID_SCHEDULE_PAYER_ID"] = 203;
        values[valuesById[204] = "INVALID_SCHEDULE_ACCOUNT_ID"] = 204;
        values[valuesById[205] = "NO_NEW_VALID_SIGNATURES"] = 205;
        values[valuesById[206] = "UNRESOLVABLE_REQUIRED_SIGNERS"] = 206;
        values[valuesById[207] = "SCHEDULED_TRANSACTION_NOT_IN_WHITELIST"] = 207;
        values[valuesById[208] = "SOME_SIGNATURES_WERE_INVALID"] = 208;
        values[valuesById[209] = "TRANSACTION_ID_FIELD_NOT_ALLOWED"] = 209;
        values[valuesById[210] = "IDENTICAL_SCHEDULE_ALREADY_CREATED"] = 210;
        values[valuesById[211] = "INVALID_ZERO_BYTE_IN_STRING"] = 211;
        values[valuesById[212] = "SCHEDULE_ALREADY_DELETED"] = 212;
        values[valuesById[213] = "SCHEDULE_ALREADY_EXECUTED"] = 213;
        values[valuesById[214] = "MESSAGE_SIZE_TOO_LARGE"] = 214;
        values[valuesById[215] = "OPERATION_REPEATED_IN_BUCKET_GROUPS"] = 215;
        values[valuesById[216] = "BUCKET_CAPACITY_OVERFLOW"] = 216;
        values[valuesById[217] = "NODE_CAPACITY_NOT_SUFFICIENT_FOR_OPERATION"] = 217;
        values[valuesById[218] = "BUCKET_HAS_NO_THROTTLE_GROUPS"] = 218;
        values[valuesById[219] = "THROTTLE_GROUP_HAS_ZERO_OPS_PER_SEC"] = 219;
        values[valuesById[220] = "SUCCESS_BUT_MISSING_EXPECTED_OPERATION"] = 220;
        values[valuesById[221] = "UNPARSEABLE_THROTTLE_DEFINITIONS"] = 221;
        values[valuesById[222] = "INVALID_THROTTLE_DEFINITIONS"] = 222;
        values[valuesById[223] = "ACCOUNT_EXPIRED_AND_PENDING_REMOVAL"] = 223;
        values[valuesById[224] = "INVALID_TOKEN_MAX_SUPPLY"] = 224;
        values[valuesById[225] = "INVALID_TOKEN_NFT_SERIAL_NUMBER"] = 225;
        values[valuesById[226] = "INVALID_NFT_ID"] = 226;
        values[valuesById[227] = "METADATA_TOO_LONG"] = 227;
        values[valuesById[228] = "BATCH_SIZE_LIMIT_EXCEEDED"] = 228;
        values[valuesById[229] = "INVALID_QUERY_RANGE"] = 229;
        values[valuesById[230] = "FRACTION_DIVIDES_BY_ZERO"] = 230;
        values[valuesById[231] = "INSUFFICIENT_PAYER_BALANCE_FOR_CUSTOM_FEE"] = 231;
        values[valuesById[232] = "CUSTOM_FEES_LIST_TOO_LONG"] = 232;
        values[valuesById[233] = "INVALID_CUSTOM_FEE_COLLECTOR"] = 233;
        values[valuesById[234] = "INVALID_TOKEN_ID_IN_CUSTOM_FEES"] = 234;
        values[valuesById[235] = "TOKEN_NOT_ASSOCIATED_TO_FEE_COLLECTOR"] = 235;
        values[valuesById[236] = "TOKEN_MAX_SUPPLY_REACHED"] = 236;
        values[valuesById[237] = "SENDER_DOES_NOT_OWN_NFT_SERIAL_NO"] = 237;
        values[valuesById[238] = "CUSTOM_FEE_NOT_FULLY_SPECIFIED"] = 238;
        values[valuesById[239] = "CUSTOM_FEE_MUST_BE_POSITIVE"] = 239;
        values[valuesById[240] = "TOKEN_HAS_NO_FEE_SCHEDULE_KEY"] = 240;
        values[valuesById[241] = "CUSTOM_FEE_OUTSIDE_NUMERIC_RANGE"] = 241;
        values[valuesById[242] = "ROYALTY_FRACTION_CANNOT_EXCEED_ONE"] = 242;
        values[valuesById[243] = "FRACTIONAL_FEE_MAX_AMOUNT_LESS_THAN_MIN_AMOUNT"] = 243;
        values[valuesById[244] = "CUSTOM_SCHEDULE_ALREADY_HAS_NO_FEES"] = 244;
        values[valuesById[245] = "CUSTOM_FEE_DENOMINATION_MUST_BE_FUNGIBLE_COMMON"] = 245;
        values[valuesById[246] = "CUSTOM_FRACTIONAL_FEE_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON"] = 246;
        values[valuesById[247] = "INVALID_CUSTOM_FEE_SCHEDULE_KEY"] = 247;
        values[valuesById[248] = "INVALID_TOKEN_MINT_METADATA"] = 248;
        values[valuesById[249] = "INVALID_TOKEN_BURN_METADATA"] = 249;
        values[valuesById[250] = "CURRENT_TREASURY_STILL_OWNS_NFTS"] = 250;
        values[valuesById[251] = "ACCOUNT_STILL_OWNS_NFTS"] = 251;
        values[valuesById[252] = "TREASURY_MUST_OWN_BURNED_NFT"] = 252;
        values[valuesById[253] = "ACCOUNT_DOES_NOT_OWN_WIPED_NFT"] = 253;
        values[valuesById[254] = "ACCOUNT_AMOUNT_TRANSFERS_ONLY_ALLOWED_FOR_FUNGIBLE_COMMON"] = 254;
        values[valuesById[255] = "MAX_NFTS_IN_PRICE_REGIME_HAVE_BEEN_MINTED"] = 255;
        values[valuesById[256] = "PAYER_ACCOUNT_DELETED"] = 256;
        values[valuesById[257] = "CUSTOM_FEE_CHARGING_EXCEEDED_MAX_RECURSION_DEPTH"] = 257;
        values[valuesById[258] = "CUSTOM_FEE_CHARGING_EXCEEDED_MAX_ACCOUNT_AMOUNTS"] = 258;
        values[valuesById[259] = "INSUFFICIENT_SENDER_ACCOUNT_BALANCE_FOR_CUSTOM_FEE"] = 259;
        values[valuesById[260] = "SERIAL_NUMBER_LIMIT_REACHED"] = 260;
        values[valuesById[261] = "CUSTOM_ROYALTY_FEE_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE"] = 261;
        values[valuesById[262] = "NO_REMAINING_AUTOMATIC_ASSOCIATIONS"] = 262;
        values[valuesById[263] = "EXISTING_AUTOMATIC_ASSOCIATIONS_EXCEED_GIVEN_LIMIT"] = 263;
        values[valuesById[264] = "REQUESTED_NUM_AUTOMATIC_ASSOCIATIONS_EXCEEDS_ASSOCIATION_LIMIT"] = 264;
        values[valuesById[265] = "TOKEN_IS_PAUSED"] = 265;
        values[valuesById[266] = "TOKEN_HAS_NO_PAUSE_KEY"] = 266;
        values[valuesById[267] = "INVALID_PAUSE_KEY"] = 267;
        values[valuesById[268] = "FREEZE_UPDATE_FILE_DOES_NOT_EXIST"] = 268;
        values[valuesById[269] = "FREEZE_UPDATE_FILE_HASH_DOES_NOT_MATCH"] = 269;
        values[valuesById[270] = "NO_UPGRADE_HAS_BEEN_PREPARED"] = 270;
        values[valuesById[271] = "NO_FREEZE_IS_SCHEDULED"] = 271;
        values[valuesById[272] = "UPDATE_FILE_HASH_CHANGED_SINCE_PREPARE_UPGRADE"] = 272;
        values[valuesById[273] = "FREEZE_START_TIME_MUST_BE_FUTURE"] = 273;
        values[valuesById[274] = "PREPARED_UPDATE_FILE_IS_IMMUTABLE"] = 274;
        values[valuesById[275] = "FREEZE_ALREADY_SCHEDULED"] = 275;
        values[valuesById[276] = "FREEZE_UPGRADE_IN_PROGRESS"] = 276;
        values[valuesById[277] = "UPDATE_FILE_ID_DOES_NOT_MATCH_PREPARED"] = 277;
        values[valuesById[278] = "UPDATE_FILE_HASH_DOES_NOT_MATCH_PREPARED"] = 278;
        values[valuesById[279] = "CONSENSUS_GAS_EXHAUSTED"] = 279;
        values[valuesById[280] = "REVERTED_SUCCESS"] = 280;
        values[valuesById[281] = "MAX_STORAGE_IN_PRICE_REGIME_HAS_BEEN_USED"] = 281;
        values[valuesById[282] = "INVALID_ALIAS_KEY"] = 282;
        values[valuesById[283] = "UNEXPECTED_TOKEN_DECIMALS"] = 283;
        values[valuesById[284] = "INVALID_PROXY_ACCOUNT_ID"] = 284;
        values[valuesById[285] = "INVALID_TRANSFER_ACCOUNT_ID"] = 285;
        values[valuesById[286] = "INVALID_FEE_COLLECTOR_ACCOUNT_ID"] = 286;
        values[valuesById[287] = "ALIAS_IS_IMMUTABLE"] = 287;
        values[valuesById[288] = "SPENDER_ACCOUNT_SAME_AS_OWNER"] = 288;
        values[valuesById[289] = "AMOUNT_EXCEEDS_TOKEN_MAX_SUPPLY"] = 289;
        values[valuesById[290] = "NEGATIVE_ALLOWANCE_AMOUNT"] = 290;
        values[valuesById[291] = "CANNOT_APPROVE_FOR_ALL_FUNGIBLE_COMMON"] = 291;
        values[valuesById[292] = "SPENDER_DOES_NOT_HAVE_ALLOWANCE"] = 292;
        values[valuesById[293] = "AMOUNT_EXCEEDS_ALLOWANCE"] = 293;
        values[valuesById[294] = "MAX_ALLOWANCES_EXCEEDED"] = 294;
        values[valuesById[295] = "EMPTY_ALLOWANCES"] = 295;
        values[valuesById[296] = "SPENDER_ACCOUNT_REPEATED_IN_ALLOWANCES"] = 296;
        values[valuesById[297] = "REPEATED_SERIAL_NUMS_IN_NFT_ALLOWANCES"] = 297;
        values[valuesById[298] = "FUNGIBLE_TOKEN_IN_NFT_ALLOWANCES"] = 298;
        values[valuesById[299] = "NFT_IN_FUNGIBLE_TOKEN_ALLOWANCES"] = 299;
        values[valuesById[300] = "INVALID_ALLOWANCE_OWNER_ID"] = 300;
        values[valuesById[301] = "INVALID_ALLOWANCE_SPENDER_ID"] = 301;
        values[valuesById[302] = "REPEATED_ALLOWANCES_TO_DELETE"] = 302;
        values[valuesById[303] = "INVALID_DELEGATING_SPENDER"] = 303;
        values[valuesById[304] = "DELEGATING_SPENDER_CANNOT_GRANT_APPROVE_FOR_ALL"] = 304;
        values[valuesById[305] = "DELEGATING_SPENDER_DOES_NOT_HAVE_APPROVE_FOR_ALL"] = 305;
        values[valuesById[306] = "SCHEDULE_EXPIRATION_TIME_TOO_FAR_IN_FUTURE"] = 306;
        values[valuesById[307] = "SCHEDULE_EXPIRATION_TIME_MUST_BE_HIGHER_THAN_CONSENSUS_TIME"] = 307;
        values[valuesById[308] = "SCHEDULE_FUTURE_THROTTLE_EXCEEDED"] = 308;
        values[valuesById[309] = "SCHEDULE_FUTURE_GAS_LIMIT_EXCEEDED"] = 309;
        values[valuesById[310] = "INVALID_ETHEREUM_TRANSACTION"] = 310;
        values[valuesById[311] = "WRONG_CHAIN_ID"] = 311;
        values[valuesById[312] = "WRONG_NONCE"] = 312;
        values[valuesById[313] = "ACCESS_LIST_UNSUPPORTED"] = 313;
        values[valuesById[314] = "SCHEDULE_PENDING_EXPIRATION"] = 314;
        values[valuesById[315] = "CONTRACT_IS_TOKEN_TREASURY"] = 315;
        values[valuesById[316] = "CONTRACT_HAS_NON_ZERO_TOKEN_BALANCES"] = 316;
        values[valuesById[317] = "CONTRACT_EXPIRED_AND_PENDING_REMOVAL"] = 317;
        values[valuesById[318] = "CONTRACT_HAS_NO_AUTO_RENEW_ACCOUNT"] = 318;
        values[valuesById[319] = "PERMANENT_REMOVAL_REQUIRES_SYSTEM_INITIATION"] = 319;
        values[valuesById[320] = "PROXY_ACCOUNT_ID_FIELD_IS_DEPRECATED"] = 320;
        values[valuesById[321] = "SELF_STAKING_IS_NOT_ALLOWED"] = 321;
        values[valuesById[322] = "INVALID_STAKING_ID"] = 322;
        values[valuesById[323] = "STAKING_NOT_ENABLED"] = 323;
        values[valuesById[324] = "INVALID_PRNG_RANGE"] = 324;
        values[valuesById[325] = "MAX_ENTITIES_IN_PRICE_REGIME_HAVE_BEEN_CREATED"] = 325;
        values[valuesById[326] = "INVALID_FULL_PREFIX_SIGNATURE_FOR_PRECOMPILE"] = 326;
        values[valuesById[327] = "INSUFFICIENT_BALANCES_FOR_STORAGE_RENT"] = 327;
        values[valuesById[328] = "MAX_CHILD_RECORDS_EXCEEDED"] = 328;
        values[valuesById[329] = "INSUFFICIENT_BALANCES_FOR_RENEWAL_FEES"] = 329;
        values[valuesById[330] = "TRANSACTION_HAS_UNKNOWN_FIELDS"] = 330;
        values[valuesById[331] = "ACCOUNT_IS_IMMUTABLE"] = 331;
        values[valuesById[332] = "ALIAS_ALREADY_ASSIGNED"] = 332;
        values[valuesById[333] = "INVALID_METADATA_KEY"] = 333;
        values[valuesById[334] = "TOKEN_HAS_NO_METADATA_KEY"] = 334;
        values[valuesById[335] = "MISSING_TOKEN_METADATA"] = 335;
        values[valuesById[336] = "MISSING_SERIAL_NUMBERS"] = 336;
        values[valuesById[337] = "TOKEN_HAS_NO_ADMIN_KEY"] = 337;
        values[valuesById[338] = "NODE_DELETED"] = 338;
        values[valuesById[339] = "INVALID_NODE_ID"] = 339;
        values[valuesById[340] = "INVALID_GOSSIP_ENDPOINT"] = 340;
        values[valuesById[341] = "INVALID_NODE_ACCOUNT_ID"] = 341;
        values[valuesById[342] = "INVALID_NODE_DESCRIPTION"] = 342;
        values[valuesById[343] = "INVALID_SERVICE_ENDPOINT"] = 343;
        values[valuesById[344] = "INVALID_GOSSIP_CA_CERTIFICATE"] = 344;
        values[valuesById[345] = "INVALID_GRPC_CERTIFICATE"] = 345;
        values[valuesById[346] = "INVALID_MAX_AUTO_ASSOCIATIONS"] = 346;
        values[valuesById[347] = "MAX_NODES_CREATED"] = 347;
        values[valuesById[348] = "IP_FQDN_CANNOT_BE_SET_FOR_SAME_ENDPOINT"] = 348;
        values[valuesById[349] = "GOSSIP_ENDPOINT_CANNOT_HAVE_FQDN"] = 349;
        values[valuesById[350] = "FQDN_SIZE_TOO_LARGE"] = 350;
        values[valuesById[351] = "INVALID_ENDPOINT"] = 351;
        values[valuesById[352] = "GOSSIP_ENDPOINTS_EXCEEDED_LIMIT"] = 352;
        values[valuesById[353] = "TOKEN_REFERENCE_REPEATED"] = 353;
        values[valuesById[354] = "INVALID_OWNER_ID"] = 354;
        values[valuesById[355] = "TOKEN_REFERENCE_LIST_SIZE_LIMIT_EXCEEDED"] = 355;
        values[valuesById[356] = "SERVICE_ENDPOINTS_EXCEEDED_LIMIT"] = 356;
        values[valuesById[357] = "INVALID_IPV4_ADDRESS"] = 357;
        values[valuesById[358] = "EMPTY_TOKEN_REFERENCE_LIST"] = 358;
        values[valuesById[359] = "UPDATE_NODE_ACCOUNT_NOT_ALLOWED"] = 359;
        values[valuesById[360] = "TOKEN_HAS_NO_METADATA_OR_SUPPLY_KEY"] = 360;
        values[valuesById[361] = "EMPTY_PENDING_AIRDROP_ID_LIST"] = 361;
        values[valuesById[362] = "PENDING_AIRDROP_ID_REPEATED"] = 362;
        values[valuesById[363] = "PENDING_AIRDROP_ID_LIST_TOO_LONG"] = 363;
        values[valuesById[364] = "PENDING_NFT_AIRDROP_ALREADY_EXISTS"] = 364;
        values[valuesById[365] = "ACCOUNT_HAS_PENDING_AIRDROPS"] = 365;
        values[valuesById[366] = "THROTTLED_AT_CONSENSUS"] = 366;
        values[valuesById[367] = "INVALID_PENDING_AIRDROP_ID"] = 367;
        values[valuesById[368] = "TOKEN_AIRDROP_WITH_FALLBACK_ROYALTY"] = 368;
        values[valuesById[369] = "INVALID_TOKEN_IN_PENDING_AIRDROP"] = 369;
        values[valuesById[370] = "SCHEDULE_EXPIRY_IS_BUSY"] = 370;
        values[valuesById[371] = "INVALID_GRPC_CERTIFICATE_HASH"] = 371;
        values[valuesById[372] = "MISSING_EXPIRY_TIME"] = 372;
        values[valuesById[373] = "NO_SCHEDULING_ALLOWED_AFTER_SCHEDULED_RECURSION"] = 373;
        values[valuesById[374] = "RECURSIVE_SCHEDULING_LIMIT_REACHED"] = 374;
        values[valuesById[375] = "WAITING_FOR_LEDGER_ID"] = 375;
        values[valuesById[376] = "MAX_ENTRIES_FOR_FEE_EXEMPT_KEY_LIST_EXCEEDED"] = 376;
        values[valuesById[377] = "FEE_EXEMPT_KEY_LIST_CONTAINS_DUPLICATED_KEYS"] = 377;
        values[valuesById[378] = "INVALID_KEY_IN_FEE_EXEMPT_KEY_LIST"] = 378;
        values[valuesById[379] = "INVALID_FEE_SCHEDULE_KEY"] = 379;
        values[valuesById[380] = "FEE_SCHEDULE_KEY_CANNOT_BE_UPDATED"] = 380;
        values[valuesById[381] = "FEE_SCHEDULE_KEY_NOT_SET"] = 381;
        values[valuesById[382] = "MAX_CUSTOM_FEE_LIMIT_EXCEEDED"] = 382;
        values[valuesById[383] = "NO_VALID_MAX_CUSTOM_FEE"] = 383;
        values[valuesById[384] = "INVALID_MAX_CUSTOM_FEES"] = 384;
        values[valuesById[385] = "DUPLICATE_DENOMINATION_IN_MAX_CUSTOM_FEE_LIST"] = 385;
        values[valuesById[386] = "DUPLICATE_ACCOUNT_ID_IN_MAX_CUSTOM_FEE_LIST"] = 386;
        values[valuesById[387] = "MAX_CUSTOM_FEES_IS_NOT_SUPPORTED"] = 387;
        values[valuesById[388] = "BATCH_LIST_EMPTY"] = 388;
        values[valuesById[389] = "BATCH_LIST_CONTAINS_DUPLICATES"] = 389;
        values[valuesById[390] = "BATCH_TRANSACTION_IN_BLACKLIST"] = 390;
        values[valuesById[391] = "INNER_TRANSACTION_FAILED"] = 391;
        values[valuesById[392] = "MISSING_BATCH_KEY"] = 392;
        values[valuesById[393] = "BATCH_KEY_SET_ON_NON_INNER_TRANSACTION"] = 393;
        values[valuesById[394] = "INVALID_BATCH_KEY"] = 394;
        values[valuesById[395] = "SCHEDULE_EXPIRY_NOT_CONFIGURABLE"] = 395;
        values[valuesById[396] = "CREATING_SYSTEM_ENTITIES"] = 396;
        values[valuesById[397] = "THROTTLE_GROUP_LCM_OVERFLOW"] = 397;
        values[valuesById[398] = "AIRDROP_CONTAINS_MULTIPLE_SENDERS_FOR_A_TOKEN"] = 398;
        values[valuesById[399] = "GRPC_WEB_PROXY_NOT_SUPPORTED"] = 399;
        values[valuesById[400] = "NFT_TRANSFERS_ONLY_ALLOWED_FOR_NON_FUNGIBLE_UNIQUE"] = 400;
        values[valuesById[401] = "INVALID_SERIALIZED_TX_MESSAGE_HASH_ALGORITHM"] = 401;
        values[valuesById[499] = "WRONG_HOOK_ENTITY_TYPE"] = 499;
        values[valuesById[500] = "EVM_HOOK_GAS_THROTTLED"] = 500;
        values[valuesById[501] = "HOOK_ID_IN_USE"] = 501;
        values[valuesById[502] = "BAD_HOOK_REQUEST"] = 502;
        values[valuesById[503] = "REJECTED_BY_ACCOUNT_ALLOWANCE_HOOK"] = 503;
        values[valuesById[504] = "HOOK_NOT_FOUND"] = 504;
        values[valuesById[505] = "EVM_HOOK_STORAGE_UPDATE_BYTES_TOO_LONG"] = 505;
        values[valuesById[506] = "EVM_HOOK_STORAGE_UPDATE_BYTES_MUST_USE_MINIMAL_REPRESENTATION"] = 506;
        values[valuesById[507] = "INVALID_HOOK_ID"] = 507;
        values[valuesById[508] = "EMPTY_EVM_HOOK_STORAGE_UPDATE"] = 508;
        values[valuesById[509] = "HOOK_ID_REPEATED_IN_CREATION_DETAILS"] = 509;
        values[valuesById[510] = "HOOKS_NOT_ENABLED"] = 510;
        values[valuesById[511] = "HOOK_IS_NOT_AN_EVM_HOOK"] = 511;
        values[valuesById[512] = "HOOK_DELETED"] = 512;
        values[valuesById[513] = "TOO_MANY_EVM_HOOK_STORAGE_UPDATES"] = 513;
        values[valuesById[514] = "HOOK_CREATION_BYTES_MUST_USE_MINIMAL_REPRESENTATION"] = 514;
        values[valuesById[515] = "HOOK_CREATION_BYTES_TOO_LONG"] = 515;
        values[valuesById[516] = "INVALID_HOOK_CREATION_SPEC"] = 516;
        values[valuesById[517] = "HOOK_EXTENSION_EMPTY"] = 517;
        values[valuesById[518] = "INVALID_HOOK_ADMIN_KEY"] = 518;
        values[valuesById[519] = "HOOK_DELETION_REQUIRES_ZERO_STORAGE_SLOTS"] = 519;
        values[valuesById[520] = "CANNOT_SET_HOOKS_AND_APPROVAL"] = 520;
        values[valuesById[521] = "TRANSACTION_REQUIRES_ZERO_HOOKS"] = 521;
        values[valuesById[522] = "INVALID_HOOK_CALL"] = 522;
        values[valuesById[523] = "HOOKS_ARE_NOT_SUPPORTED_IN_AIRDROPS"] = 523;
        values[valuesById[524] = "ACCOUNT_IS_LINKED_TO_A_NODE"] = 524;
        values[valuesById[525] = "HOOKS_EXECUTIONS_REQUIRE_TOP_LEVEL_CRYPTO_TRANSFER"] = 525;
        values[valuesById[526] = "NODE_ACCOUNT_HAS_ZERO_BALANCE"] = 526;
        values[valuesById[527] = "TRANSFER_TO_FEE_COLLECTION_ACCOUNT_NOT_ALLOWED"] = 527;
        values[valuesById[528] = "TOO_MANY_HOOK_INVOCATIONS"] = 528;
        return values;
    })();

    return proto;
})();

export { $root as default };
