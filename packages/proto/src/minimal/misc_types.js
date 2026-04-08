/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.hashgraph_misc_types || ($protobuf.roots.hashgraph_misc_types = {});

export const proto = $root.proto = (() => {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    const proto = {};

    proto.ShardID = (function() {

        /**
         * Properties of a ShardID.
         * @memberof proto
         * @interface IShardID
         * @property {number|Long|null} [shardNum] A whole number shard identifier.
         */

        /**
         * Constructs a new ShardID.
         * @memberof proto
         * @classdesc A shard identifier.<br/>
         * A shard is a partition of nodes running the network that processes
         * transactions separately from other shards. Each shard is effectively an
         * independent instance of the overall network that shares the same virtual
         * distributed ledger, and may gossip cross-shard transactions with other
         * shards to maintain overall correct processing of the ledger.
         * @implements IShardID
         * @constructor
         * @param {proto.IShardID=} [properties] Properties to set
         */
        function ShardID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A whole number shard identifier.
         * @member {number|Long} shardNum
         * @memberof proto.ShardID
         * @instance
         */
        ShardID.prototype.shardNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ShardID instance using the specified properties.
         * @function create
         * @memberof proto.ShardID
         * @static
         * @param {proto.IShardID=} [properties] Properties to set
         * @returns {proto.ShardID} ShardID instance
         */
        ShardID.create = function create(properties) {
            return new ShardID(properties);
        };

        /**
         * Encodes the specified ShardID message. Does not implicitly {@link proto.ShardID.verify|verify} messages.
         * @function encode
         * @memberof proto.ShardID
         * @static
         * @param {proto.IShardID} message ShardID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShardID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shardNum != null && Object.hasOwnProperty.call(message, "shardNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.shardNum);
            return writer;
        };

        /**
         * Encodes the specified ShardID message, length delimited. Does not implicitly {@link proto.ShardID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ShardID
         * @static
         * @param {proto.IShardID} message ShardID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShardID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShardID message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ShardID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ShardID} ShardID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShardID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ShardID();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.shardNum = reader.int64();
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
         * Decodes a ShardID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ShardID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ShardID} ShardID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShardID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShardID message.
         * @function verify
         * @memberof proto.ShardID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShardID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shardNum != null && message.hasOwnProperty("shardNum"))
                if (!$util.isInteger(message.shardNum) && !(message.shardNum && $util.isInteger(message.shardNum.low) && $util.isInteger(message.shardNum.high)))
                    return "shardNum: integer|Long expected";
            return null;
        };

        /**
         * Creates a ShardID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ShardID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ShardID} ShardID
         */
        ShardID.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ShardID)
                return object;
            let message = new $root.proto.ShardID();
            if (object.shardNum != null)
                if ($util.Long)
                    (message.shardNum = $util.Long.fromValue(object.shardNum)).unsigned = false;
                else if (typeof object.shardNum === "string")
                    message.shardNum = parseInt(object.shardNum, 10);
                else if (typeof object.shardNum === "number")
                    message.shardNum = object.shardNum;
                else if (typeof object.shardNum === "object")
                    message.shardNum = new $util.LongBits(object.shardNum.low >>> 0, object.shardNum.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ShardID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ShardID
         * @static
         * @param {proto.ShardID} message ShardID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShardID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.shardNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.shardNum = options.longs === String ? "0" : 0;
            if (message.shardNum != null && message.hasOwnProperty("shardNum"))
                if (typeof message.shardNum === "number")
                    object.shardNum = options.longs === String ? String(message.shardNum) : message.shardNum;
                else
                    object.shardNum = options.longs === String ? $util.Long.prototype.toString.call(message.shardNum) : options.longs === Number ? new $util.LongBits(message.shardNum.low >>> 0, message.shardNum.high >>> 0).toNumber() : message.shardNum;
            return object;
        };

        /**
         * Converts this ShardID to JSON.
         * @function toJSON
         * @memberof proto.ShardID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShardID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ShardID
         * @function getTypeUrl
         * @memberof proto.ShardID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShardID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ShardID";
        };

        return ShardID;
    })();

    proto.RealmID = (function() {

        /**
         * Properties of a RealmID.
         * @memberof proto
         * @interface IRealmID
         * @property {number|Long|null} [shardNum] A whole number shard identifier.
         * @property {number|Long|null} [realmNum] A whole number realm identifier.
         */

        /**
         * Constructs a new RealmID.
         * @memberof proto
         * @classdesc A realm identifier.<br/>
         * Within a given shard, every realm has a unique numeric identifier.
         * Each account, file, and contract instance belongs to exactly one realm.
         * @implements IRealmID
         * @constructor
         * @param {proto.IRealmID=} [properties] Properties to set
         */
        function RealmID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A whole number shard identifier.
         * @member {number|Long} shardNum
         * @memberof proto.RealmID
         * @instance
         */
        RealmID.prototype.shardNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A whole number realm identifier.
         * @member {number|Long} realmNum
         * @memberof proto.RealmID
         * @instance
         */
        RealmID.prototype.realmNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RealmID instance using the specified properties.
         * @function create
         * @memberof proto.RealmID
         * @static
         * @param {proto.IRealmID=} [properties] Properties to set
         * @returns {proto.RealmID} RealmID instance
         */
        RealmID.create = function create(properties) {
            return new RealmID(properties);
        };

        /**
         * Encodes the specified RealmID message. Does not implicitly {@link proto.RealmID.verify|verify} messages.
         * @function encode
         * @memberof proto.RealmID
         * @static
         * @param {proto.IRealmID} message RealmID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RealmID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.shardNum != null && Object.hasOwnProperty.call(message, "shardNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.shardNum);
            if (message.realmNum != null && Object.hasOwnProperty.call(message, "realmNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.realmNum);
            return writer;
        };

        /**
         * Encodes the specified RealmID message, length delimited. Does not implicitly {@link proto.RealmID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RealmID
         * @static
         * @param {proto.IRealmID} message RealmID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RealmID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RealmID message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RealmID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RealmID} RealmID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RealmID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RealmID();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RealmID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RealmID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RealmID} RealmID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RealmID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RealmID message.
         * @function verify
         * @memberof proto.RealmID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RealmID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.shardNum != null && message.hasOwnProperty("shardNum"))
                if (!$util.isInteger(message.shardNum) && !(message.shardNum && $util.isInteger(message.shardNum.low) && $util.isInteger(message.shardNum.high)))
                    return "shardNum: integer|Long expected";
            if (message.realmNum != null && message.hasOwnProperty("realmNum"))
                if (!$util.isInteger(message.realmNum) && !(message.realmNum && $util.isInteger(message.realmNum.low) && $util.isInteger(message.realmNum.high)))
                    return "realmNum: integer|Long expected";
            return null;
        };

        /**
         * Creates a RealmID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RealmID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RealmID} RealmID
         */
        RealmID.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RealmID)
                return object;
            let message = new $root.proto.RealmID();
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
            return message;
        };

        /**
         * Creates a plain object from a RealmID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RealmID
         * @static
         * @param {proto.RealmID} message RealmID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RealmID.toObject = function toObject(message, options) {
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
            return object;
        };

        /**
         * Converts this RealmID to JSON.
         * @function toJSON
         * @memberof proto.RealmID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RealmID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RealmID
         * @function getTypeUrl
         * @memberof proto.RealmID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RealmID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RealmID";
        };

        return RealmID;
    })();

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

    /**
     * A specific hash algorithm.
     * 
     * We did not reuse Record Stream `HashAlgorithm` here because in all cases,
     * currently, this will be `SHA2_384` and if that is the default value then
     * we can save space by not serializing it, whereas `HASH_ALGORITHM_UNKNOWN`
     * is the default for Record Stream `HashAlgorithm`.
     * 
     * Note that enum values here MUST NOT match the name of any other enum value
     * in the same `package`, as protobuf follows `C++` scope rules and all enum
     * _names_ are treated as global constants within the `package`.
     * @name proto.BlockHashAlgorithm
     * @enum {number}
     * @property {number} SHA2_384=0 A SHA2 algorithm SHA-384 hash.
     * <p>
     * This is the default value, if a field of this enumerated type is
     * not set, then this is the value that will be decoded when the
     * serialized message is read.
     */
    proto.BlockHashAlgorithm = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SHA2_384"] = 0;
        return values;
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

    proto.HookId = (function() {

        /**
         * Properties of a HookId.
         * @memberof proto
         * @interface IHookId
         * @property {proto.IHookEntityId|null} [entityId] The hook's creating entity id.
         * @property {number|Long|null} [hookId] An arbitrary 64-bit identifier.
         */

        /**
         * Constructs a new HookId.
         * @memberof proto
         * @classdesc Once a hook is created, its full id.
         * <p>
         * A composite of its creating entity's id and an arbitrary 64-bit hook id
         * (which need not be sequential).
         * @implements IHookId
         * @constructor
         * @param {proto.IHookId=} [properties] Properties to set
         */
        function HookId(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * The hook's creating entity id.
         * @member {proto.IHookEntityId|null|undefined} entityId
         * @memberof proto.HookId
         * @instance
         */
        HookId.prototype.entityId = null;

        /**
         * An arbitrary 64-bit identifier.
         * @member {number|Long} hookId
         * @memberof proto.HookId
         * @instance
         */
        HookId.prototype.hookId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HookId instance using the specified properties.
         * @function create
         * @memberof proto.HookId
         * @static
         * @param {proto.IHookId=} [properties] Properties to set
         * @returns {proto.HookId} HookId instance
         */
        HookId.create = function create(properties) {
            return new HookId(properties);
        };

        /**
         * Encodes the specified HookId message. Does not implicitly {@link proto.HookId.verify|verify} messages.
         * @function encode
         * @memberof proto.HookId
         * @static
         * @param {proto.IHookId} message HookId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HookId.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                $root.proto.HookEntityId.encode(message.entityId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.hookId != null && Object.hasOwnProperty.call(message, "hookId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.hookId);
            return writer;
        };

        /**
         * Encodes the specified HookId message, length delimited. Does not implicitly {@link proto.HookId.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HookId
         * @static
         * @param {proto.IHookId} message HookId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HookId.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HookId message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HookId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HookId} HookId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HookId.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HookId();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.entityId = $root.proto.HookEntityId.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.hookId = reader.int64();
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
         * Decodes a HookId message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HookId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HookId} HookId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HookId.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HookId message.
         * @function verify
         * @memberof proto.HookId
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HookId.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entityId != null && message.hasOwnProperty("entityId")) {
                let error = $root.proto.HookEntityId.verify(message.entityId);
                if (error)
                    return "entityId." + error;
            }
            if (message.hookId != null && message.hasOwnProperty("hookId"))
                if (!$util.isInteger(message.hookId) && !(message.hookId && $util.isInteger(message.hookId.low) && $util.isInteger(message.hookId.high)))
                    return "hookId: integer|Long expected";
            return null;
        };

        /**
         * Creates a HookId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.HookId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.HookId} HookId
         */
        HookId.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.HookId)
                return object;
            let message = new $root.proto.HookId();
            if (object.entityId != null) {
                if (typeof object.entityId !== "object")
                    throw TypeError(".proto.HookId.entityId: object expected");
                message.entityId = $root.proto.HookEntityId.fromObject(object.entityId);
            }
            if (object.hookId != null)
                if ($util.Long)
                    (message.hookId = $util.Long.fromValue(object.hookId)).unsigned = false;
                else if (typeof object.hookId === "string")
                    message.hookId = parseInt(object.hookId, 10);
                else if (typeof object.hookId === "number")
                    message.hookId = object.hookId;
                else if (typeof object.hookId === "object")
                    message.hookId = new $util.LongBits(object.hookId.low >>> 0, object.hookId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HookId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.HookId
         * @static
         * @param {proto.HookId} message HookId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HookId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.entityId = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.hookId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.hookId = options.longs === String ? "0" : 0;
            }
            if (message.entityId != null && message.hasOwnProperty("entityId"))
                object.entityId = $root.proto.HookEntityId.toObject(message.entityId, options);
            if (message.hookId != null && message.hasOwnProperty("hookId"))
                if (typeof message.hookId === "number")
                    object.hookId = options.longs === String ? String(message.hookId) : message.hookId;
                else
                    object.hookId = options.longs === String ? $util.Long.prototype.toString.call(message.hookId) : options.longs === Number ? new $util.LongBits(message.hookId.low >>> 0, message.hookId.high >>> 0).toNumber() : message.hookId;
            return object;
        };

        /**
         * Converts this HookId to JSON.
         * @function toJSON
         * @memberof proto.HookId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HookId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HookId
         * @function getTypeUrl
         * @memberof proto.HookId
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HookId.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HookId";
        };

        return HookId;
    })();

    proto.HookEntityId = (function() {

        /**
         * Properties of a HookEntityId.
         * @memberof proto
         * @interface IHookEntityId
         * @property {proto.IAccountID|null} [accountId] An account using a hook.
         * @property {proto.IContractID|null} [contractId] A contract using a hook.
         */

        /**
         * Constructs a new HookEntityId.
         * @memberof proto
         * @classdesc The id of an entity using a hook.
         * @implements IHookEntityId
         * @constructor
         * @param {proto.IHookEntityId=} [properties] Properties to set
         */
        function HookEntityId(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * An account using a hook.
         * @member {proto.IAccountID|null|undefined} accountId
         * @memberof proto.HookEntityId
         * @instance
         */
        HookEntityId.prototype.accountId = null;

        /**
         * A contract using a hook.
         * @member {proto.IContractID|null|undefined} contractId
         * @memberof proto.HookEntityId
         * @instance
         */
        HookEntityId.prototype.contractId = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * HookEntityId entityId.
         * @member {"accountId"|"contractId"|undefined} entityId
         * @memberof proto.HookEntityId
         * @instance
         */
        Object.defineProperty(HookEntityId.prototype, "entityId", {
            get: $util.oneOfGetter($oneOfFields = ["accountId", "contractId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new HookEntityId instance using the specified properties.
         * @function create
         * @memberof proto.HookEntityId
         * @static
         * @param {proto.IHookEntityId=} [properties] Properties to set
         * @returns {proto.HookEntityId} HookEntityId instance
         */
        HookEntityId.create = function create(properties) {
            return new HookEntityId(properties);
        };

        /**
         * Encodes the specified HookEntityId message. Does not implicitly {@link proto.HookEntityId.verify|verify} messages.
         * @function encode
         * @memberof proto.HookEntityId
         * @static
         * @param {proto.IHookEntityId} message HookEntityId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HookEntityId.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountId != null && Object.hasOwnProperty.call(message, "accountId"))
                $root.proto.AccountID.encode(message.accountId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                $root.proto.ContractID.encode(message.contractId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HookEntityId message, length delimited. Does not implicitly {@link proto.HookEntityId.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HookEntityId
         * @static
         * @param {proto.IHookEntityId} message HookEntityId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HookEntityId.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HookEntityId message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HookEntityId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HookEntityId} HookEntityId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HookEntityId.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HookEntityId();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.accountId = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.contractId = $root.proto.ContractID.decode(reader, reader.uint32());
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
         * Decodes a HookEntityId message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HookEntityId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HookEntityId} HookEntityId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HookEntityId.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HookEntityId message.
         * @function verify
         * @memberof proto.HookEntityId
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HookEntityId.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.accountId != null && message.hasOwnProperty("accountId")) {
                properties.entityId = 1;
                {
                    let error = $root.proto.AccountID.verify(message.accountId);
                    if (error)
                        return "accountId." + error;
                }
            }
            if (message.contractId != null && message.hasOwnProperty("contractId")) {
                if (properties.entityId === 1)
                    return "entityId: multiple values";
                properties.entityId = 1;
                {
                    let error = $root.proto.ContractID.verify(message.contractId);
                    if (error)
                        return "contractId." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HookEntityId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.HookEntityId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.HookEntityId} HookEntityId
         */
        HookEntityId.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.HookEntityId)
                return object;
            let message = new $root.proto.HookEntityId();
            if (object.accountId != null) {
                if (typeof object.accountId !== "object")
                    throw TypeError(".proto.HookEntityId.accountId: object expected");
                message.accountId = $root.proto.AccountID.fromObject(object.accountId);
            }
            if (object.contractId != null) {
                if (typeof object.contractId !== "object")
                    throw TypeError(".proto.HookEntityId.contractId: object expected");
                message.contractId = $root.proto.ContractID.fromObject(object.contractId);
            }
            return message;
        };

        /**
         * Creates a plain object from a HookEntityId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.HookEntityId
         * @static
         * @param {proto.HookEntityId} message HookEntityId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HookEntityId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.accountId != null && message.hasOwnProperty("accountId")) {
                object.accountId = $root.proto.AccountID.toObject(message.accountId, options);
                if (options.oneofs)
                    object.entityId = "accountId";
            }
            if (message.contractId != null && message.hasOwnProperty("contractId")) {
                object.contractId = $root.proto.ContractID.toObject(message.contractId, options);
                if (options.oneofs)
                    object.entityId = "contractId";
            }
            return object;
        };

        /**
         * Converts this HookEntityId to JSON.
         * @function toJSON
         * @memberof proto.HookEntityId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HookEntityId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HookEntityId
         * @function getTypeUrl
         * @memberof proto.HookEntityId
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HookEntityId.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HookEntityId";
        };

        return HookEntityId;
    })();

    proto.HookCall = (function() {

        /**
         * Properties of a HookCall.
         * @memberof proto
         * @interface IHookCall
         * @property {number|Long|null} [hookId] The numeric id of the hook to call, when the owning entity is forced by the call site.
         * @property {proto.IEvmHookCall|null} [evmHookCall] Specification of how to call an EVM hook.
         */

        /**
         * Constructs a new HookCall.
         * @memberof proto
         * @classdesc Specifies a call to a hook from within a transaction.
         * <p>
         * Often the hook's entity is implied by the nature of the call site. For example, when using an account allowance hook
         * inside a crypto transfer, the hook's entity is necessarily the account whose authorization is required.
         * <p>
         * For future extension points where the hook owner is not forced by the context, we include the option to fully
         * specify the hook id for the call.
         * @implements IHookCall
         * @constructor
         * @param {proto.IHookCall=} [properties] Properties to set
         */
        function HookCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * The numeric id of the hook to call, when the owning entity is forced by the call site.
         * @member {number|Long|null|undefined} hookId
         * @memberof proto.HookCall
         * @instance
         */
        HookCall.prototype.hookId = null;

        /**
         * Specification of how to call an EVM hook.
         * @member {proto.IEvmHookCall|null|undefined} evmHookCall
         * @memberof proto.HookCall
         * @instance
         */
        HookCall.prototype.evmHookCall = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * HookCall id.
         * @member {"hookId"|undefined} id
         * @memberof proto.HookCall
         * @instance
         */
        Object.defineProperty(HookCall.prototype, "id", {
            get: $util.oneOfGetter($oneOfFields = ["hookId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Specifies details of the call.
         * @member {"evmHookCall"|undefined} callSpec
         * @memberof proto.HookCall
         * @instance
         */
        Object.defineProperty(HookCall.prototype, "callSpec", {
            get: $util.oneOfGetter($oneOfFields = ["evmHookCall"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new HookCall instance using the specified properties.
         * @function create
         * @memberof proto.HookCall
         * @static
         * @param {proto.IHookCall=} [properties] Properties to set
         * @returns {proto.HookCall} HookCall instance
         */
        HookCall.create = function create(properties) {
            return new HookCall(properties);
        };

        /**
         * Encodes the specified HookCall message. Does not implicitly {@link proto.HookCall.verify|verify} messages.
         * @function encode
         * @memberof proto.HookCall
         * @static
         * @param {proto.IHookCall} message HookCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HookCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hookId != null && Object.hasOwnProperty.call(message, "hookId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.hookId);
            if (message.evmHookCall != null && Object.hasOwnProperty.call(message, "evmHookCall"))
                $root.proto.EvmHookCall.encode(message.evmHookCall, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HookCall message, length delimited. Does not implicitly {@link proto.HookCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.HookCall
         * @static
         * @param {proto.IHookCall} message HookCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HookCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HookCall message from the specified reader or buffer.
         * @function decode
         * @memberof proto.HookCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.HookCall} HookCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HookCall.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HookCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.hookId = reader.int64();
                        break;
                    }
                case 3: {
                        message.evmHookCall = $root.proto.EvmHookCall.decode(reader, reader.uint32());
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
         * Decodes a HookCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.HookCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.HookCall} HookCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HookCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HookCall message.
         * @function verify
         * @memberof proto.HookCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HookCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.hookId != null && message.hasOwnProperty("hookId")) {
                properties.id = 1;
                if (!$util.isInteger(message.hookId) && !(message.hookId && $util.isInteger(message.hookId.low) && $util.isInteger(message.hookId.high)))
                    return "hookId: integer|Long expected";
            }
            if (message.evmHookCall != null && message.hasOwnProperty("evmHookCall")) {
                properties.callSpec = 1;
                {
                    let error = $root.proto.EvmHookCall.verify(message.evmHookCall);
                    if (error)
                        return "evmHookCall." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HookCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.HookCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.HookCall} HookCall
         */
        HookCall.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.HookCall)
                return object;
            let message = new $root.proto.HookCall();
            if (object.hookId != null)
                if ($util.Long)
                    (message.hookId = $util.Long.fromValue(object.hookId)).unsigned = false;
                else if (typeof object.hookId === "string")
                    message.hookId = parseInt(object.hookId, 10);
                else if (typeof object.hookId === "number")
                    message.hookId = object.hookId;
                else if (typeof object.hookId === "object")
                    message.hookId = new $util.LongBits(object.hookId.low >>> 0, object.hookId.high >>> 0).toNumber();
            if (object.evmHookCall != null) {
                if (typeof object.evmHookCall !== "object")
                    throw TypeError(".proto.HookCall.evmHookCall: object expected");
                message.evmHookCall = $root.proto.EvmHookCall.fromObject(object.evmHookCall);
            }
            return message;
        };

        /**
         * Creates a plain object from a HookCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.HookCall
         * @static
         * @param {proto.HookCall} message HookCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HookCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.hookId != null && message.hasOwnProperty("hookId")) {
                if (typeof message.hookId === "number")
                    object.hookId = options.longs === String ? String(message.hookId) : message.hookId;
                else
                    object.hookId = options.longs === String ? $util.Long.prototype.toString.call(message.hookId) : options.longs === Number ? new $util.LongBits(message.hookId.low >>> 0, message.hookId.high >>> 0).toNumber() : message.hookId;
                if (options.oneofs)
                    object.id = "hookId";
            }
            if (message.evmHookCall != null && message.hasOwnProperty("evmHookCall")) {
                object.evmHookCall = $root.proto.EvmHookCall.toObject(message.evmHookCall, options);
                if (options.oneofs)
                    object.callSpec = "evmHookCall";
            }
            return object;
        };

        /**
         * Converts this HookCall to JSON.
         * @function toJSON
         * @memberof proto.HookCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HookCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HookCall
         * @function getTypeUrl
         * @memberof proto.HookCall
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HookCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.HookCall";
        };

        return HookCall;
    })();

    proto.EvmHookCall = (function() {

        /**
         * Properties of an EvmHookCall.
         * @memberof proto
         * @interface IEvmHookCall
         * @property {Uint8Array|null} [data] Call data to pass to the hook via the IHieroHook.HookContext#data field.
         * @property {number|Long|null} [gasLimit] The gas limit to use.
         */

        /**
         * Constructs a new EvmHookCall.
         * @memberof proto
         * @classdesc Specifies details of a call to an EVM hook.
         * @implements IEvmHookCall
         * @constructor
         * @param {proto.IEvmHookCall=} [properties] Properties to set
         */
        function EvmHookCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Call data to pass to the hook via the IHieroHook.HookContext#data field.
         * @member {Uint8Array} data
         * @memberof proto.EvmHookCall
         * @instance
         */
        EvmHookCall.prototype.data = $util.newBuffer([]);

        /**
         * The gas limit to use.
         * @member {number|Long} gasLimit
         * @memberof proto.EvmHookCall
         * @instance
         */
        EvmHookCall.prototype.gasLimit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new EvmHookCall instance using the specified properties.
         * @function create
         * @memberof proto.EvmHookCall
         * @static
         * @param {proto.IEvmHookCall=} [properties] Properties to set
         * @returns {proto.EvmHookCall} EvmHookCall instance
         */
        EvmHookCall.create = function create(properties) {
            return new EvmHookCall(properties);
        };

        /**
         * Encodes the specified EvmHookCall message. Does not implicitly {@link proto.EvmHookCall.verify|verify} messages.
         * @function encode
         * @memberof proto.EvmHookCall
         * @static
         * @param {proto.IEvmHookCall} message EvmHookCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EvmHookCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            if (message.gasLimit != null && Object.hasOwnProperty.call(message, "gasLimit"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.gasLimit);
            return writer;
        };

        /**
         * Encodes the specified EvmHookCall message, length delimited. Does not implicitly {@link proto.EvmHookCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.EvmHookCall
         * @static
         * @param {proto.IEvmHookCall} message EvmHookCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EvmHookCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EvmHookCall message from the specified reader or buffer.
         * @function decode
         * @memberof proto.EvmHookCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.EvmHookCall} EvmHookCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EvmHookCall.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.EvmHookCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.data = reader.bytes();
                        break;
                    }
                case 2: {
                        message.gasLimit = reader.uint64();
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
         * Decodes an EvmHookCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.EvmHookCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.EvmHookCall} EvmHookCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EvmHookCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EvmHookCall message.
         * @function verify
         * @memberof proto.EvmHookCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EvmHookCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.gasLimit != null && message.hasOwnProperty("gasLimit"))
                if (!$util.isInteger(message.gasLimit) && !(message.gasLimit && $util.isInteger(message.gasLimit.low) && $util.isInteger(message.gasLimit.high)))
                    return "gasLimit: integer|Long expected";
            return null;
        };

        /**
         * Creates an EvmHookCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.EvmHookCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.EvmHookCall} EvmHookCall
         */
        EvmHookCall.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.EvmHookCall)
                return object;
            let message = new $root.proto.EvmHookCall();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.gasLimit != null)
                if ($util.Long)
                    (message.gasLimit = $util.Long.fromValue(object.gasLimit)).unsigned = true;
                else if (typeof object.gasLimit === "string")
                    message.gasLimit = parseInt(object.gasLimit, 10);
                else if (typeof object.gasLimit === "number")
                    message.gasLimit = object.gasLimit;
                else if (typeof object.gasLimit === "object")
                    message.gasLimit = new $util.LongBits(object.gasLimit.low >>> 0, object.gasLimit.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an EvmHookCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.EvmHookCall
         * @static
         * @param {proto.EvmHookCall} message EvmHookCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EvmHookCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.gasLimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gasLimit = options.longs === String ? "0" : 0;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.gasLimit != null && message.hasOwnProperty("gasLimit"))
                if (typeof message.gasLimit === "number")
                    object.gasLimit = options.longs === String ? String(message.gasLimit) : message.gasLimit;
                else
                    object.gasLimit = options.longs === String ? $util.Long.prototype.toString.call(message.gasLimit) : options.longs === Number ? new $util.LongBits(message.gasLimit.low >>> 0, message.gasLimit.high >>> 0).toNumber(true) : message.gasLimit;
            return object;
        };

        /**
         * Converts this EvmHookCall to JSON.
         * @function toJSON
         * @memberof proto.EvmHookCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EvmHookCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EvmHookCall
         * @function getTypeUrl
         * @memberof proto.EvmHookCall
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EvmHookCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.EvmHookCall";
        };

        return EvmHookCall;
    })();

    proto.AccountAmount = (function() {

        /**
         * Properties of an AccountAmount.
         * @memberof proto
         * @interface IAccountAmount
         * @property {proto.IAccountID|null} [accountID] An account identifier that will send or receive token(s).
         * @property {number|Long|null} [amount] An amount to send (negative) or receive (positive).
         * <p>
         * This amount MUST be denominated in the smallest unit of the relevant
         * token.<br/>
         * For HBAR this SHALL be tinybar (10<sup>-8</sup> HBAR).<br/>
         * For other fungible/common tokens this SHALL depend on the value of
         * `decimals` for that token.
         * @property {boolean|null} [isApproval] An approved allowance flag.<br/>
         * If true then the transfer is expected to be an approved allowance.
         * <p>
         * If set, `accountID` SHALL be the owner that previously approved
         * the allowance.<br/>
         * The default value SHALL be false (unset).
         * @property {proto.IHookCall|null} [preTxAllowanceHook] A single call made before attempting the CryptoTransfer, to a
         * method with logical signature allow(HookContext, ProposedTransfers)
         * @property {proto.IHookCall|null} [prePostTxAllowanceHook] Two calls, the first call before attempting the CryptoTransfer, to a
         * method with logical signature allowPre(HookContext, ProposedTransfers);
         * and the second call after attempting the CryptoTransfer, to a method
         * with logical signature allowPost(HookContext, ProposedTransfers).
         */

        /**
         * Constructs a new AccountAmount.
         * @memberof proto
         * @classdesc An account, and the amount that it sends or receives during a token transfer.
         * 
         * This message is only relevant to fungible/common token transfers.
         * Non-fungible/unique (NFT) token transfers MUST use the NftTransfer message.
         * @implements IAccountAmount
         * @constructor
         * @param {proto.IAccountAmount=} [properties] Properties to set
         */
        function AccountAmount(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * An account identifier that will send or receive token(s).
         * @member {proto.IAccountID|null|undefined} accountID
         * @memberof proto.AccountAmount
         * @instance
         */
        AccountAmount.prototype.accountID = null;

        /**
         * An amount to send (negative) or receive (positive).
         * <p>
         * This amount MUST be denominated in the smallest unit of the relevant
         * token.<br/>
         * For HBAR this SHALL be tinybar (10<sup>-8</sup> HBAR).<br/>
         * For other fungible/common tokens this SHALL depend on the value of
         * `decimals` for that token.
         * @member {number|Long} amount
         * @memberof proto.AccountAmount
         * @instance
         */
        AccountAmount.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * An approved allowance flag.<br/>
         * If true then the transfer is expected to be an approved allowance.
         * <p>
         * If set, `accountID` SHALL be the owner that previously approved
         * the allowance.<br/>
         * The default value SHALL be false (unset).
         * @member {boolean} isApproval
         * @memberof proto.AccountAmount
         * @instance
         */
        AccountAmount.prototype.isApproval = false;

        /**
         * A single call made before attempting the CryptoTransfer, to a
         * method with logical signature allow(HookContext, ProposedTransfers)
         * @member {proto.IHookCall|null|undefined} preTxAllowanceHook
         * @memberof proto.AccountAmount
         * @instance
         */
        AccountAmount.prototype.preTxAllowanceHook = null;

        /**
         * Two calls, the first call before attempting the CryptoTransfer, to a
         * method with logical signature allowPre(HookContext, ProposedTransfers);
         * and the second call after attempting the CryptoTransfer, to a method
         * with logical signature allowPost(HookContext, ProposedTransfers).
         * @member {proto.IHookCall|null|undefined} prePostTxAllowanceHook
         * @memberof proto.AccountAmount
         * @instance
         */
        AccountAmount.prototype.prePostTxAllowanceHook = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * If set, a call to a hook of type `ACCOUNT_ALLOWANCE_HOOK` on scoped
         * account; the hook's invoked methods must not revert and must return
         * true for the containing CryptoTransfer to succeed.
         * <p>
         * Cannot be set if `is_approval` is true.
         * @member {"preTxAllowanceHook"|"prePostTxAllowanceHook"|undefined} hookCall
         * @memberof proto.AccountAmount
         * @instance
         */
        Object.defineProperty(AccountAmount.prototype, "hookCall", {
            get: $util.oneOfGetter($oneOfFields = ["preTxAllowanceHook", "prePostTxAllowanceHook"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AccountAmount instance using the specified properties.
         * @function create
         * @memberof proto.AccountAmount
         * @static
         * @param {proto.IAccountAmount=} [properties] Properties to set
         * @returns {proto.AccountAmount} AccountAmount instance
         */
        AccountAmount.create = function create(properties) {
            return new AccountAmount(properties);
        };

        /**
         * Encodes the specified AccountAmount message. Does not implicitly {@link proto.AccountAmount.verify|verify} messages.
         * @function encode
         * @memberof proto.AccountAmount
         * @static
         * @param {proto.IAccountAmount} message AccountAmount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountAmount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountID != null && Object.hasOwnProperty.call(message, "accountID"))
                $root.proto.AccountID.encode(message.accountID, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).sint64(message.amount);
            if (message.isApproval != null && Object.hasOwnProperty.call(message, "isApproval"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isApproval);
            if (message.preTxAllowanceHook != null && Object.hasOwnProperty.call(message, "preTxAllowanceHook"))
                $root.proto.HookCall.encode(message.preTxAllowanceHook, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.prePostTxAllowanceHook != null && Object.hasOwnProperty.call(message, "prePostTxAllowanceHook"))
                $root.proto.HookCall.encode(message.prePostTxAllowanceHook, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AccountAmount message, length delimited. Does not implicitly {@link proto.AccountAmount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AccountAmount
         * @static
         * @param {proto.IAccountAmount} message AccountAmount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountAmount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountAmount message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AccountAmount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AccountAmount} AccountAmount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountAmount.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AccountAmount();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.accountID = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.amount = reader.sint64();
                        break;
                    }
                case 3: {
                        message.isApproval = reader.bool();
                        break;
                    }
                case 4: {
                        message.preTxAllowanceHook = $root.proto.HookCall.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.prePostTxAllowanceHook = $root.proto.HookCall.decode(reader, reader.uint32());
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
         * Decodes an AccountAmount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.AccountAmount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AccountAmount} AccountAmount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountAmount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountAmount message.
         * @function verify
         * @memberof proto.AccountAmount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountAmount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.accountID != null && message.hasOwnProperty("accountID")) {
                let error = $root.proto.AccountID.verify(message.accountID);
                if (error)
                    return "accountID." + error;
            }
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.isApproval != null && message.hasOwnProperty("isApproval"))
                if (typeof message.isApproval !== "boolean")
                    return "isApproval: boolean expected";
            if (message.preTxAllowanceHook != null && message.hasOwnProperty("preTxAllowanceHook")) {
                properties.hookCall = 1;
                {
                    let error = $root.proto.HookCall.verify(message.preTxAllowanceHook);
                    if (error)
                        return "preTxAllowanceHook." + error;
                }
            }
            if (message.prePostTxAllowanceHook != null && message.hasOwnProperty("prePostTxAllowanceHook")) {
                if (properties.hookCall === 1)
                    return "hookCall: multiple values";
                properties.hookCall = 1;
                {
                    let error = $root.proto.HookCall.verify(message.prePostTxAllowanceHook);
                    if (error)
                        return "prePostTxAllowanceHook." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AccountAmount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.AccountAmount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.AccountAmount} AccountAmount
         */
        AccountAmount.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.AccountAmount)
                return object;
            let message = new $root.proto.AccountAmount();
            if (object.accountID != null) {
                if (typeof object.accountID !== "object")
                    throw TypeError(".proto.AccountAmount.accountID: object expected");
                message.accountID = $root.proto.AccountID.fromObject(object.accountID);
            }
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.isApproval != null)
                message.isApproval = Boolean(object.isApproval);
            if (object.preTxAllowanceHook != null) {
                if (typeof object.preTxAllowanceHook !== "object")
                    throw TypeError(".proto.AccountAmount.preTxAllowanceHook: object expected");
                message.preTxAllowanceHook = $root.proto.HookCall.fromObject(object.preTxAllowanceHook);
            }
            if (object.prePostTxAllowanceHook != null) {
                if (typeof object.prePostTxAllowanceHook !== "object")
                    throw TypeError(".proto.AccountAmount.prePostTxAllowanceHook: object expected");
                message.prePostTxAllowanceHook = $root.proto.HookCall.fromObject(object.prePostTxAllowanceHook);
            }
            return message;
        };

        /**
         * Creates a plain object from an AccountAmount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.AccountAmount
         * @static
         * @param {proto.AccountAmount} message AccountAmount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountAmount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.accountID = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                object.isApproval = false;
            }
            if (message.accountID != null && message.hasOwnProperty("accountID"))
                object.accountID = $root.proto.AccountID.toObject(message.accountID, options);
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.isApproval != null && message.hasOwnProperty("isApproval"))
                object.isApproval = message.isApproval;
            if (message.preTxAllowanceHook != null && message.hasOwnProperty("preTxAllowanceHook")) {
                object.preTxAllowanceHook = $root.proto.HookCall.toObject(message.preTxAllowanceHook, options);
                if (options.oneofs)
                    object.hookCall = "preTxAllowanceHook";
            }
            if (message.prePostTxAllowanceHook != null && message.hasOwnProperty("prePostTxAllowanceHook")) {
                object.prePostTxAllowanceHook = $root.proto.HookCall.toObject(message.prePostTxAllowanceHook, options);
                if (options.oneofs)
                    object.hookCall = "prePostTxAllowanceHook";
            }
            return object;
        };

        /**
         * Converts this AccountAmount to JSON.
         * @function toJSON
         * @memberof proto.AccountAmount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountAmount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountAmount
         * @function getTypeUrl
         * @memberof proto.AccountAmount
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountAmount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.AccountAmount";
        };

        return AccountAmount;
    })();

    proto.TransferList = (function() {

        /**
         * Properties of a TransferList.
         * @memberof proto
         * @interface ITransferList
         * @property {Array.<proto.IAccountAmount>|null} [accountAmounts] A list of AccountAmount pairs.<br/>
         * Each entry in this list is an account and an amount to transfer
         * into it (positive) or out of it (negative)
         */

        /**
         * Constructs a new TransferList.
         * @memberof proto
         * @classdesc A list of accounts and amounts to transfer.
         * 
         * Each `AccountAmount` SHALL specify the account and the amount to
         * send(negative) or receive(positive).<br/>
         * Each `TransferList` SHALL be contained in another message that contains
         * other details required to complete a transfer. This is typically a
         * `CryptoTransferTransactionBody` or `TransactionRecord`.<br/>
         * The `TransferList` SHALL only be used for HBAR transfers. Other token types
         * MUST use the `TokenTransferList` message.
         * @implements ITransferList
         * @constructor
         * @param {proto.ITransferList=} [properties] Properties to set
         */
        function TransferList(properties) {
            this.accountAmounts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A list of AccountAmount pairs.<br/>
         * Each entry in this list is an account and an amount to transfer
         * into it (positive) or out of it (negative)
         * @member {Array.<proto.IAccountAmount>} accountAmounts
         * @memberof proto.TransferList
         * @instance
         */
        TransferList.prototype.accountAmounts = $util.emptyArray;

        /**
         * Creates a new TransferList instance using the specified properties.
         * @function create
         * @memberof proto.TransferList
         * @static
         * @param {proto.ITransferList=} [properties] Properties to set
         * @returns {proto.TransferList} TransferList instance
         */
        TransferList.create = function create(properties) {
            return new TransferList(properties);
        };

        /**
         * Encodes the specified TransferList message. Does not implicitly {@link proto.TransferList.verify|verify} messages.
         * @function encode
         * @memberof proto.TransferList
         * @static
         * @param {proto.ITransferList} message TransferList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountAmounts != null && message.accountAmounts.length)
                for (let i = 0; i < message.accountAmounts.length; ++i)
                    $root.proto.AccountAmount.encode(message.accountAmounts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TransferList message, length delimited. Does not implicitly {@link proto.TransferList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TransferList
         * @static
         * @param {proto.ITransferList} message TransferList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransferList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransferList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TransferList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TransferList} TransferList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TransferList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.accountAmounts && message.accountAmounts.length))
                            message.accountAmounts = [];
                        message.accountAmounts.push($root.proto.AccountAmount.decode(reader, reader.uint32()));
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
         * Decodes a TransferList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TransferList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TransferList} TransferList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransferList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransferList message.
         * @function verify
         * @memberof proto.TransferList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransferList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountAmounts != null && message.hasOwnProperty("accountAmounts")) {
                if (!Array.isArray(message.accountAmounts))
                    return "accountAmounts: array expected";
                for (let i = 0; i < message.accountAmounts.length; ++i) {
                    let error = $root.proto.AccountAmount.verify(message.accountAmounts[i]);
                    if (error)
                        return "accountAmounts." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TransferList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TransferList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TransferList} TransferList
         */
        TransferList.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TransferList)
                return object;
            let message = new $root.proto.TransferList();
            if (object.accountAmounts) {
                if (!Array.isArray(object.accountAmounts))
                    throw TypeError(".proto.TransferList.accountAmounts: array expected");
                message.accountAmounts = [];
                for (let i = 0; i < object.accountAmounts.length; ++i) {
                    if (typeof object.accountAmounts[i] !== "object")
                        throw TypeError(".proto.TransferList.accountAmounts: object expected");
                    message.accountAmounts[i] = $root.proto.AccountAmount.fromObject(object.accountAmounts[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TransferList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TransferList
         * @static
         * @param {proto.TransferList} message TransferList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransferList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accountAmounts = [];
            if (message.accountAmounts && message.accountAmounts.length) {
                object.accountAmounts = [];
                for (let j = 0; j < message.accountAmounts.length; ++j)
                    object.accountAmounts[j] = $root.proto.AccountAmount.toObject(message.accountAmounts[j], options);
            }
            return object;
        };

        /**
         * Converts this TransferList to JSON.
         * @function toJSON
         * @memberof proto.TransferList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransferList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TransferList
         * @function getTypeUrl
         * @memberof proto.TransferList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TransferList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TransferList";
        };

        return TransferList;
    })();

    proto.NftTransfer = (function() {

        /**
         * Properties of a NftTransfer.
         * @memberof proto
         * @interface INftTransfer
         * @property {proto.IAccountID|null} [senderAccountID] An Account identifier for the sender.
         * @property {proto.IAccountID|null} [receiverAccountID] An Account identifier for the receiver.
         * @property {number|Long|null} [serialNumber] A serial number for the NFT to transfer.
         * @property {boolean|null} [isApproval] An approved allowance flag.<br/>
         * If true then the transfer is expected to be an approved allowance.
         * <p>
         * If set, `senderAccountID` SHALL be the owner that previously approved
         * the allowance.<br/>
         * If set, the `senderAccountID` MUST be the "payer" account for
         * the transaction <br/>
         * The default value SHALL be false (unset).
         * @property {proto.IHookCall|null} [preTxSenderAllowanceHook] A single call made before attempting the CryptoTransfer, to a
         * method with logical signature allow(HookContext, ProposedTransfers)
         * @property {proto.IHookCall|null} [prePostTxSenderAllowanceHook] Two calls, the first call before attempting the CryptoTransfer, to a
         * method with logical signature allowPre(HookContext, ProposedTransfers);
         * and the second call after attempting the CryptoTransfer, to a method
         * with logical signature allowPost(HookContext, ProposedTransfers).
         * @property {proto.IHookCall|null} [preTxReceiverAllowanceHook] A single call made before attempting the CryptoTransfer, to a
         * method with logical signature allow(HookContext, ProposedTransfers)
         * @property {proto.IHookCall|null} [prePostTxReceiverAllowanceHook] Two calls, the first call before attempting the CryptoTransfer, to a
         * method with logical signature allowPre(HookContext, ProposedTransfers);
         * and the second call after attempting the CryptoTransfer, to a method
         * with logical signature allowPost(HookContext, ProposedTransfers).
         */

        /**
         * Constructs a new NftTransfer.
         * @memberof proto
         * @classdesc A NFT transfer.<br/>
         * This refers to a sender account, a receiver account, and the serial number
         * of an NFT to transfer from sender to receiver.
         * 
         * Each `NftTransfer` SHALL be contained in another message (typically
         * `TokenTransferList`) that details which `Token` type applies to this NFT
         * transfer.
         * @implements INftTransfer
         * @constructor
         * @param {proto.INftTransfer=} [properties] Properties to set
         */
        function NftTransfer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * An Account identifier for the sender.
         * @member {proto.IAccountID|null|undefined} senderAccountID
         * @memberof proto.NftTransfer
         * @instance
         */
        NftTransfer.prototype.senderAccountID = null;

        /**
         * An Account identifier for the receiver.
         * @member {proto.IAccountID|null|undefined} receiverAccountID
         * @memberof proto.NftTransfer
         * @instance
         */
        NftTransfer.prototype.receiverAccountID = null;

        /**
         * A serial number for the NFT to transfer.
         * @member {number|Long} serialNumber
         * @memberof proto.NftTransfer
         * @instance
         */
        NftTransfer.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * An approved allowance flag.<br/>
         * If true then the transfer is expected to be an approved allowance.
         * <p>
         * If set, `senderAccountID` SHALL be the owner that previously approved
         * the allowance.<br/>
         * If set, the `senderAccountID` MUST be the "payer" account for
         * the transaction <br/>
         * The default value SHALL be false (unset).
         * @member {boolean} isApproval
         * @memberof proto.NftTransfer
         * @instance
         */
        NftTransfer.prototype.isApproval = false;

        /**
         * A single call made before attempting the CryptoTransfer, to a
         * method with logical signature allow(HookContext, ProposedTransfers)
         * @member {proto.IHookCall|null|undefined} preTxSenderAllowanceHook
         * @memberof proto.NftTransfer
         * @instance
         */
        NftTransfer.prototype.preTxSenderAllowanceHook = null;

        /**
         * Two calls, the first call before attempting the CryptoTransfer, to a
         * method with logical signature allowPre(HookContext, ProposedTransfers);
         * and the second call after attempting the CryptoTransfer, to a method
         * with logical signature allowPost(HookContext, ProposedTransfers).
         * @member {proto.IHookCall|null|undefined} prePostTxSenderAllowanceHook
         * @memberof proto.NftTransfer
         * @instance
         */
        NftTransfer.prototype.prePostTxSenderAllowanceHook = null;

        /**
         * A single call made before attempting the CryptoTransfer, to a
         * method with logical signature allow(HookContext, ProposedTransfers)
         * @member {proto.IHookCall|null|undefined} preTxReceiverAllowanceHook
         * @memberof proto.NftTransfer
         * @instance
         */
        NftTransfer.prototype.preTxReceiverAllowanceHook = null;

        /**
         * Two calls, the first call before attempting the CryptoTransfer, to a
         * method with logical signature allowPre(HookContext, ProposedTransfers);
         * and the second call after attempting the CryptoTransfer, to a method
         * with logical signature allowPost(HookContext, ProposedTransfers).
         * @member {proto.IHookCall|null|undefined} prePostTxReceiverAllowanceHook
         * @memberof proto.NftTransfer
         * @instance
         */
        NftTransfer.prototype.prePostTxReceiverAllowanceHook = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * If set, a call to a hook of type `ACCOUNT_ALLOWANCE_HOOK` installed on
         * senderAccountID that must succeed for the transaction to occur.
         * <p>
         * Cannot be set if `is_approval` is true.
         * @member {"preTxSenderAllowanceHook"|"prePostTxSenderAllowanceHook"|undefined} senderAllowanceHookCall
         * @memberof proto.NftTransfer
         * @instance
         */
        Object.defineProperty(NftTransfer.prototype, "senderAllowanceHookCall", {
            get: $util.oneOfGetter($oneOfFields = ["preTxSenderAllowanceHook", "prePostTxSenderAllowanceHook"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * If set, a call to a hook of type `ACCOUNT_ALLOWANCE_HOOK` installed on
         * receiverAccountID that must succeed for the transaction to occur.
         * <p>
         * May be set even if `is_approval` is true. In this case, the approval applies
         * to the sender authorization, and the hook applies to the receiver authorization
         * (if needed, e.g. because of a fallback royalty fee or receiver signature
         * requirement).
         * @member {"preTxReceiverAllowanceHook"|"prePostTxReceiverAllowanceHook"|undefined} receiverAllowanceHookCall
         * @memberof proto.NftTransfer
         * @instance
         */
        Object.defineProperty(NftTransfer.prototype, "receiverAllowanceHookCall", {
            get: $util.oneOfGetter($oneOfFields = ["preTxReceiverAllowanceHook", "prePostTxReceiverAllowanceHook"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new NftTransfer instance using the specified properties.
         * @function create
         * @memberof proto.NftTransfer
         * @static
         * @param {proto.INftTransfer=} [properties] Properties to set
         * @returns {proto.NftTransfer} NftTransfer instance
         */
        NftTransfer.create = function create(properties) {
            return new NftTransfer(properties);
        };

        /**
         * Encodes the specified NftTransfer message. Does not implicitly {@link proto.NftTransfer.verify|verify} messages.
         * @function encode
         * @memberof proto.NftTransfer
         * @static
         * @param {proto.INftTransfer} message NftTransfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NftTransfer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderAccountID != null && Object.hasOwnProperty.call(message, "senderAccountID"))
                $root.proto.AccountID.encode(message.senderAccountID, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.receiverAccountID != null && Object.hasOwnProperty.call(message, "receiverAccountID"))
                $root.proto.AccountID.encode(message.receiverAccountID, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.serialNumber);
            if (message.isApproval != null && Object.hasOwnProperty.call(message, "isApproval"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isApproval);
            if (message.preTxSenderAllowanceHook != null && Object.hasOwnProperty.call(message, "preTxSenderAllowanceHook"))
                $root.proto.HookCall.encode(message.preTxSenderAllowanceHook, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.prePostTxSenderAllowanceHook != null && Object.hasOwnProperty.call(message, "prePostTxSenderAllowanceHook"))
                $root.proto.HookCall.encode(message.prePostTxSenderAllowanceHook, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.preTxReceiverAllowanceHook != null && Object.hasOwnProperty.call(message, "preTxReceiverAllowanceHook"))
                $root.proto.HookCall.encode(message.preTxReceiverAllowanceHook, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.prePostTxReceiverAllowanceHook != null && Object.hasOwnProperty.call(message, "prePostTxReceiverAllowanceHook"))
                $root.proto.HookCall.encode(message.prePostTxReceiverAllowanceHook, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NftTransfer message, length delimited. Does not implicitly {@link proto.NftTransfer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.NftTransfer
         * @static
         * @param {proto.INftTransfer} message NftTransfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NftTransfer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NftTransfer message from the specified reader or buffer.
         * @function decode
         * @memberof proto.NftTransfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.NftTransfer} NftTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NftTransfer.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.NftTransfer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.senderAccountID = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.receiverAccountID = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.serialNumber = reader.int64();
                        break;
                    }
                case 4: {
                        message.isApproval = reader.bool();
                        break;
                    }
                case 5: {
                        message.preTxSenderAllowanceHook = $root.proto.HookCall.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.prePostTxSenderAllowanceHook = $root.proto.HookCall.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.preTxReceiverAllowanceHook = $root.proto.HookCall.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.prePostTxReceiverAllowanceHook = $root.proto.HookCall.decode(reader, reader.uint32());
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
         * Decodes a NftTransfer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.NftTransfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.NftTransfer} NftTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NftTransfer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NftTransfer message.
         * @function verify
         * @memberof proto.NftTransfer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NftTransfer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.senderAccountID != null && message.hasOwnProperty("senderAccountID")) {
                let error = $root.proto.AccountID.verify(message.senderAccountID);
                if (error)
                    return "senderAccountID." + error;
            }
            if (message.receiverAccountID != null && message.hasOwnProperty("receiverAccountID")) {
                let error = $root.proto.AccountID.verify(message.receiverAccountID);
                if (error)
                    return "receiverAccountID." + error;
            }
            if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                    return "serialNumber: integer|Long expected";
            if (message.isApproval != null && message.hasOwnProperty("isApproval"))
                if (typeof message.isApproval !== "boolean")
                    return "isApproval: boolean expected";
            if (message.preTxSenderAllowanceHook != null && message.hasOwnProperty("preTxSenderAllowanceHook")) {
                properties.senderAllowanceHookCall = 1;
                {
                    let error = $root.proto.HookCall.verify(message.preTxSenderAllowanceHook);
                    if (error)
                        return "preTxSenderAllowanceHook." + error;
                }
            }
            if (message.prePostTxSenderAllowanceHook != null && message.hasOwnProperty("prePostTxSenderAllowanceHook")) {
                if (properties.senderAllowanceHookCall === 1)
                    return "senderAllowanceHookCall: multiple values";
                properties.senderAllowanceHookCall = 1;
                {
                    let error = $root.proto.HookCall.verify(message.prePostTxSenderAllowanceHook);
                    if (error)
                        return "prePostTxSenderAllowanceHook." + error;
                }
            }
            if (message.preTxReceiverAllowanceHook != null && message.hasOwnProperty("preTxReceiverAllowanceHook")) {
                properties.receiverAllowanceHookCall = 1;
                {
                    let error = $root.proto.HookCall.verify(message.preTxReceiverAllowanceHook);
                    if (error)
                        return "preTxReceiverAllowanceHook." + error;
                }
            }
            if (message.prePostTxReceiverAllowanceHook != null && message.hasOwnProperty("prePostTxReceiverAllowanceHook")) {
                if (properties.receiverAllowanceHookCall === 1)
                    return "receiverAllowanceHookCall: multiple values";
                properties.receiverAllowanceHookCall = 1;
                {
                    let error = $root.proto.HookCall.verify(message.prePostTxReceiverAllowanceHook);
                    if (error)
                        return "prePostTxReceiverAllowanceHook." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NftTransfer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.NftTransfer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.NftTransfer} NftTransfer
         */
        NftTransfer.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.NftTransfer)
                return object;
            let message = new $root.proto.NftTransfer();
            if (object.senderAccountID != null) {
                if (typeof object.senderAccountID !== "object")
                    throw TypeError(".proto.NftTransfer.senderAccountID: object expected");
                message.senderAccountID = $root.proto.AccountID.fromObject(object.senderAccountID);
            }
            if (object.receiverAccountID != null) {
                if (typeof object.receiverAccountID !== "object")
                    throw TypeError(".proto.NftTransfer.receiverAccountID: object expected");
                message.receiverAccountID = $root.proto.AccountID.fromObject(object.receiverAccountID);
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
            if (object.isApproval != null)
                message.isApproval = Boolean(object.isApproval);
            if (object.preTxSenderAllowanceHook != null) {
                if (typeof object.preTxSenderAllowanceHook !== "object")
                    throw TypeError(".proto.NftTransfer.preTxSenderAllowanceHook: object expected");
                message.preTxSenderAllowanceHook = $root.proto.HookCall.fromObject(object.preTxSenderAllowanceHook);
            }
            if (object.prePostTxSenderAllowanceHook != null) {
                if (typeof object.prePostTxSenderAllowanceHook !== "object")
                    throw TypeError(".proto.NftTransfer.prePostTxSenderAllowanceHook: object expected");
                message.prePostTxSenderAllowanceHook = $root.proto.HookCall.fromObject(object.prePostTxSenderAllowanceHook);
            }
            if (object.preTxReceiverAllowanceHook != null) {
                if (typeof object.preTxReceiverAllowanceHook !== "object")
                    throw TypeError(".proto.NftTransfer.preTxReceiverAllowanceHook: object expected");
                message.preTxReceiverAllowanceHook = $root.proto.HookCall.fromObject(object.preTxReceiverAllowanceHook);
            }
            if (object.prePostTxReceiverAllowanceHook != null) {
                if (typeof object.prePostTxReceiverAllowanceHook !== "object")
                    throw TypeError(".proto.NftTransfer.prePostTxReceiverAllowanceHook: object expected");
                message.prePostTxReceiverAllowanceHook = $root.proto.HookCall.fromObject(object.prePostTxReceiverAllowanceHook);
            }
            return message;
        };

        /**
         * Creates a plain object from a NftTransfer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.NftTransfer
         * @static
         * @param {proto.NftTransfer} message NftTransfer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NftTransfer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.senderAccountID = null;
                object.receiverAccountID = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serialNumber = options.longs === String ? "0" : 0;
                object.isApproval = false;
            }
            if (message.senderAccountID != null && message.hasOwnProperty("senderAccountID"))
                object.senderAccountID = $root.proto.AccountID.toObject(message.senderAccountID, options);
            if (message.receiverAccountID != null && message.hasOwnProperty("receiverAccountID"))
                object.receiverAccountID = $root.proto.AccountID.toObject(message.receiverAccountID, options);
            if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                if (typeof message.serialNumber === "number")
                    object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
                else
                    object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
            if (message.isApproval != null && message.hasOwnProperty("isApproval"))
                object.isApproval = message.isApproval;
            if (message.preTxSenderAllowanceHook != null && message.hasOwnProperty("preTxSenderAllowanceHook")) {
                object.preTxSenderAllowanceHook = $root.proto.HookCall.toObject(message.preTxSenderAllowanceHook, options);
                if (options.oneofs)
                    object.senderAllowanceHookCall = "preTxSenderAllowanceHook";
            }
            if (message.prePostTxSenderAllowanceHook != null && message.hasOwnProperty("prePostTxSenderAllowanceHook")) {
                object.prePostTxSenderAllowanceHook = $root.proto.HookCall.toObject(message.prePostTxSenderAllowanceHook, options);
                if (options.oneofs)
                    object.senderAllowanceHookCall = "prePostTxSenderAllowanceHook";
            }
            if (message.preTxReceiverAllowanceHook != null && message.hasOwnProperty("preTxReceiverAllowanceHook")) {
                object.preTxReceiverAllowanceHook = $root.proto.HookCall.toObject(message.preTxReceiverAllowanceHook, options);
                if (options.oneofs)
                    object.receiverAllowanceHookCall = "preTxReceiverAllowanceHook";
            }
            if (message.prePostTxReceiverAllowanceHook != null && message.hasOwnProperty("prePostTxReceiverAllowanceHook")) {
                object.prePostTxReceiverAllowanceHook = $root.proto.HookCall.toObject(message.prePostTxReceiverAllowanceHook, options);
                if (options.oneofs)
                    object.receiverAllowanceHookCall = "prePostTxReceiverAllowanceHook";
            }
            return object;
        };

        /**
         * Converts this NftTransfer to JSON.
         * @function toJSON
         * @memberof proto.NftTransfer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NftTransfer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NftTransfer
         * @function getTypeUrl
         * @memberof proto.NftTransfer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NftTransfer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.NftTransfer";
        };

        return NftTransfer;
    })();

    proto.TokenTransferList = (function() {

        /**
         * Properties of a TokenTransferList.
         * @memberof proto
         * @interface ITokenTransferList
         * @property {proto.ITokenID|null} [token] A token identifier.<br/>
         * This is the token to be transferred.
         * @property {Array.<proto.IAccountAmount>|null} [transfers] A list of account amounts.
         * <p>
         * Each entry SHALL have an account and amount.<br/>
         * These transfers SHALL be "double-entry" style; the credits (positive
         * amount) and debits (negative amount) MUST sum to 0, unless this
         * transfer list is part of a `mint` or `burn` operation.<br/>
         * This SHALL be be set for fungible/common tokens and MUST be
         * empty otherwise.
         * @property {Array.<proto.INftTransfer>|null} [nftTransfers] A list of NftTransfers.
         * <p>
         * Each entry SHALL have a sender and receiver account, and the
         * serial number of the unique token to transfer.<br/>
         * This SHALL be be set for non-fungible/unique tokens and SHALL be
         * empty otherwise.
         * @property {google.protobuf.IUInt32Value|null} [expectedDecimals] An expected decimal precision.<br/>
         * This is the number of decimals a fungible/common token type is
         * _expected_ to have.
         * <p>
         * The transfer SHALL fail with response code `UNEXPECTED_TOKEN_DECIMALS`
         * if this is set and the actual decimals specified for the `Token` differ
         * from this value.<br/>
         * If `nftTransfers` is set, then this value SHOULD NOT be set.
         */

        /**
         * Constructs a new TokenTransferList.
         * @memberof proto
         * @classdesc A list of transfers for a particular (non-HBAR) token type.
         * 
         * A `TokenTransferList` applies to a single token type, but may contain many
         * individual transfers.<br/>
         * Each transfer of a fungible/common token MUST specify an `accountID` and
         * `amount`. Amount SHALL be positive when the account receives tokens, and
         * SHALL be negative when the account sends tokens. The amount SHOULD NOT be
         * `0`.<br/>
         * In a transfer list containing fungible/common tokens in the `transfers`
         * list, the sum of all such transfers MUST be zero (`0`).
         * Each transfer of a unique token SHALL specify both sender and receiver, as
         * well as the serial number transferred.<br/>
         * A single `TokenTransferList` MUST contain `transfers` or `nftTransfers`,
         * but MUST NOT contain both.
         * @implements ITokenTransferList
         * @constructor
         * @param {proto.ITokenTransferList=} [properties] Properties to set
         */
        function TokenTransferList(properties) {
            this.transfers = [];
            this.nftTransfers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A token identifier.<br/>
         * This is the token to be transferred.
         * @member {proto.ITokenID|null|undefined} token
         * @memberof proto.TokenTransferList
         * @instance
         */
        TokenTransferList.prototype.token = null;

        /**
         * A list of account amounts.
         * <p>
         * Each entry SHALL have an account and amount.<br/>
         * These transfers SHALL be "double-entry" style; the credits (positive
         * amount) and debits (negative amount) MUST sum to 0, unless this
         * transfer list is part of a `mint` or `burn` operation.<br/>
         * This SHALL be be set for fungible/common tokens and MUST be
         * empty otherwise.
         * @member {Array.<proto.IAccountAmount>} transfers
         * @memberof proto.TokenTransferList
         * @instance
         */
        TokenTransferList.prototype.transfers = $util.emptyArray;

        /**
         * A list of NftTransfers.
         * <p>
         * Each entry SHALL have a sender and receiver account, and the
         * serial number of the unique token to transfer.<br/>
         * This SHALL be be set for non-fungible/unique tokens and SHALL be
         * empty otherwise.
         * @member {Array.<proto.INftTransfer>} nftTransfers
         * @memberof proto.TokenTransferList
         * @instance
         */
        TokenTransferList.prototype.nftTransfers = $util.emptyArray;

        /**
         * An expected decimal precision.<br/>
         * This is the number of decimals a fungible/common token type is
         * _expected_ to have.
         * <p>
         * The transfer SHALL fail with response code `UNEXPECTED_TOKEN_DECIMALS`
         * if this is set and the actual decimals specified for the `Token` differ
         * from this value.<br/>
         * If `nftTransfers` is set, then this value SHOULD NOT be set.
         * @member {google.protobuf.IUInt32Value|null|undefined} expectedDecimals
         * @memberof proto.TokenTransferList
         * @instance
         */
        TokenTransferList.prototype.expectedDecimals = null;

        /**
         * Creates a new TokenTransferList instance using the specified properties.
         * @function create
         * @memberof proto.TokenTransferList
         * @static
         * @param {proto.ITokenTransferList=} [properties] Properties to set
         * @returns {proto.TokenTransferList} TokenTransferList instance
         */
        TokenTransferList.create = function create(properties) {
            return new TokenTransferList(properties);
        };

        /**
         * Encodes the specified TokenTransferList message. Does not implicitly {@link proto.TokenTransferList.verify|verify} messages.
         * @function encode
         * @memberof proto.TokenTransferList
         * @static
         * @param {proto.ITokenTransferList} message TokenTransferList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenTransferList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                $root.proto.TokenID.encode(message.token, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.transfers != null && message.transfers.length)
                for (let i = 0; i < message.transfers.length; ++i)
                    $root.proto.AccountAmount.encode(message.transfers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nftTransfers != null && message.nftTransfers.length)
                for (let i = 0; i < message.nftTransfers.length; ++i)
                    $root.proto.NftTransfer.encode(message.nftTransfers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.expectedDecimals != null && Object.hasOwnProperty.call(message, "expectedDecimals"))
                $root.google.protobuf.UInt32Value.encode(message.expectedDecimals, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TokenTransferList message, length delimited. Does not implicitly {@link proto.TokenTransferList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TokenTransferList
         * @static
         * @param {proto.ITokenTransferList} message TokenTransferList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenTransferList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenTransferList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TokenTransferList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TokenTransferList} TokenTransferList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenTransferList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TokenTransferList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.token = $root.proto.TokenID.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.transfers && message.transfers.length))
                            message.transfers = [];
                        message.transfers.push($root.proto.AccountAmount.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.nftTransfers && message.nftTransfers.length))
                            message.nftTransfers = [];
                        message.nftTransfers.push($root.proto.NftTransfer.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.expectedDecimals = $root.google.protobuf.UInt32Value.decode(reader, reader.uint32());
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
         * Decodes a TokenTransferList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TokenTransferList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TokenTransferList} TokenTransferList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenTransferList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenTransferList message.
         * @function verify
         * @memberof proto.TokenTransferList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenTransferList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token")) {
                let error = $root.proto.TokenID.verify(message.token);
                if (error)
                    return "token." + error;
            }
            if (message.transfers != null && message.hasOwnProperty("transfers")) {
                if (!Array.isArray(message.transfers))
                    return "transfers: array expected";
                for (let i = 0; i < message.transfers.length; ++i) {
                    let error = $root.proto.AccountAmount.verify(message.transfers[i]);
                    if (error)
                        return "transfers." + error;
                }
            }
            if (message.nftTransfers != null && message.hasOwnProperty("nftTransfers")) {
                if (!Array.isArray(message.nftTransfers))
                    return "nftTransfers: array expected";
                for (let i = 0; i < message.nftTransfers.length; ++i) {
                    let error = $root.proto.NftTransfer.verify(message.nftTransfers[i]);
                    if (error)
                        return "nftTransfers." + error;
                }
            }
            if (message.expectedDecimals != null && message.hasOwnProperty("expectedDecimals")) {
                let error = $root.google.protobuf.UInt32Value.verify(message.expectedDecimals);
                if (error)
                    return "expectedDecimals." + error;
            }
            return null;
        };

        /**
         * Creates a TokenTransferList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TokenTransferList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TokenTransferList} TokenTransferList
         */
        TokenTransferList.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TokenTransferList)
                return object;
            let message = new $root.proto.TokenTransferList();
            if (object.token != null) {
                if (typeof object.token !== "object")
                    throw TypeError(".proto.TokenTransferList.token: object expected");
                message.token = $root.proto.TokenID.fromObject(object.token);
            }
            if (object.transfers) {
                if (!Array.isArray(object.transfers))
                    throw TypeError(".proto.TokenTransferList.transfers: array expected");
                message.transfers = [];
                for (let i = 0; i < object.transfers.length; ++i) {
                    if (typeof object.transfers[i] !== "object")
                        throw TypeError(".proto.TokenTransferList.transfers: object expected");
                    message.transfers[i] = $root.proto.AccountAmount.fromObject(object.transfers[i]);
                }
            }
            if (object.nftTransfers) {
                if (!Array.isArray(object.nftTransfers))
                    throw TypeError(".proto.TokenTransferList.nftTransfers: array expected");
                message.nftTransfers = [];
                for (let i = 0; i < object.nftTransfers.length; ++i) {
                    if (typeof object.nftTransfers[i] !== "object")
                        throw TypeError(".proto.TokenTransferList.nftTransfers: object expected");
                    message.nftTransfers[i] = $root.proto.NftTransfer.fromObject(object.nftTransfers[i]);
                }
            }
            if (object.expectedDecimals != null) {
                if (typeof object.expectedDecimals !== "object")
                    throw TypeError(".proto.TokenTransferList.expectedDecimals: object expected");
                message.expectedDecimals = $root.google.protobuf.UInt32Value.fromObject(object.expectedDecimals);
            }
            return message;
        };

        /**
         * Creates a plain object from a TokenTransferList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TokenTransferList
         * @static
         * @param {proto.TokenTransferList} message TokenTransferList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenTransferList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.transfers = [];
                object.nftTransfers = [];
            }
            if (options.defaults) {
                object.token = null;
                object.expectedDecimals = null;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = $root.proto.TokenID.toObject(message.token, options);
            if (message.transfers && message.transfers.length) {
                object.transfers = [];
                for (let j = 0; j < message.transfers.length; ++j)
                    object.transfers[j] = $root.proto.AccountAmount.toObject(message.transfers[j], options);
            }
            if (message.nftTransfers && message.nftTransfers.length) {
                object.nftTransfers = [];
                for (let j = 0; j < message.nftTransfers.length; ++j)
                    object.nftTransfers[j] = $root.proto.NftTransfer.toObject(message.nftTransfers[j], options);
            }
            if (message.expectedDecimals != null && message.hasOwnProperty("expectedDecimals"))
                object.expectedDecimals = $root.google.protobuf.UInt32Value.toObject(message.expectedDecimals, options);
            return object;
        };

        /**
         * Converts this TokenTransferList to JSON.
         * @function toJSON
         * @memberof proto.TokenTransferList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenTransferList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenTransferList
         * @function getTypeUrl
         * @memberof proto.TokenTransferList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenTransferList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TokenTransferList";
        };

        return TokenTransferList;
    })();

    proto.Fraction = (function() {

        /**
         * Properties of a Fraction.
         * @memberof proto
         * @interface IFraction
         * @property {number|Long|null} [numerator] A fractional number's numerator.
         * @property {number|Long|null} [denominator] A fractional number's denominator.
         * <p>
         * A zero value SHALL fail with response code `FRACTION_DIVIDES_BY_ZERO`.
         */

        /**
         * Constructs a new Fraction.
         * @memberof proto
         * @classdesc A rational number.<br/>
         * A common use is to set the amount of a value transfer to collect as a
         * custom fee.
         * 
         * It is RECOMMENDED that both numerator and denominator be no larger than
         * necessary to express the required fraction. A very large numerator, in
         * particular, may not be reliable.
         * Both fields are REQUIRED and SHOULD be positive integers.
         * @implements IFraction
         * @constructor
         * @param {proto.IFraction=} [properties] Properties to set
         */
        function Fraction(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A fractional number's numerator.
         * @member {number|Long} numerator
         * @memberof proto.Fraction
         * @instance
         */
        Fraction.prototype.numerator = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * A fractional number's denominator.
         * <p>
         * A zero value SHALL fail with response code `FRACTION_DIVIDES_BY_ZERO`.
         * @member {number|Long} denominator
         * @memberof proto.Fraction
         * @instance
         */
        Fraction.prototype.denominator = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Fraction instance using the specified properties.
         * @function create
         * @memberof proto.Fraction
         * @static
         * @param {proto.IFraction=} [properties] Properties to set
         * @returns {proto.Fraction} Fraction instance
         */
        Fraction.create = function create(properties) {
            return new Fraction(properties);
        };

        /**
         * Encodes the specified Fraction message. Does not implicitly {@link proto.Fraction.verify|verify} messages.
         * @function encode
         * @memberof proto.Fraction
         * @static
         * @param {proto.IFraction} message Fraction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Fraction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.numerator != null && Object.hasOwnProperty.call(message, "numerator"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.numerator);
            if (message.denominator != null && Object.hasOwnProperty.call(message, "denominator"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.denominator);
            return writer;
        };

        /**
         * Encodes the specified Fraction message, length delimited. Does not implicitly {@link proto.Fraction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Fraction
         * @static
         * @param {proto.IFraction} message Fraction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Fraction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Fraction message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Fraction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Fraction} Fraction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Fraction.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Fraction();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.numerator = reader.int64();
                        break;
                    }
                case 2: {
                        message.denominator = reader.int64();
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
         * Decodes a Fraction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Fraction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Fraction} Fraction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Fraction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Fraction message.
         * @function verify
         * @memberof proto.Fraction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Fraction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.numerator != null && message.hasOwnProperty("numerator"))
                if (!$util.isInteger(message.numerator) && !(message.numerator && $util.isInteger(message.numerator.low) && $util.isInteger(message.numerator.high)))
                    return "numerator: integer|Long expected";
            if (message.denominator != null && message.hasOwnProperty("denominator"))
                if (!$util.isInteger(message.denominator) && !(message.denominator && $util.isInteger(message.denominator.low) && $util.isInteger(message.denominator.high)))
                    return "denominator: integer|Long expected";
            return null;
        };

        /**
         * Creates a Fraction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Fraction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Fraction} Fraction
         */
        Fraction.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Fraction)
                return object;
            let message = new $root.proto.Fraction();
            if (object.numerator != null)
                if ($util.Long)
                    (message.numerator = $util.Long.fromValue(object.numerator)).unsigned = false;
                else if (typeof object.numerator === "string")
                    message.numerator = parseInt(object.numerator, 10);
                else if (typeof object.numerator === "number")
                    message.numerator = object.numerator;
                else if (typeof object.numerator === "object")
                    message.numerator = new $util.LongBits(object.numerator.low >>> 0, object.numerator.high >>> 0).toNumber();
            if (object.denominator != null)
                if ($util.Long)
                    (message.denominator = $util.Long.fromValue(object.denominator)).unsigned = false;
                else if (typeof object.denominator === "string")
                    message.denominator = parseInt(object.denominator, 10);
                else if (typeof object.denominator === "number")
                    message.denominator = object.denominator;
                else if (typeof object.denominator === "object")
                    message.denominator = new $util.LongBits(object.denominator.low >>> 0, object.denominator.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Fraction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Fraction
         * @static
         * @param {proto.Fraction} message Fraction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Fraction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.numerator = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.numerator = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.denominator = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.denominator = options.longs === String ? "0" : 0;
            }
            if (message.numerator != null && message.hasOwnProperty("numerator"))
                if (typeof message.numerator === "number")
                    object.numerator = options.longs === String ? String(message.numerator) : message.numerator;
                else
                    object.numerator = options.longs === String ? $util.Long.prototype.toString.call(message.numerator) : options.longs === Number ? new $util.LongBits(message.numerator.low >>> 0, message.numerator.high >>> 0).toNumber() : message.numerator;
            if (message.denominator != null && message.hasOwnProperty("denominator"))
                if (typeof message.denominator === "number")
                    object.denominator = options.longs === String ? String(message.denominator) : message.denominator;
                else
                    object.denominator = options.longs === String ? $util.Long.prototype.toString.call(message.denominator) : options.longs === Number ? new $util.LongBits(message.denominator.low >>> 0, message.denominator.high >>> 0).toNumber() : message.denominator;
            return object;
        };

        /**
         * Converts this Fraction to JSON.
         * @function toJSON
         * @memberof proto.Fraction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Fraction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Fraction
         * @function getTypeUrl
         * @memberof proto.Fraction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Fraction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Fraction";
        };

        return Fraction;
    })();

    /**
     * Possible Token Types (IWA Compatibility).
     * 
     * Apart from fungible and non-fungible, Tokens can have either a common or
     * unique representation. Furthermore, tokens can have intrinsic or referential
     * value, and can be whole and indivisible or fractional.<br/>
     * These distinction might seem subtle, but it is important when considering
     * how tokens can be traced, used, transferred, and if they can have isolated
     * unique properties.
     * 
     * A few examples (these may not match enumerations below) using IWA taxonomy.
     * <dl>
     * <dt>fungible, whole, intrinsic, unique</dt>
     * <dd>Physical fiat currency</dd>
     * <dt>fungible, fractional, intrinsic, common</dt>
     * <dd>bank balance fiat currency</dd>
     * <dt>non-fungible, fractional, reference, unique</dt>
     * <dd>"mutual" collectible/art/property ownership</dd>
     * <dt>non-fungible, whole, intrinsic, unique</dt>
     * <dd>Physical work of fine art</dd>
     * <dt>non-fungible, whole, reference, unique</dt>
     * <dd>Registered property title</dd>
     * </dl>
     * @name proto.TokenType
     * @enum {number}
     * @property {number} FUNGIBLE_COMMON=0 A fungible/common token.<br/>
     * Tokens of this type are interchangeable with one another, where any
     * quantity of tokens has the same value as another equal quantity, if
     * they are in the same class. Tokens share a single set of properties,
     * and are not distinct from one another. Ownership is represented as a
     * balance or quantity associated to a given account. Tokens may be
     * divided into fractional tokens, within reasonable limits.
     * <p>
     * IWA taxonomy _fungible, fractional, intrinsic, common_
     * @property {number} NON_FUNGIBLE_UNIQUE=1 A non-fungible/unique token.<br/>
     * Tokens of this type are unique, and are not interchangeable with other
     * tokens of the same type. Each token carries a serial number which is
     * unique for that token, these tokens may have a different trade value
     * for each individual token. The tokens are individually accounted and
     * often carry additional unique properties. Tokens cannot be subdivided,
     * and value is related to what the individual token represents.
     * <p>
     * IWA taxonomy _non-fungible, whole, reference, unique_
     */
    proto.TokenType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FUNGIBLE_COMMON"] = 0;
        values[valuesById[1] = "NON_FUNGIBLE_UNIQUE"] = 1;
        return values;
    })();

    /**
     * A transaction sub type.<br/>
     * This enumeration enables a set of transaction base fees to be broadly
     * defined for a type of operation and also be modified, when necessary,
     * based on specifics of the operation.
     * 
     * ### Explanation
     * The resource cost for a TokenMint operation is different between minting
     * fungible/common and non-fungible/unique tokens. This `enum` is used to
     * "mark" a cost as applying to one or the other.<br/>
     * Similarly, the resource cost for a basic `tokenCreate` without a custom
     * fee schedule may yield a _base_ fee of $1. The resource cost for a
     * `tokenCreate` _with_ a custom fee schedule is different and may yield a
     * _base_ fee of $2 or more.
     * @name proto.SubType
     * @enum {number}
     * @property {number} DEFAULT=0 The resource cost for the transaction type has no additional attributes
     * @property {number} TOKEN_FUNGIBLE_COMMON=1 The resource cost for the transaction type includes an operation on a
     * fungible/common token
     * @property {number} TOKEN_NON_FUNGIBLE_UNIQUE=2 The resource cost for the transaction type includes an operation on
     * a non-fungible/unique token
     * @property {number} TOKEN_FUNGIBLE_COMMON_WITH_CUSTOM_FEES=3 The resource cost for the transaction type includes an operation on a
     * fungible/common token with a custom fee schedule
     * @property {number} TOKEN_NON_FUNGIBLE_UNIQUE_WITH_CUSTOM_FEES=4 The resource cost for the transaction type includes an operation on a
     * non-fungible/unique token with a custom fee schedule
     * @property {number} SCHEDULE_CREATE_CONTRACT_CALL=5 The resource cost for the transaction type includes a ScheduleCreate
     * containing a ContractCall.
     * @property {number} TOPIC_CREATE_WITH_CUSTOM_FEES=6 The resource cost for the transaction type includes a TopicCreate
     * with custom fees.
     * @property {number} SUBMIT_MESSAGE_WITH_CUSTOM_FEES=7 The resource cost for the transaction type includes a ConsensusSubmitMessage
     * for a topic with custom fees.
     * @property {number} CRYPTO_TRANSFER_WITH_HOOKS=8 The resource cost for the transaction type that includes a CryptoTransfer with hook invocations
     */
    proto.SubType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEFAULT"] = 0;
        values[valuesById[1] = "TOKEN_FUNGIBLE_COMMON"] = 1;
        values[valuesById[2] = "TOKEN_NON_FUNGIBLE_UNIQUE"] = 2;
        values[valuesById[3] = "TOKEN_FUNGIBLE_COMMON_WITH_CUSTOM_FEES"] = 3;
        values[valuesById[4] = "TOKEN_NON_FUNGIBLE_UNIQUE_WITH_CUSTOM_FEES"] = 4;
        values[valuesById[5] = "SCHEDULE_CREATE_CONTRACT_CALL"] = 5;
        values[valuesById[6] = "TOPIC_CREATE_WITH_CUSTOM_FEES"] = 6;
        values[valuesById[7] = "SUBMIT_MESSAGE_WITH_CUSTOM_FEES"] = 7;
        values[valuesById[8] = "CRYPTO_TRANSFER_WITH_HOOKS"] = 8;
        return values;
    })();

    /**
     * Possible Token Supply Types (IWA Compatibility).
     * 
     * This `enum` indicates the limit of tokens that can exist during the
     * lifetime of a token definition. The "infinite" supply is only theoretically
     * infinite, as it is still limited to the magnitude of a 64-bit signed
     * integer. A "finite" supply is further limited to a value specified when
     * the token is created (or updated, if not immutable).
     * @name proto.TokenSupplyType
     * @enum {number}
     * @property {number} INFINITE=0 An unlimited supply.<br/>
     * This indicates that tokens of this type have an upper bound of
     * Long.MAX_VALUE.<br/>
     * The supply is accounted in the smallest units of the token
     * (i.e. 10<sup>-`decimals`</sup> whole tokens)
     * @property {number} FINITE=1 A limited supply.<br/>
     * This indicates that tokens of this type have an upper bound of
     * `maxSupply`.<br/>
     * The maximum supply SHALL be provided on token creation, but MAY be
     * changed thereafter if the token has an `admin_key` set.
     */
    proto.TokenSupplyType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INFINITE"] = 0;
        values[valuesById[1] = "FINITE"] = 1;
        return values;
    })();

    /**
     * Types of validation strategies for token keys.
     * @name proto.TokenKeyValidation
     * @enum {number}
     * @property {number} FULL_VALIDATION=0 Perform all token key validations.<br/>
     * This is the default value and behavior.
     * @property {number} NO_VALIDATION=1 Perform no validations at all for all passed token keys.
     */
    proto.TokenKeyValidation = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FULL_VALIDATION"] = 0;
        values[valuesById[1] = "NO_VALIDATION"] = 1;
        return values;
    })();

    /**
     * Possible token freeze status values.
     * 
     * This is returned by `TokenGetInfoQuery` or `CryptoGetInfoResponse`
     * in `TokenRelationship`.
     * @name proto.TokenFreezeStatus
     * @enum {number}
     * @property {number} FreezeNotApplicable=0 The token does not support freeze or cannot be frozen for the designated
     * account.<br/>
     * Typically this indicates that the token does not have a `freeze_key` set.
     * @property {number} Frozen=1 The token is currently frozen for the designated account.
     * @property {number} Unfrozen=2 The token is not currently frozen for the designated account.
     */
    proto.TokenFreezeStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FreezeNotApplicable"] = 0;
        values[valuesById[1] = "Frozen"] = 1;
        values[valuesById[2] = "Unfrozen"] = 2;
        return values;
    })();

    /**
     * Possible token "KYC" status values.
     * 
     * This is returned by `TokenGetInfoQuery` or `CryptoGetInfoResponse`
     * in `TokenRelationship`.
     * @name proto.TokenKycStatus
     * @enum {number}
     * @property {number} KycNotApplicable=0 The token does not support KYC or cannot grant KYC for the
     * designated account.<br/>
     * Typically this indicates that the token does not have a `kyc_key` set.
     * @property {number} Granted=1 The designated account is currently granted KYC status for the
     * designated token.
     * @property {number} Revoked=2 The designated account is not currently granted KYC status for the
     * designated token.
     */
    proto.TokenKycStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "KycNotApplicable"] = 0;
        values[valuesById[1] = "Granted"] = 1;
        values[valuesById[2] = "Revoked"] = 2;
        return values;
    })();

    /**
     * Possible Pause status values.
     * 
     * This is returned by `TokenGetInfoQuery` in `TokenRelationship`.
     * @name proto.TokenPauseStatus
     * @enum {number}
     * @property {number} PauseNotApplicable=0 The token does not support pause or cannot be paused.<br/>
     * Typically this indicates that the token does not have a `pause_key` set.
     * @property {number} Paused=1 The token is currently paused.
     * @property {number} Unpaused=2 The token is not currently paused.
     */
    proto.TokenPauseStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PauseNotApplicable"] = 0;
        values[valuesById[1] = "Paused"] = 1;
        values[valuesById[2] = "Unpaused"] = 2;
        return values;
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

    proto.Signature = (function() {

        /**
         * Properties of a Signature.
         * @memberof proto
         * @interface ISignature
         * @property {Uint8Array|null} [contract] Smart contract virtual signature (always length zero).
         * @property {Uint8Array|null} [ed25519] Ed25519 signature bytes.
         * @property {Uint8Array|null} [RSA_3072] RSA-3072 signature bytes.
         * @property {Uint8Array|null} [ECDSA_384] ECDSA p-384 signature bytes.
         * @property {proto.IThresholdSignature|null} [thresholdSignature] A list of signatures for a single N-of-M threshold Key. This must be
         * a list of exactly M signatures, at least N of which are non-null.
         * @property {proto.ISignatureList|null} [signatureList] A list of M signatures, each corresponding to a Key in a KeyList
         * of the same length.
         */

        /**
         * Constructs a new Signature.
         * @memberof proto
         * @classdesc This message is deprecated and MUST NOT be used to communicate with
         * network nodes. It is retained here only for historical reasons.
         * 
         * Client software MUST NOT include this message in any request. <br/>
         * Compliant nodes SHALL NOT accept any request containing this message.
         * 
         * Please use the `SignaturePair` and `SignatureMap` messages instead of
         * this message.
         * @implements ISignature
         * @constructor
         * @param {proto.ISignature=} [properties] Properties to set
         */
        function Signature(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Smart contract virtual signature (always length zero).
         * @member {Uint8Array|null|undefined} contract
         * @memberof proto.Signature
         * @instance
         */
        Signature.prototype.contract = null;

        /**
         * Ed25519 signature bytes.
         * @member {Uint8Array|null|undefined} ed25519
         * @memberof proto.Signature
         * @instance
         */
        Signature.prototype.ed25519 = null;

        /**
         * RSA-3072 signature bytes.
         * @member {Uint8Array|null|undefined} RSA_3072
         * @memberof proto.Signature
         * @instance
         */
        Signature.prototype.RSA_3072 = null;

        /**
         * ECDSA p-384 signature bytes.
         * @member {Uint8Array|null|undefined} ECDSA_384
         * @memberof proto.Signature
         * @instance
         */
        Signature.prototype.ECDSA_384 = null;

        /**
         * A list of signatures for a single N-of-M threshold Key. This must be
         * a list of exactly M signatures, at least N of which are non-null.
         * @member {proto.IThresholdSignature|null|undefined} thresholdSignature
         * @memberof proto.Signature
         * @instance
         */
        Signature.prototype.thresholdSignature = null;

        /**
         * A list of M signatures, each corresponding to a Key in a KeyList
         * of the same length.
         * @member {proto.ISignatureList|null|undefined} signatureList
         * @memberof proto.Signature
         * @instance
         */
        Signature.prototype.signatureList = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Signature signature.
         * @member {"contract"|"ed25519"|"RSA_3072"|"ECDSA_384"|"thresholdSignature"|"signatureList"|undefined} signature
         * @memberof proto.Signature
         * @instance
         */
        Object.defineProperty(Signature.prototype, "signature", {
            get: $util.oneOfGetter($oneOfFields = ["contract", "ed25519", "RSA_3072", "ECDSA_384", "thresholdSignature", "signatureList"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Signature instance using the specified properties.
         * @function create
         * @memberof proto.Signature
         * @static
         * @param {proto.ISignature=} [properties] Properties to set
         * @returns {proto.Signature} Signature instance
         */
        Signature.create = function create(properties) {
            return new Signature(properties);
        };

        /**
         * Encodes the specified Signature message. Does not implicitly {@link proto.Signature.verify|verify} messages.
         * @function encode
         * @memberof proto.Signature
         * @static
         * @param {proto.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contract != null && Object.hasOwnProperty.call(message, "contract"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.contract);
            if (message.ed25519 != null && Object.hasOwnProperty.call(message, "ed25519"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ed25519);
            if (message.RSA_3072 != null && Object.hasOwnProperty.call(message, "RSA_3072"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.RSA_3072);
            if (message.ECDSA_384 != null && Object.hasOwnProperty.call(message, "ECDSA_384"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ECDSA_384);
            if (message.thresholdSignature != null && Object.hasOwnProperty.call(message, "thresholdSignature"))
                $root.proto.ThresholdSignature.encode(message.thresholdSignature, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.signatureList != null && Object.hasOwnProperty.call(message, "signatureList"))
                $root.proto.SignatureList.encode(message.signatureList, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link proto.Signature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Signature
         * @static
         * @param {proto.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Signature();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.contract = reader.bytes();
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
                        message.thresholdSignature = $root.proto.ThresholdSignature.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.signatureList = $root.proto.SignatureList.decode(reader, reader.uint32());
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
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Signature message.
         * @function verify
         * @memberof proto.Signature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Signature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.contract != null && message.hasOwnProperty("contract")) {
                properties.signature = 1;
                if (!(message.contract && typeof message.contract.length === "number" || $util.isString(message.contract)))
                    return "contract: buffer expected";
            }
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                if (properties.signature === 1)
                    return "signature: multiple values";
                properties.signature = 1;
                if (!(message.ed25519 && typeof message.ed25519.length === "number" || $util.isString(message.ed25519)))
                    return "ed25519: buffer expected";
            }
            if (message.RSA_3072 != null && message.hasOwnProperty("RSA_3072")) {
                if (properties.signature === 1)
                    return "signature: multiple values";
                properties.signature = 1;
                if (!(message.RSA_3072 && typeof message.RSA_3072.length === "number" || $util.isString(message.RSA_3072)))
                    return "RSA_3072: buffer expected";
            }
            if (message.ECDSA_384 != null && message.hasOwnProperty("ECDSA_384")) {
                if (properties.signature === 1)
                    return "signature: multiple values";
                properties.signature = 1;
                if (!(message.ECDSA_384 && typeof message.ECDSA_384.length === "number" || $util.isString(message.ECDSA_384)))
                    return "ECDSA_384: buffer expected";
            }
            if (message.thresholdSignature != null && message.hasOwnProperty("thresholdSignature")) {
                if (properties.signature === 1)
                    return "signature: multiple values";
                properties.signature = 1;
                {
                    let error = $root.proto.ThresholdSignature.verify(message.thresholdSignature);
                    if (error)
                        return "thresholdSignature." + error;
                }
            }
            if (message.signatureList != null && message.hasOwnProperty("signatureList")) {
                if (properties.signature === 1)
                    return "signature: multiple values";
                properties.signature = 1;
                {
                    let error = $root.proto.SignatureList.verify(message.signatureList);
                    if (error)
                        return "signatureList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Signature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Signature} Signature
         */
        Signature.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Signature)
                return object;
            let message = new $root.proto.Signature();
            if (object.contract != null)
                if (typeof object.contract === "string")
                    $util.base64.decode(object.contract, message.contract = $util.newBuffer($util.base64.length(object.contract)), 0);
                else if (object.contract.length >= 0)
                    message.contract = object.contract;
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
            if (object.thresholdSignature != null) {
                if (typeof object.thresholdSignature !== "object")
                    throw TypeError(".proto.Signature.thresholdSignature: object expected");
                message.thresholdSignature = $root.proto.ThresholdSignature.fromObject(object.thresholdSignature);
            }
            if (object.signatureList != null) {
                if (typeof object.signatureList !== "object")
                    throw TypeError(".proto.Signature.signatureList: object expected");
                message.signatureList = $root.proto.SignatureList.fromObject(object.signatureList);
            }
            return message;
        };

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Signature
         * @static
         * @param {proto.Signature} message Signature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Signature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.contract != null && message.hasOwnProperty("contract")) {
                object.contract = options.bytes === String ? $util.base64.encode(message.contract, 0, message.contract.length) : options.bytes === Array ? Array.prototype.slice.call(message.contract) : message.contract;
                if (options.oneofs)
                    object.signature = "contract";
            }
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                object.ed25519 = options.bytes === String ? $util.base64.encode(message.ed25519, 0, message.ed25519.length) : options.bytes === Array ? Array.prototype.slice.call(message.ed25519) : message.ed25519;
                if (options.oneofs)
                    object.signature = "ed25519";
            }
            if (message.RSA_3072 != null && message.hasOwnProperty("RSA_3072")) {
                object.RSA_3072 = options.bytes === String ? $util.base64.encode(message.RSA_3072, 0, message.RSA_3072.length) : options.bytes === Array ? Array.prototype.slice.call(message.RSA_3072) : message.RSA_3072;
                if (options.oneofs)
                    object.signature = "RSA_3072";
            }
            if (message.ECDSA_384 != null && message.hasOwnProperty("ECDSA_384")) {
                object.ECDSA_384 = options.bytes === String ? $util.base64.encode(message.ECDSA_384, 0, message.ECDSA_384.length) : options.bytes === Array ? Array.prototype.slice.call(message.ECDSA_384) : message.ECDSA_384;
                if (options.oneofs)
                    object.signature = "ECDSA_384";
            }
            if (message.thresholdSignature != null && message.hasOwnProperty("thresholdSignature")) {
                object.thresholdSignature = $root.proto.ThresholdSignature.toObject(message.thresholdSignature, options);
                if (options.oneofs)
                    object.signature = "thresholdSignature";
            }
            if (message.signatureList != null && message.hasOwnProperty("signatureList")) {
                object.signatureList = $root.proto.SignatureList.toObject(message.signatureList, options);
                if (options.oneofs)
                    object.signature = "signatureList";
            }
            return object;
        };

        /**
         * Converts this Signature to JSON.
         * @function toJSON
         * @memberof proto.Signature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Signature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Signature
         * @function getTypeUrl
         * @memberof proto.Signature
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Signature.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Signature";
        };

        return Signature;
    })();

    proto.ThresholdSignature = (function() {

        /**
         * Properties of a ThresholdSignature.
         * @memberof proto
         * @interface IThresholdSignature
         * @property {proto.ISignatureList|null} [sigs] For an N-of-M threshold key, this is a list of M signatures, at least N
         * of which must be non-null.
         */

        /**
         * Constructs a new ThresholdSignature.
         * @memberof proto
         * @classdesc This message is deprecated and MUST NOT be used to communicate with network
         * nodes. It is retained here only for historical reasons.
         * 
         * Client software MUST NOT include this message in any request. <br/>
         * Compliant nodes SHALL NOT accept any request containing this message.
         * 
         * Please use the `SignaturePair` and `SignatureMap` messages, in combination
         * with `ThresholdKey` keys, instead of this message.
         * @implements IThresholdSignature
         * @constructor
         * @param {proto.IThresholdSignature=} [properties] Properties to set
         */
        function ThresholdSignature(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * For an N-of-M threshold key, this is a list of M signatures, at least N
         * of which must be non-null.
         * @member {proto.ISignatureList|null|undefined} sigs
         * @memberof proto.ThresholdSignature
         * @instance
         */
        ThresholdSignature.prototype.sigs = null;

        /**
         * Creates a new ThresholdSignature instance using the specified properties.
         * @function create
         * @memberof proto.ThresholdSignature
         * @static
         * @param {proto.IThresholdSignature=} [properties] Properties to set
         * @returns {proto.ThresholdSignature} ThresholdSignature instance
         */
        ThresholdSignature.create = function create(properties) {
            return new ThresholdSignature(properties);
        };

        /**
         * Encodes the specified ThresholdSignature message. Does not implicitly {@link proto.ThresholdSignature.verify|verify} messages.
         * @function encode
         * @memberof proto.ThresholdSignature
         * @static
         * @param {proto.IThresholdSignature} message ThresholdSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThresholdSignature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sigs != null && Object.hasOwnProperty.call(message, "sigs"))
                $root.proto.SignatureList.encode(message.sigs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ThresholdSignature message, length delimited. Does not implicitly {@link proto.ThresholdSignature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ThresholdSignature
         * @static
         * @param {proto.IThresholdSignature} message ThresholdSignature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThresholdSignature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ThresholdSignature message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ThresholdSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ThresholdSignature} ThresholdSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThresholdSignature.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ThresholdSignature();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 2: {
                        message.sigs = $root.proto.SignatureList.decode(reader, reader.uint32());
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
         * Decodes a ThresholdSignature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ThresholdSignature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ThresholdSignature} ThresholdSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThresholdSignature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ThresholdSignature message.
         * @function verify
         * @memberof proto.ThresholdSignature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ThresholdSignature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sigs != null && message.hasOwnProperty("sigs")) {
                let error = $root.proto.SignatureList.verify(message.sigs);
                if (error)
                    return "sigs." + error;
            }
            return null;
        };

        /**
         * Creates a ThresholdSignature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ThresholdSignature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ThresholdSignature} ThresholdSignature
         */
        ThresholdSignature.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ThresholdSignature)
                return object;
            let message = new $root.proto.ThresholdSignature();
            if (object.sigs != null) {
                if (typeof object.sigs !== "object")
                    throw TypeError(".proto.ThresholdSignature.sigs: object expected");
                message.sigs = $root.proto.SignatureList.fromObject(object.sigs);
            }
            return message;
        };

        /**
         * Creates a plain object from a ThresholdSignature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ThresholdSignature
         * @static
         * @param {proto.ThresholdSignature} message ThresholdSignature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ThresholdSignature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.sigs = null;
            if (message.sigs != null && message.hasOwnProperty("sigs"))
                object.sigs = $root.proto.SignatureList.toObject(message.sigs, options);
            return object;
        };

        /**
         * Converts this ThresholdSignature to JSON.
         * @function toJSON
         * @memberof proto.ThresholdSignature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ThresholdSignature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ThresholdSignature
         * @function getTypeUrl
         * @memberof proto.ThresholdSignature
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ThresholdSignature.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ThresholdSignature";
        };

        return ThresholdSignature;
    })();

    proto.SignatureList = (function() {

        /**
         * Properties of a SignatureList.
         * @memberof proto
         * @interface ISignatureList
         * @property {Array.<proto.ISignature>|null} [sigs] Each signature corresponds to a Key in the KeyList.
         */

        /**
         * Constructs a new SignatureList.
         * @memberof proto
         * @classdesc This message is deprecated and MUST NOT be used to communicate with network
         * nodes. It is retained here only for historical reasons.
         * 
         * Client software MUST NOT include this message in any request. <br/>
         * Compliant nodes SHALL NOT accept any request containing this message.
         * 
         * Please use the `SignaturePair` and `SignatureMap` messages instead of
         * this message.
         * @implements ISignatureList
         * @constructor
         * @param {proto.ISignatureList=} [properties] Properties to set
         */
        function SignatureList(properties) {
            this.sigs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Each signature corresponds to a Key in the KeyList.
         * @member {Array.<proto.ISignature>} sigs
         * @memberof proto.SignatureList
         * @instance
         */
        SignatureList.prototype.sigs = $util.emptyArray;

        /**
         * Creates a new SignatureList instance using the specified properties.
         * @function create
         * @memberof proto.SignatureList
         * @static
         * @param {proto.ISignatureList=} [properties] Properties to set
         * @returns {proto.SignatureList} SignatureList instance
         */
        SignatureList.create = function create(properties) {
            return new SignatureList(properties);
        };

        /**
         * Encodes the specified SignatureList message. Does not implicitly {@link proto.SignatureList.verify|verify} messages.
         * @function encode
         * @memberof proto.SignatureList
         * @static
         * @param {proto.ISignatureList} message SignatureList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sigs != null && message.sigs.length)
                for (let i = 0; i < message.sigs.length; ++i)
                    $root.proto.Signature.encode(message.sigs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SignatureList message, length delimited. Does not implicitly {@link proto.SignatureList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SignatureList
         * @static
         * @param {proto.ISignatureList} message SignatureList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignatureList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SignatureList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SignatureList} SignatureList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SignatureList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 2: {
                        if (!(message.sigs && message.sigs.length))
                            message.sigs = [];
                        message.sigs.push($root.proto.Signature.decode(reader, reader.uint32()));
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
         * Decodes a SignatureList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.SignatureList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SignatureList} SignatureList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignatureList message.
         * @function verify
         * @memberof proto.SignatureList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignatureList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sigs != null && message.hasOwnProperty("sigs")) {
                if (!Array.isArray(message.sigs))
                    return "sigs: array expected";
                for (let i = 0; i < message.sigs.length; ++i) {
                    let error = $root.proto.Signature.verify(message.sigs[i]);
                    if (error)
                        return "sigs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SignatureList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.SignatureList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SignatureList} SignatureList
         */
        SignatureList.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SignatureList)
                return object;
            let message = new $root.proto.SignatureList();
            if (object.sigs) {
                if (!Array.isArray(object.sigs))
                    throw TypeError(".proto.SignatureList.sigs: array expected");
                message.sigs = [];
                for (let i = 0; i < object.sigs.length; ++i) {
                    if (typeof object.sigs[i] !== "object")
                        throw TypeError(".proto.SignatureList.sigs: object expected");
                    message.sigs[i] = $root.proto.Signature.fromObject(object.sigs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SignatureList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SignatureList
         * @static
         * @param {proto.SignatureList} message SignatureList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignatureList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.sigs = [];
            if (message.sigs && message.sigs.length) {
                object.sigs = [];
                for (let j = 0; j < message.sigs.length; ++j)
                    object.sigs[j] = $root.proto.Signature.toObject(message.sigs[j], options);
            }
            return object;
        };

        /**
         * Converts this SignatureList to JSON.
         * @function toJSON
         * @memberof proto.SignatureList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignatureList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignatureList
         * @function getTypeUrl
         * @memberof proto.SignatureList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignatureList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.SignatureList";
        };

        return SignatureList;
    })();

    proto.SignaturePair = (function() {

        /**
         * Properties of a SignaturePair.
         * @memberof proto
         * @interface ISignaturePair
         * @property {Uint8Array|null} [pubKeyPrefix] Prefix bytes of the public key.
         * <p>
         * The client may use any number of bytes from zero to the whole length of
         * the public key for pubKeyPrefix. If zero bytes are used, then it MUST be
         * true that only one cryptographic key is required to sign the associated
         * transaction.<br/>
         * If the `pubKeyPrefix` is 0 bytes and more than a single cryptographic
         * key is required to sign the transaction, the request SHALL resolve to
         * `INVALID_SIGNATURE`.
         * <blockquote>Important Note<blockquote>
         * In the special case that a signature is provided to authorize a
         * precompiled contract, the `pubKeyPrefix` MUST contain the _entire public
         * key_.<br/>
         * That is, if the key is an Ed25519 key, the `pubKeyPrefix` MUST be
         * 32 bytes long and contain the full public key bytes.<br/>
         * If the key is an ECDSA(secp256k1) key, the `pubKeyPrefix` MUST be
         * 33 bytes long and contain the full _compressed_ form of the public key.
         * </blockquote></blockquote>
         * <p>
         * <dl><dt>Purpose</dt>
         * <dd>The `pubKeyPrefix` exists to save cost. A signed transaction with
         * shorter prefixes will have fewer bytes, and so will have a lower
         * transaction fee.
         * The prefixes, however, MUST be long enough to distinguish between all
         * of the public keys that might be signing the transaction. Therefore,
         * software signing a transaction SHOULD evaluate which keys might possibly
         * be required to sign a transaction, and ensure that the shortest prefix
         * that is sufficient to unambiguously identify the correct key is used.
         * </dd></dl>
         * @property {Uint8Array|null} [contract] A smart contract virtual signature.
         * <p>
         * This value MUST be length zero, if set.
         * @property {Uint8Array|null} [ed25519] An Ed25519 signature.
         * @property {Uint8Array|null} [RSA_3072] This option is not supported.<br/>
         * A RSA-3072 signature.
         * @property {Uint8Array|null} [ECDSA_384] This option is not supported.<br/>
         * ECDSA p-384 signature.
         * @property {Uint8Array|null} [ECDSASecp256k1] An ECDSA(secp256k1) signature.
         */

        /**
         * Constructs a new SignaturePair.
         * @memberof proto
         * @classdesc A public key and signature pair.<br/>
         * Only Ed25519 and ECDSA(secp256k1) keys and signatures are currently supported
         * as cryptographic (non-implied) signatures.
         * @implements ISignaturePair
         * @constructor
         * @param {proto.ISignaturePair=} [properties] Properties to set
         */
        function SignaturePair(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Prefix bytes of the public key.
         * <p>
         * The client may use any number of bytes from zero to the whole length of
         * the public key for pubKeyPrefix. If zero bytes are used, then it MUST be
         * true that only one cryptographic key is required to sign the associated
         * transaction.<br/>
         * If the `pubKeyPrefix` is 0 bytes and more than a single cryptographic
         * key is required to sign the transaction, the request SHALL resolve to
         * `INVALID_SIGNATURE`.
         * <blockquote>Important Note<blockquote>
         * In the special case that a signature is provided to authorize a
         * precompiled contract, the `pubKeyPrefix` MUST contain the _entire public
         * key_.<br/>
         * That is, if the key is an Ed25519 key, the `pubKeyPrefix` MUST be
         * 32 bytes long and contain the full public key bytes.<br/>
         * If the key is an ECDSA(secp256k1) key, the `pubKeyPrefix` MUST be
         * 33 bytes long and contain the full _compressed_ form of the public key.
         * </blockquote></blockquote>
         * <p>
         * <dl><dt>Purpose</dt>
         * <dd>The `pubKeyPrefix` exists to save cost. A signed transaction with
         * shorter prefixes will have fewer bytes, and so will have a lower
         * transaction fee.
         * The prefixes, however, MUST be long enough to distinguish between all
         * of the public keys that might be signing the transaction. Therefore,
         * software signing a transaction SHOULD evaluate which keys might possibly
         * be required to sign a transaction, and ensure that the shortest prefix
         * that is sufficient to unambiguously identify the correct key is used.
         * </dd></dl>
         * @member {Uint8Array} pubKeyPrefix
         * @memberof proto.SignaturePair
         * @instance
         */
        SignaturePair.prototype.pubKeyPrefix = $util.newBuffer([]);

        /**
         * A smart contract virtual signature.
         * <p>
         * This value MUST be length zero, if set.
         * @member {Uint8Array|null|undefined} contract
         * @memberof proto.SignaturePair
         * @instance
         */
        SignaturePair.prototype.contract = null;

        /**
         * An Ed25519 signature.
         * @member {Uint8Array|null|undefined} ed25519
         * @memberof proto.SignaturePair
         * @instance
         */
        SignaturePair.prototype.ed25519 = null;

        /**
         * This option is not supported.<br/>
         * A RSA-3072 signature.
         * @member {Uint8Array|null|undefined} RSA_3072
         * @memberof proto.SignaturePair
         * @instance
         */
        SignaturePair.prototype.RSA_3072 = null;

        /**
         * This option is not supported.<br/>
         * ECDSA p-384 signature.
         * @member {Uint8Array|null|undefined} ECDSA_384
         * @memberof proto.SignaturePair
         * @instance
         */
        SignaturePair.prototype.ECDSA_384 = null;

        /**
         * An ECDSA(secp256k1) signature.
         * @member {Uint8Array|null|undefined} ECDSASecp256k1
         * @memberof proto.SignaturePair
         * @instance
         */
        SignaturePair.prototype.ECDSASecp256k1 = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * SignaturePair signature.
         * @member {"contract"|"ed25519"|"RSA_3072"|"ECDSA_384"|"ECDSASecp256k1"|undefined} signature
         * @memberof proto.SignaturePair
         * @instance
         */
        Object.defineProperty(SignaturePair.prototype, "signature", {
            get: $util.oneOfGetter($oneOfFields = ["contract", "ed25519", "RSA_3072", "ECDSA_384", "ECDSASecp256k1"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SignaturePair instance using the specified properties.
         * @function create
         * @memberof proto.SignaturePair
         * @static
         * @param {proto.ISignaturePair=} [properties] Properties to set
         * @returns {proto.SignaturePair} SignaturePair instance
         */
        SignaturePair.create = function create(properties) {
            return new SignaturePair(properties);
        };

        /**
         * Encodes the specified SignaturePair message. Does not implicitly {@link proto.SignaturePair.verify|verify} messages.
         * @function encode
         * @memberof proto.SignaturePair
         * @static
         * @param {proto.ISignaturePair} message SignaturePair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignaturePair.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pubKeyPrefix != null && Object.hasOwnProperty.call(message, "pubKeyPrefix"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.pubKeyPrefix);
            if (message.contract != null && Object.hasOwnProperty.call(message, "contract"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.contract);
            if (message.ed25519 != null && Object.hasOwnProperty.call(message, "ed25519"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ed25519);
            if (message.RSA_3072 != null && Object.hasOwnProperty.call(message, "RSA_3072"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.RSA_3072);
            if (message.ECDSA_384 != null && Object.hasOwnProperty.call(message, "ECDSA_384"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.ECDSA_384);
            if (message.ECDSASecp256k1 != null && Object.hasOwnProperty.call(message, "ECDSASecp256k1"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.ECDSASecp256k1);
            return writer;
        };

        /**
         * Encodes the specified SignaturePair message, length delimited. Does not implicitly {@link proto.SignaturePair.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SignaturePair
         * @static
         * @param {proto.ISignaturePair} message SignaturePair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignaturePair.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignaturePair message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SignaturePair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SignaturePair} SignaturePair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignaturePair.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SignaturePair();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.pubKeyPrefix = reader.bytes();
                        break;
                    }
                case 2: {
                        message.contract = reader.bytes();
                        break;
                    }
                case 3: {
                        message.ed25519 = reader.bytes();
                        break;
                    }
                case 4: {
                        message.RSA_3072 = reader.bytes();
                        break;
                    }
                case 5: {
                        message.ECDSA_384 = reader.bytes();
                        break;
                    }
                case 6: {
                        message.ECDSASecp256k1 = reader.bytes();
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
         * Decodes a SignaturePair message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.SignaturePair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SignaturePair} SignaturePair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignaturePair.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignaturePair message.
         * @function verify
         * @memberof proto.SignaturePair
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignaturePair.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.pubKeyPrefix != null && message.hasOwnProperty("pubKeyPrefix"))
                if (!(message.pubKeyPrefix && typeof message.pubKeyPrefix.length === "number" || $util.isString(message.pubKeyPrefix)))
                    return "pubKeyPrefix: buffer expected";
            if (message.contract != null && message.hasOwnProperty("contract")) {
                properties.signature = 1;
                if (!(message.contract && typeof message.contract.length === "number" || $util.isString(message.contract)))
                    return "contract: buffer expected";
            }
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                if (properties.signature === 1)
                    return "signature: multiple values";
                properties.signature = 1;
                if (!(message.ed25519 && typeof message.ed25519.length === "number" || $util.isString(message.ed25519)))
                    return "ed25519: buffer expected";
            }
            if (message.RSA_3072 != null && message.hasOwnProperty("RSA_3072")) {
                if (properties.signature === 1)
                    return "signature: multiple values";
                properties.signature = 1;
                if (!(message.RSA_3072 && typeof message.RSA_3072.length === "number" || $util.isString(message.RSA_3072)))
                    return "RSA_3072: buffer expected";
            }
            if (message.ECDSA_384 != null && message.hasOwnProperty("ECDSA_384")) {
                if (properties.signature === 1)
                    return "signature: multiple values";
                properties.signature = 1;
                if (!(message.ECDSA_384 && typeof message.ECDSA_384.length === "number" || $util.isString(message.ECDSA_384)))
                    return "ECDSA_384: buffer expected";
            }
            if (message.ECDSASecp256k1 != null && message.hasOwnProperty("ECDSASecp256k1")) {
                if (properties.signature === 1)
                    return "signature: multiple values";
                properties.signature = 1;
                if (!(message.ECDSASecp256k1 && typeof message.ECDSASecp256k1.length === "number" || $util.isString(message.ECDSASecp256k1)))
                    return "ECDSASecp256k1: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SignaturePair message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.SignaturePair
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SignaturePair} SignaturePair
         */
        SignaturePair.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SignaturePair)
                return object;
            let message = new $root.proto.SignaturePair();
            if (object.pubKeyPrefix != null)
                if (typeof object.pubKeyPrefix === "string")
                    $util.base64.decode(object.pubKeyPrefix, message.pubKeyPrefix = $util.newBuffer($util.base64.length(object.pubKeyPrefix)), 0);
                else if (object.pubKeyPrefix.length >= 0)
                    message.pubKeyPrefix = object.pubKeyPrefix;
            if (object.contract != null)
                if (typeof object.contract === "string")
                    $util.base64.decode(object.contract, message.contract = $util.newBuffer($util.base64.length(object.contract)), 0);
                else if (object.contract.length >= 0)
                    message.contract = object.contract;
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
            if (object.ECDSASecp256k1 != null)
                if (typeof object.ECDSASecp256k1 === "string")
                    $util.base64.decode(object.ECDSASecp256k1, message.ECDSASecp256k1 = $util.newBuffer($util.base64.length(object.ECDSASecp256k1)), 0);
                else if (object.ECDSASecp256k1.length >= 0)
                    message.ECDSASecp256k1 = object.ECDSASecp256k1;
            return message;
        };

        /**
         * Creates a plain object from a SignaturePair message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SignaturePair
         * @static
         * @param {proto.SignaturePair} message SignaturePair
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignaturePair.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.pubKeyPrefix = "";
                else {
                    object.pubKeyPrefix = [];
                    if (options.bytes !== Array)
                        object.pubKeyPrefix = $util.newBuffer(object.pubKeyPrefix);
                }
            if (message.pubKeyPrefix != null && message.hasOwnProperty("pubKeyPrefix"))
                object.pubKeyPrefix = options.bytes === String ? $util.base64.encode(message.pubKeyPrefix, 0, message.pubKeyPrefix.length) : options.bytes === Array ? Array.prototype.slice.call(message.pubKeyPrefix) : message.pubKeyPrefix;
            if (message.contract != null && message.hasOwnProperty("contract")) {
                object.contract = options.bytes === String ? $util.base64.encode(message.contract, 0, message.contract.length) : options.bytes === Array ? Array.prototype.slice.call(message.contract) : message.contract;
                if (options.oneofs)
                    object.signature = "contract";
            }
            if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
                object.ed25519 = options.bytes === String ? $util.base64.encode(message.ed25519, 0, message.ed25519.length) : options.bytes === Array ? Array.prototype.slice.call(message.ed25519) : message.ed25519;
                if (options.oneofs)
                    object.signature = "ed25519";
            }
            if (message.RSA_3072 != null && message.hasOwnProperty("RSA_3072")) {
                object.RSA_3072 = options.bytes === String ? $util.base64.encode(message.RSA_3072, 0, message.RSA_3072.length) : options.bytes === Array ? Array.prototype.slice.call(message.RSA_3072) : message.RSA_3072;
                if (options.oneofs)
                    object.signature = "RSA_3072";
            }
            if (message.ECDSA_384 != null && message.hasOwnProperty("ECDSA_384")) {
                object.ECDSA_384 = options.bytes === String ? $util.base64.encode(message.ECDSA_384, 0, message.ECDSA_384.length) : options.bytes === Array ? Array.prototype.slice.call(message.ECDSA_384) : message.ECDSA_384;
                if (options.oneofs)
                    object.signature = "ECDSA_384";
            }
            if (message.ECDSASecp256k1 != null && message.hasOwnProperty("ECDSASecp256k1")) {
                object.ECDSASecp256k1 = options.bytes === String ? $util.base64.encode(message.ECDSASecp256k1, 0, message.ECDSASecp256k1.length) : options.bytes === Array ? Array.prototype.slice.call(message.ECDSASecp256k1) : message.ECDSASecp256k1;
                if (options.oneofs)
                    object.signature = "ECDSASecp256k1";
            }
            return object;
        };

        /**
         * Converts this SignaturePair to JSON.
         * @function toJSON
         * @memberof proto.SignaturePair
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignaturePair.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignaturePair
         * @function getTypeUrl
         * @memberof proto.SignaturePair
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignaturePair.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.SignaturePair";
        };

        return SignaturePair;
    })();

    proto.SignatureMap = (function() {

        /**
         * Properties of a SignatureMap.
         * @memberof proto
         * @interface ISignatureMap
         * @property {Array.<proto.ISignaturePair>|null} [sigPair] A list of signature pairs for a specific transaction.<br/>
         * Each signature pair represents a single cryptographic (`primitive`)
         * public key identified by a "prefix" value and the cryptographic
         * signature produced for that key.
         */

        /**
         * Constructs a new SignatureMap.
         * @memberof proto
         * @classdesc A set of signatures corresponding to every unique public key that
         * signed a given transaction.
         * 
         * If any public key matches more than one prefix in the signature map,
         * the transaction containing that map SHALL fail immediately with the
         * response code `KEY_PREFIX_MISMATCH`.
         * @implements ISignatureMap
         * @constructor
         * @param {proto.ISignatureMap=} [properties] Properties to set
         */
        function SignatureMap(properties) {
            this.sigPair = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A list of signature pairs for a specific transaction.<br/>
         * Each signature pair represents a single cryptographic (`primitive`)
         * public key identified by a "prefix" value and the cryptographic
         * signature produced for that key.
         * @member {Array.<proto.ISignaturePair>} sigPair
         * @memberof proto.SignatureMap
         * @instance
         */
        SignatureMap.prototype.sigPair = $util.emptyArray;

        /**
         * Creates a new SignatureMap instance using the specified properties.
         * @function create
         * @memberof proto.SignatureMap
         * @static
         * @param {proto.ISignatureMap=} [properties] Properties to set
         * @returns {proto.SignatureMap} SignatureMap instance
         */
        SignatureMap.create = function create(properties) {
            return new SignatureMap(properties);
        };

        /**
         * Encodes the specified SignatureMap message. Does not implicitly {@link proto.SignatureMap.verify|verify} messages.
         * @function encode
         * @memberof proto.SignatureMap
         * @static
         * @param {proto.ISignatureMap} message SignatureMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sigPair != null && message.sigPair.length)
                for (let i = 0; i < message.sigPair.length; ++i)
                    $root.proto.SignaturePair.encode(message.sigPair[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SignatureMap message, length delimited. Does not implicitly {@link proto.SignatureMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SignatureMap
         * @static
         * @param {proto.ISignatureMap} message SignatureMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignatureMap message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SignatureMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SignatureMap} SignatureMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureMap.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SignatureMap();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.sigPair && message.sigPair.length))
                            message.sigPair = [];
                        message.sigPair.push($root.proto.SignaturePair.decode(reader, reader.uint32()));
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
         * Decodes a SignatureMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.SignatureMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SignatureMap} SignatureMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignatureMap message.
         * @function verify
         * @memberof proto.SignatureMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignatureMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sigPair != null && message.hasOwnProperty("sigPair")) {
                if (!Array.isArray(message.sigPair))
                    return "sigPair: array expected";
                for (let i = 0; i < message.sigPair.length; ++i) {
                    let error = $root.proto.SignaturePair.verify(message.sigPair[i]);
                    if (error)
                        return "sigPair." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SignatureMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.SignatureMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SignatureMap} SignatureMap
         */
        SignatureMap.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SignatureMap)
                return object;
            let message = new $root.proto.SignatureMap();
            if (object.sigPair) {
                if (!Array.isArray(object.sigPair))
                    throw TypeError(".proto.SignatureMap.sigPair: array expected");
                message.sigPair = [];
                for (let i = 0; i < object.sigPair.length; ++i) {
                    if (typeof object.sigPair[i] !== "object")
                        throw TypeError(".proto.SignatureMap.sigPair: object expected");
                    message.sigPair[i] = $root.proto.SignaturePair.fromObject(object.sigPair[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SignatureMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SignatureMap
         * @static
         * @param {proto.SignatureMap} message SignatureMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignatureMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.sigPair = [];
            if (message.sigPair && message.sigPair.length) {
                object.sigPair = [];
                for (let j = 0; j < message.sigPair.length; ++j)
                    object.sigPair[j] = $root.proto.SignaturePair.toObject(message.sigPair[j], options);
            }
            return object;
        };

        /**
         * Converts this SignatureMap to JSON.
         * @function toJSON
         * @memberof proto.SignatureMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignatureMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignatureMap
         * @function getTypeUrl
         * @memberof proto.SignatureMap
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignatureMap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.SignatureMap";
        };

        return SignatureMap;
    })();

    /**
     * The transactions and queries supported by Hedera Hashgraph.
     * @name proto.HederaFunctionality
     * @enum {number}
     * @property {number} NONE=0 Unused - The first value is unused because this default value is
     * ambiguous with an "unset" value and therefore should not be used.
     * @property {number} CryptoTransfer=1 Transfer tokens among accounts.
     * @property {number} CryptoUpdate=2 Update an account.
     * @property {number} CryptoDelete=3 Delete an account.
     * @property {number} CryptoAddLiveHash=4 Add a livehash to an account
     * @property {number} CryptoDeleteLiveHash=5 Delete a livehash from an account
     * @property {number} ContractCall=6 Execute a smart contract call.
     * @property {number} ContractCreate=7 Create a smart contract.
     * @property {number} ContractUpdate=8 Update a smart contract.
     * @property {number} FileCreate=9 Create a "file" stored in the ledger.
     * @property {number} FileAppend=10 Append data to a "file" stored in the ledger.
     * @property {number} FileUpdate=11 Update a "file" stored in the ledger.
     * @property {number} FileDelete=12 Delete a "file" stored in the ledger.
     * @property {number} CryptoGetAccountBalance=13 Get the balance for an account.
     * @property {number} CryptoGetAccountRecords=14 Get a full account record.
     * @property {number} CryptoGetInfo=15 Get information about a token.
     * @property {number} ContractCallLocal=16 Execute a local smart contract call.<br/>
     * Used by contracts to call other contracts.
     * @property {number} ContractGetInfo=17 Get information about a smart contract.
     * @property {number} ContractGetBytecode=18 Get the compiled bytecode that implements a smart contract.
     * @property {number} GetBySolidityID=19 Get a smart contract record by reference to the solidity ID.
     * @property {number} GetByKey=20 Get a smart contract by reference to the contract key.
     * @property {number} CryptoGetLiveHash=21 Get the live hash for an account
     * @property {number} CryptoGetStakers=22 Get the accounts proxy staking to a given account.
     * @property {number} FileGetContents=23 Get the contents of a "file" stored in the ledger.
     * @property {number} FileGetInfo=24 Get the metadata for a "file" stored in the ledger.
     * @property {number} TransactionGetRecord=25 Get transaction record(s) for a specified transaction ID.
     * @property {number} ContractGetRecords=26 Get all transaction records for a specified contract ID in
     * the past 24 hours.<br/>
     * deprecated since version 0.9.0
     * @property {number} CryptoCreate=27 Create a new account
     * @property {number} SystemDelete=28 Delete a "system" "file" stored in the ledger.<br/>
     * "System" files are files with special purpose and ID values within a
     * specific range.<br/>
     * These files require additional controls and can only be deleted when
     * authorized by accounts with elevated privilege.
     * @property {number} SystemUndelete=29 Undo the delete of a "system" "file" stored in the ledger.<br/>
     * "System" files are files with special purpose and ID values within a
     * specific range.<br/>
     * These files require additional controls and can only be deleted when
     * authorized by accounts with elevated privilege. This operation allows
     * such files to be restored, within a reasonable timeframe, if
     * deleted improperly.
     * @property {number} ContractDelete=30 Delete a smart contract
     * @property {number} Freeze=31 Stop all processing and "freeze" the entire network.<br/>
     * This is generally sent immediately prior to upgrading the network.<br/>
     * After processing this transactions all nodes enter a quiescent state.
     * @property {number} CreateTransactionRecord=32 Create a Transaction Record.<br/>
     * This appears to be purely internal and unused.
     * @property {number} CryptoAccountAutoRenew=33 Auto-renew an account.<br/>
     * This is used for internal fee calculations.
     * @property {number} ContractAutoRenew=34 Auto-renew a smart contract.<br/>
     * This is used for internal fee calculations.
     * @property {number} GetVersionInfo=35 Get version information for the ledger.<br/>
     * This returns a the version of the software currently running the network
     * for both the protocol buffers and the network services (node).
     * @property {number} TransactionGetReceipt=36 Get a receipt for a specified transaction ID.
     * @property {number} ConsensusCreateTopic=50 Create a topic for the Hedera Consensus Service (HCS).
     * @property {number} ConsensusUpdateTopic=51 Update an HCS topic.
     * @property {number} ConsensusDeleteTopic=52 Delete an HCS topic.
     * @property {number} ConsensusGetTopicInfo=53 Get metadata (information) for an HCS topic.
     * @property {number} ConsensusSubmitMessage=54 Publish a message to an HCS topic.
     * @property {number} UncheckedSubmit=55 Submit a transaction, bypassing intake checking.
     * Only enabled in local-mode.
     * @property {number} TokenCreate=56 Create a token for the Hedera Token Service (HTS).
     * @property {number} TokenGetInfo=58 Get metadata (information) for an HTS token.
     * @property {number} TokenFreezeAccount=59 Freeze a specific account with respect to a specific HTS token.
     * <p>
     * Once this transaction completes that account CANNOT send or receive
     * the specified token.
     * @property {number} TokenUnfreezeAccount=60 Remove a "freeze" from an account with respect to a specific HTS token.
     * @property {number} TokenGrantKycToAccount=61 Grant KYC status to an account for a specific HTS token.
     * @property {number} TokenRevokeKycFromAccount=62 Revoke KYC status from an account for a specific HTS token.
     * @property {number} TokenDelete=63 Delete a specific HTS token.
     * @property {number} TokenUpdate=64 Update a specific HTS token.
     * @property {number} TokenMint=65 Mint HTS token amounts to the treasury account for that token.
     * @property {number} TokenBurn=66 Burn HTS token amounts from the treasury account for that token.
     * @property {number} TokenAccountWipe=67 Wipe all amounts for a specific HTS token from a specified account.
     * @property {number} TokenAssociateToAccount=68 Associate a specific HTS token to an account.
     * @property {number} TokenDissociateFromAccount=69 Dissociate a specific HTS token from an account.
     * @property {number} ScheduleCreate=70 Create a scheduled transaction
     * @property {number} ScheduleDelete=71 Delete a scheduled transaction
     * @property {number} ScheduleSign=72 Sign a scheduled transaction
     * @property {number} ScheduleGetInfo=73 Get metadata (information) for a scheduled transaction
     * @property {number} TokenGetAccountNftInfos=74 Get NFT metadata (information) for a range of NFTs associated to a
     * specific non-fungible/unique HTS token and owned by a specific account.
     * @property {number} TokenGetNftInfo=75 Get metadata (information) for a specific NFT identified by token and
     * serial number.
     * @property {number} TokenGetNftInfos=76 Get NFT metadata (information) for a range of NFTs associated to a
     * specific non-fungible/unique HTS token.
     * @property {number} TokenFeeScheduleUpdate=77 Update a token's custom fee schedule.
     * <p>
     * If a transaction of this type is not signed by the token
     * `fee_schedule_key` it SHALL fail with INVALID_SIGNATURE, or
     * TOKEN_HAS_NO_FEE_SCHEDULE_KEY if there is no `fee_schedule_key` set.
     * @property {number} NetworkGetExecutionTime=78 Get execution time(s) for one or more "recent" TransactionIDs.
     * @property {number} TokenPause=79 Pause a specific HTS token
     * @property {number} TokenUnpause=80 Unpause a paused HTS token.
     * @property {number} CryptoApproveAllowance=81 Approve an allowance for a spender relative to the owner account, which
     * MUST sign the transaction.
     * @property {number} CryptoDeleteAllowance=82 Delete (unapprove) an allowance previously approved
     * for the owner account.
     * @property {number} GetAccountDetails=83 Get all the information about an account, including balance
     * and allowances.<br/>
     * This does not get a list of account records.
     * @property {number} EthereumTransaction=84 Perform an Ethereum (EVM) transaction.<br/>
     * CallData may be inline if small, or in a "file" if large.
     * @property {number} NodeStakeUpdate=85 Used to indicate when the network has updated the staking information
     * at the end of a staking period and to indicate a new staking period
     * has started.
     * @property {number} UtilPrng=86 Generate and return a pseudorandom number based on network state.
     * @property {number} TransactionGetFastRecord=87 Get a record for a "recent" transaction.
     * @property {number} TokenUpdateNfts=88 Update the metadata of one or more NFT's of a specific token type.
     * @property {number} NodeCreate=89 Create a node
     * @property {number} NodeUpdate=90 Update a node
     * @property {number} NodeDelete=91 Delete a node
     * @property {number} TokenReject=92 Transfer one or more token balances held by the requesting account
     * to the treasury for each token type.
     * @property {number} TokenAirdrop=93 Airdrop one or more tokens to one or more accounts.
     * @property {number} TokenCancelAirdrop=94 Remove one or more pending airdrops from state on behalf of
     * the sender(s) for each airdrop.
     * @property {number} TokenClaimAirdrop=95 Claim one or more pending airdrops
     * @property {number} StateSignatureTransaction=100 Submit a signature of a state root hash gossiped to other nodes
     * @property {number} HintsKeyPublication=101 Publish a hinTS key to the network.
     * @property {number} HintsPreprocessingVote=102 Vote for a particular preprocessing output of a hinTS construction.
     * @property {number} HintsPartialSignature=103 Sign a partial signature for the active hinTS construction.
     * @property {number} HistoryAssemblySignature=104 Sign a particular history assembly.
     * @property {number} HistoryProofKeyPublication=105 Publish a roster history proof key to the network.
     * @property {number} HistoryProofVote=106 Vote for a particular history proof.
     * @property {number} CrsPublication=107 Publish a random CRS to the network.
     * @property {number} AtomicBatch=108 Submit a batch of transactions to run atomically
     * @property {number} LambdaSStore=109 (DEPRECATED) Remove once no production throttle assets reference it.
     * @property {number} HookDispatch=110 (Internal-only) Dispatch a hook action.
     * @property {number} HookStore=111 Update one or more storage slots in an EVM hook.
     * @property {number} LedgerIdPublication=112 (Internal-only) Publish a new ledger id and chain-of-trust key.
     * @property {number} RegisteredNodeCreate=113 Create a registered node
     * @property {number} RegisteredNodeUpdate=114 Update a registered node
     * @property {number} RegisteredNodeDelete=115 Delete a registered node
     */
    proto.HederaFunctionality = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "CryptoTransfer"] = 1;
        values[valuesById[2] = "CryptoUpdate"] = 2;
        values[valuesById[3] = "CryptoDelete"] = 3;
        values[valuesById[4] = "CryptoAddLiveHash"] = 4;
        values[valuesById[5] = "CryptoDeleteLiveHash"] = 5;
        values[valuesById[6] = "ContractCall"] = 6;
        values[valuesById[7] = "ContractCreate"] = 7;
        values[valuesById[8] = "ContractUpdate"] = 8;
        values[valuesById[9] = "FileCreate"] = 9;
        values[valuesById[10] = "FileAppend"] = 10;
        values[valuesById[11] = "FileUpdate"] = 11;
        values[valuesById[12] = "FileDelete"] = 12;
        values[valuesById[13] = "CryptoGetAccountBalance"] = 13;
        values[valuesById[14] = "CryptoGetAccountRecords"] = 14;
        values[valuesById[15] = "CryptoGetInfo"] = 15;
        values[valuesById[16] = "ContractCallLocal"] = 16;
        values[valuesById[17] = "ContractGetInfo"] = 17;
        values[valuesById[18] = "ContractGetBytecode"] = 18;
        values[valuesById[19] = "GetBySolidityID"] = 19;
        values[valuesById[20] = "GetByKey"] = 20;
        values[valuesById[21] = "CryptoGetLiveHash"] = 21;
        values[valuesById[22] = "CryptoGetStakers"] = 22;
        values[valuesById[23] = "FileGetContents"] = 23;
        values[valuesById[24] = "FileGetInfo"] = 24;
        values[valuesById[25] = "TransactionGetRecord"] = 25;
        values[valuesById[26] = "ContractGetRecords"] = 26;
        values[valuesById[27] = "CryptoCreate"] = 27;
        values[valuesById[28] = "SystemDelete"] = 28;
        values[valuesById[29] = "SystemUndelete"] = 29;
        values[valuesById[30] = "ContractDelete"] = 30;
        values[valuesById[31] = "Freeze"] = 31;
        values[valuesById[32] = "CreateTransactionRecord"] = 32;
        values[valuesById[33] = "CryptoAccountAutoRenew"] = 33;
        values[valuesById[34] = "ContractAutoRenew"] = 34;
        values[valuesById[35] = "GetVersionInfo"] = 35;
        values[valuesById[36] = "TransactionGetReceipt"] = 36;
        values[valuesById[50] = "ConsensusCreateTopic"] = 50;
        values[valuesById[51] = "ConsensusUpdateTopic"] = 51;
        values[valuesById[52] = "ConsensusDeleteTopic"] = 52;
        values[valuesById[53] = "ConsensusGetTopicInfo"] = 53;
        values[valuesById[54] = "ConsensusSubmitMessage"] = 54;
        values[valuesById[55] = "UncheckedSubmit"] = 55;
        values[valuesById[56] = "TokenCreate"] = 56;
        values[valuesById[58] = "TokenGetInfo"] = 58;
        values[valuesById[59] = "TokenFreezeAccount"] = 59;
        values[valuesById[60] = "TokenUnfreezeAccount"] = 60;
        values[valuesById[61] = "TokenGrantKycToAccount"] = 61;
        values[valuesById[62] = "TokenRevokeKycFromAccount"] = 62;
        values[valuesById[63] = "TokenDelete"] = 63;
        values[valuesById[64] = "TokenUpdate"] = 64;
        values[valuesById[65] = "TokenMint"] = 65;
        values[valuesById[66] = "TokenBurn"] = 66;
        values[valuesById[67] = "TokenAccountWipe"] = 67;
        values[valuesById[68] = "TokenAssociateToAccount"] = 68;
        values[valuesById[69] = "TokenDissociateFromAccount"] = 69;
        values[valuesById[70] = "ScheduleCreate"] = 70;
        values[valuesById[71] = "ScheduleDelete"] = 71;
        values[valuesById[72] = "ScheduleSign"] = 72;
        values[valuesById[73] = "ScheduleGetInfo"] = 73;
        values[valuesById[74] = "TokenGetAccountNftInfos"] = 74;
        values[valuesById[75] = "TokenGetNftInfo"] = 75;
        values[valuesById[76] = "TokenGetNftInfos"] = 76;
        values[valuesById[77] = "TokenFeeScheduleUpdate"] = 77;
        values[valuesById[78] = "NetworkGetExecutionTime"] = 78;
        values[valuesById[79] = "TokenPause"] = 79;
        values[valuesById[80] = "TokenUnpause"] = 80;
        values[valuesById[81] = "CryptoApproveAllowance"] = 81;
        values[valuesById[82] = "CryptoDeleteAllowance"] = 82;
        values[valuesById[83] = "GetAccountDetails"] = 83;
        values[valuesById[84] = "EthereumTransaction"] = 84;
        values[valuesById[85] = "NodeStakeUpdate"] = 85;
        values[valuesById[86] = "UtilPrng"] = 86;
        values[valuesById[87] = "TransactionGetFastRecord"] = 87;
        values[valuesById[88] = "TokenUpdateNfts"] = 88;
        values[valuesById[89] = "NodeCreate"] = 89;
        values[valuesById[90] = "NodeUpdate"] = 90;
        values[valuesById[91] = "NodeDelete"] = 91;
        values[valuesById[92] = "TokenReject"] = 92;
        values[valuesById[93] = "TokenAirdrop"] = 93;
        values[valuesById[94] = "TokenCancelAirdrop"] = 94;
        values[valuesById[95] = "TokenClaimAirdrop"] = 95;
        values[valuesById[100] = "StateSignatureTransaction"] = 100;
        values[valuesById[101] = "HintsKeyPublication"] = 101;
        values[valuesById[102] = "HintsPreprocessingVote"] = 102;
        values[valuesById[103] = "HintsPartialSignature"] = 103;
        values[valuesById[104] = "HistoryAssemblySignature"] = 104;
        values[valuesById[105] = "HistoryProofKeyPublication"] = 105;
        values[valuesById[106] = "HistoryProofVote"] = 106;
        values[valuesById[107] = "CrsPublication"] = 107;
        values[valuesById[108] = "AtomicBatch"] = 108;
        values[valuesById[109] = "LambdaSStore"] = 109;
        values[valuesById[110] = "HookDispatch"] = 110;
        values[valuesById[111] = "HookStore"] = 111;
        values[valuesById[112] = "LedgerIdPublication"] = 112;
        values[valuesById[113] = "RegisteredNodeCreate"] = 113;
        values[valuesById[114] = "RegisteredNodeUpdate"] = 114;
        values[valuesById[115] = "RegisteredNodeDelete"] = 115;
        return values;
    })();

    proto.FeeComponents = (function() {

        /**
         * Properties of a FeeComponents.
         * @memberof proto
         * @interface IFeeComponents
         * @property {number|Long|null} [min] Base: "minimum total fee".
         * <p>
         * The calculated fee MUST be greater than this value.
         * @property {number|Long|null} [max] Base: "maximum total fee".
         * <p>
         * The calculated fee MUST be less than this value.
         * @property {number|Long|null} [constant] Base: "constant fee".<br/>
         * A baseline constant contribution to total fee.
         * @property {number|Long|null} [bpt] Bandwidth: "bytes per transaction".<br/>
         * The fee for bandwidth consumed by a transaction, measured in bytes
         * @property {number|Long|null} [vpt] Signatures: "validations per transaction".<br/>
         * The fee for signature verifications required by a transaction
         * @property {number|Long|null} [rbh] Memory: "RAM byte-hours".<br/>
         * The fee for RAM required to process a transaction,
         * measured in byte-hours
         * @property {number|Long|null} [sbh] Disk: "storage byte-hours".<br/>
         * The fee for storage required by a transaction, measured in byte-hours
         * @property {number|Long|null} [gas] Compute: Ethereum term for a derivative EVM compute resource.<br/>
         * The fee of computation for a smart contract transaction. The value of
         * gas is set by a conversion rate, and is regularly updated to reflect
         * reasonable and customary costs.
         * @property {number|Long|null} [tv] Ad valorem: "transferred value".<br/>
         * The fee for HBAR transferred by a transaction.
         * @property {number|Long|null} [bpr] Response memory: "bytes per response".<br/>
         * The fee for data retrieved from memory to deliver a response,
         * measured in bytes
         * @property {number|Long|null} [sbpr] Response disk: "storage bytes per response".<br/>
         * The fee for data retrieved from disk to deliver a response,
         * measured in bytes
         */

        /**
         * Constructs a new FeeComponents.
         * @memberof proto
         * @classdesc A set of values the nodes use in determining transaction and query fees, and
         * constants involved in fee calculations.
         * 
         * Nodes SHALL multiply the amount of "resources" allocated to a transaction or
         * query by the corresponding price to calculate the appropriate fee. Units are
         * one-thousandth of a `tinyCent`. The "resource" allocations SHALL be estimated
         * based on transaction characteristics and current network state, and MAY be
         * further adjusted based on network load and congestion.
         * 
         * This SHALL be used, in different contexts, for the cost _factors_ used to
         * calculate charged amounts, for the resource accumulation, and for actual
         * amounts to be charged.<br/>
         * Amounts recorded here MUST be converted to tinybar according to the
         * current active `ExchangeRate` for the network.
         * @implements IFeeComponents
         * @constructor
         * @param {proto.IFeeComponents=} [properties] Properties to set
         */
        function FeeComponents(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base: "minimum total fee".
         * <p>
         * The calculated fee MUST be greater than this value.
         * @member {number|Long} min
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.min = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Base: "maximum total fee".
         * <p>
         * The calculated fee MUST be less than this value.
         * @member {number|Long} max
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.max = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Base: "constant fee".<br/>
         * A baseline constant contribution to total fee.
         * @member {number|Long} constant
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.constant = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Bandwidth: "bytes per transaction".<br/>
         * The fee for bandwidth consumed by a transaction, measured in bytes
         * @member {number|Long} bpt
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.bpt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Signatures: "validations per transaction".<br/>
         * The fee for signature verifications required by a transaction
         * @member {number|Long} vpt
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.vpt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Memory: "RAM byte-hours".<br/>
         * The fee for RAM required to process a transaction,
         * measured in byte-hours
         * @member {number|Long} rbh
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.rbh = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Disk: "storage byte-hours".<br/>
         * The fee for storage required by a transaction, measured in byte-hours
         * @member {number|Long} sbh
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.sbh = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Compute: Ethereum term for a derivative EVM compute resource.<br/>
         * The fee of computation for a smart contract transaction. The value of
         * gas is set by a conversion rate, and is regularly updated to reflect
         * reasonable and customary costs.
         * @member {number|Long} gas
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.gas = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Ad valorem: "transferred value".<br/>
         * The fee for HBAR transferred by a transaction.
         * @member {number|Long} tv
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.tv = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response memory: "bytes per response".<br/>
         * The fee for data retrieved from memory to deliver a response,
         * measured in bytes
         * @member {number|Long} bpr
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.bpr = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response disk: "storage bytes per response".<br/>
         * The fee for data retrieved from disk to deliver a response,
         * measured in bytes
         * @member {number|Long} sbpr
         * @memberof proto.FeeComponents
         * @instance
         */
        FeeComponents.prototype.sbpr = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FeeComponents instance using the specified properties.
         * @function create
         * @memberof proto.FeeComponents
         * @static
         * @param {proto.IFeeComponents=} [properties] Properties to set
         * @returns {proto.FeeComponents} FeeComponents instance
         */
        FeeComponents.create = function create(properties) {
            return new FeeComponents(properties);
        };

        /**
         * Encodes the specified FeeComponents message. Does not implicitly {@link proto.FeeComponents.verify|verify} messages.
         * @function encode
         * @memberof proto.FeeComponents
         * @static
         * @param {proto.IFeeComponents} message FeeComponents message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeComponents.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.min);
            if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.max);
            if (message.constant != null && Object.hasOwnProperty.call(message, "constant"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.constant);
            if (message.bpt != null && Object.hasOwnProperty.call(message, "bpt"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.bpt);
            if (message.vpt != null && Object.hasOwnProperty.call(message, "vpt"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.vpt);
            if (message.rbh != null && Object.hasOwnProperty.call(message, "rbh"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.rbh);
            if (message.sbh != null && Object.hasOwnProperty.call(message, "sbh"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.sbh);
            if (message.gas != null && Object.hasOwnProperty.call(message, "gas"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.gas);
            if (message.tv != null && Object.hasOwnProperty.call(message, "tv"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.tv);
            if (message.bpr != null && Object.hasOwnProperty.call(message, "bpr"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.bpr);
            if (message.sbpr != null && Object.hasOwnProperty.call(message, "sbpr"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.sbpr);
            return writer;
        };

        /**
         * Encodes the specified FeeComponents message, length delimited. Does not implicitly {@link proto.FeeComponents.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FeeComponents
         * @static
         * @param {proto.IFeeComponents} message FeeComponents message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeComponents.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeeComponents message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FeeComponents
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FeeComponents} FeeComponents
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeComponents.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FeeComponents();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.min = reader.int64();
                        break;
                    }
                case 2: {
                        message.max = reader.int64();
                        break;
                    }
                case 3: {
                        message.constant = reader.int64();
                        break;
                    }
                case 4: {
                        message.bpt = reader.int64();
                        break;
                    }
                case 5: {
                        message.vpt = reader.int64();
                        break;
                    }
                case 6: {
                        message.rbh = reader.int64();
                        break;
                    }
                case 7: {
                        message.sbh = reader.int64();
                        break;
                    }
                case 8: {
                        message.gas = reader.int64();
                        break;
                    }
                case 9: {
                        message.tv = reader.int64();
                        break;
                    }
                case 10: {
                        message.bpr = reader.int64();
                        break;
                    }
                case 11: {
                        message.sbpr = reader.int64();
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
         * Decodes a FeeComponents message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FeeComponents
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FeeComponents} FeeComponents
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeComponents.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeeComponents message.
         * @function verify
         * @memberof proto.FeeComponents
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeeComponents.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.min != null && message.hasOwnProperty("min"))
                if (!$util.isInteger(message.min) && !(message.min && $util.isInteger(message.min.low) && $util.isInteger(message.min.high)))
                    return "min: integer|Long expected";
            if (message.max != null && message.hasOwnProperty("max"))
                if (!$util.isInteger(message.max) && !(message.max && $util.isInteger(message.max.low) && $util.isInteger(message.max.high)))
                    return "max: integer|Long expected";
            if (message.constant != null && message.hasOwnProperty("constant"))
                if (!$util.isInteger(message.constant) && !(message.constant && $util.isInteger(message.constant.low) && $util.isInteger(message.constant.high)))
                    return "constant: integer|Long expected";
            if (message.bpt != null && message.hasOwnProperty("bpt"))
                if (!$util.isInteger(message.bpt) && !(message.bpt && $util.isInteger(message.bpt.low) && $util.isInteger(message.bpt.high)))
                    return "bpt: integer|Long expected";
            if (message.vpt != null && message.hasOwnProperty("vpt"))
                if (!$util.isInteger(message.vpt) && !(message.vpt && $util.isInteger(message.vpt.low) && $util.isInteger(message.vpt.high)))
                    return "vpt: integer|Long expected";
            if (message.rbh != null && message.hasOwnProperty("rbh"))
                if (!$util.isInteger(message.rbh) && !(message.rbh && $util.isInteger(message.rbh.low) && $util.isInteger(message.rbh.high)))
                    return "rbh: integer|Long expected";
            if (message.sbh != null && message.hasOwnProperty("sbh"))
                if (!$util.isInteger(message.sbh) && !(message.sbh && $util.isInteger(message.sbh.low) && $util.isInteger(message.sbh.high)))
                    return "sbh: integer|Long expected";
            if (message.gas != null && message.hasOwnProperty("gas"))
                if (!$util.isInteger(message.gas) && !(message.gas && $util.isInteger(message.gas.low) && $util.isInteger(message.gas.high)))
                    return "gas: integer|Long expected";
            if (message.tv != null && message.hasOwnProperty("tv"))
                if (!$util.isInteger(message.tv) && !(message.tv && $util.isInteger(message.tv.low) && $util.isInteger(message.tv.high)))
                    return "tv: integer|Long expected";
            if (message.bpr != null && message.hasOwnProperty("bpr"))
                if (!$util.isInteger(message.bpr) && !(message.bpr && $util.isInteger(message.bpr.low) && $util.isInteger(message.bpr.high)))
                    return "bpr: integer|Long expected";
            if (message.sbpr != null && message.hasOwnProperty("sbpr"))
                if (!$util.isInteger(message.sbpr) && !(message.sbpr && $util.isInteger(message.sbpr.low) && $util.isInteger(message.sbpr.high)))
                    return "sbpr: integer|Long expected";
            return null;
        };

        /**
         * Creates a FeeComponents message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FeeComponents
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FeeComponents} FeeComponents
         */
        FeeComponents.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FeeComponents)
                return object;
            let message = new $root.proto.FeeComponents();
            if (object.min != null)
                if ($util.Long)
                    (message.min = $util.Long.fromValue(object.min)).unsigned = false;
                else if (typeof object.min === "string")
                    message.min = parseInt(object.min, 10);
                else if (typeof object.min === "number")
                    message.min = object.min;
                else if (typeof object.min === "object")
                    message.min = new $util.LongBits(object.min.low >>> 0, object.min.high >>> 0).toNumber();
            if (object.max != null)
                if ($util.Long)
                    (message.max = $util.Long.fromValue(object.max)).unsigned = false;
                else if (typeof object.max === "string")
                    message.max = parseInt(object.max, 10);
                else if (typeof object.max === "number")
                    message.max = object.max;
                else if (typeof object.max === "object")
                    message.max = new $util.LongBits(object.max.low >>> 0, object.max.high >>> 0).toNumber();
            if (object.constant != null)
                if ($util.Long)
                    (message.constant = $util.Long.fromValue(object.constant)).unsigned = false;
                else if (typeof object.constant === "string")
                    message.constant = parseInt(object.constant, 10);
                else if (typeof object.constant === "number")
                    message.constant = object.constant;
                else if (typeof object.constant === "object")
                    message.constant = new $util.LongBits(object.constant.low >>> 0, object.constant.high >>> 0).toNumber();
            if (object.bpt != null)
                if ($util.Long)
                    (message.bpt = $util.Long.fromValue(object.bpt)).unsigned = false;
                else if (typeof object.bpt === "string")
                    message.bpt = parseInt(object.bpt, 10);
                else if (typeof object.bpt === "number")
                    message.bpt = object.bpt;
                else if (typeof object.bpt === "object")
                    message.bpt = new $util.LongBits(object.bpt.low >>> 0, object.bpt.high >>> 0).toNumber();
            if (object.vpt != null)
                if ($util.Long)
                    (message.vpt = $util.Long.fromValue(object.vpt)).unsigned = false;
                else if (typeof object.vpt === "string")
                    message.vpt = parseInt(object.vpt, 10);
                else if (typeof object.vpt === "number")
                    message.vpt = object.vpt;
                else if (typeof object.vpt === "object")
                    message.vpt = new $util.LongBits(object.vpt.low >>> 0, object.vpt.high >>> 0).toNumber();
            if (object.rbh != null)
                if ($util.Long)
                    (message.rbh = $util.Long.fromValue(object.rbh)).unsigned = false;
                else if (typeof object.rbh === "string")
                    message.rbh = parseInt(object.rbh, 10);
                else if (typeof object.rbh === "number")
                    message.rbh = object.rbh;
                else if (typeof object.rbh === "object")
                    message.rbh = new $util.LongBits(object.rbh.low >>> 0, object.rbh.high >>> 0).toNumber();
            if (object.sbh != null)
                if ($util.Long)
                    (message.sbh = $util.Long.fromValue(object.sbh)).unsigned = false;
                else if (typeof object.sbh === "string")
                    message.sbh = parseInt(object.sbh, 10);
                else if (typeof object.sbh === "number")
                    message.sbh = object.sbh;
                else if (typeof object.sbh === "object")
                    message.sbh = new $util.LongBits(object.sbh.low >>> 0, object.sbh.high >>> 0).toNumber();
            if (object.gas != null)
                if ($util.Long)
                    (message.gas = $util.Long.fromValue(object.gas)).unsigned = false;
                else if (typeof object.gas === "string")
                    message.gas = parseInt(object.gas, 10);
                else if (typeof object.gas === "number")
                    message.gas = object.gas;
                else if (typeof object.gas === "object")
                    message.gas = new $util.LongBits(object.gas.low >>> 0, object.gas.high >>> 0).toNumber();
            if (object.tv != null)
                if ($util.Long)
                    (message.tv = $util.Long.fromValue(object.tv)).unsigned = false;
                else if (typeof object.tv === "string")
                    message.tv = parseInt(object.tv, 10);
                else if (typeof object.tv === "number")
                    message.tv = object.tv;
                else if (typeof object.tv === "object")
                    message.tv = new $util.LongBits(object.tv.low >>> 0, object.tv.high >>> 0).toNumber();
            if (object.bpr != null)
                if ($util.Long)
                    (message.bpr = $util.Long.fromValue(object.bpr)).unsigned = false;
                else if (typeof object.bpr === "string")
                    message.bpr = parseInt(object.bpr, 10);
                else if (typeof object.bpr === "number")
                    message.bpr = object.bpr;
                else if (typeof object.bpr === "object")
                    message.bpr = new $util.LongBits(object.bpr.low >>> 0, object.bpr.high >>> 0).toNumber();
            if (object.sbpr != null)
                if ($util.Long)
                    (message.sbpr = $util.Long.fromValue(object.sbpr)).unsigned = false;
                else if (typeof object.sbpr === "string")
                    message.sbpr = parseInt(object.sbpr, 10);
                else if (typeof object.sbpr === "number")
                    message.sbpr = object.sbpr;
                else if (typeof object.sbpr === "object")
                    message.sbpr = new $util.LongBits(object.sbpr.low >>> 0, object.sbpr.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FeeComponents message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FeeComponents
         * @static
         * @param {proto.FeeComponents} message FeeComponents
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeeComponents.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.min = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.min = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.max = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.max = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.constant = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.constant = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.bpt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bpt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.vpt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.vpt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.rbh = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rbh = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.sbh = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sbh = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.gas = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gas = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.tv = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tv = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.bpr = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bpr = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.sbpr = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sbpr = options.longs === String ? "0" : 0;
            }
            if (message.min != null && message.hasOwnProperty("min"))
                if (typeof message.min === "number")
                    object.min = options.longs === String ? String(message.min) : message.min;
                else
                    object.min = options.longs === String ? $util.Long.prototype.toString.call(message.min) : options.longs === Number ? new $util.LongBits(message.min.low >>> 0, message.min.high >>> 0).toNumber() : message.min;
            if (message.max != null && message.hasOwnProperty("max"))
                if (typeof message.max === "number")
                    object.max = options.longs === String ? String(message.max) : message.max;
                else
                    object.max = options.longs === String ? $util.Long.prototype.toString.call(message.max) : options.longs === Number ? new $util.LongBits(message.max.low >>> 0, message.max.high >>> 0).toNumber() : message.max;
            if (message.constant != null && message.hasOwnProperty("constant"))
                if (typeof message.constant === "number")
                    object.constant = options.longs === String ? String(message.constant) : message.constant;
                else
                    object.constant = options.longs === String ? $util.Long.prototype.toString.call(message.constant) : options.longs === Number ? new $util.LongBits(message.constant.low >>> 0, message.constant.high >>> 0).toNumber() : message.constant;
            if (message.bpt != null && message.hasOwnProperty("bpt"))
                if (typeof message.bpt === "number")
                    object.bpt = options.longs === String ? String(message.bpt) : message.bpt;
                else
                    object.bpt = options.longs === String ? $util.Long.prototype.toString.call(message.bpt) : options.longs === Number ? new $util.LongBits(message.bpt.low >>> 0, message.bpt.high >>> 0).toNumber() : message.bpt;
            if (message.vpt != null && message.hasOwnProperty("vpt"))
                if (typeof message.vpt === "number")
                    object.vpt = options.longs === String ? String(message.vpt) : message.vpt;
                else
                    object.vpt = options.longs === String ? $util.Long.prototype.toString.call(message.vpt) : options.longs === Number ? new $util.LongBits(message.vpt.low >>> 0, message.vpt.high >>> 0).toNumber() : message.vpt;
            if (message.rbh != null && message.hasOwnProperty("rbh"))
                if (typeof message.rbh === "number")
                    object.rbh = options.longs === String ? String(message.rbh) : message.rbh;
                else
                    object.rbh = options.longs === String ? $util.Long.prototype.toString.call(message.rbh) : options.longs === Number ? new $util.LongBits(message.rbh.low >>> 0, message.rbh.high >>> 0).toNumber() : message.rbh;
            if (message.sbh != null && message.hasOwnProperty("sbh"))
                if (typeof message.sbh === "number")
                    object.sbh = options.longs === String ? String(message.sbh) : message.sbh;
                else
                    object.sbh = options.longs === String ? $util.Long.prototype.toString.call(message.sbh) : options.longs === Number ? new $util.LongBits(message.sbh.low >>> 0, message.sbh.high >>> 0).toNumber() : message.sbh;
            if (message.gas != null && message.hasOwnProperty("gas"))
                if (typeof message.gas === "number")
                    object.gas = options.longs === String ? String(message.gas) : message.gas;
                else
                    object.gas = options.longs === String ? $util.Long.prototype.toString.call(message.gas) : options.longs === Number ? new $util.LongBits(message.gas.low >>> 0, message.gas.high >>> 0).toNumber() : message.gas;
            if (message.tv != null && message.hasOwnProperty("tv"))
                if (typeof message.tv === "number")
                    object.tv = options.longs === String ? String(message.tv) : message.tv;
                else
                    object.tv = options.longs === String ? $util.Long.prototype.toString.call(message.tv) : options.longs === Number ? new $util.LongBits(message.tv.low >>> 0, message.tv.high >>> 0).toNumber() : message.tv;
            if (message.bpr != null && message.hasOwnProperty("bpr"))
                if (typeof message.bpr === "number")
                    object.bpr = options.longs === String ? String(message.bpr) : message.bpr;
                else
                    object.bpr = options.longs === String ? $util.Long.prototype.toString.call(message.bpr) : options.longs === Number ? new $util.LongBits(message.bpr.low >>> 0, message.bpr.high >>> 0).toNumber() : message.bpr;
            if (message.sbpr != null && message.hasOwnProperty("sbpr"))
                if (typeof message.sbpr === "number")
                    object.sbpr = options.longs === String ? String(message.sbpr) : message.sbpr;
                else
                    object.sbpr = options.longs === String ? $util.Long.prototype.toString.call(message.sbpr) : options.longs === Number ? new $util.LongBits(message.sbpr.low >>> 0, message.sbpr.high >>> 0).toNumber() : message.sbpr;
            return object;
        };

        /**
         * Converts this FeeComponents to JSON.
         * @function toJSON
         * @memberof proto.FeeComponents
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeeComponents.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeeComponents
         * @function getTypeUrl
         * @memberof proto.FeeComponents
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeeComponents.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.FeeComponents";
        };

        return FeeComponents;
    })();

    proto.TransactionFeeSchedule = (function() {

        /**
         * Properties of a TransactionFeeSchedule.
         * @memberof proto
         * @interface ITransactionFeeSchedule
         * @property {proto.HederaFunctionality|null} [hederaFunctionality] An enumeration for a particular transaction or query.<br/>
         * The functionality type determines the base cost parameters.
         * @property {proto.IFeeData|null} [feeData] Use `fees` instead of this field.<br/>
         * Resource price coefficients.
         * @property {Array.<proto.IFeeData>|null} [fees] The resource price coefficients for transaction type and any applicable
         * subtypes.<br/>
         * The multiple entries enable support for subtype price definitions.
         */

        /**
         * Constructs a new TransactionFeeSchedule.
         * @memberof proto
         * @classdesc The fee schedule for a specific transaction or query based on the fee data.
         * @implements ITransactionFeeSchedule
         * @constructor
         * @param {proto.ITransactionFeeSchedule=} [properties] Properties to set
         */
        function TransactionFeeSchedule(properties) {
            this.fees = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * An enumeration for a particular transaction or query.<br/>
         * The functionality type determines the base cost parameters.
         * @member {proto.HederaFunctionality} hederaFunctionality
         * @memberof proto.TransactionFeeSchedule
         * @instance
         */
        TransactionFeeSchedule.prototype.hederaFunctionality = 0;

        /**
         * Use `fees` instead of this field.<br/>
         * Resource price coefficients.
         * @member {proto.IFeeData|null|undefined} feeData
         * @memberof proto.TransactionFeeSchedule
         * @instance
         */
        TransactionFeeSchedule.prototype.feeData = null;

        /**
         * The resource price coefficients for transaction type and any applicable
         * subtypes.<br/>
         * The multiple entries enable support for subtype price definitions.
         * @member {Array.<proto.IFeeData>} fees
         * @memberof proto.TransactionFeeSchedule
         * @instance
         */
        TransactionFeeSchedule.prototype.fees = $util.emptyArray;

        /**
         * Creates a new TransactionFeeSchedule instance using the specified properties.
         * @function create
         * @memberof proto.TransactionFeeSchedule
         * @static
         * @param {proto.ITransactionFeeSchedule=} [properties] Properties to set
         * @returns {proto.TransactionFeeSchedule} TransactionFeeSchedule instance
         */
        TransactionFeeSchedule.create = function create(properties) {
            return new TransactionFeeSchedule(properties);
        };

        /**
         * Encodes the specified TransactionFeeSchedule message. Does not implicitly {@link proto.TransactionFeeSchedule.verify|verify} messages.
         * @function encode
         * @memberof proto.TransactionFeeSchedule
         * @static
         * @param {proto.ITransactionFeeSchedule} message TransactionFeeSchedule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionFeeSchedule.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hederaFunctionality != null && Object.hasOwnProperty.call(message, "hederaFunctionality"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.hederaFunctionality);
            if (message.feeData != null && Object.hasOwnProperty.call(message, "feeData"))
                $root.proto.FeeData.encode(message.feeData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.fees != null && message.fees.length)
                for (let i = 0; i < message.fees.length; ++i)
                    $root.proto.FeeData.encode(message.fees[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TransactionFeeSchedule message, length delimited. Does not implicitly {@link proto.TransactionFeeSchedule.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TransactionFeeSchedule
         * @static
         * @param {proto.ITransactionFeeSchedule} message TransactionFeeSchedule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionFeeSchedule.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransactionFeeSchedule message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TransactionFeeSchedule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TransactionFeeSchedule} TransactionFeeSchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionFeeSchedule.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TransactionFeeSchedule();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.hederaFunctionality = reader.int32();
                        break;
                    }
                case 2: {
                        message.feeData = $root.proto.FeeData.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        if (!(message.fees && message.fees.length))
                            message.fees = [];
                        message.fees.push($root.proto.FeeData.decode(reader, reader.uint32()));
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
         * Decodes a TransactionFeeSchedule message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TransactionFeeSchedule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TransactionFeeSchedule} TransactionFeeSchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionFeeSchedule.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransactionFeeSchedule message.
         * @function verify
         * @memberof proto.TransactionFeeSchedule
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransactionFeeSchedule.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hederaFunctionality != null && message.hasOwnProperty("hederaFunctionality"))
                switch (message.hederaFunctionality) {
                default:
                    return "hederaFunctionality: enum value expected";
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
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
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
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                    break;
                }
            if (message.feeData != null && message.hasOwnProperty("feeData")) {
                let error = $root.proto.FeeData.verify(message.feeData);
                if (error)
                    return "feeData." + error;
            }
            if (message.fees != null && message.hasOwnProperty("fees")) {
                if (!Array.isArray(message.fees))
                    return "fees: array expected";
                for (let i = 0; i < message.fees.length; ++i) {
                    let error = $root.proto.FeeData.verify(message.fees[i]);
                    if (error)
                        return "fees." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TransactionFeeSchedule message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TransactionFeeSchedule
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TransactionFeeSchedule} TransactionFeeSchedule
         */
        TransactionFeeSchedule.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TransactionFeeSchedule)
                return object;
            let message = new $root.proto.TransactionFeeSchedule();
            switch (object.hederaFunctionality) {
            default:
                if (typeof object.hederaFunctionality === "number") {
                    message.hederaFunctionality = object.hederaFunctionality;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.hederaFunctionality = 0;
                break;
            case "CryptoTransfer":
            case 1:
                message.hederaFunctionality = 1;
                break;
            case "CryptoUpdate":
            case 2:
                message.hederaFunctionality = 2;
                break;
            case "CryptoDelete":
            case 3:
                message.hederaFunctionality = 3;
                break;
            case "CryptoAddLiveHash":
            case 4:
                message.hederaFunctionality = 4;
                break;
            case "CryptoDeleteLiveHash":
            case 5:
                message.hederaFunctionality = 5;
                break;
            case "ContractCall":
            case 6:
                message.hederaFunctionality = 6;
                break;
            case "ContractCreate":
            case 7:
                message.hederaFunctionality = 7;
                break;
            case "ContractUpdate":
            case 8:
                message.hederaFunctionality = 8;
                break;
            case "FileCreate":
            case 9:
                message.hederaFunctionality = 9;
                break;
            case "FileAppend":
            case 10:
                message.hederaFunctionality = 10;
                break;
            case "FileUpdate":
            case 11:
                message.hederaFunctionality = 11;
                break;
            case "FileDelete":
            case 12:
                message.hederaFunctionality = 12;
                break;
            case "CryptoGetAccountBalance":
            case 13:
                message.hederaFunctionality = 13;
                break;
            case "CryptoGetAccountRecords":
            case 14:
                message.hederaFunctionality = 14;
                break;
            case "CryptoGetInfo":
            case 15:
                message.hederaFunctionality = 15;
                break;
            case "ContractCallLocal":
            case 16:
                message.hederaFunctionality = 16;
                break;
            case "ContractGetInfo":
            case 17:
                message.hederaFunctionality = 17;
                break;
            case "ContractGetBytecode":
            case 18:
                message.hederaFunctionality = 18;
                break;
            case "GetBySolidityID":
            case 19:
                message.hederaFunctionality = 19;
                break;
            case "GetByKey":
            case 20:
                message.hederaFunctionality = 20;
                break;
            case "CryptoGetLiveHash":
            case 21:
                message.hederaFunctionality = 21;
                break;
            case "CryptoGetStakers":
            case 22:
                message.hederaFunctionality = 22;
                break;
            case "FileGetContents":
            case 23:
                message.hederaFunctionality = 23;
                break;
            case "FileGetInfo":
            case 24:
                message.hederaFunctionality = 24;
                break;
            case "TransactionGetRecord":
            case 25:
                message.hederaFunctionality = 25;
                break;
            case "ContractGetRecords":
            case 26:
                message.hederaFunctionality = 26;
                break;
            case "CryptoCreate":
            case 27:
                message.hederaFunctionality = 27;
                break;
            case "SystemDelete":
            case 28:
                message.hederaFunctionality = 28;
                break;
            case "SystemUndelete":
            case 29:
                message.hederaFunctionality = 29;
                break;
            case "ContractDelete":
            case 30:
                message.hederaFunctionality = 30;
                break;
            case "Freeze":
            case 31:
                message.hederaFunctionality = 31;
                break;
            case "CreateTransactionRecord":
            case 32:
                message.hederaFunctionality = 32;
                break;
            case "CryptoAccountAutoRenew":
            case 33:
                message.hederaFunctionality = 33;
                break;
            case "ContractAutoRenew":
            case 34:
                message.hederaFunctionality = 34;
                break;
            case "GetVersionInfo":
            case 35:
                message.hederaFunctionality = 35;
                break;
            case "TransactionGetReceipt":
            case 36:
                message.hederaFunctionality = 36;
                break;
            case "ConsensusCreateTopic":
            case 50:
                message.hederaFunctionality = 50;
                break;
            case "ConsensusUpdateTopic":
            case 51:
                message.hederaFunctionality = 51;
                break;
            case "ConsensusDeleteTopic":
            case 52:
                message.hederaFunctionality = 52;
                break;
            case "ConsensusGetTopicInfo":
            case 53:
                message.hederaFunctionality = 53;
                break;
            case "ConsensusSubmitMessage":
            case 54:
                message.hederaFunctionality = 54;
                break;
            case "UncheckedSubmit":
            case 55:
                message.hederaFunctionality = 55;
                break;
            case "TokenCreate":
            case 56:
                message.hederaFunctionality = 56;
                break;
            case "TokenGetInfo":
            case 58:
                message.hederaFunctionality = 58;
                break;
            case "TokenFreezeAccount":
            case 59:
                message.hederaFunctionality = 59;
                break;
            case "TokenUnfreezeAccount":
            case 60:
                message.hederaFunctionality = 60;
                break;
            case "TokenGrantKycToAccount":
            case 61:
                message.hederaFunctionality = 61;
                break;
            case "TokenRevokeKycFromAccount":
            case 62:
                message.hederaFunctionality = 62;
                break;
            case "TokenDelete":
            case 63:
                message.hederaFunctionality = 63;
                break;
            case "TokenUpdate":
            case 64:
                message.hederaFunctionality = 64;
                break;
            case "TokenMint":
            case 65:
                message.hederaFunctionality = 65;
                break;
            case "TokenBurn":
            case 66:
                message.hederaFunctionality = 66;
                break;
            case "TokenAccountWipe":
            case 67:
                message.hederaFunctionality = 67;
                break;
            case "TokenAssociateToAccount":
            case 68:
                message.hederaFunctionality = 68;
                break;
            case "TokenDissociateFromAccount":
            case 69:
                message.hederaFunctionality = 69;
                break;
            case "ScheduleCreate":
            case 70:
                message.hederaFunctionality = 70;
                break;
            case "ScheduleDelete":
            case 71:
                message.hederaFunctionality = 71;
                break;
            case "ScheduleSign":
            case 72:
                message.hederaFunctionality = 72;
                break;
            case "ScheduleGetInfo":
            case 73:
                message.hederaFunctionality = 73;
                break;
            case "TokenGetAccountNftInfos":
            case 74:
                message.hederaFunctionality = 74;
                break;
            case "TokenGetNftInfo":
            case 75:
                message.hederaFunctionality = 75;
                break;
            case "TokenGetNftInfos":
            case 76:
                message.hederaFunctionality = 76;
                break;
            case "TokenFeeScheduleUpdate":
            case 77:
                message.hederaFunctionality = 77;
                break;
            case "NetworkGetExecutionTime":
            case 78:
                message.hederaFunctionality = 78;
                break;
            case "TokenPause":
            case 79:
                message.hederaFunctionality = 79;
                break;
            case "TokenUnpause":
            case 80:
                message.hederaFunctionality = 80;
                break;
            case "CryptoApproveAllowance":
            case 81:
                message.hederaFunctionality = 81;
                break;
            case "CryptoDeleteAllowance":
            case 82:
                message.hederaFunctionality = 82;
                break;
            case "GetAccountDetails":
            case 83:
                message.hederaFunctionality = 83;
                break;
            case "EthereumTransaction":
            case 84:
                message.hederaFunctionality = 84;
                break;
            case "NodeStakeUpdate":
            case 85:
                message.hederaFunctionality = 85;
                break;
            case "UtilPrng":
            case 86:
                message.hederaFunctionality = 86;
                break;
            case "TransactionGetFastRecord":
            case 87:
                message.hederaFunctionality = 87;
                break;
            case "TokenUpdateNfts":
            case 88:
                message.hederaFunctionality = 88;
                break;
            case "NodeCreate":
            case 89:
                message.hederaFunctionality = 89;
                break;
            case "NodeUpdate":
            case 90:
                message.hederaFunctionality = 90;
                break;
            case "NodeDelete":
            case 91:
                message.hederaFunctionality = 91;
                break;
            case "TokenReject":
            case 92:
                message.hederaFunctionality = 92;
                break;
            case "TokenAirdrop":
            case 93:
                message.hederaFunctionality = 93;
                break;
            case "TokenCancelAirdrop":
            case 94:
                message.hederaFunctionality = 94;
                break;
            case "TokenClaimAirdrop":
            case 95:
                message.hederaFunctionality = 95;
                break;
            case "StateSignatureTransaction":
            case 100:
                message.hederaFunctionality = 100;
                break;
            case "HintsKeyPublication":
            case 101:
                message.hederaFunctionality = 101;
                break;
            case "HintsPreprocessingVote":
            case 102:
                message.hederaFunctionality = 102;
                break;
            case "HintsPartialSignature":
            case 103:
                message.hederaFunctionality = 103;
                break;
            case "HistoryAssemblySignature":
            case 104:
                message.hederaFunctionality = 104;
                break;
            case "HistoryProofKeyPublication":
            case 105:
                message.hederaFunctionality = 105;
                break;
            case "HistoryProofVote":
            case 106:
                message.hederaFunctionality = 106;
                break;
            case "CrsPublication":
            case 107:
                message.hederaFunctionality = 107;
                break;
            case "AtomicBatch":
            case 108:
                message.hederaFunctionality = 108;
                break;
            case "LambdaSStore":
            case 109:
                message.hederaFunctionality = 109;
                break;
            case "HookDispatch":
            case 110:
                message.hederaFunctionality = 110;
                break;
            case "HookStore":
            case 111:
                message.hederaFunctionality = 111;
                break;
            case "LedgerIdPublication":
            case 112:
                message.hederaFunctionality = 112;
                break;
            case "RegisteredNodeCreate":
            case 113:
                message.hederaFunctionality = 113;
                break;
            case "RegisteredNodeUpdate":
            case 114:
                message.hederaFunctionality = 114;
                break;
            case "RegisteredNodeDelete":
            case 115:
                message.hederaFunctionality = 115;
                break;
            }
            if (object.feeData != null) {
                if (typeof object.feeData !== "object")
                    throw TypeError(".proto.TransactionFeeSchedule.feeData: object expected");
                message.feeData = $root.proto.FeeData.fromObject(object.feeData);
            }
            if (object.fees) {
                if (!Array.isArray(object.fees))
                    throw TypeError(".proto.TransactionFeeSchedule.fees: array expected");
                message.fees = [];
                for (let i = 0; i < object.fees.length; ++i) {
                    if (typeof object.fees[i] !== "object")
                        throw TypeError(".proto.TransactionFeeSchedule.fees: object expected");
                    message.fees[i] = $root.proto.FeeData.fromObject(object.fees[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TransactionFeeSchedule message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TransactionFeeSchedule
         * @static
         * @param {proto.TransactionFeeSchedule} message TransactionFeeSchedule
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransactionFeeSchedule.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.fees = [];
            if (options.defaults) {
                object.hederaFunctionality = options.enums === String ? "NONE" : 0;
                object.feeData = null;
            }
            if (message.hederaFunctionality != null && message.hasOwnProperty("hederaFunctionality"))
                object.hederaFunctionality = options.enums === String ? $root.proto.HederaFunctionality[message.hederaFunctionality] === undefined ? message.hederaFunctionality : $root.proto.HederaFunctionality[message.hederaFunctionality] : message.hederaFunctionality;
            if (message.feeData != null && message.hasOwnProperty("feeData"))
                object.feeData = $root.proto.FeeData.toObject(message.feeData, options);
            if (message.fees && message.fees.length) {
                object.fees = [];
                for (let j = 0; j < message.fees.length; ++j)
                    object.fees[j] = $root.proto.FeeData.toObject(message.fees[j], options);
            }
            return object;
        };

        /**
         * Converts this TransactionFeeSchedule to JSON.
         * @function toJSON
         * @memberof proto.TransactionFeeSchedule
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransactionFeeSchedule.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TransactionFeeSchedule
         * @function getTypeUrl
         * @memberof proto.TransactionFeeSchedule
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TransactionFeeSchedule.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TransactionFeeSchedule";
        };

        return TransactionFeeSchedule;
    })();

    proto.FeeData = (function() {

        /**
         * Properties of a FeeData.
         * @memberof proto
         * @interface IFeeData
         * @property {proto.IFeeComponents|null} [nodedata] Fee components to be paid to the submitting node.
         * @property {proto.IFeeComponents|null} [networkdata] Fee components to be paid to the network for bringing a
         * transaction to consensus.
         * @property {proto.IFeeComponents|null} [servicedata] Fee components to be paid to the network for providing the immediate and
         * ongoing services associated with executing the transaction, maintaining
         * the network, and developing the network software.
         * @property {proto.SubType|null} [subType] A sub-type distinguishing between different types of `FeeData` that may
         * apply to the same base transaction type (associated with
         * an `HederaFunctionality`).
         */

        /**
         * Constructs a new FeeData.
         * @memberof proto
         * @classdesc A total fee, in component amounts charged for a transaction.
         * 
         * Total fees are composed of three sets of components.
         * - Node data, components that compensate the specific node that submitted
         * the transaction.
         * - Network data, components that compensate the Hedera network for gossiping
         * the transaction and determining the consensus timestamp.
         * - Service data, components that compensate the Hedera network for the ongoing
         * maintenance and operation of the network, as well as ongoing development
         * of network services.
         * 
         * Fee components are recorded in thousandths of a tiny cent, and the network
         * exchange rate converts these to tinybar amounts, which are what the network
         * charges for transactions and what the network reports in the record stream.
         * @implements IFeeData
         * @constructor
         * @param {proto.IFeeData=} [properties] Properties to set
         */
        function FeeData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Fee components to be paid to the submitting node.
         * @member {proto.IFeeComponents|null|undefined} nodedata
         * @memberof proto.FeeData
         * @instance
         */
        FeeData.prototype.nodedata = null;

        /**
         * Fee components to be paid to the network for bringing a
         * transaction to consensus.
         * @member {proto.IFeeComponents|null|undefined} networkdata
         * @memberof proto.FeeData
         * @instance
         */
        FeeData.prototype.networkdata = null;

        /**
         * Fee components to be paid to the network for providing the immediate and
         * ongoing services associated with executing the transaction, maintaining
         * the network, and developing the network software.
         * @member {proto.IFeeComponents|null|undefined} servicedata
         * @memberof proto.FeeData
         * @instance
         */
        FeeData.prototype.servicedata = null;

        /**
         * A sub-type distinguishing between different types of `FeeData` that may
         * apply to the same base transaction type (associated with
         * an `HederaFunctionality`).
         * @member {proto.SubType} subType
         * @memberof proto.FeeData
         * @instance
         */
        FeeData.prototype.subType = 0;

        /**
         * Creates a new FeeData instance using the specified properties.
         * @function create
         * @memberof proto.FeeData
         * @static
         * @param {proto.IFeeData=} [properties] Properties to set
         * @returns {proto.FeeData} FeeData instance
         */
        FeeData.create = function create(properties) {
            return new FeeData(properties);
        };

        /**
         * Encodes the specified FeeData message. Does not implicitly {@link proto.FeeData.verify|verify} messages.
         * @function encode
         * @memberof proto.FeeData
         * @static
         * @param {proto.IFeeData} message FeeData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodedata != null && Object.hasOwnProperty.call(message, "nodedata"))
                $root.proto.FeeComponents.encode(message.nodedata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.networkdata != null && Object.hasOwnProperty.call(message, "networkdata"))
                $root.proto.FeeComponents.encode(message.networkdata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.servicedata != null && Object.hasOwnProperty.call(message, "servicedata"))
                $root.proto.FeeComponents.encode(message.servicedata, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.subType != null && Object.hasOwnProperty.call(message, "subType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.subType);
            return writer;
        };

        /**
         * Encodes the specified FeeData message, length delimited. Does not implicitly {@link proto.FeeData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FeeData
         * @static
         * @param {proto.IFeeData} message FeeData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeeData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FeeData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FeeData} FeeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FeeData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nodedata = $root.proto.FeeComponents.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.networkdata = $root.proto.FeeComponents.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.servicedata = $root.proto.FeeComponents.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.subType = reader.int32();
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
         * Decodes a FeeData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FeeData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FeeData} FeeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeeData message.
         * @function verify
         * @memberof proto.FeeData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeeData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nodedata != null && message.hasOwnProperty("nodedata")) {
                let error = $root.proto.FeeComponents.verify(message.nodedata);
                if (error)
                    return "nodedata." + error;
            }
            if (message.networkdata != null && message.hasOwnProperty("networkdata")) {
                let error = $root.proto.FeeComponents.verify(message.networkdata);
                if (error)
                    return "networkdata." + error;
            }
            if (message.servicedata != null && message.hasOwnProperty("servicedata")) {
                let error = $root.proto.FeeComponents.verify(message.servicedata);
                if (error)
                    return "servicedata." + error;
            }
            if (message.subType != null && message.hasOwnProperty("subType"))
                switch (message.subType) {
                default:
                    return "subType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            return null;
        };

        /**
         * Creates a FeeData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FeeData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FeeData} FeeData
         */
        FeeData.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FeeData)
                return object;
            let message = new $root.proto.FeeData();
            if (object.nodedata != null) {
                if (typeof object.nodedata !== "object")
                    throw TypeError(".proto.FeeData.nodedata: object expected");
                message.nodedata = $root.proto.FeeComponents.fromObject(object.nodedata);
            }
            if (object.networkdata != null) {
                if (typeof object.networkdata !== "object")
                    throw TypeError(".proto.FeeData.networkdata: object expected");
                message.networkdata = $root.proto.FeeComponents.fromObject(object.networkdata);
            }
            if (object.servicedata != null) {
                if (typeof object.servicedata !== "object")
                    throw TypeError(".proto.FeeData.servicedata: object expected");
                message.servicedata = $root.proto.FeeComponents.fromObject(object.servicedata);
            }
            switch (object.subType) {
            default:
                if (typeof object.subType === "number") {
                    message.subType = object.subType;
                    break;
                }
                break;
            case "DEFAULT":
            case 0:
                message.subType = 0;
                break;
            case "TOKEN_FUNGIBLE_COMMON":
            case 1:
                message.subType = 1;
                break;
            case "TOKEN_NON_FUNGIBLE_UNIQUE":
            case 2:
                message.subType = 2;
                break;
            case "TOKEN_FUNGIBLE_COMMON_WITH_CUSTOM_FEES":
            case 3:
                message.subType = 3;
                break;
            case "TOKEN_NON_FUNGIBLE_UNIQUE_WITH_CUSTOM_FEES":
            case 4:
                message.subType = 4;
                break;
            case "SCHEDULE_CREATE_CONTRACT_CALL":
            case 5:
                message.subType = 5;
                break;
            case "TOPIC_CREATE_WITH_CUSTOM_FEES":
            case 6:
                message.subType = 6;
                break;
            case "SUBMIT_MESSAGE_WITH_CUSTOM_FEES":
            case 7:
                message.subType = 7;
                break;
            case "CRYPTO_TRANSFER_WITH_HOOKS":
            case 8:
                message.subType = 8;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a FeeData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FeeData
         * @static
         * @param {proto.FeeData} message FeeData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeeData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nodedata = null;
                object.networkdata = null;
                object.servicedata = null;
                object.subType = options.enums === String ? "DEFAULT" : 0;
            }
            if (message.nodedata != null && message.hasOwnProperty("nodedata"))
                object.nodedata = $root.proto.FeeComponents.toObject(message.nodedata, options);
            if (message.networkdata != null && message.hasOwnProperty("networkdata"))
                object.networkdata = $root.proto.FeeComponents.toObject(message.networkdata, options);
            if (message.servicedata != null && message.hasOwnProperty("servicedata"))
                object.servicedata = $root.proto.FeeComponents.toObject(message.servicedata, options);
            if (message.subType != null && message.hasOwnProperty("subType"))
                object.subType = options.enums === String ? $root.proto.SubType[message.subType] === undefined ? message.subType : $root.proto.SubType[message.subType] : message.subType;
            return object;
        };

        /**
         * Converts this FeeData to JSON.
         * @function toJSON
         * @memberof proto.FeeData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeeData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeeData
         * @function getTypeUrl
         * @memberof proto.FeeData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeeData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.FeeData";
        };

        return FeeData;
    })();

    proto.FeeSchedule = (function() {

        /**
         * Properties of a FeeSchedule.
         * @memberof proto
         * @interface IFeeSchedule
         * @property {Array.<proto.ITransactionFeeSchedule>|null} [transactionFeeSchedule] Sets of fee coefficients for various transaction or query types.
         * @property {proto.ITimestampSeconds|null} [expiryTime] A time, in seconds since the `epoch`, when this fee schedule
         * will expire.
         * <p>
         * For this purpose, `epoch` SHALL be the UNIX epoch
         * with 0 at `1970-01-01T00:00:00.000Z`.
         */

        /**
         * Constructs a new FeeSchedule.
         * @memberof proto
         * @classdesc A set of fee schedules covering all transaction types and query types, along
         * with a specific time at which this fee schedule will expire.
         * 
         * Nodes SHALL use the most recent unexpired fee schedule to determine the fees
         * for all transactions based on various resource components imputed to each
         * transaction.
         * @implements IFeeSchedule
         * @constructor
         * @param {proto.IFeeSchedule=} [properties] Properties to set
         */
        function FeeSchedule(properties) {
            this.transactionFeeSchedule = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sets of fee coefficients for various transaction or query types.
         * @member {Array.<proto.ITransactionFeeSchedule>} transactionFeeSchedule
         * @memberof proto.FeeSchedule
         * @instance
         */
        FeeSchedule.prototype.transactionFeeSchedule = $util.emptyArray;

        /**
         * A time, in seconds since the `epoch`, when this fee schedule
         * will expire.
         * <p>
         * For this purpose, `epoch` SHALL be the UNIX epoch
         * with 0 at `1970-01-01T00:00:00.000Z`.
         * @member {proto.ITimestampSeconds|null|undefined} expiryTime
         * @memberof proto.FeeSchedule
         * @instance
         */
        FeeSchedule.prototype.expiryTime = null;

        /**
         * Creates a new FeeSchedule instance using the specified properties.
         * @function create
         * @memberof proto.FeeSchedule
         * @static
         * @param {proto.IFeeSchedule=} [properties] Properties to set
         * @returns {proto.FeeSchedule} FeeSchedule instance
         */
        FeeSchedule.create = function create(properties) {
            return new FeeSchedule(properties);
        };

        /**
         * Encodes the specified FeeSchedule message. Does not implicitly {@link proto.FeeSchedule.verify|verify} messages.
         * @function encode
         * @memberof proto.FeeSchedule
         * @static
         * @param {proto.IFeeSchedule} message FeeSchedule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeSchedule.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transactionFeeSchedule != null && message.transactionFeeSchedule.length)
                for (let i = 0; i < message.transactionFeeSchedule.length; ++i)
                    $root.proto.TransactionFeeSchedule.encode(message.transactionFeeSchedule[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.expiryTime != null && Object.hasOwnProperty.call(message, "expiryTime"))
                $root.proto.TimestampSeconds.encode(message.expiryTime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FeeSchedule message, length delimited. Does not implicitly {@link proto.FeeSchedule.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FeeSchedule
         * @static
         * @param {proto.IFeeSchedule} message FeeSchedule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeSchedule.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeeSchedule message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FeeSchedule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FeeSchedule} FeeSchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeSchedule.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FeeSchedule();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.transactionFeeSchedule && message.transactionFeeSchedule.length))
                            message.transactionFeeSchedule = [];
                        message.transactionFeeSchedule.push($root.proto.TransactionFeeSchedule.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.expiryTime = $root.proto.TimestampSeconds.decode(reader, reader.uint32());
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
         * Decodes a FeeSchedule message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FeeSchedule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FeeSchedule} FeeSchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeSchedule.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeeSchedule message.
         * @function verify
         * @memberof proto.FeeSchedule
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeeSchedule.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transactionFeeSchedule != null && message.hasOwnProperty("transactionFeeSchedule")) {
                if (!Array.isArray(message.transactionFeeSchedule))
                    return "transactionFeeSchedule: array expected";
                for (let i = 0; i < message.transactionFeeSchedule.length; ++i) {
                    let error = $root.proto.TransactionFeeSchedule.verify(message.transactionFeeSchedule[i]);
                    if (error)
                        return "transactionFeeSchedule." + error;
                }
            }
            if (message.expiryTime != null && message.hasOwnProperty("expiryTime")) {
                let error = $root.proto.TimestampSeconds.verify(message.expiryTime);
                if (error)
                    return "expiryTime." + error;
            }
            return null;
        };

        /**
         * Creates a FeeSchedule message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FeeSchedule
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FeeSchedule} FeeSchedule
         */
        FeeSchedule.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FeeSchedule)
                return object;
            let message = new $root.proto.FeeSchedule();
            if (object.transactionFeeSchedule) {
                if (!Array.isArray(object.transactionFeeSchedule))
                    throw TypeError(".proto.FeeSchedule.transactionFeeSchedule: array expected");
                message.transactionFeeSchedule = [];
                for (let i = 0; i < object.transactionFeeSchedule.length; ++i) {
                    if (typeof object.transactionFeeSchedule[i] !== "object")
                        throw TypeError(".proto.FeeSchedule.transactionFeeSchedule: object expected");
                    message.transactionFeeSchedule[i] = $root.proto.TransactionFeeSchedule.fromObject(object.transactionFeeSchedule[i]);
                }
            }
            if (object.expiryTime != null) {
                if (typeof object.expiryTime !== "object")
                    throw TypeError(".proto.FeeSchedule.expiryTime: object expected");
                message.expiryTime = $root.proto.TimestampSeconds.fromObject(object.expiryTime);
            }
            return message;
        };

        /**
         * Creates a plain object from a FeeSchedule message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FeeSchedule
         * @static
         * @param {proto.FeeSchedule} message FeeSchedule
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeeSchedule.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.transactionFeeSchedule = [];
            if (options.defaults)
                object.expiryTime = null;
            if (message.transactionFeeSchedule && message.transactionFeeSchedule.length) {
                object.transactionFeeSchedule = [];
                for (let j = 0; j < message.transactionFeeSchedule.length; ++j)
                    object.transactionFeeSchedule[j] = $root.proto.TransactionFeeSchedule.toObject(message.transactionFeeSchedule[j], options);
            }
            if (message.expiryTime != null && message.hasOwnProperty("expiryTime"))
                object.expiryTime = $root.proto.TimestampSeconds.toObject(message.expiryTime, options);
            return object;
        };

        /**
         * Converts this FeeSchedule to JSON.
         * @function toJSON
         * @memberof proto.FeeSchedule
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeeSchedule.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeeSchedule
         * @function getTypeUrl
         * @memberof proto.FeeSchedule
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeeSchedule.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.FeeSchedule";
        };

        return FeeSchedule;
    })();

    proto.CurrentAndNextFeeSchedule = (function() {

        /**
         * Properties of a CurrentAndNextFeeSchedule.
         * @memberof proto
         * @interface ICurrentAndNextFeeSchedule
         * @property {proto.IFeeSchedule|null} [currentFeeSchedule] A current, unexpired, fee schedule.
         * @property {proto.IFeeSchedule|null} [nextFeeSchedule] A future fee schedule to use when the current schedule expires.
         */

        /**
         * Constructs a new CurrentAndNextFeeSchedule.
         * @memberof proto
         * @classdesc The "current" fee schedule and the "next" fee schedule.
         * 
         * The current fee schedule is the schedule that SHALL apply to the current
         * transaction.<br/>
         * The next fee schedule is the schedule that SHALL apply after the current
         * schedule expires.<br/>
         * We store both to avoid a condition where transactions are processed very
         * near the time when a fee schedule expires and it might be indeterminate
         * which fees to apply. With both current and next fee schedule the network
         * can deterministically apply the correct fee schedule based on consensus
         * timestamp for each transaction.
         * @implements ICurrentAndNextFeeSchedule
         * @constructor
         * @param {proto.ICurrentAndNextFeeSchedule=} [properties] Properties to set
         */
        function CurrentAndNextFeeSchedule(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A current, unexpired, fee schedule.
         * @member {proto.IFeeSchedule|null|undefined} currentFeeSchedule
         * @memberof proto.CurrentAndNextFeeSchedule
         * @instance
         */
        CurrentAndNextFeeSchedule.prototype.currentFeeSchedule = null;

        /**
         * A future fee schedule to use when the current schedule expires.
         * @member {proto.IFeeSchedule|null|undefined} nextFeeSchedule
         * @memberof proto.CurrentAndNextFeeSchedule
         * @instance
         */
        CurrentAndNextFeeSchedule.prototype.nextFeeSchedule = null;

        /**
         * Creates a new CurrentAndNextFeeSchedule instance using the specified properties.
         * @function create
         * @memberof proto.CurrentAndNextFeeSchedule
         * @static
         * @param {proto.ICurrentAndNextFeeSchedule=} [properties] Properties to set
         * @returns {proto.CurrentAndNextFeeSchedule} CurrentAndNextFeeSchedule instance
         */
        CurrentAndNextFeeSchedule.create = function create(properties) {
            return new CurrentAndNextFeeSchedule(properties);
        };

        /**
         * Encodes the specified CurrentAndNextFeeSchedule message. Does not implicitly {@link proto.CurrentAndNextFeeSchedule.verify|verify} messages.
         * @function encode
         * @memberof proto.CurrentAndNextFeeSchedule
         * @static
         * @param {proto.ICurrentAndNextFeeSchedule} message CurrentAndNextFeeSchedule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrentAndNextFeeSchedule.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currentFeeSchedule != null && Object.hasOwnProperty.call(message, "currentFeeSchedule"))
                $root.proto.FeeSchedule.encode(message.currentFeeSchedule, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.nextFeeSchedule != null && Object.hasOwnProperty.call(message, "nextFeeSchedule"))
                $root.proto.FeeSchedule.encode(message.nextFeeSchedule, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CurrentAndNextFeeSchedule message, length delimited. Does not implicitly {@link proto.CurrentAndNextFeeSchedule.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CurrentAndNextFeeSchedule
         * @static
         * @param {proto.ICurrentAndNextFeeSchedule} message CurrentAndNextFeeSchedule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrentAndNextFeeSchedule.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CurrentAndNextFeeSchedule message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CurrentAndNextFeeSchedule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CurrentAndNextFeeSchedule} CurrentAndNextFeeSchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrentAndNextFeeSchedule.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CurrentAndNextFeeSchedule();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.currentFeeSchedule = $root.proto.FeeSchedule.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.nextFeeSchedule = $root.proto.FeeSchedule.decode(reader, reader.uint32());
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
         * Decodes a CurrentAndNextFeeSchedule message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.CurrentAndNextFeeSchedule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CurrentAndNextFeeSchedule} CurrentAndNextFeeSchedule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrentAndNextFeeSchedule.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CurrentAndNextFeeSchedule message.
         * @function verify
         * @memberof proto.CurrentAndNextFeeSchedule
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CurrentAndNextFeeSchedule.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currentFeeSchedule != null && message.hasOwnProperty("currentFeeSchedule")) {
                let error = $root.proto.FeeSchedule.verify(message.currentFeeSchedule);
                if (error)
                    return "currentFeeSchedule." + error;
            }
            if (message.nextFeeSchedule != null && message.hasOwnProperty("nextFeeSchedule")) {
                let error = $root.proto.FeeSchedule.verify(message.nextFeeSchedule);
                if (error)
                    return "nextFeeSchedule." + error;
            }
            return null;
        };

        /**
         * Creates a CurrentAndNextFeeSchedule message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.CurrentAndNextFeeSchedule
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CurrentAndNextFeeSchedule} CurrentAndNextFeeSchedule
         */
        CurrentAndNextFeeSchedule.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CurrentAndNextFeeSchedule)
                return object;
            let message = new $root.proto.CurrentAndNextFeeSchedule();
            if (object.currentFeeSchedule != null) {
                if (typeof object.currentFeeSchedule !== "object")
                    throw TypeError(".proto.CurrentAndNextFeeSchedule.currentFeeSchedule: object expected");
                message.currentFeeSchedule = $root.proto.FeeSchedule.fromObject(object.currentFeeSchedule);
            }
            if (object.nextFeeSchedule != null) {
                if (typeof object.nextFeeSchedule !== "object")
                    throw TypeError(".proto.CurrentAndNextFeeSchedule.nextFeeSchedule: object expected");
                message.nextFeeSchedule = $root.proto.FeeSchedule.fromObject(object.nextFeeSchedule);
            }
            return message;
        };

        /**
         * Creates a plain object from a CurrentAndNextFeeSchedule message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CurrentAndNextFeeSchedule
         * @static
         * @param {proto.CurrentAndNextFeeSchedule} message CurrentAndNextFeeSchedule
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CurrentAndNextFeeSchedule.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.currentFeeSchedule = null;
                object.nextFeeSchedule = null;
            }
            if (message.currentFeeSchedule != null && message.hasOwnProperty("currentFeeSchedule"))
                object.currentFeeSchedule = $root.proto.FeeSchedule.toObject(message.currentFeeSchedule, options);
            if (message.nextFeeSchedule != null && message.hasOwnProperty("nextFeeSchedule"))
                object.nextFeeSchedule = $root.proto.FeeSchedule.toObject(message.nextFeeSchedule, options);
            return object;
        };

        /**
         * Converts this CurrentAndNextFeeSchedule to JSON.
         * @function toJSON
         * @memberof proto.CurrentAndNextFeeSchedule
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CurrentAndNextFeeSchedule.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CurrentAndNextFeeSchedule
         * @function getTypeUrl
         * @memberof proto.CurrentAndNextFeeSchedule
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CurrentAndNextFeeSchedule.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.CurrentAndNextFeeSchedule";
        };

        return CurrentAndNextFeeSchedule;
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

    proto.Setting = (function() {

        /**
         * Properties of a Setting.
         * @memberof proto
         * @interface ISetting
         * @property {string|null} [name] A name for this setting property.
         * @property {string|null} [value] A value for this setting property.
         * @property {Uint8Array|null} [data] A small quantity of data associated with this setting.
         * <p>
         * This SHOULD be less than 100 bytes.<br/>
         * If the value is a string, it MUST be encoded UTF-8.
         */

        /**
         * Constructs a new Setting.
         * @memberof proto
         * @classdesc A single runtime configuration setting.
         * 
         * Typically a name-value pair, this may also contain a small amount of
         * associated data.
         * @implements ISetting
         * @constructor
         * @param {proto.ISetting=} [properties] Properties to set
         */
        function Setting(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A name for this setting property.
         * @member {string} name
         * @memberof proto.Setting
         * @instance
         */
        Setting.prototype.name = "";

        /**
         * A value for this setting property.
         * @member {string} value
         * @memberof proto.Setting
         * @instance
         */
        Setting.prototype.value = "";

        /**
         * A small quantity of data associated with this setting.
         * <p>
         * This SHOULD be less than 100 bytes.<br/>
         * If the value is a string, it MUST be encoded UTF-8.
         * @member {Uint8Array} data
         * @memberof proto.Setting
         * @instance
         */
        Setting.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Setting instance using the specified properties.
         * @function create
         * @memberof proto.Setting
         * @static
         * @param {proto.ISetting=} [properties] Properties to set
         * @returns {proto.Setting} Setting instance
         */
        Setting.create = function create(properties) {
            return new Setting(properties);
        };

        /**
         * Encodes the specified Setting message. Does not implicitly {@link proto.Setting.verify|verify} messages.
         * @function encode
         * @memberof proto.Setting
         * @static
         * @param {proto.ISetting} message Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Setting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Setting message, length delimited. Does not implicitly {@link proto.Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Setting
         * @static
         * @param {proto.ISetting} message Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Setting message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Setting} Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Setting.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Setting();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.string();
                        break;
                    }
                case 3: {
                        message.data = reader.bytes();
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
         * Decodes a Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Setting} Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Setting message.
         * @function verify
         * @memberof proto.Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Setting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Setting} Setting
         */
        Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Setting)
                return object;
            let message = new $root.proto.Setting();
            if (object.name != null)
                message.name = String(object.name);
            if (object.value != null)
                message.value = String(object.value);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Setting
         * @static
         * @param {proto.Setting} message Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Setting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.value = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Setting to JSON.
         * @function toJSON
         * @memberof proto.Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Setting
         * @function getTypeUrl
         * @memberof proto.Setting
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Setting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Setting";
        };

        return Setting;
    })();

    proto.ServicesConfigurationList = (function() {

        /**
         * Properties of a ServicesConfigurationList.
         * @memberof proto
         * @interface IServicesConfigurationList
         * @property {Array.<proto.ISetting>|null} [nameValue] A List of `Setting` values, typically read from application properties.
         */

        /**
         * Constructs a new ServicesConfigurationList.
         * @memberof proto
         * @classdesc Setting values representing a source of runtime configuration information.
         * @implements IServicesConfigurationList
         * @constructor
         * @param {proto.IServicesConfigurationList=} [properties] Properties to set
         */
        function ServicesConfigurationList(properties) {
            this.nameValue = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A List of `Setting` values, typically read from application properties.
         * @member {Array.<proto.ISetting>} nameValue
         * @memberof proto.ServicesConfigurationList
         * @instance
         */
        ServicesConfigurationList.prototype.nameValue = $util.emptyArray;

        /**
         * Creates a new ServicesConfigurationList instance using the specified properties.
         * @function create
         * @memberof proto.ServicesConfigurationList
         * @static
         * @param {proto.IServicesConfigurationList=} [properties] Properties to set
         * @returns {proto.ServicesConfigurationList} ServicesConfigurationList instance
         */
        ServicesConfigurationList.create = function create(properties) {
            return new ServicesConfigurationList(properties);
        };

        /**
         * Encodes the specified ServicesConfigurationList message. Does not implicitly {@link proto.ServicesConfigurationList.verify|verify} messages.
         * @function encode
         * @memberof proto.ServicesConfigurationList
         * @static
         * @param {proto.IServicesConfigurationList} message ServicesConfigurationList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServicesConfigurationList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nameValue != null && message.nameValue.length)
                for (let i = 0; i < message.nameValue.length; ++i)
                    $root.proto.Setting.encode(message.nameValue[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServicesConfigurationList message, length delimited. Does not implicitly {@link proto.ServicesConfigurationList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ServicesConfigurationList
         * @static
         * @param {proto.IServicesConfigurationList} message ServicesConfigurationList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServicesConfigurationList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServicesConfigurationList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ServicesConfigurationList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ServicesConfigurationList} ServicesConfigurationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServicesConfigurationList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ServicesConfigurationList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.nameValue && message.nameValue.length))
                            message.nameValue = [];
                        message.nameValue.push($root.proto.Setting.decode(reader, reader.uint32()));
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
         * Decodes a ServicesConfigurationList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ServicesConfigurationList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ServicesConfigurationList} ServicesConfigurationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServicesConfigurationList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServicesConfigurationList message.
         * @function verify
         * @memberof proto.ServicesConfigurationList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServicesConfigurationList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nameValue != null && message.hasOwnProperty("nameValue")) {
                if (!Array.isArray(message.nameValue))
                    return "nameValue: array expected";
                for (let i = 0; i < message.nameValue.length; ++i) {
                    let error = $root.proto.Setting.verify(message.nameValue[i]);
                    if (error)
                        return "nameValue." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServicesConfigurationList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ServicesConfigurationList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ServicesConfigurationList} ServicesConfigurationList
         */
        ServicesConfigurationList.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ServicesConfigurationList)
                return object;
            let message = new $root.proto.ServicesConfigurationList();
            if (object.nameValue) {
                if (!Array.isArray(object.nameValue))
                    throw TypeError(".proto.ServicesConfigurationList.nameValue: array expected");
                message.nameValue = [];
                for (let i = 0; i < object.nameValue.length; ++i) {
                    if (typeof object.nameValue[i] !== "object")
                        throw TypeError(".proto.ServicesConfigurationList.nameValue: object expected");
                    message.nameValue[i] = $root.proto.Setting.fromObject(object.nameValue[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ServicesConfigurationList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ServicesConfigurationList
         * @static
         * @param {proto.ServicesConfigurationList} message ServicesConfigurationList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServicesConfigurationList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.nameValue = [];
            if (message.nameValue && message.nameValue.length) {
                object.nameValue = [];
                for (let j = 0; j < message.nameValue.length; ++j)
                    object.nameValue[j] = $root.proto.Setting.toObject(message.nameValue[j], options);
            }
            return object;
        };

        /**
         * Converts this ServicesConfigurationList to JSON.
         * @function toJSON
         * @memberof proto.ServicesConfigurationList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServicesConfigurationList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServicesConfigurationList
         * @function getTypeUrl
         * @memberof proto.ServicesConfigurationList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServicesConfigurationList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ServicesConfigurationList";
        };

        return ServicesConfigurationList;
    })();

    proto.TokenRelationship = (function() {

        /**
         * Properties of a TokenRelationship.
         * @memberof proto
         * @interface ITokenRelationship
         * @property {proto.ITokenID|null} [tokenId] A token identifier.
         * <p>
         * This MUST match an existing token that is not deleted.
         * @property {string|null} [symbol] A token symbol.
         * <p>
         * This MUST match an existing token that is not deleted.<br/>
         * This MUST match the value for the token identified in `tokenId`.
         * @property {number|Long|null} [balance] An account balance for this token.
         * <p>
         * For fungible/common tokens this SHALL be the balance that the
         * account holds of that token. The value is provided as an integer amount
         * of the smallest unit of the token (i.e. 10<sup>`-decimals`</sup> whole
         * tokens).<br/>
         * For non-fungible/unique tokens this SHALL be the whole number of
         * unique tokens held by the account for this token type.
         * @property {proto.TokenKycStatus|null} [kycStatus] A KYC status for the account with respect to this token.
         * <p>
         * This may be `KycNotApplicable`, `Granted` or `Revoked` and, if KYC is
         * not supported for this token (e.g. the `kyc_key` of the token is not
         * set), this SHALL be `KycNotApplicable`.
         * @property {proto.TokenFreezeStatus|null} [freezeStatus] A Freeze status for the account with respect to this token.
         * <p>
         * This value SHALL be one of `FreezeNotApplicable`, `Frozen`
         * or `Unfrozen`.<br/>
         * If the token cannot freeze account assets (e.g. the `freeze_key` of the
         * token is not set), this SHALL be `FreezeNotApplicable`.
         * @property {number|null} [decimals] A maximum "precision" for this token.
         * <p>
         * This value MUST match the `decimals` field of the token identified in
         * the `tokenId` field.<br/>
         * A single whole token SHALL be divided into at most
         * 10<sup>`decimals`</sup> sub-units.
         * @property {boolean|null} [automaticAssociation] An automatic association flag.
         * <p>
         * This SHALL be set if the relationship was created implicitly
         * (automatically).<br/>
         * This SHALL be unset if the relationship was created explicitly
         * (manually) via a `TokenAssociate` transaction.
         */

        /**
         * Constructs a new TokenRelationship.
         * @memberof proto
         * @classdesc An Hedera Token Service token relationship. A token relationship describes
         * the connection between an Account and a Token type, including the current
         * account balance in that token.
         * 
         * A `TokenRelationship` SHALL contain, for the designated token and enclosing
         * account, The account's current balance, whether the account has KYC granted,
         * whether the assets are frozen and whether the association was automatic.<br/>
         * A `TokenRelationship` MAY also contain the `symbol` and `decimals` values
         * copied from the token.<br/>
         * `TokenRelationship` entries SHALL be valid only within the context of a
         * `GetAccountDetails` query response, or other enclosing message, which
         * specifies the account side of the relationship.
         * @implements ITokenRelationship
         * @constructor
         * @param {proto.ITokenRelationship=} [properties] Properties to set
         */
        function TokenRelationship(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A token identifier.
         * <p>
         * This MUST match an existing token that is not deleted.
         * @member {proto.ITokenID|null|undefined} tokenId
         * @memberof proto.TokenRelationship
         * @instance
         */
        TokenRelationship.prototype.tokenId = null;

        /**
         * A token symbol.
         * <p>
         * This MUST match an existing token that is not deleted.<br/>
         * This MUST match the value for the token identified in `tokenId`.
         * @member {string} symbol
         * @memberof proto.TokenRelationship
         * @instance
         */
        TokenRelationship.prototype.symbol = "";

        /**
         * An account balance for this token.
         * <p>
         * For fungible/common tokens this SHALL be the balance that the
         * account holds of that token. The value is provided as an integer amount
         * of the smallest unit of the token (i.e. 10<sup>`-decimals`</sup> whole
         * tokens).<br/>
         * For non-fungible/unique tokens this SHALL be the whole number of
         * unique tokens held by the account for this token type.
         * @member {number|Long} balance
         * @memberof proto.TokenRelationship
         * @instance
         */
        TokenRelationship.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * A KYC status for the account with respect to this token.
         * <p>
         * This may be `KycNotApplicable`, `Granted` or `Revoked` and, if KYC is
         * not supported for this token (e.g. the `kyc_key` of the token is not
         * set), this SHALL be `KycNotApplicable`.
         * @member {proto.TokenKycStatus} kycStatus
         * @memberof proto.TokenRelationship
         * @instance
         */
        TokenRelationship.prototype.kycStatus = 0;

        /**
         * A Freeze status for the account with respect to this token.
         * <p>
         * This value SHALL be one of `FreezeNotApplicable`, `Frozen`
         * or `Unfrozen`.<br/>
         * If the token cannot freeze account assets (e.g. the `freeze_key` of the
         * token is not set), this SHALL be `FreezeNotApplicable`.
         * @member {proto.TokenFreezeStatus} freezeStatus
         * @memberof proto.TokenRelationship
         * @instance
         */
        TokenRelationship.prototype.freezeStatus = 0;

        /**
         * A maximum "precision" for this token.
         * <p>
         * This value MUST match the `decimals` field of the token identified in
         * the `tokenId` field.<br/>
         * A single whole token SHALL be divided into at most
         * 10<sup>`decimals`</sup> sub-units.
         * @member {number} decimals
         * @memberof proto.TokenRelationship
         * @instance
         */
        TokenRelationship.prototype.decimals = 0;

        /**
         * An automatic association flag.
         * <p>
         * This SHALL be set if the relationship was created implicitly
         * (automatically).<br/>
         * This SHALL be unset if the relationship was created explicitly
         * (manually) via a `TokenAssociate` transaction.
         * @member {boolean} automaticAssociation
         * @memberof proto.TokenRelationship
         * @instance
         */
        TokenRelationship.prototype.automaticAssociation = false;

        /**
         * Creates a new TokenRelationship instance using the specified properties.
         * @function create
         * @memberof proto.TokenRelationship
         * @static
         * @param {proto.ITokenRelationship=} [properties] Properties to set
         * @returns {proto.TokenRelationship} TokenRelationship instance
         */
        TokenRelationship.create = function create(properties) {
            return new TokenRelationship(properties);
        };

        /**
         * Encodes the specified TokenRelationship message. Does not implicitly {@link proto.TokenRelationship.verify|verify} messages.
         * @function encode
         * @memberof proto.TokenRelationship
         * @static
         * @param {proto.ITokenRelationship} message TokenRelationship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenRelationship.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tokenId != null && Object.hasOwnProperty.call(message, "tokenId"))
                $root.proto.TokenID.encode(message.tokenId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.symbol);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.balance);
            if (message.kycStatus != null && Object.hasOwnProperty.call(message, "kycStatus"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.kycStatus);
            if (message.freezeStatus != null && Object.hasOwnProperty.call(message, "freezeStatus"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.freezeStatus);
            if (message.decimals != null && Object.hasOwnProperty.call(message, "decimals"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.decimals);
            if (message.automaticAssociation != null && Object.hasOwnProperty.call(message, "automaticAssociation"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.automaticAssociation);
            return writer;
        };

        /**
         * Encodes the specified TokenRelationship message, length delimited. Does not implicitly {@link proto.TokenRelationship.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TokenRelationship
         * @static
         * @param {proto.ITokenRelationship} message TokenRelationship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenRelationship.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenRelationship message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TokenRelationship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TokenRelationship} TokenRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenRelationship.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TokenRelationship();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.tokenId = $root.proto.TokenID.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.symbol = reader.string();
                        break;
                    }
                case 3: {
                        message.balance = reader.uint64();
                        break;
                    }
                case 4: {
                        message.kycStatus = reader.int32();
                        break;
                    }
                case 5: {
                        message.freezeStatus = reader.int32();
                        break;
                    }
                case 6: {
                        message.decimals = reader.uint32();
                        break;
                    }
                case 7: {
                        message.automaticAssociation = reader.bool();
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
         * Decodes a TokenRelationship message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TokenRelationship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TokenRelationship} TokenRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenRelationship.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenRelationship message.
         * @function verify
         * @memberof proto.TokenRelationship
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenRelationship.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tokenId != null && message.hasOwnProperty("tokenId")) {
                let error = $root.proto.TokenID.verify(message.tokenId);
                if (error)
                    return "tokenId." + error;
            }
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            if (message.kycStatus != null && message.hasOwnProperty("kycStatus"))
                switch (message.kycStatus) {
                default:
                    return "kycStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.freezeStatus != null && message.hasOwnProperty("freezeStatus"))
                switch (message.freezeStatus) {
                default:
                    return "freezeStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.decimals != null && message.hasOwnProperty("decimals"))
                if (!$util.isInteger(message.decimals))
                    return "decimals: integer expected";
            if (message.automaticAssociation != null && message.hasOwnProperty("automaticAssociation"))
                if (typeof message.automaticAssociation !== "boolean")
                    return "automaticAssociation: boolean expected";
            return null;
        };

        /**
         * Creates a TokenRelationship message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TokenRelationship
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TokenRelationship} TokenRelationship
         */
        TokenRelationship.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TokenRelationship)
                return object;
            let message = new $root.proto.TokenRelationship();
            if (object.tokenId != null) {
                if (typeof object.tokenId !== "object")
                    throw TypeError(".proto.TokenRelationship.tokenId: object expected");
                message.tokenId = $root.proto.TokenID.fromObject(object.tokenId);
            }
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
            switch (object.kycStatus) {
            default:
                if (typeof object.kycStatus === "number") {
                    message.kycStatus = object.kycStatus;
                    break;
                }
                break;
            case "KycNotApplicable":
            case 0:
                message.kycStatus = 0;
                break;
            case "Granted":
            case 1:
                message.kycStatus = 1;
                break;
            case "Revoked":
            case 2:
                message.kycStatus = 2;
                break;
            }
            switch (object.freezeStatus) {
            default:
                if (typeof object.freezeStatus === "number") {
                    message.freezeStatus = object.freezeStatus;
                    break;
                }
                break;
            case "FreezeNotApplicable":
            case 0:
                message.freezeStatus = 0;
                break;
            case "Frozen":
            case 1:
                message.freezeStatus = 1;
                break;
            case "Unfrozen":
            case 2:
                message.freezeStatus = 2;
                break;
            }
            if (object.decimals != null)
                message.decimals = object.decimals >>> 0;
            if (object.automaticAssociation != null)
                message.automaticAssociation = Boolean(object.automaticAssociation);
            return message;
        };

        /**
         * Creates a plain object from a TokenRelationship message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TokenRelationship
         * @static
         * @param {proto.TokenRelationship} message TokenRelationship
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenRelationship.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tokenId = null;
                object.symbol = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
                object.kycStatus = options.enums === String ? "KycNotApplicable" : 0;
                object.freezeStatus = options.enums === String ? "FreezeNotApplicable" : 0;
                object.decimals = 0;
                object.automaticAssociation = false;
            }
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                object.tokenId = $root.proto.TokenID.toObject(message.tokenId, options);
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
            if (message.kycStatus != null && message.hasOwnProperty("kycStatus"))
                object.kycStatus = options.enums === String ? $root.proto.TokenKycStatus[message.kycStatus] === undefined ? message.kycStatus : $root.proto.TokenKycStatus[message.kycStatus] : message.kycStatus;
            if (message.freezeStatus != null && message.hasOwnProperty("freezeStatus"))
                object.freezeStatus = options.enums === String ? $root.proto.TokenFreezeStatus[message.freezeStatus] === undefined ? message.freezeStatus : $root.proto.TokenFreezeStatus[message.freezeStatus] : message.freezeStatus;
            if (message.decimals != null && message.hasOwnProperty("decimals"))
                object.decimals = message.decimals;
            if (message.automaticAssociation != null && message.hasOwnProperty("automaticAssociation"))
                object.automaticAssociation = message.automaticAssociation;
            return object;
        };

        /**
         * Converts this TokenRelationship to JSON.
         * @function toJSON
         * @memberof proto.TokenRelationship
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenRelationship.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenRelationship
         * @function getTypeUrl
         * @memberof proto.TokenRelationship
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenRelationship.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TokenRelationship";
        };

        return TokenRelationship;
    })();

    proto.TokenBalance = (function() {

        /**
         * Properties of a TokenBalance.
         * @memberof proto
         * @interface ITokenBalance
         * @property {proto.ITokenID|null} [tokenId] A token identifier.
         * @property {number|Long|null} [balance] A number of transferable units of the identified token.
         * <p>
         * For fungible/common tokens this SHALL be the balance, in units of
         * 10<sup>`-decimals`</sup> whole tokens.<br/>
         * For non-fungible/unique tokens, this SHALL be the number of
         * individual unique tokens in this balance.
         * @property {number|null} [decimals] A number of "decimals" precision.
         * <p>
         * This MUST match the `decimals` value for the token identified by the
         * `tokenId` field.
         */

        /**
         * Constructs a new TokenBalance.
         * @memberof proto
         * @classdesc A number of _transferable units_ of a specified token.
         * 
         * The transferable unit of a token is its smallest denomination, as given by
         * the token's `decimals` property. Each minted token contains
         * 10<sup>`decimals`</sup> transferable units. For example, we could think of
         * the cent as the transferable unit of the US dollar (`decimals=2`); and the
         * tinybar as the transferable unit of HBAR (`decimals=8`).
         * 
         * Transferable units are not directly comparable across different tokens.
         * @implements ITokenBalance
         * @constructor
         * @param {proto.ITokenBalance=} [properties] Properties to set
         */
        function TokenBalance(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A token identifier.
         * @member {proto.ITokenID|null|undefined} tokenId
         * @memberof proto.TokenBalance
         * @instance
         */
        TokenBalance.prototype.tokenId = null;

        /**
         * A number of transferable units of the identified token.
         * <p>
         * For fungible/common tokens this SHALL be the balance, in units of
         * 10<sup>`-decimals`</sup> whole tokens.<br/>
         * For non-fungible/unique tokens, this SHALL be the number of
         * individual unique tokens in this balance.
         * @member {number|Long} balance
         * @memberof proto.TokenBalance
         * @instance
         */
        TokenBalance.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * A number of "decimals" precision.
         * <p>
         * This MUST match the `decimals` value for the token identified by the
         * `tokenId` field.
         * @member {number} decimals
         * @memberof proto.TokenBalance
         * @instance
         */
        TokenBalance.prototype.decimals = 0;

        /**
         * Creates a new TokenBalance instance using the specified properties.
         * @function create
         * @memberof proto.TokenBalance
         * @static
         * @param {proto.ITokenBalance=} [properties] Properties to set
         * @returns {proto.TokenBalance} TokenBalance instance
         */
        TokenBalance.create = function create(properties) {
            return new TokenBalance(properties);
        };

        /**
         * Encodes the specified TokenBalance message. Does not implicitly {@link proto.TokenBalance.verify|verify} messages.
         * @function encode
         * @memberof proto.TokenBalance
         * @static
         * @param {proto.ITokenBalance} message TokenBalance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenBalance.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tokenId != null && Object.hasOwnProperty.call(message, "tokenId"))
                $root.proto.TokenID.encode(message.tokenId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.balance);
            if (message.decimals != null && Object.hasOwnProperty.call(message, "decimals"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.decimals);
            return writer;
        };

        /**
         * Encodes the specified TokenBalance message, length delimited. Does not implicitly {@link proto.TokenBalance.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TokenBalance
         * @static
         * @param {proto.ITokenBalance} message TokenBalance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenBalance.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenBalance message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TokenBalance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TokenBalance} TokenBalance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenBalance.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TokenBalance();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.tokenId = $root.proto.TokenID.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.balance = reader.uint64();
                        break;
                    }
                case 3: {
                        message.decimals = reader.uint32();
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
         * Decodes a TokenBalance message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TokenBalance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TokenBalance} TokenBalance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenBalance.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenBalance message.
         * @function verify
         * @memberof proto.TokenBalance
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenBalance.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tokenId != null && message.hasOwnProperty("tokenId")) {
                let error = $root.proto.TokenID.verify(message.tokenId);
                if (error)
                    return "tokenId." + error;
            }
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            if (message.decimals != null && message.hasOwnProperty("decimals"))
                if (!$util.isInteger(message.decimals))
                    return "decimals: integer expected";
            return null;
        };

        /**
         * Creates a TokenBalance message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TokenBalance
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TokenBalance} TokenBalance
         */
        TokenBalance.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TokenBalance)
                return object;
            let message = new $root.proto.TokenBalance();
            if (object.tokenId != null) {
                if (typeof object.tokenId !== "object")
                    throw TypeError(".proto.TokenBalance.tokenId: object expected");
                message.tokenId = $root.proto.TokenID.fromObject(object.tokenId);
            }
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
            if (object.decimals != null)
                message.decimals = object.decimals >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a TokenBalance message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TokenBalance
         * @static
         * @param {proto.TokenBalance} message TokenBalance
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenBalance.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tokenId = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
                object.decimals = 0;
            }
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                object.tokenId = $root.proto.TokenID.toObject(message.tokenId, options);
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
            if (message.decimals != null && message.hasOwnProperty("decimals"))
                object.decimals = message.decimals;
            return object;
        };

        /**
         * Converts this TokenBalance to JSON.
         * @function toJSON
         * @memberof proto.TokenBalance
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenBalance.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenBalance
         * @function getTypeUrl
         * @memberof proto.TokenBalance
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenBalance.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TokenBalance";
        };

        return TokenBalance;
    })();

    proto.TokenBalances = (function() {

        /**
         * Properties of a TokenBalances.
         * @memberof proto
         * @interface ITokenBalances
         * @property {Array.<proto.ITokenBalance>|null} [tokenBalances] A list of token balance values.<br/>
         * Each entry represents a single account balance for a single token.
         */

        /**
         * Constructs a new TokenBalances.
         * @memberof proto
         * @classdesc A set of token balance values.
         * 
         * Each entry describes the balance the enclosing account holds for a specific
         * token. The balance is an amount for a fungible/common token or a count for
         * a non-fungible/unique token.
         * @implements ITokenBalances
         * @constructor
         * @param {proto.ITokenBalances=} [properties] Properties to set
         */
        function TokenBalances(properties) {
            this.tokenBalances = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A list of token balance values.<br/>
         * Each entry represents a single account balance for a single token.
         * @member {Array.<proto.ITokenBalance>} tokenBalances
         * @memberof proto.TokenBalances
         * @instance
         */
        TokenBalances.prototype.tokenBalances = $util.emptyArray;

        /**
         * Creates a new TokenBalances instance using the specified properties.
         * @function create
         * @memberof proto.TokenBalances
         * @static
         * @param {proto.ITokenBalances=} [properties] Properties to set
         * @returns {proto.TokenBalances} TokenBalances instance
         */
        TokenBalances.create = function create(properties) {
            return new TokenBalances(properties);
        };

        /**
         * Encodes the specified TokenBalances message. Does not implicitly {@link proto.TokenBalances.verify|verify} messages.
         * @function encode
         * @memberof proto.TokenBalances
         * @static
         * @param {proto.ITokenBalances} message TokenBalances message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenBalances.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tokenBalances != null && message.tokenBalances.length)
                for (let i = 0; i < message.tokenBalances.length; ++i)
                    $root.proto.TokenBalance.encode(message.tokenBalances[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TokenBalances message, length delimited. Does not implicitly {@link proto.TokenBalances.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TokenBalances
         * @static
         * @param {proto.ITokenBalances} message TokenBalances message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenBalances.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenBalances message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TokenBalances
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TokenBalances} TokenBalances
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenBalances.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TokenBalances();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.tokenBalances && message.tokenBalances.length))
                            message.tokenBalances = [];
                        message.tokenBalances.push($root.proto.TokenBalance.decode(reader, reader.uint32()));
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
         * Decodes a TokenBalances message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TokenBalances
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TokenBalances} TokenBalances
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenBalances.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenBalances message.
         * @function verify
         * @memberof proto.TokenBalances
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenBalances.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tokenBalances != null && message.hasOwnProperty("tokenBalances")) {
                if (!Array.isArray(message.tokenBalances))
                    return "tokenBalances: array expected";
                for (let i = 0; i < message.tokenBalances.length; ++i) {
                    let error = $root.proto.TokenBalance.verify(message.tokenBalances[i]);
                    if (error)
                        return "tokenBalances." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TokenBalances message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TokenBalances
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TokenBalances} TokenBalances
         */
        TokenBalances.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TokenBalances)
                return object;
            let message = new $root.proto.TokenBalances();
            if (object.tokenBalances) {
                if (!Array.isArray(object.tokenBalances))
                    throw TypeError(".proto.TokenBalances.tokenBalances: array expected");
                message.tokenBalances = [];
                for (let i = 0; i < object.tokenBalances.length; ++i) {
                    if (typeof object.tokenBalances[i] !== "object")
                        throw TypeError(".proto.TokenBalances.tokenBalances: object expected");
                    message.tokenBalances[i] = $root.proto.TokenBalance.fromObject(object.tokenBalances[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TokenBalances message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TokenBalances
         * @static
         * @param {proto.TokenBalances} message TokenBalances
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenBalances.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tokenBalances = [];
            if (message.tokenBalances && message.tokenBalances.length) {
                object.tokenBalances = [];
                for (let j = 0; j < message.tokenBalances.length; ++j)
                    object.tokenBalances[j] = $root.proto.TokenBalance.toObject(message.tokenBalances[j], options);
            }
            return object;
        };

        /**
         * Converts this TokenBalances to JSON.
         * @function toJSON
         * @memberof proto.TokenBalances
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenBalances.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenBalances
         * @function getTypeUrl
         * @memberof proto.TokenBalances
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenBalances.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TokenBalances";
        };

        return TokenBalances;
    })();

    proto.TokenAssociation = (function() {

        /**
         * Properties of a TokenAssociation.
         * @memberof proto
         * @interface ITokenAssociation
         * @property {proto.ITokenID|null} [tokenId] A token identifier for the associated token.
         * @property {proto.IAccountID|null} [accountId] An account identifier for the associated account.
         */

        /**
         * Constructs a new TokenAssociation.
         * @memberof proto
         * @classdesc An association between a token and an account.
         * 
         * An account must be associated with a token before that account can transact
         * in (send or receive) that token.
         * @implements ITokenAssociation
         * @constructor
         * @param {proto.ITokenAssociation=} [properties] Properties to set
         */
        function TokenAssociation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A token identifier for the associated token.
         * @member {proto.ITokenID|null|undefined} tokenId
         * @memberof proto.TokenAssociation
         * @instance
         */
        TokenAssociation.prototype.tokenId = null;

        /**
         * An account identifier for the associated account.
         * @member {proto.IAccountID|null|undefined} accountId
         * @memberof proto.TokenAssociation
         * @instance
         */
        TokenAssociation.prototype.accountId = null;

        /**
         * Creates a new TokenAssociation instance using the specified properties.
         * @function create
         * @memberof proto.TokenAssociation
         * @static
         * @param {proto.ITokenAssociation=} [properties] Properties to set
         * @returns {proto.TokenAssociation} TokenAssociation instance
         */
        TokenAssociation.create = function create(properties) {
            return new TokenAssociation(properties);
        };

        /**
         * Encodes the specified TokenAssociation message. Does not implicitly {@link proto.TokenAssociation.verify|verify} messages.
         * @function encode
         * @memberof proto.TokenAssociation
         * @static
         * @param {proto.ITokenAssociation} message TokenAssociation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenAssociation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tokenId != null && Object.hasOwnProperty.call(message, "tokenId"))
                $root.proto.TokenID.encode(message.tokenId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.accountId != null && Object.hasOwnProperty.call(message, "accountId"))
                $root.proto.AccountID.encode(message.accountId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TokenAssociation message, length delimited. Does not implicitly {@link proto.TokenAssociation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TokenAssociation
         * @static
         * @param {proto.ITokenAssociation} message TokenAssociation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenAssociation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenAssociation message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TokenAssociation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TokenAssociation} TokenAssociation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenAssociation.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TokenAssociation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.tokenId = $root.proto.TokenID.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.accountId = $root.proto.AccountID.decode(reader, reader.uint32());
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
         * Decodes a TokenAssociation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TokenAssociation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TokenAssociation} TokenAssociation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenAssociation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenAssociation message.
         * @function verify
         * @memberof proto.TokenAssociation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenAssociation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tokenId != null && message.hasOwnProperty("tokenId")) {
                let error = $root.proto.TokenID.verify(message.tokenId);
                if (error)
                    return "tokenId." + error;
            }
            if (message.accountId != null && message.hasOwnProperty("accountId")) {
                let error = $root.proto.AccountID.verify(message.accountId);
                if (error)
                    return "accountId." + error;
            }
            return null;
        };

        /**
         * Creates a TokenAssociation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TokenAssociation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TokenAssociation} TokenAssociation
         */
        TokenAssociation.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TokenAssociation)
                return object;
            let message = new $root.proto.TokenAssociation();
            if (object.tokenId != null) {
                if (typeof object.tokenId !== "object")
                    throw TypeError(".proto.TokenAssociation.tokenId: object expected");
                message.tokenId = $root.proto.TokenID.fromObject(object.tokenId);
            }
            if (object.accountId != null) {
                if (typeof object.accountId !== "object")
                    throw TypeError(".proto.TokenAssociation.accountId: object expected");
                message.accountId = $root.proto.AccountID.fromObject(object.accountId);
            }
            return message;
        };

        /**
         * Creates a plain object from a TokenAssociation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TokenAssociation
         * @static
         * @param {proto.TokenAssociation} message TokenAssociation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenAssociation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tokenId = null;
                object.accountId = null;
            }
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                object.tokenId = $root.proto.TokenID.toObject(message.tokenId, options);
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                object.accountId = $root.proto.AccountID.toObject(message.accountId, options);
            return object;
        };

        /**
         * Converts this TokenAssociation to JSON.
         * @function toJSON
         * @memberof proto.TokenAssociation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenAssociation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenAssociation
         * @function getTypeUrl
         * @memberof proto.TokenAssociation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenAssociation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TokenAssociation";
        };

        return TokenAssociation;
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

    proto.PendingAirdropId = (function() {

        /**
         * Properties of a PendingAirdropId.
         * @memberof proto
         * @interface IPendingAirdropId
         * @property {proto.IAccountID|null} [senderId] A sending account.
         * <p>
         * This is the account that initiated, and SHALL fund,
         * this pending airdrop.<br/>
         * This field is REQUIRED.
         * @property {proto.IAccountID|null} [receiverId] A receiving account.
         * <p>
         * This is the ID of the account that SHALL receive the airdrop.<br/>
         * This field is REQUIRED.
         * @property {proto.ITokenID|null} [fungibleTokenType] A token identifier.<br/>
         * This is the type of token for a fungible/common token airdrop.
         * <p>
         * This field is REQUIRED for a fungible/common token and MUST NOT
         * be used for a non-fungible/unique token.
         * @property {proto.INftID|null} [nonFungibleToken] The id of a single NFT<br/>
         * This is the type of token for a non-fungible/unique token airdrop
         * and consists of a Token ID and serial number.
         * <p>
         * This field is REQUIRED for a non-fungible/unique token and
         * MUST NOT be used for a fungible/common token.
         */

        /**
         * Constructs a new PendingAirdropId.
         * @memberof proto
         * @classdesc A unique, composite, identifier for a pending airdrop.
         * 
         * Each pending airdrop SHALL be uniquely identified by
         * a `PendingAirdropId`.<br/>
         * A `PendingAirdropId` SHALL be recorded when created and MUST be provided in
         * any transaction that would modify that pending airdrop
         * (such as a `claimAirdrop` or `cancelAirdrop`).
         * @implements IPendingAirdropId
         * @constructor
         * @param {proto.IPendingAirdropId=} [properties] Properties to set
         */
        function PendingAirdropId(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A sending account.
         * <p>
         * This is the account that initiated, and SHALL fund,
         * this pending airdrop.<br/>
         * This field is REQUIRED.
         * @member {proto.IAccountID|null|undefined} senderId
         * @memberof proto.PendingAirdropId
         * @instance
         */
        PendingAirdropId.prototype.senderId = null;

        /**
         * A receiving account.
         * <p>
         * This is the ID of the account that SHALL receive the airdrop.<br/>
         * This field is REQUIRED.
         * @member {proto.IAccountID|null|undefined} receiverId
         * @memberof proto.PendingAirdropId
         * @instance
         */
        PendingAirdropId.prototype.receiverId = null;

        /**
         * A token identifier.<br/>
         * This is the type of token for a fungible/common token airdrop.
         * <p>
         * This field is REQUIRED for a fungible/common token and MUST NOT
         * be used for a non-fungible/unique token.
         * @member {proto.ITokenID|null|undefined} fungibleTokenType
         * @memberof proto.PendingAirdropId
         * @instance
         */
        PendingAirdropId.prototype.fungibleTokenType = null;

        /**
         * The id of a single NFT<br/>
         * This is the type of token for a non-fungible/unique token airdrop
         * and consists of a Token ID and serial number.
         * <p>
         * This field is REQUIRED for a non-fungible/unique token and
         * MUST NOT be used for a fungible/common token.
         * @member {proto.INftID|null|undefined} nonFungibleToken
         * @memberof proto.PendingAirdropId
         * @instance
         */
        PendingAirdropId.prototype.nonFungibleToken = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * PendingAirdropId tokenReference.
         * @member {"fungibleTokenType"|"nonFungibleToken"|undefined} tokenReference
         * @memberof proto.PendingAirdropId
         * @instance
         */
        Object.defineProperty(PendingAirdropId.prototype, "tokenReference", {
            get: $util.oneOfGetter($oneOfFields = ["fungibleTokenType", "nonFungibleToken"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PendingAirdropId instance using the specified properties.
         * @function create
         * @memberof proto.PendingAirdropId
         * @static
         * @param {proto.IPendingAirdropId=} [properties] Properties to set
         * @returns {proto.PendingAirdropId} PendingAirdropId instance
         */
        PendingAirdropId.create = function create(properties) {
            return new PendingAirdropId(properties);
        };

        /**
         * Encodes the specified PendingAirdropId message. Does not implicitly {@link proto.PendingAirdropId.verify|verify} messages.
         * @function encode
         * @memberof proto.PendingAirdropId
         * @static
         * @param {proto.IPendingAirdropId} message PendingAirdropId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PendingAirdropId.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                $root.proto.AccountID.encode(message.senderId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                $root.proto.AccountID.encode(message.receiverId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.fungibleTokenType != null && Object.hasOwnProperty.call(message, "fungibleTokenType"))
                $root.proto.TokenID.encode(message.fungibleTokenType, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.nonFungibleToken != null && Object.hasOwnProperty.call(message, "nonFungibleToken"))
                $root.proto.NftID.encode(message.nonFungibleToken, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PendingAirdropId message, length delimited. Does not implicitly {@link proto.PendingAirdropId.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PendingAirdropId
         * @static
         * @param {proto.IPendingAirdropId} message PendingAirdropId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PendingAirdropId.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PendingAirdropId message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PendingAirdropId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PendingAirdropId} PendingAirdropId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PendingAirdropId.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PendingAirdropId();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.senderId = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.receiverId = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.fungibleTokenType = $root.proto.TokenID.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.nonFungibleToken = $root.proto.NftID.decode(reader, reader.uint32());
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
         * Decodes a PendingAirdropId message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.PendingAirdropId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PendingAirdropId} PendingAirdropId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PendingAirdropId.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PendingAirdropId message.
         * @function verify
         * @memberof proto.PendingAirdropId
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PendingAirdropId.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.senderId != null && message.hasOwnProperty("senderId")) {
                let error = $root.proto.AccountID.verify(message.senderId);
                if (error)
                    return "senderId." + error;
            }
            if (message.receiverId != null && message.hasOwnProperty("receiverId")) {
                let error = $root.proto.AccountID.verify(message.receiverId);
                if (error)
                    return "receiverId." + error;
            }
            if (message.fungibleTokenType != null && message.hasOwnProperty("fungibleTokenType")) {
                properties.tokenReference = 1;
                {
                    let error = $root.proto.TokenID.verify(message.fungibleTokenType);
                    if (error)
                        return "fungibleTokenType." + error;
                }
            }
            if (message.nonFungibleToken != null && message.hasOwnProperty("nonFungibleToken")) {
                if (properties.tokenReference === 1)
                    return "tokenReference: multiple values";
                properties.tokenReference = 1;
                {
                    let error = $root.proto.NftID.verify(message.nonFungibleToken);
                    if (error)
                        return "nonFungibleToken." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PendingAirdropId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.PendingAirdropId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.PendingAirdropId} PendingAirdropId
         */
        PendingAirdropId.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.PendingAirdropId)
                return object;
            let message = new $root.proto.PendingAirdropId();
            if (object.senderId != null) {
                if (typeof object.senderId !== "object")
                    throw TypeError(".proto.PendingAirdropId.senderId: object expected");
                message.senderId = $root.proto.AccountID.fromObject(object.senderId);
            }
            if (object.receiverId != null) {
                if (typeof object.receiverId !== "object")
                    throw TypeError(".proto.PendingAirdropId.receiverId: object expected");
                message.receiverId = $root.proto.AccountID.fromObject(object.receiverId);
            }
            if (object.fungibleTokenType != null) {
                if (typeof object.fungibleTokenType !== "object")
                    throw TypeError(".proto.PendingAirdropId.fungibleTokenType: object expected");
                message.fungibleTokenType = $root.proto.TokenID.fromObject(object.fungibleTokenType);
            }
            if (object.nonFungibleToken != null) {
                if (typeof object.nonFungibleToken !== "object")
                    throw TypeError(".proto.PendingAirdropId.nonFungibleToken: object expected");
                message.nonFungibleToken = $root.proto.NftID.fromObject(object.nonFungibleToken);
            }
            return message;
        };

        /**
         * Creates a plain object from a PendingAirdropId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.PendingAirdropId
         * @static
         * @param {proto.PendingAirdropId} message PendingAirdropId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PendingAirdropId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.senderId = null;
                object.receiverId = null;
            }
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                object.senderId = $root.proto.AccountID.toObject(message.senderId, options);
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                object.receiverId = $root.proto.AccountID.toObject(message.receiverId, options);
            if (message.fungibleTokenType != null && message.hasOwnProperty("fungibleTokenType")) {
                object.fungibleTokenType = $root.proto.TokenID.toObject(message.fungibleTokenType, options);
                if (options.oneofs)
                    object.tokenReference = "fungibleTokenType";
            }
            if (message.nonFungibleToken != null && message.hasOwnProperty("nonFungibleToken")) {
                object.nonFungibleToken = $root.proto.NftID.toObject(message.nonFungibleToken, options);
                if (options.oneofs)
                    object.tokenReference = "nonFungibleToken";
            }
            return object;
        };

        /**
         * Converts this PendingAirdropId to JSON.
         * @function toJSON
         * @memberof proto.PendingAirdropId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PendingAirdropId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PendingAirdropId
         * @function getTypeUrl
         * @memberof proto.PendingAirdropId
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PendingAirdropId.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.PendingAirdropId";
        };

        return PendingAirdropId;
    })();

    proto.PendingAirdropValue = (function() {

        /**
         * Properties of a PendingAirdropValue.
         * @memberof proto
         * @interface IPendingAirdropValue
         * @property {number|Long|null} [amount] An amount to transfer for fungible/common tokens.<br/>
         * This is expressed in the smallest available units for that token
         * (i.e. 10<sup>-`decimals`</sup> whole tokens).
         * <p>
         * This amount SHALL be transferred from the sender to the receiver,
         * if claimed.<br/>
         * If the token is a fungible/common token, this value MUST be strictly
         * greater than `0`.<br/>
         * If the token is a non-fungible/unique token, this message SHOULD NOT
         * be set, and if set, this field MUST be `0`.
         */

        /**
         * Constructs a new PendingAirdropValue.
         * @memberof proto
         * @classdesc A single pending airdrop value.
         * 
         * This message SHALL record the airdrop amount for a
         * fungible/common token.<br/>
         * This message SHOULD be null for a non-fungible/unique token.<br/>
         * If a non-null `PendingAirdropValue` is set for a non-fungible/unique
         * token, the amount field MUST be `0`.
         * 
         * It is RECOMMENDED that implementations store pending airdrop information
         * as a key-value map from `PendingAirdropId` to `PendingAirdropValue`, with
         * a `null` value used for non-fungible pending airdrops.
         * @implements IPendingAirdropValue
         * @constructor
         * @param {proto.IPendingAirdropValue=} [properties] Properties to set
         */
        function PendingAirdropValue(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * An amount to transfer for fungible/common tokens.<br/>
         * This is expressed in the smallest available units for that token
         * (i.e. 10<sup>-`decimals`</sup> whole tokens).
         * <p>
         * This amount SHALL be transferred from the sender to the receiver,
         * if claimed.<br/>
         * If the token is a fungible/common token, this value MUST be strictly
         * greater than `0`.<br/>
         * If the token is a non-fungible/unique token, this message SHOULD NOT
         * be set, and if set, this field MUST be `0`.
         * @member {number|Long} amount
         * @memberof proto.PendingAirdropValue
         * @instance
         */
        PendingAirdropValue.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new PendingAirdropValue instance using the specified properties.
         * @function create
         * @memberof proto.PendingAirdropValue
         * @static
         * @param {proto.IPendingAirdropValue=} [properties] Properties to set
         * @returns {proto.PendingAirdropValue} PendingAirdropValue instance
         */
        PendingAirdropValue.create = function create(properties) {
            return new PendingAirdropValue(properties);
        };

        /**
         * Encodes the specified PendingAirdropValue message. Does not implicitly {@link proto.PendingAirdropValue.verify|verify} messages.
         * @function encode
         * @memberof proto.PendingAirdropValue
         * @static
         * @param {proto.IPendingAirdropValue} message PendingAirdropValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PendingAirdropValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.amount);
            return writer;
        };

        /**
         * Encodes the specified PendingAirdropValue message, length delimited. Does not implicitly {@link proto.PendingAirdropValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PendingAirdropValue
         * @static
         * @param {proto.IPendingAirdropValue} message PendingAirdropValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PendingAirdropValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PendingAirdropValue message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PendingAirdropValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PendingAirdropValue} PendingAirdropValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PendingAirdropValue.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PendingAirdropValue();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.amount = reader.uint64();
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
         * Decodes a PendingAirdropValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.PendingAirdropValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PendingAirdropValue} PendingAirdropValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PendingAirdropValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PendingAirdropValue message.
         * @function verify
         * @memberof proto.PendingAirdropValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PendingAirdropValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            return null;
        };

        /**
         * Creates a PendingAirdropValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.PendingAirdropValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.PendingAirdropValue} PendingAirdropValue
         */
        PendingAirdropValue.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.PendingAirdropValue)
                return object;
            let message = new $root.proto.PendingAirdropValue();
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a PendingAirdropValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.PendingAirdropValue
         * @static
         * @param {proto.PendingAirdropValue} message PendingAirdropValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PendingAirdropValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
            return object;
        };

        /**
         * Converts this PendingAirdropValue to JSON.
         * @function toJSON
         * @memberof proto.PendingAirdropValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PendingAirdropValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PendingAirdropValue
         * @function getTypeUrl
         * @memberof proto.PendingAirdropValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PendingAirdropValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.PendingAirdropValue";
        };

        return PendingAirdropValue;
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

    proto.TimestampSeconds = (function() {

        /**
         * Properties of a TimestampSeconds.
         * @memberof proto
         * @interface ITimestampSeconds
         * @property {number|Long|null} [seconds] The number of complete seconds since the start of the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the UNIX epoch with 0
         * at `1970-01-01T00:00:00.000Z`.<br/>
         * This value MUST be greater than 0.<br/>
         * This value SHOULD be strictly greater than `946684800`.
         */

        /**
         * Constructs a new TimestampSeconds.
         * @memberof proto
         * @classdesc An exact date and time, with a resolution of one second.
         * @implements ITimestampSeconds
         * @constructor
         * @param {proto.ITimestampSeconds=} [properties] Properties to set
         */
        function TimestampSeconds(properties) {
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
         * @memberof proto.TimestampSeconds
         * @instance
         */
        TimestampSeconds.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TimestampSeconds instance using the specified properties.
         * @function create
         * @memberof proto.TimestampSeconds
         * @static
         * @param {proto.ITimestampSeconds=} [properties] Properties to set
         * @returns {proto.TimestampSeconds} TimestampSeconds instance
         */
        TimestampSeconds.create = function create(properties) {
            return new TimestampSeconds(properties);
        };

        /**
         * Encodes the specified TimestampSeconds message. Does not implicitly {@link proto.TimestampSeconds.verify|verify} messages.
         * @function encode
         * @memberof proto.TimestampSeconds
         * @static
         * @param {proto.ITimestampSeconds} message TimestampSeconds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimestampSeconds.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
            return writer;
        };

        /**
         * Encodes the specified TimestampSeconds message, length delimited. Does not implicitly {@link proto.TimestampSeconds.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TimestampSeconds
         * @static
         * @param {proto.ITimestampSeconds} message TimestampSeconds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimestampSeconds.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimestampSeconds message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TimestampSeconds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TimestampSeconds} TimestampSeconds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimestampSeconds.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TimestampSeconds();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.seconds = reader.int64();
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
         * Decodes a TimestampSeconds message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TimestampSeconds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TimestampSeconds} TimestampSeconds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimestampSeconds.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimestampSeconds message.
         * @function verify
         * @memberof proto.TimestampSeconds
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimestampSeconds.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                    return "seconds: integer|Long expected";
            return null;
        };

        /**
         * Creates a TimestampSeconds message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TimestampSeconds
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TimestampSeconds} TimestampSeconds
         */
        TimestampSeconds.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TimestampSeconds)
                return object;
            let message = new $root.proto.TimestampSeconds();
            if (object.seconds != null)
                if ($util.Long)
                    (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                else if (typeof object.seconds === "string")
                    message.seconds = parseInt(object.seconds, 10);
                else if (typeof object.seconds === "number")
                    message.seconds = object.seconds;
                else if (typeof object.seconds === "object")
                    message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TimestampSeconds message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TimestampSeconds
         * @static
         * @param {proto.TimestampSeconds} message TimestampSeconds
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimestampSeconds.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seconds = options.longs === String ? "0" : 0;
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                if (typeof message.seconds === "number")
                    object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                else
                    object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
            return object;
        };

        /**
         * Converts this TimestampSeconds to JSON.
         * @function toJSON
         * @memberof proto.TimestampSeconds
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimestampSeconds.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TimestampSeconds
         * @function getTypeUrl
         * @memberof proto.TimestampSeconds
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TimestampSeconds.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TimestampSeconds";
        };

        return TimestampSeconds;
    })();

    /**
     * An enumeration of possible network freeze types.
     * 
     * Each enumerated value SHALL be associated to a single network freeze
     * scenario. Each freeze scenario defines the specific parameters
     * REQUIRED for that freeze.
     * @name proto.FreezeType
     * @enum {number}
     * @property {number} UNKNOWN_FREEZE_TYPE=0 An invalid freeze type.
     * <p>
     * The first value in a protobuf enum is a default value. This default
     * is RECOMMENDED to be an invalid value to aid in detecting unset fields.
     * @property {number} FREEZE_ONLY=1 Freeze the network, and take no further action.
     * <p>
     * The `start_time` field is REQUIRED, MUST be strictly later than the
     * consensus time when this transaction is handled, and SHOULD be between
     * `300` and `3600` seconds after the transaction identifier
     * `transactionValidStart` field.<br/>
     * The fields `update_file` and `file_hash` SHALL be ignored.<br/>
     * A `FREEZE_ONLY` transaction SHALL NOT perform any network
     * changes or upgrades.<br/>
     * After this freeze is processed manual intervention is REQUIRED
     * to restart the network.
     * @property {number} PREPARE_UPGRADE=2 This freeze type does not freeze the network, but begins
     * "preparation" to upgrade the network.
     * <p>
     * The fields `update_file` and `file_hash` are REQUIRED
     * and MUST be valid.<br/>
     * The `start_time` field SHALL be ignored.<br/>
     * A `PREPARE_UPGRADE` transaction SHALL NOT freeze the network or
     * interfere with general transaction processing.<br/>
     * If this freeze type is initiated after a `TELEMETRY_UPGRADE`, the
     * prepared telemetry upgrade SHALL be reset and all telemetry upgrade
     * artifacts in the filesystem SHALL be deleted.<br/>
     * At some point after this freeze type completes (dependent on the size
     * of the upgrade file), the network SHALL be prepared to complete
     * a software upgrade of all nodes.
     * @property {number} FREEZE_UPGRADE=3 Freeze the network to perform a software upgrade.
     * <p>
     * The `start_time` field is REQUIRED, MUST be strictly later than the
     * consensus time when this transaction is handled, and SHOULD be between
     * `300` and `3600` seconds after the transaction identifier
     * `transactionValidStart` field.<br/>
     * A software upgrade file MUST be prepared prior to this transaction.<br/>
     * After this transaction completes, the network SHALL initiate an
     * upgrade and restart of all nodes at the start time specified.
     * @property {number} FREEZE_ABORT=4 Abort a pending network freeze operation.
     * <p>
     * All fields SHALL be ignored for this freeze type.<br/>
     * This freeze type MAY be submitted after a `FREEZE_ONLY`,
     * `FREEZE_UPGRADE`, or `TELEMETRY_UPGRADE` is initiated.<br/>
     * This freeze type MUST be submitted and reach consensus
     * before the `start_time` designated for the current pending
     * freeze to be effective.<br/>
     * After this freeze type is processed, the upgrade file hash
     * and pending freeze start time stored in the network SHALL
     * be reset to default (empty) values.
     * @property {number} TELEMETRY_UPGRADE=5 Prepare an upgrade of auxiliary services and containers
     * providing telemetry/metrics.
     * <p>
     * The `start_time` field is REQUIRED, MUST be strictly later than the
     * consensus time when this transaction is handled, and SHOULD be between
     * `300` and `3600` seconds after the transaction identifier
     * `transactionValidStart` field.<br/>
     * The `update_file` field is REQUIRED and MUST be valid.<br/>
     * A `TELEMETRY_UPGRADE` transaction SHALL NOT freeze the network or
     * interfere with general transaction processing.<br/>
     * This freeze type MUST NOT be initiated between a `PREPARE_UPGRADE`
     * and `FREEZE_UPGRADE`. If this freeze type is initiated after a
     * `PREPARE_UPGRADE`, the prepared upgrade SHALL be reset and all software
     * upgrade artifacts in the filesystem SHALL be deleted.<br/>
     * At some point after this freeze type completes (dependent on the
     * size of the upgrade file), the network SHALL automatically upgrade
     * the telemetry/metrics services and containers as directed in
     * the specified telemetry upgrade file.
     * <blockquote> The condition that `start_time` is REQUIRED is an
     * historical anomaly and SHOULD change in a future release.</blockquote>
     */
    proto.FreezeType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_FREEZE_TYPE"] = 0;
        values[valuesById[1] = "FREEZE_ONLY"] = 1;
        values[valuesById[2] = "PREPARE_UPGRADE"] = 2;
        values[valuesById[3] = "FREEZE_UPGRADE"] = 3;
        values[valuesById[4] = "FREEZE_ABORT"] = 4;
        values[valuesById[5] = "TELEMETRY_UPGRADE"] = 5;
        return values;
    })();

    return proto;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.double();
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
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                let message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DoubleValue
             * @function getTypeUrl
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DoubleValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.DoubleValue";
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.float();
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
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                let message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FloatValue
             * @function getTypeUrl
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FloatValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FloatValue";
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int64();
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
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                let message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Int64Value
             * @function getTypeUrl
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Int64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Int64Value";
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint64();
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
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                let message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UInt64Value
             * @function getTypeUrl
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UInt64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UInt64Value";
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int32();
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
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                let message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Int32Value
             * @function getTypeUrl
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Int32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Int32Value";
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint32();
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
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                let message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UInt32Value
             * @function getTypeUrl
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UInt32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UInt32Value";
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.bool();
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
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                let message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BoolValue
             * @function getTypeUrl
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BoolValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.BoolValue";
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.string();
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
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                let message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StringValue
             * @function getTypeUrl
             * @memberof google.protobuf.StringValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StringValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.StringValue";
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.bytes();
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
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                let message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BytesValue
             * @function getTypeUrl
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BytesValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.BytesValue";
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
