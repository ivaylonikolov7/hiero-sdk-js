/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.hashgraph_fee_types || ($protobuf.roots.hashgraph_fee_types = {});

export const proto = $root.proto = (() => {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    const proto = {};

    proto.ExchangeRate = (function() {

        /**
         * Properties of an ExchangeRate.
         * @memberof proto
         * @interface IExchangeRate
         * @property {number|null} [hbarEquiv] Denominator for a ratio of USD cents per HBAR.
         * @property {number|null} [centEquiv] Numerator for a ratio of USD cents per HBAR.
         * @property {proto.ITimestampSeconds|null} [expirationTime] Expiration time stamp for this exchange rate.
         */

        /**
         * Constructs a new ExchangeRate.
         * @memberof proto
         * @classdesc An exchange rate as a ratio of USD cents per HBAR.
         * 
         * This ratio SHALL be used to convert tinycent (`10<sup>-8</sup>` USD cent)
         * to tinybar for fees and other purposes.<br/>
         * When applying an `ExchangeRate`, implementations SHOULD ensure input values
         * are `tinycent` and/or `tinybar` before applying the exchange ratio.<br/>
         * Exchange results MAY be converted to USD or HBAR via division if whole
         * unit values are required.
         * 
         * The ratio described here SHALL be assigned such that a value in `tinybar`
         * may be obtained with the following equation.
         * ```
         * amountInTinybar = (amountInTinycent * hbarEquiv) / centEquiv
         * ```
         * @implements IExchangeRate
         * @constructor
         * @param {proto.IExchangeRate=} [properties] Properties to set
         */
        function ExchangeRate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Denominator for a ratio of USD cents per HBAR.
         * @member {number} hbarEquiv
         * @memberof proto.ExchangeRate
         * @instance
         */
        ExchangeRate.prototype.hbarEquiv = 0;

        /**
         * Numerator for a ratio of USD cents per HBAR.
         * @member {number} centEquiv
         * @memberof proto.ExchangeRate
         * @instance
         */
        ExchangeRate.prototype.centEquiv = 0;

        /**
         * Expiration time stamp for this exchange rate.
         * @member {proto.ITimestampSeconds|null|undefined} expirationTime
         * @memberof proto.ExchangeRate
         * @instance
         */
        ExchangeRate.prototype.expirationTime = null;

        /**
         * Creates a new ExchangeRate instance using the specified properties.
         * @function create
         * @memberof proto.ExchangeRate
         * @static
         * @param {proto.IExchangeRate=} [properties] Properties to set
         * @returns {proto.ExchangeRate} ExchangeRate instance
         */
        ExchangeRate.create = function create(properties) {
            return new ExchangeRate(properties);
        };

        /**
         * Encodes the specified ExchangeRate message. Does not implicitly {@link proto.ExchangeRate.verify|verify} messages.
         * @function encode
         * @memberof proto.ExchangeRate
         * @static
         * @param {proto.IExchangeRate} message ExchangeRate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hbarEquiv != null && Object.hasOwnProperty.call(message, "hbarEquiv"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.hbarEquiv);
            if (message.centEquiv != null && Object.hasOwnProperty.call(message, "centEquiv"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.centEquiv);
            if (message.expirationTime != null && Object.hasOwnProperty.call(message, "expirationTime"))
                $root.proto.TimestampSeconds.encode(message.expirationTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ExchangeRate message, length delimited. Does not implicitly {@link proto.ExchangeRate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ExchangeRate
         * @static
         * @param {proto.IExchangeRate} message ExchangeRate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExchangeRate message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ExchangeRate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ExchangeRate} ExchangeRate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRate.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ExchangeRate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.hbarEquiv = reader.int32();
                        break;
                    }
                case 2: {
                        message.centEquiv = reader.int32();
                        break;
                    }
                case 3: {
                        message.expirationTime = $root.proto.TimestampSeconds.decode(reader, reader.uint32());
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
         * Decodes an ExchangeRate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ExchangeRate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ExchangeRate} ExchangeRate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExchangeRate message.
         * @function verify
         * @memberof proto.ExchangeRate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExchangeRate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hbarEquiv != null && message.hasOwnProperty("hbarEquiv"))
                if (!$util.isInteger(message.hbarEquiv))
                    return "hbarEquiv: integer expected";
            if (message.centEquiv != null && message.hasOwnProperty("centEquiv"))
                if (!$util.isInteger(message.centEquiv))
                    return "centEquiv: integer expected";
            if (message.expirationTime != null && message.hasOwnProperty("expirationTime")) {
                let error = $root.proto.TimestampSeconds.verify(message.expirationTime);
                if (error)
                    return "expirationTime." + error;
            }
            return null;
        };

        /**
         * Creates an ExchangeRate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ExchangeRate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ExchangeRate} ExchangeRate
         */
        ExchangeRate.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ExchangeRate)
                return object;
            let message = new $root.proto.ExchangeRate();
            if (object.hbarEquiv != null)
                message.hbarEquiv = object.hbarEquiv | 0;
            if (object.centEquiv != null)
                message.centEquiv = object.centEquiv | 0;
            if (object.expirationTime != null) {
                if (typeof object.expirationTime !== "object")
                    throw TypeError(".proto.ExchangeRate.expirationTime: object expected");
                message.expirationTime = $root.proto.TimestampSeconds.fromObject(object.expirationTime);
            }
            return message;
        };

        /**
         * Creates a plain object from an ExchangeRate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ExchangeRate
         * @static
         * @param {proto.ExchangeRate} message ExchangeRate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeRate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.hbarEquiv = 0;
                object.centEquiv = 0;
                object.expirationTime = null;
            }
            if (message.hbarEquiv != null && message.hasOwnProperty("hbarEquiv"))
                object.hbarEquiv = message.hbarEquiv;
            if (message.centEquiv != null && message.hasOwnProperty("centEquiv"))
                object.centEquiv = message.centEquiv;
            if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                object.expirationTime = $root.proto.TimestampSeconds.toObject(message.expirationTime, options);
            return object;
        };

        /**
         * Converts this ExchangeRate to JSON.
         * @function toJSON
         * @memberof proto.ExchangeRate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeRate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExchangeRate
         * @function getTypeUrl
         * @memberof proto.ExchangeRate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExchangeRate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ExchangeRate";
        };

        return ExchangeRate;
    })();

    proto.ExchangeRateSet = (function() {

        /**
         * Properties of an ExchangeRateSet.
         * @memberof proto
         * @interface IExchangeRateSet
         * @property {proto.IExchangeRate|null} [currentRate] A current exchange rate.
         * <p>
         * When present in a receipt, this SHALL be the exchange rate used to
         * compute the fees for that transaction.
         * @property {proto.IExchangeRate|null} [nextRate] A future exchange rate.
         * <p>
         * This exchange rate SHALL be applied after the current exchange
         * rate expires.
         */

        /**
         * Constructs a new ExchangeRateSet.
         * @memberof proto
         * @classdesc A set of two exchange rates.<br/>
         * The exchange rate for the network is stored and reported as a set of
         * two rates; current and next. This structure supports the network cleanly
         * switching between exchange rates when necessary. This also provides clear
         * notice to clients when the exchange rate will change and the exchange
         * rate that will be applied for the next time period.
         * 
         * The difference in rate between `currentRate` and `nextRate` MUST NOT exceed
         * the configured maximum percentage change. This limit SHALL be a
         * network configuration value.
         * @implements IExchangeRateSet
         * @constructor
         * @param {proto.IExchangeRateSet=} [properties] Properties to set
         */
        function ExchangeRateSet(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A current exchange rate.
         * <p>
         * When present in a receipt, this SHALL be the exchange rate used to
         * compute the fees for that transaction.
         * @member {proto.IExchangeRate|null|undefined} currentRate
         * @memberof proto.ExchangeRateSet
         * @instance
         */
        ExchangeRateSet.prototype.currentRate = null;

        /**
         * A future exchange rate.
         * <p>
         * This exchange rate SHALL be applied after the current exchange
         * rate expires.
         * @member {proto.IExchangeRate|null|undefined} nextRate
         * @memberof proto.ExchangeRateSet
         * @instance
         */
        ExchangeRateSet.prototype.nextRate = null;

        /**
         * Creates a new ExchangeRateSet instance using the specified properties.
         * @function create
         * @memberof proto.ExchangeRateSet
         * @static
         * @param {proto.IExchangeRateSet=} [properties] Properties to set
         * @returns {proto.ExchangeRateSet} ExchangeRateSet instance
         */
        ExchangeRateSet.create = function create(properties) {
            return new ExchangeRateSet(properties);
        };

        /**
         * Encodes the specified ExchangeRateSet message. Does not implicitly {@link proto.ExchangeRateSet.verify|verify} messages.
         * @function encode
         * @memberof proto.ExchangeRateSet
         * @static
         * @param {proto.IExchangeRateSet} message ExchangeRateSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRateSet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currentRate != null && Object.hasOwnProperty.call(message, "currentRate"))
                $root.proto.ExchangeRate.encode(message.currentRate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.nextRate != null && Object.hasOwnProperty.call(message, "nextRate"))
                $root.proto.ExchangeRate.encode(message.nextRate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ExchangeRateSet message, length delimited. Does not implicitly {@link proto.ExchangeRateSet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ExchangeRateSet
         * @static
         * @param {proto.IExchangeRateSet} message ExchangeRateSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExchangeRateSet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExchangeRateSet message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ExchangeRateSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ExchangeRateSet} ExchangeRateSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRateSet.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ExchangeRateSet();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.currentRate = $root.proto.ExchangeRate.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.nextRate = $root.proto.ExchangeRate.decode(reader, reader.uint32());
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
         * Decodes an ExchangeRateSet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ExchangeRateSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ExchangeRateSet} ExchangeRateSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExchangeRateSet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExchangeRateSet message.
         * @function verify
         * @memberof proto.ExchangeRateSet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExchangeRateSet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currentRate != null && message.hasOwnProperty("currentRate")) {
                let error = $root.proto.ExchangeRate.verify(message.currentRate);
                if (error)
                    return "currentRate." + error;
            }
            if (message.nextRate != null && message.hasOwnProperty("nextRate")) {
                let error = $root.proto.ExchangeRate.verify(message.nextRate);
                if (error)
                    return "nextRate." + error;
            }
            return null;
        };

        /**
         * Creates an ExchangeRateSet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ExchangeRateSet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ExchangeRateSet} ExchangeRateSet
         */
        ExchangeRateSet.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ExchangeRateSet)
                return object;
            let message = new $root.proto.ExchangeRateSet();
            if (object.currentRate != null) {
                if (typeof object.currentRate !== "object")
                    throw TypeError(".proto.ExchangeRateSet.currentRate: object expected");
                message.currentRate = $root.proto.ExchangeRate.fromObject(object.currentRate);
            }
            if (object.nextRate != null) {
                if (typeof object.nextRate !== "object")
                    throw TypeError(".proto.ExchangeRateSet.nextRate: object expected");
                message.nextRate = $root.proto.ExchangeRate.fromObject(object.nextRate);
            }
            return message;
        };

        /**
         * Creates a plain object from an ExchangeRateSet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ExchangeRateSet
         * @static
         * @param {proto.ExchangeRateSet} message ExchangeRateSet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExchangeRateSet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.currentRate = null;
                object.nextRate = null;
            }
            if (message.currentRate != null && message.hasOwnProperty("currentRate"))
                object.currentRate = $root.proto.ExchangeRate.toObject(message.currentRate, options);
            if (message.nextRate != null && message.hasOwnProperty("nextRate"))
                object.nextRate = $root.proto.ExchangeRate.toObject(message.nextRate, options);
            return object;
        };

        /**
         * Converts this ExchangeRateSet to JSON.
         * @function toJSON
         * @memberof proto.ExchangeRateSet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExchangeRateSet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExchangeRateSet
         * @function getTypeUrl
         * @memberof proto.ExchangeRateSet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExchangeRateSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ExchangeRateSet";
        };

        return ExchangeRateSet;
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

    return proto;
})();

export { $root as default };
