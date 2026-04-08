import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of a TokenInfo. */
    interface ITokenInfo {

        /** A unique identifier for this token. */
        tokenId?: (proto.ITokenID|null);

        /**
         * A human-readable name for this token.
         * <p>
         * This value MAY NOT be unique.<br/>
         * This value SHALL NOT exceed 100 bytes when encoded as UTF-8.
         */
        name?: (string|null);

        /**
         * A human-readable symbol for the token.
         * <p>
         * This value SHALL NOT be unique.<br/>
         * This value SHALL NOT exceed 100 bytes when encoded as UTF-8.
         */
        symbol?: (string|null);

        /**
         * A number of decimal places for this token.
         * <p>
         * If decimals are 8 or 11, then the number of whole tokens can be at most
         * billions or millions, respectively. More decimals allows for a more
         * finely-divided token, but also limits the maximum total supply.
         * <p>
         * Examples
         * <ul>
         * <li>Bitcoin satoshis (21 million whole tokens with 8 decimals).</li>
         * <li>Hedera tinybar (50 billion whole tokens with 8 decimals).</li>
         * <li>Bitcoin milli-satoshis (21 million whole tokens with 11
         * decimals).</li>
         * <li>Theoretical limit is roughly 92.2 billion with 8 decimals, or
         * 92.2 million with 11 decimals.</li>
         * </ul>
         * All token amounts in the network are stored as integer amounts, with
         * each unit representing 10<sup>-decimals</sup> whole tokens.
         * <p>
         * For tokens with `token_type` set to `NON_FUNGIBLE_UNIQUE` this MUST be 0.
         */
        decimals?: (number|null);

        /**
         * A _current_ total supply of this token, expressed in the smallest unit
         * of the token.
         * <p>
         * The number of _whole_ tokens this represents is (total_supply /
         * 10<sup>decimals</sup>). The value of total supply, MUST be within the
         * positive range of a twos-compliment signed 64-bit integer.
         * The `total_supply`, therefore MUST be between 1, and
         * 9,223,372,036,854,775,807, inclusive.
         * <p>
         * This value SHALL be reduced when a `token_burn` or `token_wipe_account`
         * operation is executed, and SHALL be increased when a `token_mint`
         * operation is executed.
         */
        totalSupply?: (number|Long|null);

        /**
         * A treasury account identifier for this token.
         * <p>
         * When the token is created, the initial supply given in the token create
         * transaction SHALL be minted and deposited in the treasury account.<br/>
         * All token mint transactions for this token SHALL deposit the new minted
         * tokens in the treasury account.<br/>
         * All token burn transactions for this token SHALL remove the tokens to be
         * burned from the treasury account.
         */
        treasury?: (proto.IAccountID|null);

        /**
         * Access control for general modification of this token.
         * <p>
         * This key MUST sign any `token_update` transaction that
         * changes any attribute of the token other than expiration_time.
         * Other attributes of this token MAY be changed by transactions other than
         * `token_update`, and MUST be signed by one of the other purpose-specific
         * keys assigned to the token.<br/>
         * This value can be set during token creation, and SHALL NOT be
         * modified thereafter, unless the update transaction is signed by both
         * the existing `admin_key` and the new `admin_key`.<br/>
         * If the `admin_key` is not set for a token, that token SHALL be immutable.
         */
        adminKey?: (proto.IKey|null);

        /**
         * Access control for KYC for this token.
         * <p>
         * Know Your Customer (KYC) status may be granted for an account by a token
         * grant kyc transaction signed by this key.<br/>
         * If this key is not set, then KYC status cannot be granted to an account
         * for this token, and any `TokenGrantKyc` transaction attempting to grant
         * kyc to an account for this token SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        kycKey?: (proto.IKey|null);

        /**
         * Access control to freeze this token.
         * <p>
         * A token may be frozen for an account, preventing any transaction from
         * transferring that token for that specified account, by a token freeze
         * account transaction signed by this key.<br/>
         * If this key is not set, the token cannot be frozen, and any transaction
         * attempting to freeze the token for an account SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        freezeKey?: (proto.IKey|null);

        /**
         * Access control of account wipe for this token.
         * <p>
         * A token may be wiped, removing and burning tokens from a specific
         * account, by a token wipe transaction, which MUST be signed by this key.
         * The `treasury_account` cannot be subjected to a token wipe. A token burn
         * transaction, signed by the `supply_key`, serves to burn tokens held by
         * the `treasury_account` instead.<br/>
         * If this key is not set, the token cannot be wiped, and any transaction
         * attempting to wipe the token from an account SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        wipeKey?: (proto.IKey|null);

        /**
         * Access control of token mint/burn for this token.
         * <p>
         * A token mint transaction MUST be signed by this key, and any token mint
         * transaction not signed by the current `supply_key` for that token
         * SHALL NOT succeed.<br/>
         * A token burn transaction MUST be signed by this key, and any token burn
         * transaction not signed by the current `supply_key` for that token
         * SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        supplyKey?: (proto.IKey|null);

        /**
         * A flag indicating if accounts associated to this token are frozen by
         * default, not frozen, or freeze is not applicable.
         * <p>
         * Accounts frozen by default and newly associated with this token CANNOT
         * transact in the token until unfrozen.<br/>
         * This SHALL NOT prevent a `tokenReject` transaction to return the tokens
         * from an account to the treasury account.
         */
        defaultFreezeStatus?: (proto.TokenFreezeStatus|null);

        /**
         * A flag indicating if accounts associated with this token are granted
         * KYC by default, revoked by default, or KYC is not applicable.
         */
        defaultKycStatus?: (proto.TokenKycStatus|null);

        /**
         * A flag indicating that this token is deleted.
         * <p>
         * A transaction involving a deleted token MUST NOT succeed.
         */
        deleted?: (boolean|null);

        /**
         * An identifier for the account (if any) that the network will attempt
         * to charge for this token's auto-renewal upon expiration.
         * <p>
         * This field is OPTIONAL. If it is not set then renewal fees SHALL be
         * charged to the account identified by `treasury`.
         */
        autoRenewAccount?: (proto.IAccountID|null);

        /**
         * A duration by which the network should automatically extend
         * this token's expiration.
         * <p>
         * If the token has a valid auto-renew account, and is not deleted upon
         * expiration, the network SHALL attempt to automatically renew this
         * token.<br/>
         * The default values for the minimum period and maximum period are 30 days
         * and 90 days, respectively.
         */
        autoRenewPeriod?: (proto.IDuration|null);

        /**
         * An expiration time for this token, in seconds since the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the
         * UNIX epoch with 0 at `1970-01-01T00:00:00.000Z`.
         */
        expiry?: (proto.ITimestamp|null);

        /**
         * A short description of this token.
         * <p>
         * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
         * (default 100) bytes when encoded as UTF-8.
         */
        memo?: (string|null);

        /**
         * A type for this token.
         * <p>
         * A token SHALL be either `FUNGIBLE_COMMON` or `NON_FUNGIBLE_UNIQUE`.<br/>
         * If this value was omitted during token creation, `FUNGIBLE_COMMON`
         * SHALL be used.<br/>
         * The value `FUNGIBLE_COMMON` SHALL represent a fungible/common token.
         * The value `NON_FUNGIBLE_UNIQUE` SHALL represent a
         * non-fungible/unique token.
         */
        tokenType?: (proto.TokenType|null);

        /**
         * A supply type for this token.
         * <p>
         * A token SHALL have either `INFINITE` or `FINITE` supply type.<br/>
         * If this value was omitted during token creation, the value `INFINITE`
         * SHALL be used.
         */
        supplyType?: (proto.TokenSupplyType|null);

        /**
         * A maximum supply of this token.<br/>
         * This is the maximum number of tokens of this type that may be issued.
         * <p>
         * This limit SHALL apply regardless of `token_type`.<br/>
         * If `supply_type` is `INFINITE` then this value MUST be 0.<br/>
         * If `supply_type` is `FINITE`, then this value MUST be greater than 0.
         */
        maxSupply?: (number|Long|null);

        /**
         * Access control of the `custom_fees` field for this token.
         * <p>
         * The token custom fee schedule may be changed, modifying the fees charged
         * for transferring that token, by a token update transaction, which MUST
         * be signed by this key.<br/>
         * If this key is not set, the token custom fee schedule cannot be changed,
         * and any transaction attempting to change the custom fee schedule for
         * this token SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        feeScheduleKey?: (proto.IKey|null);

        /** A custom fee schedule for this token. */
        customFees?: (proto.ICustomFee[]|null);

        /**
         * Access control of pause/unpause for this token.
         * <p>
         * A token may be paused, preventing any transaction from transferring that
         * token, by a token update transaction signed by this key.<br/>
         * If this key is not set, the token cannot be paused, and any transaction
         * attempting to pause the token SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        pauseKey?: (proto.IKey|null);

        /**
         * A flag indicating that this token is paused.<br/>
         * A token may be paused, unpaused, or pause not applicable.
         * <p>
         * A transaction involving a paused token, other than token_unpause,
         * MUST NOT succeed.
         */
        pauseStatus?: (proto.TokenPauseStatus|null);

        /**
         * The ledger ID of the network that generated this response.
         * <p>
         * This value SHALL identify the distributed ledger that responded to
         * this query.
         */
        ledgerId?: (Uint8Array|null);

        /**
         * A Token "Metadata".
         * <p>
         * This value, if set, SHALL NOT exceed 100 bytes.
         */
        metadata?: (Uint8Array|null);

        /**
         * Access Control of metadata update for this token.
         * <p>
         * A transaction to update the `metadata` field of this token MUST be
         * signed by this key.<br/>
         * If this token is a non-fungible/unique token type, a transaction to
         * update the `metadata` field of any individual serialized unique token
         * of this type MUST be signed by this key.<br/>
         * If this key is not set, the token metadata SHALL NOT be changed after it
         * is created.<br/>
         * If this key is not set, the metadata for any individual serialized token
         * of this type SHALL NOT be changed after it is created.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        metadataKey?: (proto.IKey|null);
    }

    /**
     * An Hedera Token Service(HTS) token.
     *
     * A token SHALL represent a fungible or non-fungible unit of exchange.<br/>
     * The specified Treasury Account SHALL receive the initial supply of tokens and
     * SHALL determine distribution of all tokens once minted.
     */
    class TokenInfo implements ITokenInfo {

        /**
         * Constructs a new TokenInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITokenInfo);

        /** A unique identifier for this token. */
        public tokenId?: (proto.ITokenID|null);

        /**
         * A human-readable name for this token.
         * <p>
         * This value MAY NOT be unique.<br/>
         * This value SHALL NOT exceed 100 bytes when encoded as UTF-8.
         */
        public name: string;

        /**
         * A human-readable symbol for the token.
         * <p>
         * This value SHALL NOT be unique.<br/>
         * This value SHALL NOT exceed 100 bytes when encoded as UTF-8.
         */
        public symbol: string;

        /**
         * A number of decimal places for this token.
         * <p>
         * If decimals are 8 or 11, then the number of whole tokens can be at most
         * billions or millions, respectively. More decimals allows for a more
         * finely-divided token, but also limits the maximum total supply.
         * <p>
         * Examples
         * <ul>
         * <li>Bitcoin satoshis (21 million whole tokens with 8 decimals).</li>
         * <li>Hedera tinybar (50 billion whole tokens with 8 decimals).</li>
         * <li>Bitcoin milli-satoshis (21 million whole tokens with 11
         * decimals).</li>
         * <li>Theoretical limit is roughly 92.2 billion with 8 decimals, or
         * 92.2 million with 11 decimals.</li>
         * </ul>
         * All token amounts in the network are stored as integer amounts, with
         * each unit representing 10<sup>-decimals</sup> whole tokens.
         * <p>
         * For tokens with `token_type` set to `NON_FUNGIBLE_UNIQUE` this MUST be 0.
         */
        public decimals: number;

        /**
         * A _current_ total supply of this token, expressed in the smallest unit
         * of the token.
         * <p>
         * The number of _whole_ tokens this represents is (total_supply /
         * 10<sup>decimals</sup>). The value of total supply, MUST be within the
         * positive range of a twos-compliment signed 64-bit integer.
         * The `total_supply`, therefore MUST be between 1, and
         * 9,223,372,036,854,775,807, inclusive.
         * <p>
         * This value SHALL be reduced when a `token_burn` or `token_wipe_account`
         * operation is executed, and SHALL be increased when a `token_mint`
         * operation is executed.
         */
        public totalSupply: (number|Long);

        /**
         * A treasury account identifier for this token.
         * <p>
         * When the token is created, the initial supply given in the token create
         * transaction SHALL be minted and deposited in the treasury account.<br/>
         * All token mint transactions for this token SHALL deposit the new minted
         * tokens in the treasury account.<br/>
         * All token burn transactions for this token SHALL remove the tokens to be
         * burned from the treasury account.
         */
        public treasury?: (proto.IAccountID|null);

        /**
         * Access control for general modification of this token.
         * <p>
         * This key MUST sign any `token_update` transaction that
         * changes any attribute of the token other than expiration_time.
         * Other attributes of this token MAY be changed by transactions other than
         * `token_update`, and MUST be signed by one of the other purpose-specific
         * keys assigned to the token.<br/>
         * This value can be set during token creation, and SHALL NOT be
         * modified thereafter, unless the update transaction is signed by both
         * the existing `admin_key` and the new `admin_key`.<br/>
         * If the `admin_key` is not set for a token, that token SHALL be immutable.
         */
        public adminKey?: (proto.IKey|null);

        /**
         * Access control for KYC for this token.
         * <p>
         * Know Your Customer (KYC) status may be granted for an account by a token
         * grant kyc transaction signed by this key.<br/>
         * If this key is not set, then KYC status cannot be granted to an account
         * for this token, and any `TokenGrantKyc` transaction attempting to grant
         * kyc to an account for this token SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        public kycKey?: (proto.IKey|null);

        /**
         * Access control to freeze this token.
         * <p>
         * A token may be frozen for an account, preventing any transaction from
         * transferring that token for that specified account, by a token freeze
         * account transaction signed by this key.<br/>
         * If this key is not set, the token cannot be frozen, and any transaction
         * attempting to freeze the token for an account SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        public freezeKey?: (proto.IKey|null);

        /**
         * Access control of account wipe for this token.
         * <p>
         * A token may be wiped, removing and burning tokens from a specific
         * account, by a token wipe transaction, which MUST be signed by this key.
         * The `treasury_account` cannot be subjected to a token wipe. A token burn
         * transaction, signed by the `supply_key`, serves to burn tokens held by
         * the `treasury_account` instead.<br/>
         * If this key is not set, the token cannot be wiped, and any transaction
         * attempting to wipe the token from an account SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        public wipeKey?: (proto.IKey|null);

        /**
         * Access control of token mint/burn for this token.
         * <p>
         * A token mint transaction MUST be signed by this key, and any token mint
         * transaction not signed by the current `supply_key` for that token
         * SHALL NOT succeed.<br/>
         * A token burn transaction MUST be signed by this key, and any token burn
         * transaction not signed by the current `supply_key` for that token
         * SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        public supplyKey?: (proto.IKey|null);

        /**
         * A flag indicating if accounts associated to this token are frozen by
         * default, not frozen, or freeze is not applicable.
         * <p>
         * Accounts frozen by default and newly associated with this token CANNOT
         * transact in the token until unfrozen.<br/>
         * This SHALL NOT prevent a `tokenReject` transaction to return the tokens
         * from an account to the treasury account.
         */
        public defaultFreezeStatus: proto.TokenFreezeStatus;

        /**
         * A flag indicating if accounts associated with this token are granted
         * KYC by default, revoked by default, or KYC is not applicable.
         */
        public defaultKycStatus: proto.TokenKycStatus;

        /**
         * A flag indicating that this token is deleted.
         * <p>
         * A transaction involving a deleted token MUST NOT succeed.
         */
        public deleted: boolean;

        /**
         * An identifier for the account (if any) that the network will attempt
         * to charge for this token's auto-renewal upon expiration.
         * <p>
         * This field is OPTIONAL. If it is not set then renewal fees SHALL be
         * charged to the account identified by `treasury`.
         */
        public autoRenewAccount?: (proto.IAccountID|null);

        /**
         * A duration by which the network should automatically extend
         * this token's expiration.
         * <p>
         * If the token has a valid auto-renew account, and is not deleted upon
         * expiration, the network SHALL attempt to automatically renew this
         * token.<br/>
         * The default values for the minimum period and maximum period are 30 days
         * and 90 days, respectively.
         */
        public autoRenewPeriod?: (proto.IDuration|null);

        /**
         * An expiration time for this token, in seconds since the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the
         * UNIX epoch with 0 at `1970-01-01T00:00:00.000Z`.
         */
        public expiry?: (proto.ITimestamp|null);

        /**
         * A short description of this token.
         * <p>
         * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
         * (default 100) bytes when encoded as UTF-8.
         */
        public memo: string;

        /**
         * A type for this token.
         * <p>
         * A token SHALL be either `FUNGIBLE_COMMON` or `NON_FUNGIBLE_UNIQUE`.<br/>
         * If this value was omitted during token creation, `FUNGIBLE_COMMON`
         * SHALL be used.<br/>
         * The value `FUNGIBLE_COMMON` SHALL represent a fungible/common token.
         * The value `NON_FUNGIBLE_UNIQUE` SHALL represent a
         * non-fungible/unique token.
         */
        public tokenType: proto.TokenType;

        /**
         * A supply type for this token.
         * <p>
         * A token SHALL have either `INFINITE` or `FINITE` supply type.<br/>
         * If this value was omitted during token creation, the value `INFINITE`
         * SHALL be used.
         */
        public supplyType: proto.TokenSupplyType;

        /**
         * A maximum supply of this token.<br/>
         * This is the maximum number of tokens of this type that may be issued.
         * <p>
         * This limit SHALL apply regardless of `token_type`.<br/>
         * If `supply_type` is `INFINITE` then this value MUST be 0.<br/>
         * If `supply_type` is `FINITE`, then this value MUST be greater than 0.
         */
        public maxSupply: (number|Long);

        /**
         * Access control of the `custom_fees` field for this token.
         * <p>
         * The token custom fee schedule may be changed, modifying the fees charged
         * for transferring that token, by a token update transaction, which MUST
         * be signed by this key.<br/>
         * If this key is not set, the token custom fee schedule cannot be changed,
         * and any transaction attempting to change the custom fee schedule for
         * this token SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        public feeScheduleKey?: (proto.IKey|null);

        /** A custom fee schedule for this token. */
        public customFees: proto.ICustomFee[];

        /**
         * Access control of pause/unpause for this token.
         * <p>
         * A token may be paused, preventing any transaction from transferring that
         * token, by a token update transaction signed by this key.<br/>
         * If this key is not set, the token cannot be paused, and any transaction
         * attempting to pause the token SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        public pauseKey?: (proto.IKey|null);

        /**
         * A flag indicating that this token is paused.<br/>
         * A token may be paused, unpaused, or pause not applicable.
         * <p>
         * A transaction involving a paused token, other than token_unpause,
         * MUST NOT succeed.
         */
        public pauseStatus: proto.TokenPauseStatus;

        /**
         * The ledger ID of the network that generated this response.
         * <p>
         * This value SHALL identify the distributed ledger that responded to
         * this query.
         */
        public ledgerId: Uint8Array;

        /**
         * A Token "Metadata".
         * <p>
         * This value, if set, SHALL NOT exceed 100 bytes.
         */
        public metadata: Uint8Array;

        /**
         * Access Control of metadata update for this token.
         * <p>
         * A transaction to update the `metadata` field of this token MUST be
         * signed by this key.<br/>
         * If this token is a non-fungible/unique token type, a transaction to
         * update the `metadata` field of any individual serialized unique token
         * of this type MUST be signed by this key.<br/>
         * If this key is not set, the token metadata SHALL NOT be changed after it
         * is created.<br/>
         * If this key is not set, the metadata for any individual serialized token
         * of this type SHALL NOT be changed after it is created.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         */
        public metadataKey?: (proto.IKey|null);

        /**
         * Creates a new TokenInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenInfo instance
         */
        public static create(properties?: proto.ITokenInfo): proto.TokenInfo;

        /**
         * Encodes the specified TokenInfo message. Does not implicitly {@link proto.TokenInfo.verify|verify} messages.
         * @param message TokenInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITokenInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenInfo message, length delimited. Does not implicitly {@link proto.TokenInfo.verify|verify} messages.
         * @param message TokenInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITokenInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TokenInfo;

        /**
         * Decodes a TokenInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TokenInfo;

        /**
         * Verifies a TokenInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.TokenInfo;

        /**
         * Creates a plain object from a TokenInfo message. Also converts values to other types if specified.
         * @param message TokenInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TokenInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenInfo
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

    /** Properties of a Fraction. */
    interface IFraction {

        /** A fractional number's numerator. */
        numerator?: (number|Long|null);

        /**
         * A fractional number's denominator.
         * <p>
         * A zero value SHALL fail with response code `FRACTION_DIVIDES_BY_ZERO`.
         */
        denominator?: (number|Long|null);
    }

    /**
     * A rational number.<br/>
     * A common use is to set the amount of a value transfer to collect as a
     * custom fee.
     *
     * It is RECOMMENDED that both numerator and denominator be no larger than
     * necessary to express the required fraction. A very large numerator, in
     * particular, may not be reliable.
     * Both fields are REQUIRED and SHOULD be positive integers.
     */
    class Fraction implements IFraction {

        /**
         * Constructs a new Fraction.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFraction);

        /** A fractional number's numerator. */
        public numerator: (number|Long);

        /**
         * A fractional number's denominator.
         * <p>
         * A zero value SHALL fail with response code `FRACTION_DIVIDES_BY_ZERO`.
         */
        public denominator: (number|Long);

        /**
         * Creates a new Fraction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Fraction instance
         */
        public static create(properties?: proto.IFraction): proto.Fraction;

        /**
         * Encodes the specified Fraction message. Does not implicitly {@link proto.Fraction.verify|verify} messages.
         * @param message Fraction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFraction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Fraction message, length delimited. Does not implicitly {@link proto.Fraction.verify|verify} messages.
         * @param message Fraction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFraction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Fraction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Fraction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Fraction;

        /**
         * Decodes a Fraction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Fraction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Fraction;

        /**
         * Verifies a Fraction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Fraction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Fraction
         */
        public static fromObject(object: { [k: string]: any }): proto.Fraction;

        /**
         * Creates a plain object from a Fraction message. Also converts values to other types if specified.
         * @param message Fraction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Fraction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Fraction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Fraction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

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
     */
    enum TokenType {
        FUNGIBLE_COMMON = 0,
        NON_FUNGIBLE_UNIQUE = 1
    }

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
     */
    enum SubType {
        DEFAULT = 0,
        TOKEN_FUNGIBLE_COMMON = 1,
        TOKEN_NON_FUNGIBLE_UNIQUE = 2,
        TOKEN_FUNGIBLE_COMMON_WITH_CUSTOM_FEES = 3,
        TOKEN_NON_FUNGIBLE_UNIQUE_WITH_CUSTOM_FEES = 4,
        SCHEDULE_CREATE_CONTRACT_CALL = 5,
        TOPIC_CREATE_WITH_CUSTOM_FEES = 6,
        SUBMIT_MESSAGE_WITH_CUSTOM_FEES = 7,
        CRYPTO_TRANSFER_WITH_HOOKS = 8
    }

    /**
     * Possible Token Supply Types (IWA Compatibility).
     *
     * This `enum` indicates the limit of tokens that can exist during the
     * lifetime of a token definition. The "infinite" supply is only theoretically
     * infinite, as it is still limited to the magnitude of a 64-bit signed
     * integer. A "finite" supply is further limited to a value specified when
     * the token is created (or updated, if not immutable).
     */
    enum TokenSupplyType {
        INFINITE = 0,
        FINITE = 1
    }

    /** Types of validation strategies for token keys. */
    enum TokenKeyValidation {
        FULL_VALIDATION = 0,
        NO_VALIDATION = 1
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

    /**
     * Possible Pause status values.
     *
     * This is returned by `TokenGetInfoQuery` in `TokenRelationship`.
     */
    enum TokenPauseStatus {
        PauseNotApplicable = 0,
        Paused = 1,
        Unpaused = 2
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

    /** Properties of a FractionalFee. */
    interface IFractionalFee {

        /**
         * A Fraction of the transferred tokens to assess as a fee.<br/>
         * This value MUST be less than or equal to one.<br/>
         * This value MUST be greater than zero.
         */
        fractionalAmount?: (proto.IFraction|null);

        /**
         * A minimum fee to charge, in units of 10<sup>-decimals</sup> tokens.
         * <p>
         * This value is OPTIONAL, with a default of `0` indicating no minimum.<br/>
         * If set, this value MUST be greater than zero.<br/>
         * If set, all transfers SHALL pay at least this amount.
         */
        minimumAmount?: (number|Long|null);

        /**
         * A maximum fee to charge, in units of 10<sup>-decimals</sup> tokens.
         * <p>
         * This value is OPTIONAL, with a default of `0` indicating no maximum.<br/>
         * If set, this value MUST be greater than zero.<br/>
         * If set, any fee charged SHALL NOT exceed this value.<br/>
         * This value SHOULD be strictly greater than `minimum_amount`.
         * If this amount is less than or equal to `minimum_amount`, then
         * the fee charged SHALL always be equal to this value and
         * `fractional_amount` SHALL NOT have any effect.
         */
        maximumAmount?: (number|Long|null);

        /**
         * Flag requesting to assess the calculated fee against the sender,
         * without reducing the amount transferred.<br/>
         * #### Effects of this flag
         * <ol>
         * <li>If this value is true
         * <ul>
         * <li>The receiver of a transfer SHALL receive the entire
         * amount sent.</li>
         * <li>The fee SHALL be charged to the sender as an additional
         * amount, increasing the token transfer debit.</li>
         * </ul>
         * </li>
         * <li>If this value is false
         * <ul>
         * <li>The receiver of a transfer SHALL receive the amount sent
         * _after_ deduction of the calculated fee.</li>
         * </ul>
         * </li>
         * </ol>
         */
        netOfTransfers?: (boolean|null);
    }

    /**
     * A descriptor for a fee based on a portion of the tokens transferred.
     *
     * This fee option describes fees as a fraction of the amount of
     * fungible/common token(s) transferred.  The fee also describes a minimum
     * and maximum amount, both of which are OPTIONAL.
     *
     * This type of fee SHALL be assessed only for fungible/common tokens.<br/>
     * This type of fee MUST NOT be defined for a non-fungible/unique
     * token type.<br/>
     * This fee SHALL be paid with the same type of tokens as those
     * transferred.<br/>
     * The fee MAY be subtracted from the transferred tokens, or MAY be assessed
     * to the sender in addition to the tokens actually transferred, based on
     * the `net_of_transfers` field.
     *
     * When a single transaction sends tokens from one sender to multiple
     * recipients, and the `net_of_transfers` flag is false, the network
     * SHALL attempt to evenly assess the total fee across all recipients
     * proportionally. This may be inexact and, particularly when there are
     * large differences between recipients, MAY result in small deviations
     * from an ideal "fair" distribution.<br/>
     * If the sender lacks sufficient tokens to pay fees, or the assessment
     * of custom fees reduces the net amount transferred to or below zero,
     * the transaction MAY fail due to insufficient funds to pay all fees.
     */
    class FractionalFee implements IFractionalFee {

        /**
         * Constructs a new FractionalFee.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFractionalFee);

        /**
         * A Fraction of the transferred tokens to assess as a fee.<br/>
         * This value MUST be less than or equal to one.<br/>
         * This value MUST be greater than zero.
         */
        public fractionalAmount?: (proto.IFraction|null);

        /**
         * A minimum fee to charge, in units of 10<sup>-decimals</sup> tokens.
         * <p>
         * This value is OPTIONAL, with a default of `0` indicating no minimum.<br/>
         * If set, this value MUST be greater than zero.<br/>
         * If set, all transfers SHALL pay at least this amount.
         */
        public minimumAmount: (number|Long);

        /**
         * A maximum fee to charge, in units of 10<sup>-decimals</sup> tokens.
         * <p>
         * This value is OPTIONAL, with a default of `0` indicating no maximum.<br/>
         * If set, this value MUST be greater than zero.<br/>
         * If set, any fee charged SHALL NOT exceed this value.<br/>
         * This value SHOULD be strictly greater than `minimum_amount`.
         * If this amount is less than or equal to `minimum_amount`, then
         * the fee charged SHALL always be equal to this value and
         * `fractional_amount` SHALL NOT have any effect.
         */
        public maximumAmount: (number|Long);

        /**
         * Flag requesting to assess the calculated fee against the sender,
         * without reducing the amount transferred.<br/>
         * #### Effects of this flag
         * <ol>
         * <li>If this value is true
         * <ul>
         * <li>The receiver of a transfer SHALL receive the entire
         * amount sent.</li>
         * <li>The fee SHALL be charged to the sender as an additional
         * amount, increasing the token transfer debit.</li>
         * </ul>
         * </li>
         * <li>If this value is false
         * <ul>
         * <li>The receiver of a transfer SHALL receive the amount sent
         * _after_ deduction of the calculated fee.</li>
         * </ul>
         * </li>
         * </ol>
         */
        public netOfTransfers: boolean;

        /**
         * Creates a new FractionalFee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FractionalFee instance
         */
        public static create(properties?: proto.IFractionalFee): proto.FractionalFee;

        /**
         * Encodes the specified FractionalFee message. Does not implicitly {@link proto.FractionalFee.verify|verify} messages.
         * @param message FractionalFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFractionalFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FractionalFee message, length delimited. Does not implicitly {@link proto.FractionalFee.verify|verify} messages.
         * @param message FractionalFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFractionalFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FractionalFee message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FractionalFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FractionalFee;

        /**
         * Decodes a FractionalFee message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FractionalFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FractionalFee;

        /**
         * Verifies a FractionalFee message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FractionalFee message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FractionalFee
         */
        public static fromObject(object: { [k: string]: any }): proto.FractionalFee;

        /**
         * Creates a plain object from a FractionalFee message. Also converts values to other types if specified.
         * @param message FractionalFee
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.FractionalFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FractionalFee to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FractionalFee
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FixedFee. */
    interface IFixedFee {

        /**
         * The amount to assess for each transfer.
         * <p>
         * This value MUST be greater than `0`.<br/>
         * This amount is expressed in units of 10<sup>-decimals</sup> tokens.
         */
        amount?: (number|Long|null);

        /**
         * The token type used to pay the assessed fee.
         * <p>
         * If this is unset, the fee SHALL be assessed in HBAR.<br/>
         * If this is set, the fee SHALL be assessed in the token identified.
         * This MAY be any token type. Custom fees assessed in other token types
         * are more likely to fail, however, and it is RECOMMENDED that token
         * creators denominate custom fees in the transferred token, HBAR, or
         * well documented and closely related token types.<br/>
         * If this value is set to `0.0.0` in the `tokenCreate` transaction, it
         * SHALL be replaced with the `TokenID` of the newly created token.
         */
        denominatingTokenId?: (proto.ITokenID|null);
    }

    /**
     * A fixed fee to assess for each token transfer, regardless of the
     * amount transferred.<br/>
     * This fee type describes a fixed fee for each transfer of a token type.
     *
     * The fee SHALL be charged to the `sender` for the token transfer
     * transaction.<br/>
     * This fee MAY be assessed in HBAR, the token type transferred, or any
     * other token type, as determined by the `denominating_token_id` field.
     */
    class FixedFee implements IFixedFee {

        /**
         * Constructs a new FixedFee.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFixedFee);

        /**
         * The amount to assess for each transfer.
         * <p>
         * This value MUST be greater than `0`.<br/>
         * This amount is expressed in units of 10<sup>-decimals</sup> tokens.
         */
        public amount: (number|Long);

        /**
         * The token type used to pay the assessed fee.
         * <p>
         * If this is unset, the fee SHALL be assessed in HBAR.<br/>
         * If this is set, the fee SHALL be assessed in the token identified.
         * This MAY be any token type. Custom fees assessed in other token types
         * are more likely to fail, however, and it is RECOMMENDED that token
         * creators denominate custom fees in the transferred token, HBAR, or
         * well documented and closely related token types.<br/>
         * If this value is set to `0.0.0` in the `tokenCreate` transaction, it
         * SHALL be replaced with the `TokenID` of the newly created token.
         */
        public denominatingTokenId?: (proto.ITokenID|null);

        /**
         * Creates a new FixedFee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FixedFee instance
         */
        public static create(properties?: proto.IFixedFee): proto.FixedFee;

        /**
         * Encodes the specified FixedFee message. Does not implicitly {@link proto.FixedFee.verify|verify} messages.
         * @param message FixedFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFixedFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FixedFee message, length delimited. Does not implicitly {@link proto.FixedFee.verify|verify} messages.
         * @param message FixedFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFixedFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FixedFee message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FixedFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FixedFee;

        /**
         * Decodes a FixedFee message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FixedFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FixedFee;

        /**
         * Verifies a FixedFee message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FixedFee message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FixedFee
         */
        public static fromObject(object: { [k: string]: any }): proto.FixedFee;

        /**
         * Creates a plain object from a FixedFee message. Also converts values to other types if specified.
         * @param message FixedFee
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.FixedFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FixedFee to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FixedFee
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoyaltyFee. */
    interface IRoyaltyFee {

        /**
         * The fraction of fungible value exchanged for an NFT to collect
         * as royalty.
         * <p>
         * This SHALL be applied once to the total fungible value transferred
         * for the transaction.<br/>
         * There SHALL NOT be any adjustment based on multiple transfers
         * involving the NFT sender as part of a single transaction.
         */
        exchangeValueFraction?: (proto.IFraction|null);

        /**
         * A fixed fee to assess if no fungible value is known to be traded
         * for the NFT.
         * <p>
         * If an NFT is transferred without a corresponding transfer of
         * _fungible_ value returned in the same transaction, the network
         * SHALL charge this fee as a fallback.<br/>
         * Fallback fees MAY have unexpected effects when interacting with
         * escrow, market transfers, and smart contracts.
         * It is RECOMMENDED that developers carefully consider possible
         * effects from fallback fees when designing systems that facilitate
         * the transfer of NFTs.
         */
        fallbackFee?: (proto.IFixedFee|null);
    }

    /**
     * A fee to assess during a CryptoTransfer that changes ownership of a
     * non-fungible/unique (NFT) token.<br/>
     * This message defines the fraction of the fungible value exchanged for an
     * NFT that the ledger should collect as a royalty.
     * "Fungible value" includes both HBAR (ℏ) and units of fungible HTS tokens.
     * When the NFT sender does not receive any fungible value, the ledger will
     * assess the fallback fee, if present, to the new NFT owner. Royalty fees
     * can only be added to non-fungible/unique tokens.
     *
     * #### Important Note
     * > Users should be aware that native royalty fees are _strictly_ a
     * > convenience feature, SHALL NOT be guaranteed, and the network SHALL NOT
     * > enforce _inescapable_ royalties on the exchange of a unique NFT.<br/>
     * > For _one_ example, if the counterparties agree to split their value
     * > transfer and NFT exchange into separate transactions, the network cannot
     * > possibly determine the value exchanged. Even trustless transactions,
     * > using a smart contract or other form of escrow, can arrange such split
     * > transactions as a single _logical_ transfer.
     *
     * Counterparties that wish to _respect_ creator royalties MUST follow the
     * pattern the network recognizes.
     * <div style="margin-left: 2em; margin-top: -0.8em">
     * A single transaction MUST contain all three elements, transfer of the NFT,
     * debit of fungible value from the receiver, and credit of fungible value to
     * the sender, in order for the network to accurately assess royalty fees.
     * </div>
     * <div style="margin-left: 1em; margin-top: -0.8em">
     * Two examples are presented here.
     * <div style="margin-left: 1em">
     * The NFT sender and receiver MUST both sign a single `cryptoTransfer` that
     * transfers the NFT from sender to receiver, debits the fungible value from
     * the receiver, and credits the sender with the fungible value the receiver
     * is exchanging for the NFT.<br/>
     * A marketplace using an approved spender account for an escrow transaction
     * MUST credit the account selling the NFT in the same `cryptoTransfer`
     * transaction that transfers the NFT to, and deducts fungible value from,
     * the buying account.
     * </div></div>
     * This type of fee MAY NOT produce accurate results if multiple transfers
     * are executed in a single transaction. It is RECOMMENDED that each
     * NFT subject to royalty fees be transferred separately and without
     * unrelated fungible token transfers.
     *
     * The network SHALL NOT consider third-party transfers, including
     * "approved spender" accounts, in collecting royalty fees. An honest
     * broker MUST ensure that transfer of an NFT and payment delivered to
     * the sender are present in the same transaction.
     * There is an
     * [open suggestion](https://github.com/hashgraph/hedera-improvement-proposal/discussions/578)
     * that proposes to broaden the scope of transfers from which the network
     * automatically collects royalties to cover related third parties. If this
     * interests or concerns you, please add your voice to that discussion.
     */
    class RoyaltyFee implements IRoyaltyFee {

        /**
         * Constructs a new RoyaltyFee.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRoyaltyFee);

        /**
         * The fraction of fungible value exchanged for an NFT to collect
         * as royalty.
         * <p>
         * This SHALL be applied once to the total fungible value transferred
         * for the transaction.<br/>
         * There SHALL NOT be any adjustment based on multiple transfers
         * involving the NFT sender as part of a single transaction.
         */
        public exchangeValueFraction?: (proto.IFraction|null);

        /**
         * A fixed fee to assess if no fungible value is known to be traded
         * for the NFT.
         * <p>
         * If an NFT is transferred without a corresponding transfer of
         * _fungible_ value returned in the same transaction, the network
         * SHALL charge this fee as a fallback.<br/>
         * Fallback fees MAY have unexpected effects when interacting with
         * escrow, market transfers, and smart contracts.
         * It is RECOMMENDED that developers carefully consider possible
         * effects from fallback fees when designing systems that facilitate
         * the transfer of NFTs.
         */
        public fallbackFee?: (proto.IFixedFee|null);

        /**
         * Creates a new RoyaltyFee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoyaltyFee instance
         */
        public static create(properties?: proto.IRoyaltyFee): proto.RoyaltyFee;

        /**
         * Encodes the specified RoyaltyFee message. Does not implicitly {@link proto.RoyaltyFee.verify|verify} messages.
         * @param message RoyaltyFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRoyaltyFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoyaltyFee message, length delimited. Does not implicitly {@link proto.RoyaltyFee.verify|verify} messages.
         * @param message RoyaltyFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRoyaltyFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoyaltyFee message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoyaltyFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RoyaltyFee;

        /**
         * Decodes a RoyaltyFee message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoyaltyFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RoyaltyFee;

        /**
         * Verifies a RoyaltyFee message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoyaltyFee message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoyaltyFee
         */
        public static fromObject(object: { [k: string]: any }): proto.RoyaltyFee;

        /**
         * Creates a plain object from a RoyaltyFee message. Also converts values to other types if specified.
         * @param message RoyaltyFee
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RoyaltyFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoyaltyFee to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoyaltyFee
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CustomFee. */
    interface ICustomFee {

        /**
         * A fixed fee to be charged to the `sender` for every token transfer.
         * <p>
         * This type of fee MAY be defined for any token type.<br/>
         * This type of fee MAY be more consistent and reliable than
         * other types.
         */
        fixedFee?: (proto.IFixedFee|null);

        /**
         * A fee defined as a fraction of the tokens transferred.
         * <p>
         * This type of fee MUST NOT be defined for a non-fungible/unique
         * token type.<br/>
         * This fee MAY be charged to either sender, as an increase to the
         * amount sent, or receiver, as a reduction to the amount received.
         */
        fractionalFee?: (proto.IFractionalFee|null);

        /**
         * A fee charged as royalty for any transfer of a
         * non-fungible/unique token.
         * <p>
         * This type of fee MUST NOT be defined for a
         * fungible/common token type.
         */
        royaltyFee?: (proto.IRoyaltyFee|null);

        /** The account to receive the custom fee. */
        feeCollectorAccountId?: (proto.IAccountID|null);

        /**
         * Flag indicating to exempt all custom fee collector accounts for this
         * token type from paying this custom fee when sending tokens.
         * <p>
         * The treasury account for a token, and the account identified by the
         * `fee_collector_account_id` field of this `CustomFee` are always exempt
         * from this custom fee to avoid redundant and unnecessary transfers.
         * If this value is `true` then the account(s) identified in
         * `fee_collector_account_id` for _all_ custom fee definitions for this
         * token type SHALL also be exempt from this custom fee.
         * This behavior is specified in HIP-573.
         */
        allCollectorsAreExempt?: (boolean|null);
    }

    /**
     * A transfer fee to assess during a CryptoTransfer.<br/>
     * This fee applies to transactions that transfer units of the token to
     * which the fee is attached. A custom fee may be either fixed or fractional,
     * and must specify a fee collector account to receive the assessed fees.
     *
     * Custom fees MUST be greater than zero (0).
     */
    class CustomFee implements ICustomFee {

        /**
         * Constructs a new CustomFee.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICustomFee);

        /**
         * A fixed fee to be charged to the `sender` for every token transfer.
         * <p>
         * This type of fee MAY be defined for any token type.<br/>
         * This type of fee MAY be more consistent and reliable than
         * other types.
         */
        public fixedFee?: (proto.IFixedFee|null);

        /**
         * A fee defined as a fraction of the tokens transferred.
         * <p>
         * This type of fee MUST NOT be defined for a non-fungible/unique
         * token type.<br/>
         * This fee MAY be charged to either sender, as an increase to the
         * amount sent, or receiver, as a reduction to the amount received.
         */
        public fractionalFee?: (proto.IFractionalFee|null);

        /**
         * A fee charged as royalty for any transfer of a
         * non-fungible/unique token.
         * <p>
         * This type of fee MUST NOT be defined for a
         * fungible/common token type.
         */
        public royaltyFee?: (proto.IRoyaltyFee|null);

        /** The account to receive the custom fee. */
        public feeCollectorAccountId?: (proto.IAccountID|null);

        /**
         * Flag indicating to exempt all custom fee collector accounts for this
         * token type from paying this custom fee when sending tokens.
         * <p>
         * The treasury account for a token, and the account identified by the
         * `fee_collector_account_id` field of this `CustomFee` are always exempt
         * from this custom fee to avoid redundant and unnecessary transfers.
         * If this value is `true` then the account(s) identified in
         * `fee_collector_account_id` for _all_ custom fee definitions for this
         * token type SHALL also be exempt from this custom fee.
         * This behavior is specified in HIP-573.
         */
        public allCollectorsAreExempt: boolean;

        /** CustomFee fee. */
        public fee?: ("fixedFee"|"fractionalFee"|"royaltyFee");

        /**
         * Creates a new CustomFee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomFee instance
         */
        public static create(properties?: proto.ICustomFee): proto.CustomFee;

        /**
         * Encodes the specified CustomFee message. Does not implicitly {@link proto.CustomFee.verify|verify} messages.
         * @param message CustomFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICustomFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomFee message, length delimited. Does not implicitly {@link proto.CustomFee.verify|verify} messages.
         * @param message CustomFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICustomFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomFee message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CustomFee;

        /**
         * Decodes a CustomFee message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CustomFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CustomFee;

        /**
         * Verifies a CustomFee message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CustomFee message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomFee
         */
        public static fromObject(object: { [k: string]: any }): proto.CustomFee;

        /**
         * Creates a plain object from a CustomFee message. Also converts values to other types if specified.
         * @param message CustomFee
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CustomFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomFee to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CustomFee
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
}
