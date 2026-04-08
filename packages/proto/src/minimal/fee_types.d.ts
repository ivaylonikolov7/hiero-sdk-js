import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of an ExchangeRate. */
    interface IExchangeRate {

        /** Denominator for a ratio of USD cents per HBAR. */
        hbarEquiv?: (number|null);

        /** Numerator for a ratio of USD cents per HBAR. */
        centEquiv?: (number|null);

        /** Expiration time stamp for this exchange rate. */
        expirationTime?: (proto.ITimestampSeconds|null);
    }

    /**
     * An exchange rate as a ratio of USD cents per HBAR.
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
     */
    class ExchangeRate implements IExchangeRate {

        /**
         * Constructs a new ExchangeRate.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IExchangeRate);

        /** Denominator for a ratio of USD cents per HBAR. */
        public hbarEquiv: number;

        /** Numerator for a ratio of USD cents per HBAR. */
        public centEquiv: number;

        /** Expiration time stamp for this exchange rate. */
        public expirationTime?: (proto.ITimestampSeconds|null);

        /**
         * Creates a new ExchangeRate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeRate instance
         */
        public static create(properties?: proto.IExchangeRate): proto.ExchangeRate;

        /**
         * Encodes the specified ExchangeRate message. Does not implicitly {@link proto.ExchangeRate.verify|verify} messages.
         * @param message ExchangeRate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IExchangeRate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExchangeRate message, length delimited. Does not implicitly {@link proto.ExchangeRate.verify|verify} messages.
         * @param message ExchangeRate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IExchangeRate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeRate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeRate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ExchangeRate;

        /**
         * Decodes an ExchangeRate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExchangeRate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ExchangeRate;

        /**
         * Verifies an ExchangeRate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExchangeRate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeRate
         */
        public static fromObject(object: { [k: string]: any }): proto.ExchangeRate;

        /**
         * Creates a plain object from an ExchangeRate message. Also converts values to other types if specified.
         * @param message ExchangeRate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ExchangeRate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeRate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExchangeRate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ExchangeRateSet. */
    interface IExchangeRateSet {

        /**
         * A current exchange rate.
         * <p>
         * When present in a receipt, this SHALL be the exchange rate used to
         * compute the fees for that transaction.
         */
        currentRate?: (proto.IExchangeRate|null);

        /**
         * A future exchange rate.
         * <p>
         * This exchange rate SHALL be applied after the current exchange
         * rate expires.
         */
        nextRate?: (proto.IExchangeRate|null);
    }

    /**
     * A set of two exchange rates.<br/>
     * The exchange rate for the network is stored and reported as a set of
     * two rates; current and next. This structure supports the network cleanly
     * switching between exchange rates when necessary. This also provides clear
     * notice to clients when the exchange rate will change and the exchange
     * rate that will be applied for the next time period.
     *
     * The difference in rate between `currentRate` and `nextRate` MUST NOT exceed
     * the configured maximum percentage change. This limit SHALL be a
     * network configuration value.
     */
    class ExchangeRateSet implements IExchangeRateSet {

        /**
         * Constructs a new ExchangeRateSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IExchangeRateSet);

        /**
         * A current exchange rate.
         * <p>
         * When present in a receipt, this SHALL be the exchange rate used to
         * compute the fees for that transaction.
         */
        public currentRate?: (proto.IExchangeRate|null);

        /**
         * A future exchange rate.
         * <p>
         * This exchange rate SHALL be applied after the current exchange
         * rate expires.
         */
        public nextRate?: (proto.IExchangeRate|null);

        /**
         * Creates a new ExchangeRateSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExchangeRateSet instance
         */
        public static create(properties?: proto.IExchangeRateSet): proto.ExchangeRateSet;

        /**
         * Encodes the specified ExchangeRateSet message. Does not implicitly {@link proto.ExchangeRateSet.verify|verify} messages.
         * @param message ExchangeRateSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IExchangeRateSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExchangeRateSet message, length delimited. Does not implicitly {@link proto.ExchangeRateSet.verify|verify} messages.
         * @param message ExchangeRateSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IExchangeRateSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExchangeRateSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExchangeRateSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ExchangeRateSet;

        /**
         * Decodes an ExchangeRateSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExchangeRateSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ExchangeRateSet;

        /**
         * Verifies an ExchangeRateSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExchangeRateSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExchangeRateSet
         */
        public static fromObject(object: { [k: string]: any }): proto.ExchangeRateSet;

        /**
         * Creates a plain object from an ExchangeRateSet message. Also converts values to other types if specified.
         * @param message ExchangeRateSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ExchangeRateSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExchangeRateSet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ExchangeRateSet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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

    /** Properties of a TimestampSeconds. */
    interface ITimestampSeconds {

        /**
         * The number of complete seconds since the start of the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the UNIX epoch with 0
         * at `1970-01-01T00:00:00.000Z`.<br/>
         * This value MUST be greater than 0.<br/>
         * This value SHOULD be strictly greater than `946684800`.
         */
        seconds?: (number|Long|null);
    }

    /** An exact date and time, with a resolution of one second. */
    class TimestampSeconds implements ITimestampSeconds {

        /**
         * Constructs a new TimestampSeconds.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITimestampSeconds);

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
         * Creates a new TimestampSeconds instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimestampSeconds instance
         */
        public static create(properties?: proto.ITimestampSeconds): proto.TimestampSeconds;

        /**
         * Encodes the specified TimestampSeconds message. Does not implicitly {@link proto.TimestampSeconds.verify|verify} messages.
         * @param message TimestampSeconds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITimestampSeconds, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimestampSeconds message, length delimited. Does not implicitly {@link proto.TimestampSeconds.verify|verify} messages.
         * @param message TimestampSeconds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITimestampSeconds, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimestampSeconds message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimestampSeconds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TimestampSeconds;

        /**
         * Decodes a TimestampSeconds message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimestampSeconds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TimestampSeconds;

        /**
         * Verifies a TimestampSeconds message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimestampSeconds message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimestampSeconds
         */
        public static fromObject(object: { [k: string]: any }): proto.TimestampSeconds;

        /**
         * Creates a plain object from a TimestampSeconds message. Also converts values to other types if specified.
         * @param message TimestampSeconds
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TimestampSeconds, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimestampSeconds to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TimestampSeconds
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
