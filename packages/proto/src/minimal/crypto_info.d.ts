import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of a CryptoGetInfoResponse. */
    interface ICryptoGetInfoResponse {

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        header?: (proto.IResponseHeader|null);

        /**
         * Details of the account.
         * <p>
         * A state proof MAY be generated for this field.
         */
        accountInfo?: (proto.CryptoGetInfoResponse.IAccountInfo|null);
    }

    /** Response when the client sends the node CryptoGetInfoQuery */
    class CryptoGetInfoResponse implements ICryptoGetInfoResponse {

        /**
         * Constructs a new CryptoGetInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICryptoGetInfoResponse);

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        public header?: (proto.IResponseHeader|null);

        /**
         * Details of the account.
         * <p>
         * A state proof MAY be generated for this field.
         */
        public accountInfo?: (proto.CryptoGetInfoResponse.IAccountInfo|null);

        /**
         * Creates a new CryptoGetInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CryptoGetInfoResponse instance
         */
        public static create(properties?: proto.ICryptoGetInfoResponse): proto.CryptoGetInfoResponse;

        /**
         * Encodes the specified CryptoGetInfoResponse message. Does not implicitly {@link proto.CryptoGetInfoResponse.verify|verify} messages.
         * @param message CryptoGetInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICryptoGetInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CryptoGetInfoResponse message, length delimited. Does not implicitly {@link proto.CryptoGetInfoResponse.verify|verify} messages.
         * @param message CryptoGetInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICryptoGetInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CryptoGetInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CryptoGetInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CryptoGetInfoResponse;

        /**
         * Decodes a CryptoGetInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CryptoGetInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CryptoGetInfoResponse;

        /**
         * Verifies a CryptoGetInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CryptoGetInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CryptoGetInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.CryptoGetInfoResponse;

        /**
         * Creates a plain object from a CryptoGetInfoResponse message. Also converts values to other types if specified.
         * @param message CryptoGetInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CryptoGetInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CryptoGetInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CryptoGetInfoResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CryptoGetInfoResponse {

        /** Properties of an AccountInfo. */
        interface IAccountInfo {

            /**
             * a unique identifier for this account.
             * <p>
             * An account identifier, when assigned to this field, SHALL be of
             * the form `shard.realm.number`.
             */
            accountID?: (proto.IAccountID|null);

            /**
             * A Solidity ID.
             * <p>
             * This SHALL be populated if this account is a smart contract, and
             * SHALL NOT be populated otherwise.<br/>
             * This SHALL be formatted as a string according to Solidity ID
             * standards.
             */
            contractAccountID?: (string|null);

            /**
             * A boolean indicating that this account is deleted.
             * <p>
             * Any transaction involving a deleted account SHALL fail.
             */
            deleted?: (boolean|null);

            /**
             * Replaced by StakingInfo.<br/>
             * ID of the account to which this account is staking its balances. If
             * this account is not currently staking its balances, then this field,
             * if set, SHALL be the sentinel value of `0.0.0`.
             */
            proxyAccountID?: (proto.IAccountID|null);

            /**
             * Replaced by StakingInfo.<br/>
             * The total amount of tinybar proxy staked to this account.
             */
            proxyReceived?: (number|Long|null);

            /**
             * The key to be used to sign transactions from this account, if any.
             * <p>
             * This key SHALL NOT be set for hollow accounts until the account
             * is finalized.<br/>
             * This key SHALL be set on all other accounts, except for certain
             * immutable accounts (0.0.800 and 0.0.801) necessary for network
             * function and otherwise secured by the governing council.
             */
            key?: (proto.IKey|null);

            /**
             * The HBAR balance of this account, in tinybar (10<sup>-8</sup> HBAR).
             * <p>
             * This value SHALL always be a whole number.
             */
            balance?: (number|Long|null);

            /**
             * Obsolete and unused.<br/>
             * The threshold amount, in tinybars, at which a record was created for
             * any transaction that decreased the balance of this account.
             */
            generateSendRecordThreshold?: (number|Long|null);

            /**
             * Obsolete and unused.<br/>
             * The threshold amount, in tinybars, at which a record was created for
             * any transaction that increased the balance of this account.
             */
            generateReceiveRecordThreshold?: (number|Long|null);

            /**
             * A boolean indicating that the account requires a receiver signature
             * for inbound token transfer transactions.
             * <p>
             * If this value is `true` then a transaction to transfer tokens to this
             * account SHALL NOT succeed unless this account has signed the
             * transfer transaction.
             */
            receiverSigRequired?: (boolean|null);

            /**
             * The current expiration time for this account.
             * <p>
             * This account SHALL be due standard renewal fees when the network
             * consensus time exceeds this time.<br/>
             * If rent and expiration are enabled for the network, and automatic
             * renewal is enabled for this account, renewal fees SHALL be charged
             * after this time, and, if charged, the expiration time SHALL be
             * extended for another renewal period.<br/>
             * This account MAY be expired and removed from state at any point
             * after this time if not renewed.<br/>
             * An account holder MAY extend this time by submitting an account
             * update transaction to modify expiration time, subject to the current
             * maximum expiration time for the network.
             */
            expirationTime?: (proto.ITimestamp|null);

            /**
             * A duration to extend this account's expiration.
             * <p>
             * The network SHALL extend the account's expiration by this
             * duration, if funds are available, upon automatic renewal.<br/>
             * This SHALL NOT apply if the account is already deleted
             * upon expiration.<br/>
             * If this is not provided in an allowed range on account creation, the
             * transaction SHALL fail with INVALID_AUTO_RENEWAL_PERIOD. The default
             * values for the minimum period and maximum period are currently
             * 30 days and 90 days, respectively.
             */
            autoRenewPeriod?: (proto.IDuration|null);

            /**
             * All of the livehashes attached to the account (each of which is a
             * hash along with the keys that authorized it and can delete it)
             */
            liveHashes?: (proto.ILiveHash[]|null);

            /**
             * As of `HIP-367`, which enabled unlimited token associations, the
             * potential scale for this value requires that users consult a mirror
             * node for this information.
             */
            tokenRelationships?: (proto.ITokenRelationship[]|null);

            /**
             * A short description of this account.
             * <p>
             * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
             * (default 100) bytes when encoded as UTF-8.
             */
            memo?: (string|null);

            /** The total number of non-fungible/unique tokens owned by this account. */
            ownedNfts?: (number|Long|null);

            /**
             * The maximum number of tokens that can be auto-associated with the
             * account.
             * <p>
             * If this is less than or equal to `used_auto_associations` (or 0),
             * then this account MUST manually associate with a token before
             * transacting in that token.<br/>
             * Following HIP-904 This value may also be `-1` to indicate no
             * limit.<br/>
             * This value MUST NOT be less than `-1`.
             */
            maxAutomaticTokenAssociations?: (number|null);

            /**
             * An account alias.<br/>
             * This is a value used in some contexts to reference an account when
             * the tripartite account identifier is not available.
             * <p>
             * This field, when set to a non-default value, is immutable and
             * SHALL NOT be changed.
             */
            alias?: (Uint8Array|null);

            /**
             * The ledger ID of the network that generated this response.
             * <p>
             * This value SHALL identify the distributed ledger that responded to
             * this query.
             */
            ledgerId?: (Uint8Array|null);

            /** The ethereum transaction nonce associated with this account. */
            ethereumNonce?: (number|Long|null);

            /** Staking information for this account. */
            stakingInfo?: (proto.IStakingInfo|null);
        }

        /**
         * Information describing A single Account in the Hedera distributed ledger.
         *
         * #### Attributes
         * Each Account may have a unique three-part identifier, a Key, and one or
         * more token balances. Accounts also have an alias, which has multiple
         * forms, and may be set automatically. Several additional items are
         * associated with the Account to enable full functionality.
         *
         * #### Expiration
         * Accounts, as most items in the network, have an expiration time, recorded
         * as a `Timestamp`, and must be "renewed" for a small fee at expiration.
         * This helps to reduce the amount of inactive accounts retained in state.
         * Another account may be designated to pay any renewal fees and
         * automatically renew the account for (by default) 30-90 days at a time as
         * a means to optionally ensure important accounts remain active.
         *
         * ### Staking
         * Accounts may participate in securing the network by "staking" the account
         * balances to a particular network node, and receive a portion of network
         * fees as a reward. An account may optionally decline these rewards but
         * still stake its balances.
         *
         * #### Transfer Restrictions
         * An account may optionally require that inbound transfer transactions be
         * signed by that account as receiver (in addition to any other signatures
         * required, including sender).
         */
        class AccountInfo implements IAccountInfo {

            /**
             * Constructs a new AccountInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.CryptoGetInfoResponse.IAccountInfo);

            /**
             * a unique identifier for this account.
             * <p>
             * An account identifier, when assigned to this field, SHALL be of
             * the form `shard.realm.number`.
             */
            public accountID?: (proto.IAccountID|null);

            /**
             * A Solidity ID.
             * <p>
             * This SHALL be populated if this account is a smart contract, and
             * SHALL NOT be populated otherwise.<br/>
             * This SHALL be formatted as a string according to Solidity ID
             * standards.
             */
            public contractAccountID: string;

            /**
             * A boolean indicating that this account is deleted.
             * <p>
             * Any transaction involving a deleted account SHALL fail.
             */
            public deleted: boolean;

            /**
             * Replaced by StakingInfo.<br/>
             * ID of the account to which this account is staking its balances. If
             * this account is not currently staking its balances, then this field,
             * if set, SHALL be the sentinel value of `0.0.0`.
             */
            public proxyAccountID?: (proto.IAccountID|null);

            /**
             * Replaced by StakingInfo.<br/>
             * The total amount of tinybar proxy staked to this account.
             */
            public proxyReceived: (number|Long);

            /**
             * The key to be used to sign transactions from this account, if any.
             * <p>
             * This key SHALL NOT be set for hollow accounts until the account
             * is finalized.<br/>
             * This key SHALL be set on all other accounts, except for certain
             * immutable accounts (0.0.800 and 0.0.801) necessary for network
             * function and otherwise secured by the governing council.
             */
            public key?: (proto.IKey|null);

            /**
             * The HBAR balance of this account, in tinybar (10<sup>-8</sup> HBAR).
             * <p>
             * This value SHALL always be a whole number.
             */
            public balance: (number|Long);

            /**
             * Obsolete and unused.<br/>
             * The threshold amount, in tinybars, at which a record was created for
             * any transaction that decreased the balance of this account.
             */
            public generateSendRecordThreshold: (number|Long);

            /**
             * Obsolete and unused.<br/>
             * The threshold amount, in tinybars, at which a record was created for
             * any transaction that increased the balance of this account.
             */
            public generateReceiveRecordThreshold: (number|Long);

            /**
             * A boolean indicating that the account requires a receiver signature
             * for inbound token transfer transactions.
             * <p>
             * If this value is `true` then a transaction to transfer tokens to this
             * account SHALL NOT succeed unless this account has signed the
             * transfer transaction.
             */
            public receiverSigRequired: boolean;

            /**
             * The current expiration time for this account.
             * <p>
             * This account SHALL be due standard renewal fees when the network
             * consensus time exceeds this time.<br/>
             * If rent and expiration are enabled for the network, and automatic
             * renewal is enabled for this account, renewal fees SHALL be charged
             * after this time, and, if charged, the expiration time SHALL be
             * extended for another renewal period.<br/>
             * This account MAY be expired and removed from state at any point
             * after this time if not renewed.<br/>
             * An account holder MAY extend this time by submitting an account
             * update transaction to modify expiration time, subject to the current
             * maximum expiration time for the network.
             */
            public expirationTime?: (proto.ITimestamp|null);

            /**
             * A duration to extend this account's expiration.
             * <p>
             * The network SHALL extend the account's expiration by this
             * duration, if funds are available, upon automatic renewal.<br/>
             * This SHALL NOT apply if the account is already deleted
             * upon expiration.<br/>
             * If this is not provided in an allowed range on account creation, the
             * transaction SHALL fail with INVALID_AUTO_RENEWAL_PERIOD. The default
             * values for the minimum period and maximum period are currently
             * 30 days and 90 days, respectively.
             */
            public autoRenewPeriod?: (proto.IDuration|null);

            /**
             * All of the livehashes attached to the account (each of which is a
             * hash along with the keys that authorized it and can delete it)
             */
            public liveHashes: proto.ILiveHash[];

            /**
             * As of `HIP-367`, which enabled unlimited token associations, the
             * potential scale for this value requires that users consult a mirror
             * node for this information.
             */
            public tokenRelationships: proto.ITokenRelationship[];

            /**
             * A short description of this account.
             * <p>
             * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
             * (default 100) bytes when encoded as UTF-8.
             */
            public memo: string;

            /** The total number of non-fungible/unique tokens owned by this account. */
            public ownedNfts: (number|Long);

            /**
             * The maximum number of tokens that can be auto-associated with the
             * account.
             * <p>
             * If this is less than or equal to `used_auto_associations` (or 0),
             * then this account MUST manually associate with a token before
             * transacting in that token.<br/>
             * Following HIP-904 This value may also be `-1` to indicate no
             * limit.<br/>
             * This value MUST NOT be less than `-1`.
             */
            public maxAutomaticTokenAssociations: number;

            /**
             * An account alias.<br/>
             * This is a value used in some contexts to reference an account when
             * the tripartite account identifier is not available.
             * <p>
             * This field, when set to a non-default value, is immutable and
             * SHALL NOT be changed.
             */
            public alias: Uint8Array;

            /**
             * The ledger ID of the network that generated this response.
             * <p>
             * This value SHALL identify the distributed ledger that responded to
             * this query.
             */
            public ledgerId: Uint8Array;

            /** The ethereum transaction nonce associated with this account. */
            public ethereumNonce: (number|Long);

            /** Staking information for this account. */
            public stakingInfo?: (proto.IStakingInfo|null);

            /**
             * Creates a new AccountInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AccountInfo instance
             */
            public static create(properties?: proto.CryptoGetInfoResponse.IAccountInfo): proto.CryptoGetInfoResponse.AccountInfo;

            /**
             * Encodes the specified AccountInfo message. Does not implicitly {@link proto.CryptoGetInfoResponse.AccountInfo.verify|verify} messages.
             * @param message AccountInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.CryptoGetInfoResponse.IAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AccountInfo message, length delimited. Does not implicitly {@link proto.CryptoGetInfoResponse.AccountInfo.verify|verify} messages.
             * @param message AccountInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.CryptoGetInfoResponse.IAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AccountInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CryptoGetInfoResponse.AccountInfo;

            /**
             * Decodes an AccountInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CryptoGetInfoResponse.AccountInfo;

            /**
             * Verifies an AccountInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AccountInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AccountInfo
             */
            public static fromObject(object: { [k: string]: any }): proto.CryptoGetInfoResponse.AccountInfo;

            /**
             * Creates a plain object from an AccountInfo message. Also converts values to other types if specified.
             * @param message AccountInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.CryptoGetInfoResponse.AccountInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AccountInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AccountInfo
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

    /** Properties of a Duration. */
    interface IDuration {

        /** The number of seconds for this duration. */
        seconds?: (number|Long|null);
    }

    /**
     * A length of time in seconds.
     *
     * It is RECOMMENDED that this message be used whenever an amount of time,
     * rather than a specific point in time, is needed.
     */
    class Duration implements IDuration {

        /**
         * Constructs a new Duration.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IDuration);

        /** The number of seconds for this duration. */
        public seconds: (number|Long);

        /**
         * Creates a new Duration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Duration instance
         */
        public static create(properties?: proto.IDuration): proto.Duration;

        /**
         * Encodes the specified Duration message. Does not implicitly {@link proto.Duration.verify|verify} messages.
         * @param message Duration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Duration message, length delimited. Does not implicitly {@link proto.Duration.verify|verify} messages.
         * @param message Duration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Duration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Duration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Duration;

        /**
         * Decodes a Duration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Duration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Duration;

        /**
         * Verifies a Duration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Duration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Duration
         */
        public static fromObject(object: { [k: string]: any }): proto.Duration;

        /**
         * Creates a plain object from a Duration message. Also converts values to other types if specified.
         * @param message Duration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Duration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Duration
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenID. */
    interface ITokenID {

        /** A whole number shard identifier. */
        shardNum?: (number|Long|null);

        /** A whole number realm identifier. */
        realmNum?: (number|Long|null);

        /** A whole number token identifier. */
        tokenNum?: (number|Long|null);
    }

    /**
     * Unique identifier for a token.<br/>
     * As with all entity identifiers within the network, a token identifier
     * consists of a combination of shard number, realm number, and entity number.
     * Each of these numbers is unique within its scope (shard > realm > entity).
     */
    class TokenID implements ITokenID {

        /**
         * Constructs a new TokenID.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITokenID);

        /** A whole number shard identifier. */
        public shardNum: (number|Long);

        /** A whole number realm identifier. */
        public realmNum: (number|Long);

        /** A whole number token identifier. */
        public tokenNum: (number|Long);

        /**
         * Creates a new TokenID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenID instance
         */
        public static create(properties?: proto.ITokenID): proto.TokenID;

        /**
         * Encodes the specified TokenID message. Does not implicitly {@link proto.TokenID.verify|verify} messages.
         * @param message TokenID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITokenID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenID message, length delimited. Does not implicitly {@link proto.TokenID.verify|verify} messages.
         * @param message TokenID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITokenID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TokenID;

        /**
         * Decodes a TokenID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TokenID;

        /**
         * Verifies a TokenID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenID
         */
        public static fromObject(object: { [k: string]: any }): proto.TokenID;

        /**
         * Creates a plain object from a TokenID message. Also converts values to other types if specified.
         * @param message TokenID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TokenID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenID
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountID. */
    interface IAccountID {

        /** A whole number shard identifier. */
        shardNum?: (number|Long|null);

        /** A whole number realm identifier. */
        realmNum?: (number|Long|null);

        /**
         * A whole number account number, unique within its realm and shard.
         * <p>
         * For any AccountID fields in the query response, transaction records,
         * transaction receipts, or block stream `accountNum` MUST be used.
         */
        accountNum?: (number|Long|null);

        /**
         * An alias value.<br/>
         * Alias is a value used in some contexts to refer to an account when
         * account number is not available, and may be an alias public key, or
         * an EVM address.
         */
        alias?: (Uint8Array|null);
    }

    /**
     * A unique identifier for an Hedera account.
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
     */
    class AccountID implements IAccountID {

        /**
         * Constructs a new AccountID.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAccountID);

        /** A whole number shard identifier. */
        public shardNum: (number|Long);

        /** A whole number realm identifier. */
        public realmNum: (number|Long);

        /**
         * A whole number account number, unique within its realm and shard.
         * <p>
         * For any AccountID fields in the query response, transaction records,
         * transaction receipts, or block stream `accountNum` MUST be used.
         */
        public accountNum?: (number|Long|null);

        /**
         * An alias value.<br/>
         * Alias is a value used in some contexts to refer to an account when
         * account number is not available, and may be an alias public key, or
         * an EVM address.
         */
        public alias?: (Uint8Array|null);

        /** AccountID account. */
        public account?: ("accountNum"|"alias");

        /**
         * Creates a new AccountID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountID instance
         */
        public static create(properties?: proto.IAccountID): proto.AccountID;

        /**
         * Encodes the specified AccountID message. Does not implicitly {@link proto.AccountID.verify|verify} messages.
         * @param message AccountID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAccountID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountID message, length delimited. Does not implicitly {@link proto.AccountID.verify|verify} messages.
         * @param message AccountID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAccountID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AccountID;

        /**
         * Decodes an AccountID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AccountID;

        /**
         * Verifies an AccountID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountID
         */
        public static fromObject(object: { [k: string]: any }): proto.AccountID;

        /**
         * Creates a plain object from an AccountID message. Also converts values to other types if specified.
         * @param message AccountID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AccountID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountID
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

    /**
     * Possible token freeze status values.
     *
     * This is returned by `TokenGetInfoQuery` or `CryptoGetInfoResponse`
     * in `TokenRelationship`.
     */
    enum TokenFreezeStatus {
        FreezeNotApplicable = 0,
        Frozen = 1,
        Unfrozen = 2
    }

    /**
     * Possible token "KYC" status values.
     *
     * This is returned by `TokenGetInfoQuery` or `CryptoGetInfoResponse`
     * in `TokenRelationship`.
     */
    enum TokenKycStatus {
        KycNotApplicable = 0,
        Granted = 1,
        Revoked = 2
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

    /** Properties of a TokenRelationship. */
    interface ITokenRelationship {

        /**
         * A token identifier.
         * <p>
         * This MUST match an existing token that is not deleted.
         */
        tokenId?: (proto.ITokenID|null);

        /**
         * A token symbol.
         * <p>
         * This MUST match an existing token that is not deleted.<br/>
         * This MUST match the value for the token identified in `tokenId`.
         */
        symbol?: (string|null);

        /**
         * An account balance for this token.
         * <p>
         * For fungible/common tokens this SHALL be the balance that the
         * account holds of that token. The value is provided as an integer amount
         * of the smallest unit of the token (i.e. 10<sup>`-decimals`</sup> whole
         * tokens).<br/>
         * For non-fungible/unique tokens this SHALL be the whole number of
         * unique tokens held by the account for this token type.
         */
        balance?: (number|Long|null);

        /**
         * A KYC status for the account with respect to this token.
         * <p>
         * This may be `KycNotApplicable`, `Granted` or `Revoked` and, if KYC is
         * not supported for this token (e.g. the `kyc_key` of the token is not
         * set), this SHALL be `KycNotApplicable`.
         */
        kycStatus?: (proto.TokenKycStatus|null);

        /**
         * A Freeze status for the account with respect to this token.
         * <p>
         * This value SHALL be one of `FreezeNotApplicable`, `Frozen`
         * or `Unfrozen`.<br/>
         * If the token cannot freeze account assets (e.g. the `freeze_key` of the
         * token is not set), this SHALL be `FreezeNotApplicable`.
         */
        freezeStatus?: (proto.TokenFreezeStatus|null);

        /**
         * A maximum "precision" for this token.
         * <p>
         * This value MUST match the `decimals` field of the token identified in
         * the `tokenId` field.<br/>
         * A single whole token SHALL be divided into at most
         * 10<sup>`decimals`</sup> sub-units.
         */
        decimals?: (number|null);

        /**
         * An automatic association flag.
         * <p>
         * This SHALL be set if the relationship was created implicitly
         * (automatically).<br/>
         * This SHALL be unset if the relationship was created explicitly
         * (manually) via a `TokenAssociate` transaction.
         */
        automaticAssociation?: (boolean|null);
    }

    /**
     * An Hedera Token Service token relationship. A token relationship describes
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
     */
    class TokenRelationship implements ITokenRelationship {

        /**
         * Constructs a new TokenRelationship.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITokenRelationship);

        /**
         * A token identifier.
         * <p>
         * This MUST match an existing token that is not deleted.
         */
        public tokenId?: (proto.ITokenID|null);

        /**
         * A token symbol.
         * <p>
         * This MUST match an existing token that is not deleted.<br/>
         * This MUST match the value for the token identified in `tokenId`.
         */
        public symbol: string;

        /**
         * An account balance for this token.
         * <p>
         * For fungible/common tokens this SHALL be the balance that the
         * account holds of that token. The value is provided as an integer amount
         * of the smallest unit of the token (i.e. 10<sup>`-decimals`</sup> whole
         * tokens).<br/>
         * For non-fungible/unique tokens this SHALL be the whole number of
         * unique tokens held by the account for this token type.
         */
        public balance: (number|Long);

        /**
         * A KYC status for the account with respect to this token.
         * <p>
         * This may be `KycNotApplicable`, `Granted` or `Revoked` and, if KYC is
         * not supported for this token (e.g. the `kyc_key` of the token is not
         * set), this SHALL be `KycNotApplicable`.
         */
        public kycStatus: proto.TokenKycStatus;

        /**
         * A Freeze status for the account with respect to this token.
         * <p>
         * This value SHALL be one of `FreezeNotApplicable`, `Frozen`
         * or `Unfrozen`.<br/>
         * If the token cannot freeze account assets (e.g. the `freeze_key` of the
         * token is not set), this SHALL be `FreezeNotApplicable`.
         */
        public freezeStatus: proto.TokenFreezeStatus;

        /**
         * A maximum "precision" for this token.
         * <p>
         * This value MUST match the `decimals` field of the token identified in
         * the `tokenId` field.<br/>
         * A single whole token SHALL be divided into at most
         * 10<sup>`decimals`</sup> sub-units.
         */
        public decimals: number;

        /**
         * An automatic association flag.
         * <p>
         * This SHALL be set if the relationship was created implicitly
         * (automatically).<br/>
         * This SHALL be unset if the relationship was created explicitly
         * (manually) via a `TokenAssociate` transaction.
         */
        public automaticAssociation: boolean;

        /**
         * Creates a new TokenRelationship instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenRelationship instance
         */
        public static create(properties?: proto.ITokenRelationship): proto.TokenRelationship;

        /**
         * Encodes the specified TokenRelationship message. Does not implicitly {@link proto.TokenRelationship.verify|verify} messages.
         * @param message TokenRelationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITokenRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenRelationship message, length delimited. Does not implicitly {@link proto.TokenRelationship.verify|verify} messages.
         * @param message TokenRelationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITokenRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenRelationship message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TokenRelationship;

        /**
         * Decodes a TokenRelationship message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TokenRelationship;

        /**
         * Verifies a TokenRelationship message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenRelationship message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenRelationship
         */
        public static fromObject(object: { [k: string]: any }): proto.TokenRelationship;

        /**
         * Creates a plain object from a TokenRelationship message. Also converts values to other types if specified.
         * @param message TokenRelationship
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TokenRelationship, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenRelationship to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenRelationship
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenBalance. */
    interface ITokenBalance {

        /** A token identifier. */
        tokenId?: (proto.ITokenID|null);

        /**
         * A number of transferable units of the identified token.
         * <p>
         * For fungible/common tokens this SHALL be the balance, in units of
         * 10<sup>`-decimals`</sup> whole tokens.<br/>
         * For non-fungible/unique tokens, this SHALL be the number of
         * individual unique tokens in this balance.
         */
        balance?: (number|Long|null);

        /**
         * A number of "decimals" precision.
         * <p>
         * This MUST match the `decimals` value for the token identified by the
         * `tokenId` field.
         */
        decimals?: (number|null);
    }

    /**
     * A number of _transferable units_ of a specified token.
     *
     * The transferable unit of a token is its smallest denomination, as given by
     * the token's `decimals` property. Each minted token contains
     * 10<sup>`decimals`</sup> transferable units. For example, we could think of
     * the cent as the transferable unit of the US dollar (`decimals=2`); and the
     * tinybar as the transferable unit of HBAR (`decimals=8`).
     *
     * Transferable units are not directly comparable across different tokens.
     */
    class TokenBalance implements ITokenBalance {

        /**
         * Constructs a new TokenBalance.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITokenBalance);

        /** A token identifier. */
        public tokenId?: (proto.ITokenID|null);

        /**
         * A number of transferable units of the identified token.
         * <p>
         * For fungible/common tokens this SHALL be the balance, in units of
         * 10<sup>`-decimals`</sup> whole tokens.<br/>
         * For non-fungible/unique tokens, this SHALL be the number of
         * individual unique tokens in this balance.
         */
        public balance: (number|Long);

        /**
         * A number of "decimals" precision.
         * <p>
         * This MUST match the `decimals` value for the token identified by the
         * `tokenId` field.
         */
        public decimals: number;

        /**
         * Creates a new TokenBalance instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenBalance instance
         */
        public static create(properties?: proto.ITokenBalance): proto.TokenBalance;

        /**
         * Encodes the specified TokenBalance message. Does not implicitly {@link proto.TokenBalance.verify|verify} messages.
         * @param message TokenBalance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITokenBalance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenBalance message, length delimited. Does not implicitly {@link proto.TokenBalance.verify|verify} messages.
         * @param message TokenBalance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITokenBalance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenBalance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenBalance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TokenBalance;

        /**
         * Decodes a TokenBalance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenBalance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TokenBalance;

        /**
         * Verifies a TokenBalance message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenBalance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenBalance
         */
        public static fromObject(object: { [k: string]: any }): proto.TokenBalance;

        /**
         * Creates a plain object from a TokenBalance message. Also converts values to other types if specified.
         * @param message TokenBalance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TokenBalance, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenBalance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenBalance
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StakingInfo. */
    interface IStakingInfo {

        /**
         * A flag indicating that the holder of this account has chosen to decline
         * staking rewards.
         */
        declineReward?: (boolean|null);

        /**
         * A `Timestamp` of the start time for the latest active staking period.
         * <p>
         * This MUST be a period during which either the staking settings for this
         * account or contract changed or the account or contract received staking
         * rewards, whichever is later. Examples of a change in staking settings
         * include starting staking or changing the staked_node_id.<br/>
         * If this account or contract is not currently staked to a node, then this
         * field SHALL NOT be set.
         */
        stakePeriodStart?: (proto.ITimestamp|null);

        /**
         * An amount, in tinybar, to be received in the next reward payout.<br/>
         * Rewards are not paid out immediately; for efficiency reasons rewards are
         * only paid out as part of another transaction involving that account.
         */
        pendingReward?: (number|Long|null);

        /**
         * A proxy-staked balance.<br/>
         * The total HBAR balance of all accounts that delegate staking to this
         * account or contract.
         */
        stakedToMe?: (number|Long|null);

        /**
         * A delegated stake.
         * <p>
         * This account delegates to the indicated account for staking purposes.
         */
        stakedAccountId?: (proto.IAccountID|null);

        /**
         * A direct stake.
         * <p>
         * This accounts stakes its balance to the designated node.
         */
        stakedNodeId?: (number|Long|null);
    }

    /**
     * Staking information for an account or a contract.
     *
     * This is used for responses returned from `CryptoGetInfo` or
     * `ContractGetInfo` queries.
     */
    class StakingInfo implements IStakingInfo {

        /**
         * Constructs a new StakingInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStakingInfo);

        /**
         * A flag indicating that the holder of this account has chosen to decline
         * staking rewards.
         */
        public declineReward: boolean;

        /**
         * A `Timestamp` of the start time for the latest active staking period.
         * <p>
         * This MUST be a period during which either the staking settings for this
         * account or contract changed or the account or contract received staking
         * rewards, whichever is later. Examples of a change in staking settings
         * include starting staking or changing the staked_node_id.<br/>
         * If this account or contract is not currently staked to a node, then this
         * field SHALL NOT be set.
         */
        public stakePeriodStart?: (proto.ITimestamp|null);

        /**
         * An amount, in tinybar, to be received in the next reward payout.<br/>
         * Rewards are not paid out immediately; for efficiency reasons rewards are
         * only paid out as part of another transaction involving that account.
         */
        public pendingReward: (number|Long);

        /**
         * A proxy-staked balance.<br/>
         * The total HBAR balance of all accounts that delegate staking to this
         * account or contract.
         */
        public stakedToMe: (number|Long);

        /**
         * A delegated stake.
         * <p>
         * This account delegates to the indicated account for staking purposes.
         */
        public stakedAccountId?: (proto.IAccountID|null);

        /**
         * A direct stake.
         * <p>
         * This accounts stakes its balance to the designated node.
         */
        public stakedNodeId?: (number|Long|null);

        /** StakingInfo stakedId. */
        public stakedId?: ("stakedAccountId"|"stakedNodeId");

        /**
         * Creates a new StakingInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StakingInfo instance
         */
        public static create(properties?: proto.IStakingInfo): proto.StakingInfo;

        /**
         * Encodes the specified StakingInfo message. Does not implicitly {@link proto.StakingInfo.verify|verify} messages.
         * @param message StakingInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStakingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StakingInfo message, length delimited. Does not implicitly {@link proto.StakingInfo.verify|verify} messages.
         * @param message StakingInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStakingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StakingInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StakingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StakingInfo;

        /**
         * Decodes a StakingInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StakingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StakingInfo;

        /**
         * Verifies a StakingInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StakingInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StakingInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.StakingInfo;

        /**
         * Creates a plain object from a StakingInfo message. Also converts values to other types if specified.
         * @param message StakingInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.StakingInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StakingInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StakingInfo
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

    /** Properties of a LiveHash. */
    interface ILiveHash {

        /** An account associated via this live hash to the hashed content. */
        accountId?: (proto.IAccountID|null);

        /**
         * A SHA-384 hash of some content that is associated to the account
         * or account holder.
         */
        hash?: (Uint8Array|null);

        /**
         * A list of keys, all of which MUST sign the transaction to add the
         * live hash.<br/>
         * Any one of these keys may, however, remove the live hash to revoke
         * the association.
         */
        keys?: (proto.IKeyList|null);

        /**
         * A duration describing how long this Live Hash SHALL remain valid.<br/>
         * A Live Hash SHOULD NOT be relied upon after this duration has elapsed.
         */
        duration?: (proto.IDuration|null);
    }

    /**
     * A Live Hash value associating some item of content to an account.
     *
     * This message represents a desired entry in the ledger for a SHA-384
     * hash of some content, an associated specific account, a list of authorized
     * keys, and a duration the live hash is "valid".
     */
    class LiveHash implements ILiveHash {

        /**
         * Constructs a new LiveHash.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILiveHash);

        /** An account associated via this live hash to the hashed content. */
        public accountId?: (proto.IAccountID|null);

        /**
         * A SHA-384 hash of some content that is associated to the account
         * or account holder.
         */
        public hash: Uint8Array;

        /**
         * A list of keys, all of which MUST sign the transaction to add the
         * live hash.<br/>
         * Any one of these keys may, however, remove the live hash to revoke
         * the association.
         */
        public keys?: (proto.IKeyList|null);

        /**
         * A duration describing how long this Live Hash SHALL remain valid.<br/>
         * A Live Hash SHOULD NOT be relied upon after this duration has elapsed.
         */
        public duration?: (proto.IDuration|null);

        /**
         * Creates a new LiveHash instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LiveHash instance
         */
        public static create(properties?: proto.ILiveHash): proto.LiveHash;

        /**
         * Encodes the specified LiveHash message. Does not implicitly {@link proto.LiveHash.verify|verify} messages.
         * @param message LiveHash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILiveHash, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LiveHash message, length delimited. Does not implicitly {@link proto.LiveHash.verify|verify} messages.
         * @param message LiveHash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILiveHash, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LiveHash message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LiveHash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LiveHash;

        /**
         * Decodes a LiveHash message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LiveHash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LiveHash;

        /**
         * Verifies a LiveHash message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LiveHash message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LiveHash
         */
        public static fromObject(object: { [k: string]: any }): proto.LiveHash;

        /**
         * Creates a plain object from a LiveHash message. Also converts values to other types if specified.
         * @param message LiveHash
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LiveHash, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LiveHash to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LiveHash
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
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

    /** Properties of a CryptoGetAccountBalanceResponse. */
    interface ICryptoGetAccountBalanceResponse {

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        header?: (proto.IResponseHeader|null);

        /**
         * An account identifier.<br/>
         * This is the account ID queried. <br/>
         * The inclusion of the account queried is useful with state proofs,
         * when needed to prove an account balance to a third party.
         */
        accountID?: (proto.IAccountID|null);

        /**
         * A current account balance.<br/>
         * This is the current HBAR balance denominated in tinybar
         * (10<sup>-8</sup> HBAR).
         */
        balance?: (number|Long|null);

        /**
         * This field became infeasible to support after HIP-367 removed limits on
         * the number of associated tokens.<br/>
         * A list of token balances for all tokens associated to the account.
         * <p>
         * This field was deprecated by
         * <a href="https://hips.hedera.com/hip/hip-367">HIP-367</a>, which
         * allowed an account to be associated to an unlimited number of tokens.
         * This scale makes it more efficient for users to consult mirror nodes
         * to review their token balances.
         */
        tokenBalances?: (proto.ITokenBalance[]|null);
    }

    /**
     * Response to a CryptoGetAccountBalanceQuery.<br/>
     *
     * This response SHALL contain only the information needed to
     * identify the query request and the actual HBAR balance of the
     * identified account or contract.
     */
    class CryptoGetAccountBalanceResponse implements ICryptoGetAccountBalanceResponse {

        /**
         * Constructs a new CryptoGetAccountBalanceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICryptoGetAccountBalanceResponse);

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        public header?: (proto.IResponseHeader|null);

        /**
         * An account identifier.<br/>
         * This is the account ID queried. <br/>
         * The inclusion of the account queried is useful with state proofs,
         * when needed to prove an account balance to a third party.
         */
        public accountID?: (proto.IAccountID|null);

        /**
         * A current account balance.<br/>
         * This is the current HBAR balance denominated in tinybar
         * (10<sup>-8</sup> HBAR).
         */
        public balance: (number|Long);

        /**
         * This field became infeasible to support after HIP-367 removed limits on
         * the number of associated tokens.<br/>
         * A list of token balances for all tokens associated to the account.
         * <p>
         * This field was deprecated by
         * <a href="https://hips.hedera.com/hip/hip-367">HIP-367</a>, which
         * allowed an account to be associated to an unlimited number of tokens.
         * This scale makes it more efficient for users to consult mirror nodes
         * to review their token balances.
         */
        public tokenBalances: proto.ITokenBalance[];

        /**
         * Creates a new CryptoGetAccountBalanceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CryptoGetAccountBalanceResponse instance
         */
        public static create(properties?: proto.ICryptoGetAccountBalanceResponse): proto.CryptoGetAccountBalanceResponse;

        /**
         * Encodes the specified CryptoGetAccountBalanceResponse message. Does not implicitly {@link proto.CryptoGetAccountBalanceResponse.verify|verify} messages.
         * @param message CryptoGetAccountBalanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICryptoGetAccountBalanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CryptoGetAccountBalanceResponse message, length delimited. Does not implicitly {@link proto.CryptoGetAccountBalanceResponse.verify|verify} messages.
         * @param message CryptoGetAccountBalanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICryptoGetAccountBalanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CryptoGetAccountBalanceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CryptoGetAccountBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CryptoGetAccountBalanceResponse;

        /**
         * Decodes a CryptoGetAccountBalanceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CryptoGetAccountBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CryptoGetAccountBalanceResponse;

        /**
         * Verifies a CryptoGetAccountBalanceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CryptoGetAccountBalanceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CryptoGetAccountBalanceResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.CryptoGetAccountBalanceResponse;

        /**
         * Creates a plain object from a CryptoGetAccountBalanceResponse message. Also converts values to other types if specified.
         * @param message CryptoGetAccountBalanceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CryptoGetAccountBalanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CryptoGetAccountBalanceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CryptoGetAccountBalanceResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
