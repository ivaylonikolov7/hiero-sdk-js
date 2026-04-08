/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.hashgraph_entity_ids || ($protobuf.roots.hashgraph_entity_ids = {});

export const proto = $root.proto = (() => {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    const proto = {};

    proto.TokenID = (function() {

        /**
         * Properties of a TokenID.
         * @memberof proto
         * @interface ITokenID
         * @property {number|Long|null} [shardNum] A whole number shard identifier.
         * @property {number|Long|null} [realmNum] A whole number realm identifier.
         * @property {number|Long|null} [tokenNum] A whole number token identifier.
         */

        /**
         * Constructs a new TokenID.
         * @memberof proto
         * @classdesc Unique identifier for a token.<br/>
         * As with all entity identifiers within the network, a token identifier
         * consists of a combination of shard number, realm number, and entity number.
         * Each of these numbers is unique within its scope (shard > realm > entity).
         * @implements ITokenID
         * @constructor
         * @param {proto.ITokenID=} [properties] Properties to set
         */
        function TokenID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A whole number shard identifier.
         * @member {number|Long} shardNum
         * @memberof proto.TokenID
         * @instance
         */
        TokenID.prototype.shardNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number realm identifier.
         * @member {number|Long} realmNum
         * @memberof proto.TokenID
         * @instance
         */
        TokenID.prototype.realmNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number token identifier.
         * @member {number|Long} tokenNum
         * @memberof proto.TokenID
         * @instance
         */
        TokenID.prototype.tokenNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TokenID instance using the specified properties.
         * @function create
         * @memberof proto.TokenID
         * @static
         * @param {proto.ITokenID=} [properties] Properties to set
         * @returns {proto.TokenID} TokenID instance
         */
        TokenID.create = function create(properties) {
            return new TokenID(properties);
        };

        /**
         * Encodes the specified TokenID message. Does not implicitly {@link proto.TokenID.verify|verify} messages.
         * @function encode
         * @memberof proto.TokenID
         * @static
         * @param {proto.ITokenID} message TokenID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shardNum != null && Object.hasOwnProperty.call(message, "shardNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.shardNum);
            if (message.realmNum != null && Object.hasOwnProperty.call(message, "realmNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.realmNum);
            if (message.tokenNum != null && Object.hasOwnProperty.call(message, "tokenNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.tokenNum);
            return writer;
        };

        /**
         * Encodes the specified TokenID message, length delimited. Does not implicitly {@link proto.TokenID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TokenID
         * @static
         * @param {proto.ITokenID} message TokenID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenID message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TokenID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TokenID} TokenID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TokenID();
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
                        message.tokenNum = reader.int64();
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
         * Decodes a TokenID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TokenID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TokenID} TokenID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenID message.
         * @function verify
         * @memberof proto.TokenID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shardNum != null && message.hasOwnProperty("shardNum"))
                if (!$util.isInteger(message.shardNum) && !(message.shardNum && $util.isInteger(message.shardNum.low) && $util.isInteger(message.shardNum.high)))
                    return "shardNum: integer|Long expected";
            if (message.realmNum != null && message.hasOwnProperty("realmNum"))
                if (!$util.isInteger(message.realmNum) && !(message.realmNum && $util.isInteger(message.realmNum.low) && $util.isInteger(message.realmNum.high)))
                    return "realmNum: integer|Long expected";
            if (message.tokenNum != null && message.hasOwnProperty("tokenNum"))
                if (!$util.isInteger(message.tokenNum) && !(message.tokenNum && $util.isInteger(message.tokenNum.low) && $util.isInteger(message.tokenNum.high)))
                    return "tokenNum: integer|Long expected";
            return null;
        };

        /**
         * Creates a TokenID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TokenID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TokenID} TokenID
         */
        TokenID.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TokenID)
                return object;
            let message = new $root.proto.TokenID();
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
            if (object.tokenNum != null)
                if ($util.Long)
                    (message.tokenNum = $util.Long.fromValue(object.tokenNum)).unsigned = false;
                else if (typeof object.tokenNum === "string")
                    message.tokenNum = parseInt(object.tokenNum, 10);
                else if (typeof object.tokenNum === "number")
                    message.tokenNum = object.tokenNum;
                else if (typeof object.tokenNum === "object")
                    message.tokenNum = new $util.LongBits(object.tokenNum.low >>> 0, object.tokenNum.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TokenID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TokenID
         * @static
         * @param {proto.TokenID} message TokenID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenID.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.tokenNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tokenNum = options.longs === String ? "0" : 0;
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
            if (message.tokenNum != null && message.hasOwnProperty("tokenNum"))
                if (typeof message.tokenNum === "number")
                    object.tokenNum = options.longs === String ? String(message.tokenNum) : message.tokenNum;
                else
                    object.tokenNum = options.longs === String ? $util.Long.prototype.toString.call(message.tokenNum) : options.longs === Number ? new $util.LongBits(message.tokenNum.low >>> 0, message.tokenNum.high >>> 0).toNumber() : message.tokenNum;
            return object;
        };

        /**
         * Converts this TokenID to JSON.
         * @function toJSON
         * @memberof proto.TokenID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenID
         * @function getTypeUrl
         * @memberof proto.TokenID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TokenID";
        };

        return TokenID;
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

    proto.NftID = (function() {

        /**
         * Properties of a NftID.
         * @memberof proto
         * @interface INftID
         * @property {proto.ITokenID|null} [token_ID] A token identifier.<br/>
         * This token represents the collection containing this NFT.
         * @property {number|Long|null} [serialNumber] A unique serial number.<br/>
         * This serial number is unique within its token type.
         */

        /**
         * Constructs a new NftID.
         * @memberof proto
         * @classdesc An identifier for a unique token (or "NFT"), used by both contract
         * and token services.
         * @implements INftID
         * @constructor
         * @param {proto.INftID=} [properties] Properties to set
         */
        function NftID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A token identifier.<br/>
         * This token represents the collection containing this NFT.
         * @member {proto.ITokenID|null|undefined} token_ID
         * @memberof proto.NftID
         * @instance
         */
        NftID.prototype.token_ID = null;

        /**
         * A unique serial number.<br/>
         * This serial number is unique within its token type.
         * @member {number|Long} serialNumber
         * @memberof proto.NftID
         * @instance
         */
        NftID.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new NftID instance using the specified properties.
         * @function create
         * @memberof proto.NftID
         * @static
         * @param {proto.INftID=} [properties] Properties to set
         * @returns {proto.NftID} NftID instance
         */
        NftID.create = function create(properties) {
            return new NftID(properties);
        };

        /**
         * Encodes the specified NftID message. Does not implicitly {@link proto.NftID.verify|verify} messages.
         * @function encode
         * @memberof proto.NftID
         * @static
         * @param {proto.INftID} message NftID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NftID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token_ID != null && Object.hasOwnProperty.call(message, "token_ID"))
                $root.proto.TokenID.encode(message.token_ID, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.serialNumber);
            return writer;
        };

        /**
         * Encodes the specified NftID message, length delimited. Does not implicitly {@link proto.NftID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NftID
         * @static
         * @param {proto.INftID} message NftID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NftID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NftID message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NftID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NftID} NftID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NftID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NftID();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.token_ID = $root.proto.TokenID.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.serialNumber = reader.int64();
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
         * Decodes a NftID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NftID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NftID} NftID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NftID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NftID message.
         * @function verify
         * @memberof proto.NftID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NftID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token_ID != null && message.hasOwnProperty("token_ID")) {
                let error = $root.proto.TokenID.verify(message.token_ID);
                if (error)
                    return "token_ID." + error;
            }
            if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                    return "serialNumber: integer|Long expected";
            return null;
        };

        /**
         * Creates a NftID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.NftID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.NftID} NftID
         */
        NftID.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.NftID)
                return object;
            let message = new $root.proto.NftID();
            if (object.token_ID != null) {
                if (typeof object.token_ID !== "object")
                    throw TypeError(".proto.NftID.token_ID: object expected");
                message.token_ID = $root.proto.TokenID.fromObject(object.token_ID);
            }
            if (object.serialNumber != null)
                if ($util.Long)
                    (message.serialNumber = $util.Long.fromValue(object.serialNumber)).unsigned = false;
                else if (typeof object.serialNumber === "string")
                    message.serialNumber = parseInt(object.serialNumber, 10);
                else if (typeof object.serialNumber === "number")
                    message.serialNumber = object.serialNumber;
                else if (typeof object.serialNumber === "object")
                    message.serialNumber = new $util.LongBits(object.serialNumber.low >>> 0, object.serialNumber.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a NftID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.NftID
         * @static
         * @param {proto.NftID} message NftID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NftID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.token_ID = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serialNumber = options.longs === String ? "0" : 0;
            }
            if (message.token_ID != null && message.hasOwnProperty("token_ID"))
                object.token_ID = $root.proto.TokenID.toObject(message.token_ID, options);
            if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                if (typeof message.serialNumber === "number")
                    object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
                else
                    object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
            return object;
        };

        /**
         * Converts this NftID to JSON.
         * @function toJSON
         * @memberof proto.NftID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NftID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NftID
         * @function getTypeUrl
         * @memberof proto.NftID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NftID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.NftID";
        };

        return NftID;
    })();

    proto.FileID = (function() {

        /**
         * Properties of a FileID.
         * @memberof proto
         * @interface IFileID
         * @property {number|Long|null} [shardNum] A whole number shard identifier.
         * @property {number|Long|null} [realmNum] A whole number realm identifier.
         * @property {number|Long|null} [fileNum] A whole number file identifier, unique within its realm and shard.
         */

        /**
         * Constructs a new FileID.
         * @memberof proto
         * @classdesc An identifier for a File within the network.
         * @implements IFileID
         * @constructor
         * @param {proto.IFileID=} [properties] Properties to set
         */
        function FileID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A whole number shard identifier.
         * @member {number|Long} shardNum
         * @memberof proto.FileID
         * @instance
         */
        FileID.prototype.shardNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number realm identifier.
         * @member {number|Long} realmNum
         * @memberof proto.FileID
         * @instance
         */
        FileID.prototype.realmNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number file identifier, unique within its realm and shard.
         * @member {number|Long} fileNum
         * @memberof proto.FileID
         * @instance
         */
        FileID.prototype.fileNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FileID instance using the specified properties.
         * @function create
         * @memberof proto.FileID
         * @static
         * @param {proto.IFileID=} [properties] Properties to set
         * @returns {proto.FileID} FileID instance
         */
        FileID.create = function create(properties) {
            return new FileID(properties);
        };

        /**
         * Encodes the specified FileID message. Does not implicitly {@link proto.FileID.verify|verify} messages.
         * @function encode
         * @memberof proto.FileID
         * @static
         * @param {proto.IFileID} message FileID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shardNum != null && Object.hasOwnProperty.call(message, "shardNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.shardNum);
            if (message.realmNum != null && Object.hasOwnProperty.call(message, "realmNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.realmNum);
            if (message.fileNum != null && Object.hasOwnProperty.call(message, "fileNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.fileNum);
            return writer;
        };

        /**
         * Encodes the specified FileID message, length delimited. Does not implicitly {@link proto.FileID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FileID
         * @static
         * @param {proto.IFileID} message FileID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileID message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FileID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FileID} FileID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FileID();
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
                        message.fileNum = reader.int64();
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
         * Decodes a FileID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FileID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FileID} FileID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileID message.
         * @function verify
         * @memberof proto.FileID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shardNum != null && message.hasOwnProperty("shardNum"))
                if (!$util.isInteger(message.shardNum) && !(message.shardNum && $util.isInteger(message.shardNum.low) && $util.isInteger(message.shardNum.high)))
                    return "shardNum: integer|Long expected";
            if (message.realmNum != null && message.hasOwnProperty("realmNum"))
                if (!$util.isInteger(message.realmNum) && !(message.realmNum && $util.isInteger(message.realmNum.low) && $util.isInteger(message.realmNum.high)))
                    return "realmNum: integer|Long expected";
            if (message.fileNum != null && message.hasOwnProperty("fileNum"))
                if (!$util.isInteger(message.fileNum) && !(message.fileNum && $util.isInteger(message.fileNum.low) && $util.isInteger(message.fileNum.high)))
                    return "fileNum: integer|Long expected";
            return null;
        };

        /**
         * Creates a FileID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FileID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FileID} FileID
         */
        FileID.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FileID)
                return object;
            let message = new $root.proto.FileID();
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
            if (object.fileNum != null)
                if ($util.Long)
                    (message.fileNum = $util.Long.fromValue(object.fileNum)).unsigned = false;
                else if (typeof object.fileNum === "string")
                    message.fileNum = parseInt(object.fileNum, 10);
                else if (typeof object.fileNum === "number")
                    message.fileNum = object.fileNum;
                else if (typeof object.fileNum === "object")
                    message.fileNum = new $util.LongBits(object.fileNum.low >>> 0, object.fileNum.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FileID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FileID
         * @static
         * @param {proto.FileID} message FileID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileID.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.fileNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fileNum = options.longs === String ? "0" : 0;
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
            if (message.fileNum != null && message.hasOwnProperty("fileNum"))
                if (typeof message.fileNum === "number")
                    object.fileNum = options.longs === String ? String(message.fileNum) : message.fileNum;
                else
                    object.fileNum = options.longs === String ? $util.Long.prototype.toString.call(message.fileNum) : options.longs === Number ? new $util.LongBits(message.fileNum.low >>> 0, message.fileNum.high >>> 0).toNumber() : message.fileNum;
            return object;
        };

        /**
         * Converts this FileID to JSON.
         * @function toJSON
         * @memberof proto.FileID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileID
         * @function getTypeUrl
         * @memberof proto.FileID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.FileID";
        };

        return FileID;
    })();

    proto.ContractID = (function() {

        /**
         * Properties of a ContractID.
         * @memberof proto
         * @interface IContractID
         * @property {number|Long|null} [shardNum] A whole number shard identifier.
         * @property {number|Long|null} [realmNum] A whole number realm identifier.
         * @property {number|Long|null} [contractNum] A whole number contract identifier, unique within its realm and shard.
         * @property {Uint8Array|null} [evmAddress] A 20-byte EVM address of the contract to call.
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

        /**
         * Constructs a new ContractID.
         * @memberof proto
         * @classdesc An identifier for a smart contract within the network.
         * @implements IContractID
         * @constructor
         * @param {proto.IContractID=} [properties] Properties to set
         */
        function ContractID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A whole number shard identifier.
         * @member {number|Long} shardNum
         * @memberof proto.ContractID
         * @instance
         */
        ContractID.prototype.shardNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number realm identifier.
         * @member {number|Long} realmNum
         * @memberof proto.ContractID
         * @instance
         */
        ContractID.prototype.realmNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number contract identifier, unique within its realm and shard.
         * @member {number|Long|null|undefined} contractNum
         * @memberof proto.ContractID
         * @instance
         */
        ContractID.prototype.contractNum = null;

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
         * @member {Uint8Array|null|undefined} evmAddress
         * @memberof proto.ContractID
         * @instance
         */
        ContractID.prototype.evmAddress = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ContractID contract.
         * @member {"contractNum"|"evmAddress"|undefined} contract
         * @memberof proto.ContractID
         * @instance
         */
        Object.defineProperty(ContractID.prototype, "contract", {
            get: $util.oneOfGetter($oneOfFields = ["contractNum", "evmAddress"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ContractID instance using the specified properties.
         * @function create
         * @memberof proto.ContractID
         * @static
         * @param {proto.IContractID=} [properties] Properties to set
         * @returns {proto.ContractID} ContractID instance
         */
        ContractID.create = function create(properties) {
            return new ContractID(properties);
        };

        /**
         * Encodes the specified ContractID message. Does not implicitly {@link proto.ContractID.verify|verify} messages.
         * @function encode
         * @memberof proto.ContractID
         * @static
         * @param {proto.IContractID} message ContractID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shardNum != null && Object.hasOwnProperty.call(message, "shardNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.shardNum);
            if (message.realmNum != null && Object.hasOwnProperty.call(message, "realmNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.realmNum);
            if (message.contractNum != null && Object.hasOwnProperty.call(message, "contractNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.contractNum);
            if (message.evmAddress != null && Object.hasOwnProperty.call(message, "evmAddress"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.evmAddress);
            return writer;
        };

        /**
         * Encodes the specified ContractID message, length delimited. Does not implicitly {@link proto.ContractID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ContractID
         * @static
         * @param {proto.IContractID} message ContractID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContractID message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ContractID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ContractID} ContractID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ContractID();
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
                        message.contractNum = reader.int64();
                        break;
                    }
                case 4: {
                        message.evmAddress = reader.bytes();
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
         * Decodes a ContractID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ContractID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ContractID} ContractID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContractID message.
         * @function verify
         * @memberof proto.ContractID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContractID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.shardNum != null && message.hasOwnProperty("shardNum"))
                if (!$util.isInteger(message.shardNum) && !(message.shardNum && $util.isInteger(message.shardNum.low) && $util.isInteger(message.shardNum.high)))
                    return "shardNum: integer|Long expected";
            if (message.realmNum != null && message.hasOwnProperty("realmNum"))
                if (!$util.isInteger(message.realmNum) && !(message.realmNum && $util.isInteger(message.realmNum.low) && $util.isInteger(message.realmNum.high)))
                    return "realmNum: integer|Long expected";
            if (message.contractNum != null && message.hasOwnProperty("contractNum")) {
                properties.contract = 1;
                if (!$util.isInteger(message.contractNum) && !(message.contractNum && $util.isInteger(message.contractNum.low) && $util.isInteger(message.contractNum.high)))
                    return "contractNum: integer|Long expected";
            }
            if (message.evmAddress != null && message.hasOwnProperty("evmAddress")) {
                if (properties.contract === 1)
                    return "contract: multiple values";
                properties.contract = 1;
                if (!(message.evmAddress && typeof message.evmAddress.length === "number" || $util.isString(message.evmAddress)))
                    return "evmAddress: buffer expected";
            }
            return null;
        };

        /**
         * Creates a ContractID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ContractID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ContractID} ContractID
         */
        ContractID.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ContractID)
                return object;
            let message = new $root.proto.ContractID();
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
            if (object.contractNum != null)
                if ($util.Long)
                    (message.contractNum = $util.Long.fromValue(object.contractNum)).unsigned = false;
                else if (typeof object.contractNum === "string")
                    message.contractNum = parseInt(object.contractNum, 10);
                else if (typeof object.contractNum === "number")
                    message.contractNum = object.contractNum;
                else if (typeof object.contractNum === "object")
                    message.contractNum = new $util.LongBits(object.contractNum.low >>> 0, object.contractNum.high >>> 0).toNumber();
            if (object.evmAddress != null)
                if (typeof object.evmAddress === "string")
                    $util.base64.decode(object.evmAddress, message.evmAddress = $util.newBuffer($util.base64.length(object.evmAddress)), 0);
                else if (object.evmAddress.length >= 0)
                    message.evmAddress = object.evmAddress;
            return message;
        };

        /**
         * Creates a plain object from a ContractID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ContractID
         * @static
         * @param {proto.ContractID} message ContractID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContractID.toObject = function toObject(message, options) {
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
            if (message.contractNum != null && message.hasOwnProperty("contractNum")) {
                if (typeof message.contractNum === "number")
                    object.contractNum = options.longs === String ? String(message.contractNum) : message.contractNum;
                else
                    object.contractNum = options.longs === String ? $util.Long.prototype.toString.call(message.contractNum) : options.longs === Number ? new $util.LongBits(message.contractNum.low >>> 0, message.contractNum.high >>> 0).toNumber() : message.contractNum;
                if (options.oneofs)
                    object.contract = "contractNum";
            }
            if (message.evmAddress != null && message.hasOwnProperty("evmAddress")) {
                object.evmAddress = options.bytes === String ? $util.base64.encode(message.evmAddress, 0, message.evmAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.evmAddress) : message.evmAddress;
                if (options.oneofs)
                    object.contract = "evmAddress";
            }
            return object;
        };

        /**
         * Converts this ContractID to JSON.
         * @function toJSON
         * @memberof proto.ContractID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContractID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ContractID
         * @function getTypeUrl
         * @memberof proto.ContractID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ContractID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ContractID";
        };

        return ContractID;
    })();

    proto.TopicID = (function() {

        /**
         * Properties of a TopicID.
         * @memberof proto
         * @interface ITopicID
         * @property {number|Long|null} [shardNum] A whole number shard identifier.
         * @property {number|Long|null} [realmNum] A whole number realm identifier.
         * @property {number|Long|null} [topicNum] A whole number topic identifier, unique within its realm and shard.
         */

        /**
         * Constructs a new TopicID.
         * @memberof proto
         * @classdesc An unique identifier for a topic.<br/>
         * Topics are part of the consensus service, messages are published to a topic.
         * @implements ITopicID
         * @constructor
         * @param {proto.ITopicID=} [properties] Properties to set
         */
        function TopicID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A whole number shard identifier.
         * @member {number|Long} shardNum
         * @memberof proto.TopicID
         * @instance
         */
        TopicID.prototype.shardNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number realm identifier.
         * @member {number|Long} realmNum
         * @memberof proto.TopicID
         * @instance
         */
        TopicID.prototype.realmNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number topic identifier, unique within its realm and shard.
         * @member {number|Long} topicNum
         * @memberof proto.TopicID
         * @instance
         */
        TopicID.prototype.topicNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TopicID instance using the specified properties.
         * @function create
         * @memberof proto.TopicID
         * @static
         * @param {proto.ITopicID=} [properties] Properties to set
         * @returns {proto.TopicID} TopicID instance
         */
        TopicID.create = function create(properties) {
            return new TopicID(properties);
        };

        /**
         * Encodes the specified TopicID message. Does not implicitly {@link proto.TopicID.verify|verify} messages.
         * @function encode
         * @memberof proto.TopicID
         * @static
         * @param {proto.ITopicID} message TopicID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopicID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shardNum != null && Object.hasOwnProperty.call(message, "shardNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.shardNum);
            if (message.realmNum != null && Object.hasOwnProperty.call(message, "realmNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.realmNum);
            if (message.topicNum != null && Object.hasOwnProperty.call(message, "topicNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.topicNum);
            return writer;
        };

        /**
         * Encodes the specified TopicID message, length delimited. Does not implicitly {@link proto.TopicID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TopicID
         * @static
         * @param {proto.ITopicID} message TopicID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopicID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TopicID message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TopicID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TopicID} TopicID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopicID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TopicID();
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
                        message.topicNum = reader.int64();
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
         * Decodes a TopicID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TopicID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TopicID} TopicID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopicID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TopicID message.
         * @function verify
         * @memberof proto.TopicID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TopicID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shardNum != null && message.hasOwnProperty("shardNum"))
                if (!$util.isInteger(message.shardNum) && !(message.shardNum && $util.isInteger(message.shardNum.low) && $util.isInteger(message.shardNum.high)))
                    return "shardNum: integer|Long expected";
            if (message.realmNum != null && message.hasOwnProperty("realmNum"))
                if (!$util.isInteger(message.realmNum) && !(message.realmNum && $util.isInteger(message.realmNum.low) && $util.isInteger(message.realmNum.high)))
                    return "realmNum: integer|Long expected";
            if (message.topicNum != null && message.hasOwnProperty("topicNum"))
                if (!$util.isInteger(message.topicNum) && !(message.topicNum && $util.isInteger(message.topicNum.low) && $util.isInteger(message.topicNum.high)))
                    return "topicNum: integer|Long expected";
            return null;
        };

        /**
         * Creates a TopicID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TopicID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TopicID} TopicID
         */
        TopicID.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TopicID)
                return object;
            let message = new $root.proto.TopicID();
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
            if (object.topicNum != null)
                if ($util.Long)
                    (message.topicNum = $util.Long.fromValue(object.topicNum)).unsigned = false;
                else if (typeof object.topicNum === "string")
                    message.topicNum = parseInt(object.topicNum, 10);
                else if (typeof object.topicNum === "number")
                    message.topicNum = object.topicNum;
                else if (typeof object.topicNum === "object")
                    message.topicNum = new $util.LongBits(object.topicNum.low >>> 0, object.topicNum.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TopicID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TopicID
         * @static
         * @param {proto.TopicID} message TopicID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TopicID.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.topicNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.topicNum = options.longs === String ? "0" : 0;
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
            if (message.topicNum != null && message.hasOwnProperty("topicNum"))
                if (typeof message.topicNum === "number")
                    object.topicNum = options.longs === String ? String(message.topicNum) : message.topicNum;
                else
                    object.topicNum = options.longs === String ? $util.Long.prototype.toString.call(message.topicNum) : options.longs === Number ? new $util.LongBits(message.topicNum.low >>> 0, message.topicNum.high >>> 0).toNumber() : message.topicNum;
            return object;
        };

        /**
         * Converts this TopicID to JSON.
         * @function toJSON
         * @memberof proto.TopicID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TopicID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TopicID
         * @function getTypeUrl
         * @memberof proto.TopicID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TopicID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TopicID";
        };

        return TopicID;
    })();

    proto.ScheduleID = (function() {

        /**
         * Properties of a ScheduleID.
         * @memberof proto
         * @interface IScheduleID
         * @property {number|Long|null} [shardNum] A whole number shard
         * @property {number|Long|null} [realmNum] A whole number realm
         * @property {number|Long|null} [scheduleNum] A whole number schedule, unique within its realm and shard
         */

        /**
         * Constructs a new ScheduleID.
         * @memberof proto
         * @classdesc An unique identifier for a Schedule
         * @implements IScheduleID
         * @constructor
         * @param {proto.IScheduleID=} [properties] Properties to set
         */
        function ScheduleID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A whole number shard
         * @member {number|Long} shardNum
         * @memberof proto.ScheduleID
         * @instance
         */
        ScheduleID.prototype.shardNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number realm
         * @member {number|Long} realmNum
         * @memberof proto.ScheduleID
         * @instance
         */
        ScheduleID.prototype.realmNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number schedule, unique within its realm and shard
         * @member {number|Long} scheduleNum
         * @memberof proto.ScheduleID
         * @instance
         */
        ScheduleID.prototype.scheduleNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ScheduleID instance using the specified properties.
         * @function create
         * @memberof proto.ScheduleID
         * @static
         * @param {proto.IScheduleID=} [properties] Properties to set
         * @returns {proto.ScheduleID} ScheduleID instance
         */
        ScheduleID.create = function create(properties) {
            return new ScheduleID(properties);
        };

        /**
         * Encodes the specified ScheduleID message. Does not implicitly {@link proto.ScheduleID.verify|verify} messages.
         * @function encode
         * @memberof proto.ScheduleID
         * @static
         * @param {proto.IScheduleID} message ScheduleID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScheduleID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shardNum != null && Object.hasOwnProperty.call(message, "shardNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.shardNum);
            if (message.realmNum != null && Object.hasOwnProperty.call(message, "realmNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.realmNum);
            if (message.scheduleNum != null && Object.hasOwnProperty.call(message, "scheduleNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.scheduleNum);
            return writer;
        };

        /**
         * Encodes the specified ScheduleID message, length delimited. Does not implicitly {@link proto.ScheduleID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ScheduleID
         * @static
         * @param {proto.IScheduleID} message ScheduleID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScheduleID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScheduleID message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ScheduleID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ScheduleID} ScheduleID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScheduleID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ScheduleID();
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
                        message.scheduleNum = reader.int64();
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
         * Decodes a ScheduleID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ScheduleID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ScheduleID} ScheduleID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScheduleID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScheduleID message.
         * @function verify
         * @memberof proto.ScheduleID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScheduleID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shardNum != null && message.hasOwnProperty("shardNum"))
                if (!$util.isInteger(message.shardNum) && !(message.shardNum && $util.isInteger(message.shardNum.low) && $util.isInteger(message.shardNum.high)))
                    return "shardNum: integer|Long expected";
            if (message.realmNum != null && message.hasOwnProperty("realmNum"))
                if (!$util.isInteger(message.realmNum) && !(message.realmNum && $util.isInteger(message.realmNum.low) && $util.isInteger(message.realmNum.high)))
                    return "realmNum: integer|Long expected";
            if (message.scheduleNum != null && message.hasOwnProperty("scheduleNum"))
                if (!$util.isInteger(message.scheduleNum) && !(message.scheduleNum && $util.isInteger(message.scheduleNum.low) && $util.isInteger(message.scheduleNum.high)))
                    return "scheduleNum: integer|Long expected";
            return null;
        };

        /**
         * Creates a ScheduleID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ScheduleID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ScheduleID} ScheduleID
         */
        ScheduleID.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ScheduleID)
                return object;
            let message = new $root.proto.ScheduleID();
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
            if (object.scheduleNum != null)
                if ($util.Long)
                    (message.scheduleNum = $util.Long.fromValue(object.scheduleNum)).unsigned = false;
                else if (typeof object.scheduleNum === "string")
                    message.scheduleNum = parseInt(object.scheduleNum, 10);
                else if (typeof object.scheduleNum === "number")
                    message.scheduleNum = object.scheduleNum;
                else if (typeof object.scheduleNum === "object")
                    message.scheduleNum = new $util.LongBits(object.scheduleNum.low >>> 0, object.scheduleNum.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ScheduleID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ScheduleID
         * @static
         * @param {proto.ScheduleID} message ScheduleID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ScheduleID.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.scheduleNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scheduleNum = options.longs === String ? "0" : 0;
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
            if (message.scheduleNum != null && message.hasOwnProperty("scheduleNum"))
                if (typeof message.scheduleNum === "number")
                    object.scheduleNum = options.longs === String ? String(message.scheduleNum) : message.scheduleNum;
                else
                    object.scheduleNum = options.longs === String ? $util.Long.prototype.toString.call(message.scheduleNum) : options.longs === Number ? new $util.LongBits(message.scheduleNum.low >>> 0, message.scheduleNum.high >>> 0).toNumber() : message.scheduleNum;
            return object;
        };

        /**
         * Converts this ScheduleID to JSON.
         * @function toJSON
         * @memberof proto.ScheduleID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ScheduleID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ScheduleID
         * @function getTypeUrl
         * @memberof proto.ScheduleID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ScheduleID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ScheduleID";
        };

        return ScheduleID;
    })();

    proto.TransactionID = (function() {

        /**
         * Properties of a TransactionID.
         * @memberof proto
         * @interface ITransactionID
         * @property {proto.ITimestamp|null} [transactionValidStart] A timestamp for the transaction start time.<br/>
         * This is the earliest expected start time for this transaction.
         * <p>
         * This value MUST be strictly less than `consensusTimestamp` when the
         * transaction is submitted.
         * @property {proto.IAccountID|null} [accountID] An Account identifier.
         * <p>
         * The identified account SHALL pay transaction fees for this transaction.
         * @property {boolean|null} [scheduled] A scheduled transaction flag.<br/>
         * If set, this transaction represents the execution of a Schedule after
         * all necessary signatures are gathered.
         * <p>
         * This flag MUST NOT be set in a user-submitted transaction.
         * @property {number|null} [nonce] An identifier for an internal transaction.<br/>
         * An internal transaction is one that was spawned as part of handling a
         * user transaction. These internal transactions share the
         * transactionValidStart and accountID of the user transaction, so a nonce
         * is necessary to give them a unique TransactionID.
         * <p>
         * An example is when a "parent" ContractCreate or ContractCall transaction
         * calls one or more HTS precompiled contracts; each of the "child"
         * transactions spawned for a precompile has a transaction id with a
         * different nonce.
         * <p>
         * This value MUST be unset for user-submitted transactions.
         */

        /**
         * Constructs a new TransactionID.
         * @memberof proto
         * @classdesc A transaction identifier.<br/>
         * This is used for retrieving receipts and records for a transaction
         * and internally by the network for detecting when duplicate transactions are
         * submitted.
         * 
         * A transaction may be processed more reliably by submitting it to
         * several nodes, each with a different node account, but all with the same
         * TransactionID. Then, the transaction will take effect when the first of all
         * those nodes submits the transaction and it reaches consensus. The other
         * transactions SHALL NOT be executed (and SHALL result in a
         * `DUPLICATE_TRANSACTION` response).<br/>
         * Multiple submission increase reliability on the assumption that an error in,
         * for example, network connectivity will not affect all nodes equally. Latency
         * might be slightly lower, if one node is handling intake significantly slower
         * than others, for example. The base transaction fee is required for each
         * submission, however, so the total fees charged are significantly higher when
         * using this approach.
         * 
         * ### Requirements
         * Each transaction identifier MUST be unique.<br/>
         * Multiple transactions MAY be submitted with the same transaction
         * identifier, but all except the first SHALL be rejected as duplicate
         * transactions.<br/>
         * An identifier MUST specify a `payer` account to be charged all fees
         * associated with the transaction.<br/>
         * The `payer` account MUST exist and MUST have sufficient HBAR to pay all
         * transaction fees.<br/>
         * An identifier MUST specify a "valid start time".<br/>
         * The "valid start time" MUST be strictly _earlier_ than the current
         * network consensus time when submitted.<br/>
         * The "valid start time" MUST NOT be more than `transaction.maxValidDuration`
         * seconds before the current network consensus time when submitted.<br/>
         * A client-submitted transaction MUST NOT set the `scheduled` flag.
         * 
         * ### Additional Notes
         * 
         * Additional items applicable to Scheduled Transactions:
         * 
         * - The ID of a Scheduled Transaction, once executed, SHALL inherit both
         * `transactionValidStart` and `accountID` from the `ScheduleCreate`
         * transaction that created the schedule.
         * - The `scheduled` property SHALL be set for Scheduled Transactions.
         * @implements ITransactionID
         * @constructor
         * @param {proto.ITransactionID=} [properties] Properties to set
         */
        function TransactionID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A timestamp for the transaction start time.<br/>
         * This is the earliest expected start time for this transaction.
         * <p>
         * This value MUST be strictly less than `consensusTimestamp` when the
         * transaction is submitted.
         * @member {proto.ITimestamp|null|undefined} transactionValidStart
         * @memberof proto.TransactionID
         * @instance
         */
        TransactionID.prototype.transactionValidStart = null;

        /**
         * An Account identifier.
         * <p>
         * The identified account SHALL pay transaction fees for this transaction.
         * @member {proto.IAccountID|null|undefined} accountID
         * @memberof proto.TransactionID
         * @instance
         */
        TransactionID.prototype.accountID = null;

        /**
         * A scheduled transaction flag.<br/>
         * If set, this transaction represents the execution of a Schedule after
         * all necessary signatures are gathered.
         * <p>
         * This flag MUST NOT be set in a user-submitted transaction.
         * @member {boolean} scheduled
         * @memberof proto.TransactionID
         * @instance
         */
        TransactionID.prototype.scheduled = false;

        /**
         * An identifier for an internal transaction.<br/>
         * An internal transaction is one that was spawned as part of handling a
         * user transaction. These internal transactions share the
         * transactionValidStart and accountID of the user transaction, so a nonce
         * is necessary to give them a unique TransactionID.
         * <p>
         * An example is when a "parent" ContractCreate or ContractCall transaction
         * calls one or more HTS precompiled contracts; each of the "child"
         * transactions spawned for a precompile has a transaction id with a
         * different nonce.
         * <p>
         * This value MUST be unset for user-submitted transactions.
         * @member {number} nonce
         * @memberof proto.TransactionID
         * @instance
         */
        TransactionID.prototype.nonce = 0;

        /**
         * Creates a new TransactionID instance using the specified properties.
         * @function create
         * @memberof proto.TransactionID
         * @static
         * @param {proto.ITransactionID=} [properties] Properties to set
         * @returns {proto.TransactionID} TransactionID instance
         */
        TransactionID.create = function create(properties) {
            return new TransactionID(properties);
        };

        /**
         * Encodes the specified TransactionID message. Does not implicitly {@link proto.TransactionID.verify|verify} messages.
         * @function encode
         * @memberof proto.TransactionID
         * @static
         * @param {proto.ITransactionID} message TransactionID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transactionValidStart != null && Object.hasOwnProperty.call(message, "transactionValidStart"))
                $root.proto.Timestamp.encode(message.transactionValidStart, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.accountID != null && Object.hasOwnProperty.call(message, "accountID"))
                $root.proto.AccountID.encode(message.accountID, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.scheduled != null && Object.hasOwnProperty.call(message, "scheduled"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.scheduled);
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nonce);
            return writer;
        };

        /**
         * Encodes the specified TransactionID message, length delimited. Does not implicitly {@link proto.TransactionID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TransactionID
         * @static
         * @param {proto.ITransactionID} message TransactionID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransactionID message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TransactionID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TransactionID} TransactionID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TransactionID();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.transactionValidStart = $root.proto.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.accountID = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.scheduled = reader.bool();
                        break;
                    }
                case 4: {
                        message.nonce = reader.int32();
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
         * Decodes a TransactionID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TransactionID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TransactionID} TransactionID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransactionID message.
         * @function verify
         * @memberof proto.TransactionID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransactionID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transactionValidStart != null && message.hasOwnProperty("transactionValidStart")) {
                let error = $root.proto.Timestamp.verify(message.transactionValidStart);
                if (error)
                    return "transactionValidStart." + error;
            }
            if (message.accountID != null && message.hasOwnProperty("accountID")) {
                let error = $root.proto.AccountID.verify(message.accountID);
                if (error)
                    return "accountID." + error;
            }
            if (message.scheduled != null && message.hasOwnProperty("scheduled"))
                if (typeof message.scheduled !== "boolean")
                    return "scheduled: boolean expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isInteger(message.nonce))
                    return "nonce: integer expected";
            return null;
        };

        /**
         * Creates a TransactionID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TransactionID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TransactionID} TransactionID
         */
        TransactionID.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TransactionID)
                return object;
            let message = new $root.proto.TransactionID();
            if (object.transactionValidStart != null) {
                if (typeof object.transactionValidStart !== "object")
                    throw TypeError(".proto.TransactionID.transactionValidStart: object expected");
                message.transactionValidStart = $root.proto.Timestamp.fromObject(object.transactionValidStart);
            }
            if (object.accountID != null) {
                if (typeof object.accountID !== "object")
                    throw TypeError(".proto.TransactionID.accountID: object expected");
                message.accountID = $root.proto.AccountID.fromObject(object.accountID);
            }
            if (object.scheduled != null)
                message.scheduled = Boolean(object.scheduled);
            if (object.nonce != null)
                message.nonce = object.nonce | 0;
            return message;
        };

        /**
         * Creates a plain object from a TransactionID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TransactionID
         * @static
         * @param {proto.TransactionID} message TransactionID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransactionID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.transactionValidStart = null;
                object.accountID = null;
                object.scheduled = false;
                object.nonce = 0;
            }
            if (message.transactionValidStart != null && message.hasOwnProperty("transactionValidStart"))
                object.transactionValidStart = $root.proto.Timestamp.toObject(message.transactionValidStart, options);
            if (message.accountID != null && message.hasOwnProperty("accountID"))
                object.accountID = $root.proto.AccountID.toObject(message.accountID, options);
            if (message.scheduled != null && message.hasOwnProperty("scheduled"))
                object.scheduled = message.scheduled;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            return object;
        };

        /**
         * Converts this TransactionID to JSON.
         * @function toJSON
         * @memberof proto.TransactionID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransactionID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TransactionID
         * @function getTypeUrl
         * @memberof proto.TransactionID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TransactionID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TransactionID";
        };

        return TransactionID;
    })();

    proto.Key = (function() {

        /**
         * Properties of a Key.
         * @memberof proto
         * @interface IKey
         * @property {proto.IContractID|null} [contractID] A smart contract instance that is authorized implicitly.
         * <p>
         * This key type SHALL require that the code in the active message frame
         * belong to the contract with the given id.
         * @property {Uint8Array|null} [ed25519] An array of Ed25519 public key bytes.
         * @property {Uint8Array|null} [RSA_3072] This option is not currently supported.<br/>
         * An array of RSA-3072 public key bytes.
         * @property {Uint8Array|null} [ECDSA_384] This option is not currently supported.<br/>
         * An array of ECDSA, using the p-384 curve, public key bytes.
         * @property {proto.IThresholdKey|null} [thresholdKey] A threshold, M, combined with a list of N keys, any M of which are
         * sufficient to form a valid signature.
         * @property {proto.IKeyList|null} [keyList] A list of keys. This may be treated like a "N-of-N" threshold key,
         * as a component of another key, or in some other manner as documented.
         * @property {Uint8Array|null} [ECDSASecp256k1] A set of compressed ECDSA(secp256k1) public key bytes.<br/>
         * This is an EVM compatibility format.
         * @property {proto.IContractID|null} [delegatableContractId] A smart contract that, if the recipient of the active message frame,
         * SHALL be imputed authorization.<br/>
         * Setting this key type is a more permissive version of setting a
         * contractID key.
         * <p>
         * This key form SHALL NOT strictly require that the code being executed
         * in the frame belong to the given contract. The code in frame MAY be
         * running another contract via a `delegatecall`.
         */

        /**
         * Constructs a new Key.
         * @memberof proto
         * @classdesc A Key is an entity representing one or more cryptographic public/private key
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
         * @implements IKey
         * @constructor
         * @param {proto.IKey=} [properties] Properties to set
         */
        function Key(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A smart contract instance that is authorized implicitly.
         * <p>
         * This key type SHALL require that the code in the active message frame
         * belong to the contract with the given id.
         * @member {proto.IContractID|null|undefined} contractID
         * @memberof proto.Key
         * @instance
         */
        Key.prototype.contractID = null;

        /**
         * An array of Ed25519 public key bytes.
         * @member {Uint8Array|null|undefined} ed25519
         * @memberof proto.Key
         * @instance
         */
        Key.prototype.ed25519 = null;

        /**
         * This option is not currently supported.<br/>
         * An array of RSA-3072 public key bytes.
         * @member {Uint8Array|null|undefined} RSA_3072
         * @memberof proto.Key
         * @instance
         */
        Key.prototype.RSA_3072 = null;

        /**
         * This option is not currently supported.<br/>
         * An array of ECDSA, using the p-384 curve, public key bytes.
         * @member {Uint8Array|null|undefined} ECDSA_384
         * @memberof proto.Key
         * @instance
         */
        Key.prototype.ECDSA_384 = null;

        /**
         * A threshold, M, combined with a list of N keys, any M of which are
         * sufficient to form a valid signature.
         * @member {proto.IThresholdKey|null|undefined} thresholdKey
         * @memberof proto.Key
         * @instance
         */
        Key.prototype.thresholdKey = null;

        /**
         * A list of keys. This may be treated like a "N-of-N" threshold key,
         * as a component of another key, or in some other manner as documented.
         * @member {proto.IKeyList|null|undefined} keyList
         * @memberof proto.Key
         * @instance
         */
        Key.prototype.keyList = null;

        /**
         * A set of compressed ECDSA(secp256k1) public key bytes.<br/>
         * This is an EVM compatibility format.
         * @member {Uint8Array|null|undefined} ECDSASecp256k1
         * @memberof proto.Key
         * @instance
         */
        Key.prototype.ECDSASecp256k1 = null;

        /**
         * A smart contract that, if the recipient of the active message frame,
         * SHALL be imputed authorization.<br/>
         * Setting this key type is a more permissive version of setting a
         * contractID key.
         * <p>
         * This key form SHALL NOT strictly require that the code being executed
         * in the frame belong to the given contract. The code in frame MAY be
         * running another contract via a `delegatecall`.
         * @member {proto.IContractID|null|undefined} delegatableContractId
         * @memberof proto.Key
         * @instance
         */
        Key.prototype.delegatableContractId = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Key key.
         * @member {"contractID"|"ed25519"|"RSA_3072"|"ECDSA_384"|"thresholdKey"|"keyList"|"ECDSASecp256k1"|"delegatableContractId"|undefined} key
         * @memberof proto.Key
         * @instance
         */
        Object.defineProperty(Key.prototype, "key", {
            get: $util.oneOfGetter($oneOfFields = ["contractID", "ed25519", "RSA_3072", "ECDSA_384", "thresholdKey", "keyList", "ECDSASecp256k1", "delegatableContractId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Key instance using the specified properties.
         * @function create
         * @memberof proto.Key
         * @static
         * @param {proto.IKey=} [properties] Properties to set
         * @returns {proto.Key} Key instance
         */
        Key.create = function create(properties) {
            return new Key(properties);
        };

        /**
         * Encodes the specified Key message. Does not implicitly {@link proto.Key.verify|verify} messages.
         * @function encode
         * @memberof proto.Key
         * @static
         * @param {proto.IKey} message Key message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Key.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contractID != null && Object.hasOwnProperty.call(message, "contractID"))
                $root.proto.ContractID.encode(message.contractID, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ed25519 != null && Object.hasOwnProperty.call(message, "ed25519"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ed25519);
            if (message.RSA_3072 != null && Object.hasOwnProperty.call(message, "RSA_3072"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.RSA_3072);
            if (message.ECDSA_384 != null && Object.hasOwnProperty.call(message, "ECDSA_384"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ECDSA_384);
            if (message.thresholdKey != null && Object.hasOwnProperty.call(message, "thresholdKey"))
                $root.proto.ThresholdKey.encode(message.thresholdKey, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.keyList != null && Object.hasOwnProperty.call(message, "keyList"))
                $root.proto.KeyList.encode(message.keyList, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.ECDSASecp256k1 != null && Object.hasOwnProperty.call(message, "ECDSASecp256k1"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.ECDSASecp256k1);
            if (message.delegatableContractId != null && Object.hasOwnProperty.call(message, "delegatableContractId"))
                $root.proto.ContractID.encode(message.delegatableContractId, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Key message, length delimited. Does not implicitly {@link proto.Key.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Key
         * @static
         * @param {proto.IKey} message Key message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Key.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Key message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Key
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Key} Key
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Key.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Key();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.contractID = $root.proto.ContractID.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.ed25519 = reader.bytes();
                        break;
                    }
                case 3: {
                        message.RSA_3072 = reader.bytes();
                        break;
                    }
                case 4: {
                        message.ECDSA_384 = reader.bytes();
                        break;
                    }
                case 5: {
                        message.thresholdKey = $root.proto.ThresholdKey.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.keyList = $root.proto.KeyList.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.ECDSASecp256k1 = reader.bytes();
                        break;
                    }
                case 8: {
                        message.delegatableContractId = $root.proto.ContractID.decode(reader, reader.uint32());
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
         * Decodes a Key message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Key
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Key} Key
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Key.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Key message.
         * @function verify
         * @memberof proto.Key
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Key.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.contractID != null && message.hasOwnProperty("contractID")) {
                properties.key = 1;
                {
                    let error = $root.proto.ContractID.verify(message.contractID);
                    if (error)
                        return "contractID." + error;
                }
            }
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                if (properties.key === 1)
                    return "key: multiple values";
                properties.key = 1;
                if (!(message.ed25519 && typeof message.ed25519.length === "number" || $util.isString(message.ed25519)))
                    return "ed25519: buffer expected";
            }
            if (message.RSA_3072 != null && message.hasOwnProperty("RSA_3072")) {
                if (properties.key === 1)
                    return "key: multiple values";
                properties.key = 1;
                if (!(message.RSA_3072 && typeof message.RSA_3072.length === "number" || $util.isString(message.RSA_3072)))
                    return "RSA_3072: buffer expected";
            }
            if (message.ECDSA_384 != null && message.hasOwnProperty("ECDSA_384")) {
                if (properties.key === 1)
                    return "key: multiple values";
                properties.key = 1;
                if (!(message.ECDSA_384 && typeof message.ECDSA_384.length === "number" || $util.isString(message.ECDSA_384)))
                    return "ECDSA_384: buffer expected";
            }
            if (message.thresholdKey != null && message.hasOwnProperty("thresholdKey")) {
                if (properties.key === 1)
                    return "key: multiple values";
                properties.key = 1;
                {
                    let error = $root.proto.ThresholdKey.verify(message.thresholdKey);
                    if (error)
                        return "thresholdKey." + error;
                }
            }
            if (message.keyList != null && message.hasOwnProperty("keyList")) {
                if (properties.key === 1)
                    return "key: multiple values";
                properties.key = 1;
                {
                    let error = $root.proto.KeyList.verify(message.keyList);
                    if (error)
                        return "keyList." + error;
                }
            }
            if (message.ECDSASecp256k1 != null && message.hasOwnProperty("ECDSASecp256k1")) {
                if (properties.key === 1)
                    return "key: multiple values";
                properties.key = 1;
                if (!(message.ECDSASecp256k1 && typeof message.ECDSASecp256k1.length === "number" || $util.isString(message.ECDSASecp256k1)))
                    return "ECDSASecp256k1: buffer expected";
            }
            if (message.delegatableContractId != null && message.hasOwnProperty("delegatableContractId")) {
                if (properties.key === 1)
                    return "key: multiple values";
                properties.key = 1;
                {
                    let error = $root.proto.ContractID.verify(message.delegatableContractId);
                    if (error)
                        return "delegatableContractId." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Key message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Key
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Key} Key
         */
        Key.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Key)
                return object;
            let message = new $root.proto.Key();
            if (object.contractID != null) {
                if (typeof object.contractID !== "object")
                    throw TypeError(".proto.Key.contractID: object expected");
                message.contractID = $root.proto.ContractID.fromObject(object.contractID);
            }
            if (object.ed25519 != null)
                if (typeof object.ed25519 === "string")
                    $util.base64.decode(object.ed25519, message.ed25519 = $util.newBuffer($util.base64.length(object.ed25519)), 0);
                else if (object.ed25519.length >= 0)
                    message.ed25519 = object.ed25519;
            if (object.RSA_3072 != null)
                if (typeof object.RSA_3072 === "string")
                    $util.base64.decode(object.RSA_3072, message.RSA_3072 = $util.newBuffer($util.base64.length(object.RSA_3072)), 0);
                else if (object.RSA_3072.length >= 0)
                    message.RSA_3072 = object.RSA_3072;
            if (object.ECDSA_384 != null)
                if (typeof object.ECDSA_384 === "string")
                    $util.base64.decode(object.ECDSA_384, message.ECDSA_384 = $util.newBuffer($util.base64.length(object.ECDSA_384)), 0);
                else if (object.ECDSA_384.length >= 0)
                    message.ECDSA_384 = object.ECDSA_384;
            if (object.thresholdKey != null) {
                if (typeof object.thresholdKey !== "object")
                    throw TypeError(".proto.Key.thresholdKey: object expected");
                message.thresholdKey = $root.proto.ThresholdKey.fromObject(object.thresholdKey);
            }
            if (object.keyList != null) {
                if (typeof object.keyList !== "object")
                    throw TypeError(".proto.Key.keyList: object expected");
                message.keyList = $root.proto.KeyList.fromObject(object.keyList);
            }
            if (object.ECDSASecp256k1 != null)
                if (typeof object.ECDSASecp256k1 === "string")
                    $util.base64.decode(object.ECDSASecp256k1, message.ECDSASecp256k1 = $util.newBuffer($util.base64.length(object.ECDSASecp256k1)), 0);
                else if (object.ECDSASecp256k1.length >= 0)
                    message.ECDSASecp256k1 = object.ECDSASecp256k1;
            if (object.delegatableContractId != null) {
                if (typeof object.delegatableContractId !== "object")
                    throw TypeError(".proto.Key.delegatableContractId: object expected");
                message.delegatableContractId = $root.proto.ContractID.fromObject(object.delegatableContractId);
            }
            return message;
        };

        /**
         * Creates a plain object from a Key message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Key
         * @static
         * @param {proto.Key} message Key
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Key.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.contractID != null && message.hasOwnProperty("contractID")) {
                object.contractID = $root.proto.ContractID.toObject(message.contractID, options);
                if (options.oneofs)
                    object.key = "contractID";
            }
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                object.ed25519 = options.bytes === String ? $util.base64.encode(message.ed25519, 0, message.ed25519.length) : options.bytes === Array ? Array.prototype.slice.call(message.ed25519) : message.ed25519;
                if (options.oneofs)
                    object.key = "ed25519";
            }
            if (message.RSA_3072 != null && message.hasOwnProperty("RSA_3072")) {
                object.RSA_3072 = options.bytes === String ? $util.base64.encode(message.RSA_3072, 0, message.RSA_3072.length) : options.bytes === Array ? Array.prototype.slice.call(message.RSA_3072) : message.RSA_3072;
                if (options.oneofs)
                    object.key = "RSA_3072";
            }
            if (message.ECDSA_384 != null && message.hasOwnProperty("ECDSA_384")) {
                object.ECDSA_384 = options.bytes === String ? $util.base64.encode(message.ECDSA_384, 0, message.ECDSA_384.length) : options.bytes === Array ? Array.prototype.slice.call(message.ECDSA_384) : message.ECDSA_384;
                if (options.oneofs)
                    object.key = "ECDSA_384";
            }
            if (message.thresholdKey != null && message.hasOwnProperty("thresholdKey")) {
                object.thresholdKey = $root.proto.ThresholdKey.toObject(message.thresholdKey, options);
                if (options.oneofs)
                    object.key = "thresholdKey";
            }
            if (message.keyList != null && message.hasOwnProperty("keyList")) {
                object.keyList = $root.proto.KeyList.toObject(message.keyList, options);
                if (options.oneofs)
                    object.key = "keyList";
            }
            if (message.ECDSASecp256k1 != null && message.hasOwnProperty("ECDSASecp256k1")) {
                object.ECDSASecp256k1 = options.bytes === String ? $util.base64.encode(message.ECDSASecp256k1, 0, message.ECDSASecp256k1.length) : options.bytes === Array ? Array.prototype.slice.call(message.ECDSASecp256k1) : message.ECDSASecp256k1;
                if (options.oneofs)
                    object.key = "ECDSASecp256k1";
            }
            if (message.delegatableContractId != null && message.hasOwnProperty("delegatableContractId")) {
                object.delegatableContractId = $root.proto.ContractID.toObject(message.delegatableContractId, options);
                if (options.oneofs)
                    object.key = "delegatableContractId";
            }
            return object;
        };

        /**
         * Converts this Key to JSON.
         * @function toJSON
         * @memberof proto.Key
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Key.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Key
         * @function getTypeUrl
         * @memberof proto.Key
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Key.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Key";
        };

        return Key;
    })();

    proto.ThresholdKey = (function() {

        /**
         * Properties of a ThresholdKey.
         * @memberof proto
         * @interface IThresholdKey
         * @property {number|null} [threshold] A transaction MUST have valid signatures from at least this number of
         * separate keys, from the `keys` list to be authorized by this key.
         * @property {proto.IKeyList|null} [keys] A list of the keys that MAY satisfy signature requirements of this key.
         */

        /**
         * Constructs a new ThresholdKey.
         * @memberof proto
         * @classdesc A threshold value and a list of public keys that, together, form a threshold
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
         * @implements IThresholdKey
         * @constructor
         * @param {proto.IThresholdKey=} [properties] Properties to set
         */
        function ThresholdKey(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A transaction MUST have valid signatures from at least this number of
         * separate keys, from the `keys` list to be authorized by this key.
         * @member {number} threshold
         * @memberof proto.ThresholdKey
         * @instance
         */
        ThresholdKey.prototype.threshold = 0;

        /**
         * A list of the keys that MAY satisfy signature requirements of this key.
         * @member {proto.IKeyList|null|undefined} keys
         * @memberof proto.ThresholdKey
         * @instance
         */
        ThresholdKey.prototype.keys = null;

        /**
         * Creates a new ThresholdKey instance using the specified properties.
         * @function create
         * @memberof proto.ThresholdKey
         * @static
         * @param {proto.IThresholdKey=} [properties] Properties to set
         * @returns {proto.ThresholdKey} ThresholdKey instance
         */
        ThresholdKey.create = function create(properties) {
            return new ThresholdKey(properties);
        };

        /**
         * Encodes the specified ThresholdKey message. Does not implicitly {@link proto.ThresholdKey.verify|verify} messages.
         * @function encode
         * @memberof proto.ThresholdKey
         * @static
         * @param {proto.IThresholdKey} message ThresholdKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThresholdKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.threshold != null && Object.hasOwnProperty.call(message, "threshold"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.threshold);
            if (message.keys != null && Object.hasOwnProperty.call(message, "keys"))
                $root.proto.KeyList.encode(message.keys, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ThresholdKey message, length delimited. Does not implicitly {@link proto.ThresholdKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ThresholdKey
         * @static
         * @param {proto.IThresholdKey} message ThresholdKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThresholdKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ThresholdKey message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ThresholdKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ThresholdKey} ThresholdKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThresholdKey.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ThresholdKey();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.threshold = reader.uint32();
                        break;
                    }
                case 2: {
                        message.keys = $root.proto.KeyList.decode(reader, reader.uint32());
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
         * Decodes a ThresholdKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ThresholdKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ThresholdKey} ThresholdKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThresholdKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ThresholdKey message.
         * @function verify
         * @memberof proto.ThresholdKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ThresholdKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.threshold != null && message.hasOwnProperty("threshold"))
                if (!$util.isInteger(message.threshold))
                    return "threshold: integer expected";
            if (message.keys != null && message.hasOwnProperty("keys")) {
                let error = $root.proto.KeyList.verify(message.keys);
                if (error)
                    return "keys." + error;
            }
            return null;
        };

        /**
         * Creates a ThresholdKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ThresholdKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ThresholdKey} ThresholdKey
         */
        ThresholdKey.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ThresholdKey)
                return object;
            let message = new $root.proto.ThresholdKey();
            if (object.threshold != null)
                message.threshold = object.threshold >>> 0;
            if (object.keys != null) {
                if (typeof object.keys !== "object")
                    throw TypeError(".proto.ThresholdKey.keys: object expected");
                message.keys = $root.proto.KeyList.fromObject(object.keys);
            }
            return message;
        };

        /**
         * Creates a plain object from a ThresholdKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ThresholdKey
         * @static
         * @param {proto.ThresholdKey} message ThresholdKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ThresholdKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.threshold = 0;
                object.keys = null;
            }
            if (message.threshold != null && message.hasOwnProperty("threshold"))
                object.threshold = message.threshold;
            if (message.keys != null && message.hasOwnProperty("keys"))
                object.keys = $root.proto.KeyList.toObject(message.keys, options);
            return object;
        };

        /**
         * Converts this ThresholdKey to JSON.
         * @function toJSON
         * @memberof proto.ThresholdKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ThresholdKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ThresholdKey
         * @function getTypeUrl
         * @memberof proto.ThresholdKey
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ThresholdKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ThresholdKey";
        };

        return ThresholdKey;
    })();

    proto.KeyList = (function() {

        /**
         * Properties of a KeyList.
         * @memberof proto
         * @interface IKeyList
         * @property {Array.<proto.IKey>|null} [keys] A list of keys. All values in this list SHALL be non-null.
         * <p>
         */

        /**
         * Constructs a new KeyList.
         * @memberof proto
         * @classdesc A list of keys.<br/>
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
         * @implements IKeyList
         * @constructor
         * @param {proto.IKeyList=} [properties] Properties to set
         */
        function KeyList(properties) {
            this.keys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A list of keys. All values in this list SHALL be non-null.
         * <p>
         * @member {Array.<proto.IKey>} keys
         * @memberof proto.KeyList
         * @instance
         */
        KeyList.prototype.keys = $util.emptyArray;

        /**
         * Creates a new KeyList instance using the specified properties.
         * @function create
         * @memberof proto.KeyList
         * @static
         * @param {proto.IKeyList=} [properties] Properties to set
         * @returns {proto.KeyList} KeyList instance
         */
        KeyList.create = function create(properties) {
            return new KeyList(properties);
        };

        /**
         * Encodes the specified KeyList message. Does not implicitly {@link proto.KeyList.verify|verify} messages.
         * @function encode
         * @memberof proto.KeyList
         * @static
         * @param {proto.IKeyList} message KeyList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keys != null && message.keys.length)
                for (let i = 0; i < message.keys.length; ++i)
                    $root.proto.Key.encode(message.keys[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KeyList message, length delimited. Does not implicitly {@link proto.KeyList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.KeyList
         * @static
         * @param {proto.IKeyList} message KeyList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.KeyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.KeyList} KeyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.KeyList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.keys && message.keys.length))
                            message.keys = [];
                        message.keys.push($root.proto.Key.decode(reader, reader.uint32()));
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
         * Decodes a KeyList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.KeyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.KeyList} KeyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyList message.
         * @function verify
         * @memberof proto.KeyList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keys != null && message.hasOwnProperty("keys")) {
                if (!Array.isArray(message.keys))
                    return "keys: array expected";
                for (let i = 0; i < message.keys.length; ++i) {
                    let error = $root.proto.Key.verify(message.keys[i]);
                    if (error)
                        return "keys." + error;
                }
            }
            return null;
        };

        /**
         * Creates a KeyList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.KeyList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.KeyList} KeyList
         */
        KeyList.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.KeyList)
                return object;
            let message = new $root.proto.KeyList();
            if (object.keys) {
                if (!Array.isArray(object.keys))
                    throw TypeError(".proto.KeyList.keys: array expected");
                message.keys = [];
                for (let i = 0; i < object.keys.length; ++i) {
                    if (typeof object.keys[i] !== "object")
                        throw TypeError(".proto.KeyList.keys: object expected");
                    message.keys[i] = $root.proto.Key.fromObject(object.keys[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a KeyList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.KeyList
         * @static
         * @param {proto.KeyList} message KeyList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.keys = [];
            if (message.keys && message.keys.length) {
                object.keys = [];
                for (let j = 0; j < message.keys.length; ++j)
                    object.keys[j] = $root.proto.Key.toObject(message.keys[j], options);
            }
            return object;
        };

        /**
         * Converts this KeyList to JSON.
         * @function toJSON
         * @memberof proto.KeyList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KeyList
         * @function getTypeUrl
         * @memberof proto.KeyList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KeyList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.KeyList";
        };

        return KeyList;
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

    return proto;
})();

export { $root as default };
