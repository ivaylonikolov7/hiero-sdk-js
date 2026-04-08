/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.hashgraph_token_info || ($protobuf.roots.hashgraph_token_info = {});

export const proto = $root.proto = (() => {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    const proto = {};

    proto.TokenInfo = (function() {

        /**
         * Properties of a TokenInfo.
         * @memberof proto
         * @interface ITokenInfo
         * @property {proto.ITokenID|null} [tokenId] A unique identifier for this token.
         * @property {string|null} [name] A human-readable name for this token.
         * <p>
         * This value MAY NOT be unique.<br/>
         * This value SHALL NOT exceed 100 bytes when encoded as UTF-8.
         * @property {string|null} [symbol] A human-readable symbol for the token.
         * <p>
         * This value SHALL NOT be unique.<br/>
         * This value SHALL NOT exceed 100 bytes when encoded as UTF-8.
         * @property {number|null} [decimals] A number of decimal places for this token.
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
         * @property {number|Long|null} [totalSupply] A _current_ total supply of this token, expressed in the smallest unit
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
         * @property {proto.IAccountID|null} [treasury] A treasury account identifier for this token.
         * <p>
         * When the token is created, the initial supply given in the token create
         * transaction SHALL be minted and deposited in the treasury account.<br/>
         * All token mint transactions for this token SHALL deposit the new minted
         * tokens in the treasury account.<br/>
         * All token burn transactions for this token SHALL remove the tokens to be
         * burned from the treasury account.
         * @property {proto.IKey|null} [adminKey] Access control for general modification of this token.
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
         * @property {proto.IKey|null} [kycKey] Access control for KYC for this token.
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
         * @property {proto.IKey|null} [freezeKey] Access control to freeze this token.
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
         * @property {proto.IKey|null} [wipeKey] Access control of account wipe for this token.
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
         * @property {proto.IKey|null} [supplyKey] Access control of token mint/burn for this token.
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
         * @property {proto.TokenFreezeStatus|null} [defaultFreezeStatus] A flag indicating if accounts associated to this token are frozen by
         * default, not frozen, or freeze is not applicable.
         * <p>
         * Accounts frozen by default and newly associated with this token CANNOT
         * transact in the token until unfrozen.<br/>
         * This SHALL NOT prevent a `tokenReject` transaction to return the tokens
         * from an account to the treasury account.
         * @property {proto.TokenKycStatus|null} [defaultKycStatus] A flag indicating if accounts associated with this token are granted
         * KYC by default, revoked by default, or KYC is not applicable.
         * @property {boolean|null} [deleted] A flag indicating that this token is deleted.
         * <p>
         * A transaction involving a deleted token MUST NOT succeed.
         * @property {proto.IAccountID|null} [autoRenewAccount] An identifier for the account (if any) that the network will attempt
         * to charge for this token's auto-renewal upon expiration.
         * <p>
         * This field is OPTIONAL. If it is not set then renewal fees SHALL be
         * charged to the account identified by `treasury`.
         * @property {proto.IDuration|null} [autoRenewPeriod] A duration by which the network should automatically extend
         * this token's expiration.
         * <p>
         * If the token has a valid auto-renew account, and is not deleted upon
         * expiration, the network SHALL attempt to automatically renew this
         * token.<br/>
         * The default values for the minimum period and maximum period are 30 days
         * and 90 days, respectively.
         * @property {proto.ITimestamp|null} [expiry] An expiration time for this token, in seconds since the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the
         * UNIX epoch with 0 at `1970-01-01T00:00:00.000Z`.
         * @property {string|null} [memo] A short description of this token.
         * <p>
         * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
         * (default 100) bytes when encoded as UTF-8.
         * @property {proto.TokenType|null} [tokenType] A type for this token.
         * <p>
         * A token SHALL be either `FUNGIBLE_COMMON` or `NON_FUNGIBLE_UNIQUE`.<br/>
         * If this value was omitted during token creation, `FUNGIBLE_COMMON`
         * SHALL be used.<br/>
         * The value `FUNGIBLE_COMMON` SHALL represent a fungible/common token.
         * The value `NON_FUNGIBLE_UNIQUE` SHALL represent a
         * non-fungible/unique token.
         * @property {proto.TokenSupplyType|null} [supplyType] A supply type for this token.
         * <p>
         * A token SHALL have either `INFINITE` or `FINITE` supply type.<br/>
         * If this value was omitted during token creation, the value `INFINITE`
         * SHALL be used.
         * @property {number|Long|null} [maxSupply] A maximum supply of this token.<br/>
         * This is the maximum number of tokens of this type that may be issued.
         * <p>
         * This limit SHALL apply regardless of `token_type`.<br/>
         * If `supply_type` is `INFINITE` then this value MUST be 0.<br/>
         * If `supply_type` is `FINITE`, then this value MUST be greater than 0.
         * @property {proto.IKey|null} [feeScheduleKey] Access control of the `custom_fees` field for this token.
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
         * @property {Array.<proto.ICustomFee>|null} [customFees] A custom fee schedule for this token.
         * @property {proto.IKey|null} [pauseKey] Access control of pause/unpause for this token.
         * <p>
         * A token may be paused, preventing any transaction from transferring that
         * token, by a token update transaction signed by this key.<br/>
         * If this key is not set, the token cannot be paused, and any transaction
         * attempting to pause the token SHALL NOT succeed.<br/>
         * This key MAY be set when the token is created, and MAY be set or modified
         * via a token update transaction signed by the `admin_key`.<br/>
         * If `admin_key` is not set, this value, whether set or unset,
         * SHALL be immutable.
         * @property {proto.TokenPauseStatus|null} [pauseStatus] A flag indicating that this token is paused.<br/>
         * A token may be paused, unpaused, or pause not applicable.
         * <p>
         * A transaction involving a paused token, other than token_unpause,
         * MUST NOT succeed.
         * @property {Uint8Array|null} [ledgerId] The ledger ID of the network that generated this response.
         * <p>
         * This value SHALL identify the distributed ledger that responded to
         * this query.
         * @property {Uint8Array|null} [metadata] A Token "Metadata".
         * <p>
         * This value, if set, SHALL NOT exceed 100 bytes.
         * @property {proto.IKey|null} [metadataKey] Access Control of metadata update for this token.
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

        /**
         * Constructs a new TokenInfo.
         * @memberof proto
         * @classdesc An Hedera Token Service(HTS) token.
         * 
         * A token SHALL represent a fungible or non-fungible unit of exchange.<br/>
         * The specified Treasury Account SHALL receive the initial supply of tokens and
         * SHALL determine distribution of all tokens once minted.
         * @implements ITokenInfo
         * @constructor
         * @param {proto.ITokenInfo=} [properties] Properties to set
         */
        function TokenInfo(properties) {
            this.customFees = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A unique identifier for this token.
         * @member {proto.ITokenID|null|undefined} tokenId
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.tokenId = null;

        /**
         * A human-readable name for this token.
         * <p>
         * This value MAY NOT be unique.<br/>
         * This value SHALL NOT exceed 100 bytes when encoded as UTF-8.
         * @member {string} name
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.name = "";

        /**
         * A human-readable symbol for the token.
         * <p>
         * This value SHALL NOT be unique.<br/>
         * This value SHALL NOT exceed 100 bytes when encoded as UTF-8.
         * @member {string} symbol
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.symbol = "";

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
         * @member {number} decimals
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.decimals = 0;

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
         * @member {number|Long} totalSupply
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.totalSupply = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * A treasury account identifier for this token.
         * <p>
         * When the token is created, the initial supply given in the token create
         * transaction SHALL be minted and deposited in the treasury account.<br/>
         * All token mint transactions for this token SHALL deposit the new minted
         * tokens in the treasury account.<br/>
         * All token burn transactions for this token SHALL remove the tokens to be
         * burned from the treasury account.
         * @member {proto.IAccountID|null|undefined} treasury
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.treasury = null;

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
         * @member {proto.IKey|null|undefined} adminKey
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.adminKey = null;

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
         * @member {proto.IKey|null|undefined} kycKey
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.kycKey = null;

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
         * @member {proto.IKey|null|undefined} freezeKey
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.freezeKey = null;

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
         * @member {proto.IKey|null|undefined} wipeKey
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.wipeKey = null;

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
         * @member {proto.IKey|null|undefined} supplyKey
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.supplyKey = null;

        /**
         * A flag indicating if accounts associated to this token are frozen by
         * default, not frozen, or freeze is not applicable.
         * <p>
         * Accounts frozen by default and newly associated with this token CANNOT
         * transact in the token until unfrozen.<br/>
         * This SHALL NOT prevent a `tokenReject` transaction to return the tokens
         * from an account to the treasury account.
         * @member {proto.TokenFreezeStatus} defaultFreezeStatus
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.defaultFreezeStatus = 0;

        /**
         * A flag indicating if accounts associated with this token are granted
         * KYC by default, revoked by default, or KYC is not applicable.
         * @member {proto.TokenKycStatus} defaultKycStatus
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.defaultKycStatus = 0;

        /**
         * A flag indicating that this token is deleted.
         * <p>
         * A transaction involving a deleted token MUST NOT succeed.
         * @member {boolean} deleted
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.deleted = false;

        /**
         * An identifier for the account (if any) that the network will attempt
         * to charge for this token's auto-renewal upon expiration.
         * <p>
         * This field is OPTIONAL. If it is not set then renewal fees SHALL be
         * charged to the account identified by `treasury`.
         * @member {proto.IAccountID|null|undefined} autoRenewAccount
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.autoRenewAccount = null;

        /**
         * A duration by which the network should automatically extend
         * this token's expiration.
         * <p>
         * If the token has a valid auto-renew account, and is not deleted upon
         * expiration, the network SHALL attempt to automatically renew this
         * token.<br/>
         * The default values for the minimum period and maximum period are 30 days
         * and 90 days, respectively.
         * @member {proto.IDuration|null|undefined} autoRenewPeriod
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.autoRenewPeriod = null;

        /**
         * An expiration time for this token, in seconds since the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the
         * UNIX epoch with 0 at `1970-01-01T00:00:00.000Z`.
         * @member {proto.ITimestamp|null|undefined} expiry
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.expiry = null;

        /**
         * A short description of this token.
         * <p>
         * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
         * (default 100) bytes when encoded as UTF-8.
         * @member {string} memo
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.memo = "";

        /**
         * A type for this token.
         * <p>
         * A token SHALL be either `FUNGIBLE_COMMON` or `NON_FUNGIBLE_UNIQUE`.<br/>
         * If this value was omitted during token creation, `FUNGIBLE_COMMON`
         * SHALL be used.<br/>
         * The value `FUNGIBLE_COMMON` SHALL represent a fungible/common token.
         * The value `NON_FUNGIBLE_UNIQUE` SHALL represent a
         * non-fungible/unique token.
         * @member {proto.TokenType} tokenType
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.tokenType = 0;

        /**
         * A supply type for this token.
         * <p>
         * A token SHALL have either `INFINITE` or `FINITE` supply type.<br/>
         * If this value was omitted during token creation, the value `INFINITE`
         * SHALL be used.
         * @member {proto.TokenSupplyType} supplyType
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.supplyType = 0;

        /**
         * A maximum supply of this token.<br/>
         * This is the maximum number of tokens of this type that may be issued.
         * <p>
         * This limit SHALL apply regardless of `token_type`.<br/>
         * If `supply_type` is `INFINITE` then this value MUST be 0.<br/>
         * If `supply_type` is `FINITE`, then this value MUST be greater than 0.
         * @member {number|Long} maxSupply
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.maxSupply = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
         * @member {proto.IKey|null|undefined} feeScheduleKey
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.feeScheduleKey = null;

        /**
         * A custom fee schedule for this token.
         * @member {Array.<proto.ICustomFee>} customFees
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.customFees = $util.emptyArray;

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
         * @member {proto.IKey|null|undefined} pauseKey
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.pauseKey = null;

        /**
         * A flag indicating that this token is paused.<br/>
         * A token may be paused, unpaused, or pause not applicable.
         * <p>
         * A transaction involving a paused token, other than token_unpause,
         * MUST NOT succeed.
         * @member {proto.TokenPauseStatus} pauseStatus
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.pauseStatus = 0;

        /**
         * The ledger ID of the network that generated this response.
         * <p>
         * This value SHALL identify the distributed ledger that responded to
         * this query.
         * @member {Uint8Array} ledgerId
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.ledgerId = $util.newBuffer([]);

        /**
         * A Token "Metadata".
         * <p>
         * This value, if set, SHALL NOT exceed 100 bytes.
         * @member {Uint8Array} metadata
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.metadata = $util.newBuffer([]);

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
         * @member {proto.IKey|null|undefined} metadataKey
         * @memberof proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.metadataKey = null;

        /**
         * Creates a new TokenInfo instance using the specified properties.
         * @function create
         * @memberof proto.TokenInfo
         * @static
         * @param {proto.ITokenInfo=} [properties] Properties to set
         * @returns {proto.TokenInfo} TokenInfo instance
         */
        TokenInfo.create = function create(properties) {
            return new TokenInfo(properties);
        };

        /**
         * Encodes the specified TokenInfo message. Does not implicitly {@link proto.TokenInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.TokenInfo
         * @static
         * @param {proto.ITokenInfo} message TokenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tokenId != null && Object.hasOwnProperty.call(message, "tokenId"))
                $root.proto.TokenID.encode(message.tokenId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.symbol);
            if (message.decimals != null && Object.hasOwnProperty.call(message, "decimals"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.decimals);
            if (message.totalSupply != null && Object.hasOwnProperty.call(message, "totalSupply"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.totalSupply);
            if (message.treasury != null && Object.hasOwnProperty.call(message, "treasury"))
                $root.proto.AccountID.encode(message.treasury, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.adminKey != null && Object.hasOwnProperty.call(message, "adminKey"))
                $root.proto.Key.encode(message.adminKey, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.kycKey != null && Object.hasOwnProperty.call(message, "kycKey"))
                $root.proto.Key.encode(message.kycKey, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.freezeKey != null && Object.hasOwnProperty.call(message, "freezeKey"))
                $root.proto.Key.encode(message.freezeKey, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.wipeKey != null && Object.hasOwnProperty.call(message, "wipeKey"))
                $root.proto.Key.encode(message.wipeKey, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.supplyKey != null && Object.hasOwnProperty.call(message, "supplyKey"))
                $root.proto.Key.encode(message.supplyKey, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.defaultFreezeStatus != null && Object.hasOwnProperty.call(message, "defaultFreezeStatus"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.defaultFreezeStatus);
            if (message.defaultKycStatus != null && Object.hasOwnProperty.call(message, "defaultKycStatus"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.defaultKycStatus);
            if (message.deleted != null && Object.hasOwnProperty.call(message, "deleted"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.deleted);
            if (message.autoRenewAccount != null && Object.hasOwnProperty.call(message, "autoRenewAccount"))
                $root.proto.AccountID.encode(message.autoRenewAccount, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.autoRenewPeriod != null && Object.hasOwnProperty.call(message, "autoRenewPeriod"))
                $root.proto.Duration.encode(message.autoRenewPeriod, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.expiry != null && Object.hasOwnProperty.call(message, "expiry"))
                $root.proto.Timestamp.encode(message.expiry, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.memo);
            if (message.tokenType != null && Object.hasOwnProperty.call(message, "tokenType"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.tokenType);
            if (message.supplyType != null && Object.hasOwnProperty.call(message, "supplyType"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.supplyType);
            if (message.maxSupply != null && Object.hasOwnProperty.call(message, "maxSupply"))
                writer.uint32(/* id 21, wireType 0 =*/168).int64(message.maxSupply);
            if (message.feeScheduleKey != null && Object.hasOwnProperty.call(message, "feeScheduleKey"))
                $root.proto.Key.encode(message.feeScheduleKey, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.customFees != null && message.customFees.length)
                for (let i = 0; i < message.customFees.length; ++i)
                    $root.proto.CustomFee.encode(message.customFees[i], writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.pauseKey != null && Object.hasOwnProperty.call(message, "pauseKey"))
                $root.proto.Key.encode(message.pauseKey, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.pauseStatus != null && Object.hasOwnProperty.call(message, "pauseStatus"))
                writer.uint32(/* id 25, wireType 0 =*/200).int32(message.pauseStatus);
            if (message.ledgerId != null && Object.hasOwnProperty.call(message, "ledgerId"))
                writer.uint32(/* id 26, wireType 2 =*/210).bytes(message.ledgerId);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                writer.uint32(/* id 27, wireType 2 =*/218).bytes(message.metadata);
            if (message.metadataKey != null && Object.hasOwnProperty.call(message, "metadataKey"))
                $root.proto.Key.encode(message.metadataKey, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TokenInfo message, length delimited. Does not implicitly {@link proto.TokenInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TokenInfo
         * @static
         * @param {proto.ITokenInfo} message TokenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TokenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TokenInfo} TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TokenInfo();
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
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.symbol = reader.string();
                        break;
                    }
                case 4: {
                        message.decimals = reader.uint32();
                        break;
                    }
                case 5: {
                        message.totalSupply = reader.uint64();
                        break;
                    }
                case 6: {
                        message.treasury = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.adminKey = $root.proto.Key.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.kycKey = $root.proto.Key.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.freezeKey = $root.proto.Key.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.wipeKey = $root.proto.Key.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.supplyKey = $root.proto.Key.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.defaultFreezeStatus = reader.int32();
                        break;
                    }
                case 13: {
                        message.defaultKycStatus = reader.int32();
                        break;
                    }
                case 14: {
                        message.deleted = reader.bool();
                        break;
                    }
                case 15: {
                        message.autoRenewAccount = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.autoRenewPeriod = $root.proto.Duration.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.expiry = $root.proto.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.memo = reader.string();
                        break;
                    }
                case 19: {
                        message.tokenType = reader.int32();
                        break;
                    }
                case 20: {
                        message.supplyType = reader.int32();
                        break;
                    }
                case 21: {
                        message.maxSupply = reader.int64();
                        break;
                    }
                case 22: {
                        message.feeScheduleKey = $root.proto.Key.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        if (!(message.customFees && message.customFees.length))
                            message.customFees = [];
                        message.customFees.push($root.proto.CustomFee.decode(reader, reader.uint32()));
                        break;
                    }
                case 24: {
                        message.pauseKey = $root.proto.Key.decode(reader, reader.uint32());
                        break;
                    }
                case 25: {
                        message.pauseStatus = reader.int32();
                        break;
                    }
                case 26: {
                        message.ledgerId = reader.bytes();
                        break;
                    }
                case 27: {
                        message.metadata = reader.bytes();
                        break;
                    }
                case 28: {
                        message.metadataKey = $root.proto.Key.decode(reader, reader.uint32());
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
         * Decodes a TokenInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TokenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TokenInfo} TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenInfo message.
         * @function verify
         * @memberof proto.TokenInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tokenId != null && message.hasOwnProperty("tokenId")) {
                let error = $root.proto.TokenID.verify(message.tokenId);
                if (error)
                    return "tokenId." + error;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.decimals != null && message.hasOwnProperty("decimals"))
                if (!$util.isInteger(message.decimals))
                    return "decimals: integer expected";
            if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
                if (!$util.isInteger(message.totalSupply) && !(message.totalSupply && $util.isInteger(message.totalSupply.low) && $util.isInteger(message.totalSupply.high)))
                    return "totalSupply: integer|Long expected";
            if (message.treasury != null && message.hasOwnProperty("treasury")) {
                let error = $root.proto.AccountID.verify(message.treasury);
                if (error)
                    return "treasury." + error;
            }
            if (message.adminKey != null && message.hasOwnProperty("adminKey")) {
                let error = $root.proto.Key.verify(message.adminKey);
                if (error)
                    return "adminKey." + error;
            }
            if (message.kycKey != null && message.hasOwnProperty("kycKey")) {
                let error = $root.proto.Key.verify(message.kycKey);
                if (error)
                    return "kycKey." + error;
            }
            if (message.freezeKey != null && message.hasOwnProperty("freezeKey")) {
                let error = $root.proto.Key.verify(message.freezeKey);
                if (error)
                    return "freezeKey." + error;
            }
            if (message.wipeKey != null && message.hasOwnProperty("wipeKey")) {
                let error = $root.proto.Key.verify(message.wipeKey);
                if (error)
                    return "wipeKey." + error;
            }
            if (message.supplyKey != null && message.hasOwnProperty("supplyKey")) {
                let error = $root.proto.Key.verify(message.supplyKey);
                if (error)
                    return "supplyKey." + error;
            }
            if (message.defaultFreezeStatus != null && message.hasOwnProperty("defaultFreezeStatus"))
                switch (message.defaultFreezeStatus) {
                default:
                    return "defaultFreezeStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.defaultKycStatus != null && message.hasOwnProperty("defaultKycStatus"))
                switch (message.defaultKycStatus) {
                default:
                    return "defaultKycStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                if (typeof message.deleted !== "boolean")
                    return "deleted: boolean expected";
            if (message.autoRenewAccount != null && message.hasOwnProperty("autoRenewAccount")) {
                let error = $root.proto.AccountID.verify(message.autoRenewAccount);
                if (error)
                    return "autoRenewAccount." + error;
            }
            if (message.autoRenewPeriod != null && message.hasOwnProperty("autoRenewPeriod")) {
                let error = $root.proto.Duration.verify(message.autoRenewPeriod);
                if (error)
                    return "autoRenewPeriod." + error;
            }
            if (message.expiry != null && message.hasOwnProperty("expiry")) {
                let error = $root.proto.Timestamp.verify(message.expiry);
                if (error)
                    return "expiry." + error;
            }
            if (message.memo != null && message.hasOwnProperty("memo"))
                if (!$util.isString(message.memo))
                    return "memo: string expected";
            if (message.tokenType != null && message.hasOwnProperty("tokenType"))
                switch (message.tokenType) {
                default:
                    return "tokenType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.supplyType != null && message.hasOwnProperty("supplyType"))
                switch (message.supplyType) {
                default:
                    return "supplyType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.maxSupply != null && message.hasOwnProperty("maxSupply"))
                if (!$util.isInteger(message.maxSupply) && !(message.maxSupply && $util.isInteger(message.maxSupply.low) && $util.isInteger(message.maxSupply.high)))
                    return "maxSupply: integer|Long expected";
            if (message.feeScheduleKey != null && message.hasOwnProperty("feeScheduleKey")) {
                let error = $root.proto.Key.verify(message.feeScheduleKey);
                if (error)
                    return "feeScheduleKey." + error;
            }
            if (message.customFees != null && message.hasOwnProperty("customFees")) {
                if (!Array.isArray(message.customFees))
                    return "customFees: array expected";
                for (let i = 0; i < message.customFees.length; ++i) {
                    let error = $root.proto.CustomFee.verify(message.customFees[i]);
                    if (error)
                        return "customFees." + error;
                }
            }
            if (message.pauseKey != null && message.hasOwnProperty("pauseKey")) {
                let error = $root.proto.Key.verify(message.pauseKey);
                if (error)
                    return "pauseKey." + error;
            }
            if (message.pauseStatus != null && message.hasOwnProperty("pauseStatus"))
                switch (message.pauseStatus) {
                default:
                    return "pauseStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.ledgerId != null && message.hasOwnProperty("ledgerId"))
                if (!(message.ledgerId && typeof message.ledgerId.length === "number" || $util.isString(message.ledgerId)))
                    return "ledgerId: buffer expected";
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                if (!(message.metadata && typeof message.metadata.length === "number" || $util.isString(message.metadata)))
                    return "metadata: buffer expected";
            if (message.metadataKey != null && message.hasOwnProperty("metadataKey")) {
                let error = $root.proto.Key.verify(message.metadataKey);
                if (error)
                    return "metadataKey." + error;
            }
            return null;
        };

        /**
         * Creates a TokenInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TokenInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TokenInfo} TokenInfo
         */
        TokenInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TokenInfo)
                return object;
            let message = new $root.proto.TokenInfo();
            if (object.tokenId != null) {
                if (typeof object.tokenId !== "object")
                    throw TypeError(".proto.TokenInfo.tokenId: object expected");
                message.tokenId = $root.proto.TokenID.fromObject(object.tokenId);
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.decimals != null)
                message.decimals = object.decimals >>> 0;
            if (object.totalSupply != null)
                if ($util.Long)
                    (message.totalSupply = $util.Long.fromValue(object.totalSupply)).unsigned = true;
                else if (typeof object.totalSupply === "string")
                    message.totalSupply = parseInt(object.totalSupply, 10);
                else if (typeof object.totalSupply === "number")
                    message.totalSupply = object.totalSupply;
                else if (typeof object.totalSupply === "object")
                    message.totalSupply = new $util.LongBits(object.totalSupply.low >>> 0, object.totalSupply.high >>> 0).toNumber(true);
            if (object.treasury != null) {
                if (typeof object.treasury !== "object")
                    throw TypeError(".proto.TokenInfo.treasury: object expected");
                message.treasury = $root.proto.AccountID.fromObject(object.treasury);
            }
            if (object.adminKey != null) {
                if (typeof object.adminKey !== "object")
                    throw TypeError(".proto.TokenInfo.adminKey: object expected");
                message.adminKey = $root.proto.Key.fromObject(object.adminKey);
            }
            if (object.kycKey != null) {
                if (typeof object.kycKey !== "object")
                    throw TypeError(".proto.TokenInfo.kycKey: object expected");
                message.kycKey = $root.proto.Key.fromObject(object.kycKey);
            }
            if (object.freezeKey != null) {
                if (typeof object.freezeKey !== "object")
                    throw TypeError(".proto.TokenInfo.freezeKey: object expected");
                message.freezeKey = $root.proto.Key.fromObject(object.freezeKey);
            }
            if (object.wipeKey != null) {
                if (typeof object.wipeKey !== "object")
                    throw TypeError(".proto.TokenInfo.wipeKey: object expected");
                message.wipeKey = $root.proto.Key.fromObject(object.wipeKey);
            }
            if (object.supplyKey != null) {
                if (typeof object.supplyKey !== "object")
                    throw TypeError(".proto.TokenInfo.supplyKey: object expected");
                message.supplyKey = $root.proto.Key.fromObject(object.supplyKey);
            }
            switch (object.defaultFreezeStatus) {
            default:
                if (typeof object.defaultFreezeStatus === "number") {
                    message.defaultFreezeStatus = object.defaultFreezeStatus;
                    break;
                }
                break;
            case "FreezeNotApplicable":
            case 0:
                message.defaultFreezeStatus = 0;
                break;
            case "Frozen":
            case 1:
                message.defaultFreezeStatus = 1;
                break;
            case "Unfrozen":
            case 2:
                message.defaultFreezeStatus = 2;
                break;
            }
            switch (object.defaultKycStatus) {
            default:
                if (typeof object.defaultKycStatus === "number") {
                    message.defaultKycStatus = object.defaultKycStatus;
                    break;
                }
                break;
            case "KycNotApplicable":
            case 0:
                message.defaultKycStatus = 0;
                break;
            case "Granted":
            case 1:
                message.defaultKycStatus = 1;
                break;
            case "Revoked":
            case 2:
                message.defaultKycStatus = 2;
                break;
            }
            if (object.deleted != null)
                message.deleted = Boolean(object.deleted);
            if (object.autoRenewAccount != null) {
                if (typeof object.autoRenewAccount !== "object")
                    throw TypeError(".proto.TokenInfo.autoRenewAccount: object expected");
                message.autoRenewAccount = $root.proto.AccountID.fromObject(object.autoRenewAccount);
            }
            if (object.autoRenewPeriod != null) {
                if (typeof object.autoRenewPeriod !== "object")
                    throw TypeError(".proto.TokenInfo.autoRenewPeriod: object expected");
                message.autoRenewPeriod = $root.proto.Duration.fromObject(object.autoRenewPeriod);
            }
            if (object.expiry != null) {
                if (typeof object.expiry !== "object")
                    throw TypeError(".proto.TokenInfo.expiry: object expected");
                message.expiry = $root.proto.Timestamp.fromObject(object.expiry);
            }
            if (object.memo != null)
                message.memo = String(object.memo);
            switch (object.tokenType) {
            default:
                if (typeof object.tokenType === "number") {
                    message.tokenType = object.tokenType;
                    break;
                }
                break;
            case "FUNGIBLE_COMMON":
            case 0:
                message.tokenType = 0;
                break;
            case "NON_FUNGIBLE_UNIQUE":
            case 1:
                message.tokenType = 1;
                break;
            }
            switch (object.supplyType) {
            default:
                if (typeof object.supplyType === "number") {
                    message.supplyType = object.supplyType;
                    break;
                }
                break;
            case "INFINITE":
            case 0:
                message.supplyType = 0;
                break;
            case "FINITE":
            case 1:
                message.supplyType = 1;
                break;
            }
            if (object.maxSupply != null)
                if ($util.Long)
                    (message.maxSupply = $util.Long.fromValue(object.maxSupply)).unsigned = false;
                else if (typeof object.maxSupply === "string")
                    message.maxSupply = parseInt(object.maxSupply, 10);
                else if (typeof object.maxSupply === "number")
                    message.maxSupply = object.maxSupply;
                else if (typeof object.maxSupply === "object")
                    message.maxSupply = new $util.LongBits(object.maxSupply.low >>> 0, object.maxSupply.high >>> 0).toNumber();
            if (object.feeScheduleKey != null) {
                if (typeof object.feeScheduleKey !== "object")
                    throw TypeError(".proto.TokenInfo.feeScheduleKey: object expected");
                message.feeScheduleKey = $root.proto.Key.fromObject(object.feeScheduleKey);
            }
            if (object.customFees) {
                if (!Array.isArray(object.customFees))
                    throw TypeError(".proto.TokenInfo.customFees: array expected");
                message.customFees = [];
                for (let i = 0; i < object.customFees.length; ++i) {
                    if (typeof object.customFees[i] !== "object")
                        throw TypeError(".proto.TokenInfo.customFees: object expected");
                    message.customFees[i] = $root.proto.CustomFee.fromObject(object.customFees[i]);
                }
            }
            if (object.pauseKey != null) {
                if (typeof object.pauseKey !== "object")
                    throw TypeError(".proto.TokenInfo.pauseKey: object expected");
                message.pauseKey = $root.proto.Key.fromObject(object.pauseKey);
            }
            switch (object.pauseStatus) {
            default:
                if (typeof object.pauseStatus === "number") {
                    message.pauseStatus = object.pauseStatus;
                    break;
                }
                break;
            case "PauseNotApplicable":
            case 0:
                message.pauseStatus = 0;
                break;
            case "Paused":
            case 1:
                message.pauseStatus = 1;
                break;
            case "Unpaused":
            case 2:
                message.pauseStatus = 2;
                break;
            }
            if (object.ledgerId != null)
                if (typeof object.ledgerId === "string")
                    $util.base64.decode(object.ledgerId, message.ledgerId = $util.newBuffer($util.base64.length(object.ledgerId)), 0);
                else if (object.ledgerId.length >= 0)
                    message.ledgerId = object.ledgerId;
            if (object.metadata != null)
                if (typeof object.metadata === "string")
                    $util.base64.decode(object.metadata, message.metadata = $util.newBuffer($util.base64.length(object.metadata)), 0);
                else if (object.metadata.length >= 0)
                    message.metadata = object.metadata;
            if (object.metadataKey != null) {
                if (typeof object.metadataKey !== "object")
                    throw TypeError(".proto.TokenInfo.metadataKey: object expected");
                message.metadataKey = $root.proto.Key.fromObject(object.metadataKey);
            }
            return message;
        };

        /**
         * Creates a plain object from a TokenInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TokenInfo
         * @static
         * @param {proto.TokenInfo} message TokenInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.customFees = [];
            if (options.defaults) {
                object.tokenId = null;
                object.name = "";
                object.symbol = "";
                object.decimals = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.totalSupply = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalSupply = options.longs === String ? "0" : 0;
                object.treasury = null;
                object.adminKey = null;
                object.kycKey = null;
                object.freezeKey = null;
                object.wipeKey = null;
                object.supplyKey = null;
                object.defaultFreezeStatus = options.enums === String ? "FreezeNotApplicable" : 0;
                object.defaultKycStatus = options.enums === String ? "KycNotApplicable" : 0;
                object.deleted = false;
                object.autoRenewAccount = null;
                object.autoRenewPeriod = null;
                object.expiry = null;
                object.memo = "";
                object.tokenType = options.enums === String ? "FUNGIBLE_COMMON" : 0;
                object.supplyType = options.enums === String ? "INFINITE" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.maxSupply = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxSupply = options.longs === String ? "0" : 0;
                object.feeScheduleKey = null;
                object.pauseKey = null;
                object.pauseStatus = options.enums === String ? "PauseNotApplicable" : 0;
                if (options.bytes === String)
                    object.ledgerId = "";
                else {
                    object.ledgerId = [];
                    if (options.bytes !== Array)
                        object.ledgerId = $util.newBuffer(object.ledgerId);
                }
                if (options.bytes === String)
                    object.metadata = "";
                else {
                    object.metadata = [];
                    if (options.bytes !== Array)
                        object.metadata = $util.newBuffer(object.metadata);
                }
                object.metadataKey = null;
            }
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                object.tokenId = $root.proto.TokenID.toObject(message.tokenId, options);
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.decimals != null && message.hasOwnProperty("decimals"))
                object.decimals = message.decimals;
            if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
                if (typeof message.totalSupply === "number")
                    object.totalSupply = options.longs === String ? String(message.totalSupply) : message.totalSupply;
                else
                    object.totalSupply = options.longs === String ? $util.Long.prototype.toString.call(message.totalSupply) : options.longs === Number ? new $util.LongBits(message.totalSupply.low >>> 0, message.totalSupply.high >>> 0).toNumber(true) : message.totalSupply;
            if (message.treasury != null && message.hasOwnProperty("treasury"))
                object.treasury = $root.proto.AccountID.toObject(message.treasury, options);
            if (message.adminKey != null && message.hasOwnProperty("adminKey"))
                object.adminKey = $root.proto.Key.toObject(message.adminKey, options);
            if (message.kycKey != null && message.hasOwnProperty("kycKey"))
                object.kycKey = $root.proto.Key.toObject(message.kycKey, options);
            if (message.freezeKey != null && message.hasOwnProperty("freezeKey"))
                object.freezeKey = $root.proto.Key.toObject(message.freezeKey, options);
            if (message.wipeKey != null && message.hasOwnProperty("wipeKey"))
                object.wipeKey = $root.proto.Key.toObject(message.wipeKey, options);
            if (message.supplyKey != null && message.hasOwnProperty("supplyKey"))
                object.supplyKey = $root.proto.Key.toObject(message.supplyKey, options);
            if (message.defaultFreezeStatus != null && message.hasOwnProperty("defaultFreezeStatus"))
                object.defaultFreezeStatus = options.enums === String ? $root.proto.TokenFreezeStatus[message.defaultFreezeStatus] === undefined ? message.defaultFreezeStatus : $root.proto.TokenFreezeStatus[message.defaultFreezeStatus] : message.defaultFreezeStatus;
            if (message.defaultKycStatus != null && message.hasOwnProperty("defaultKycStatus"))
                object.defaultKycStatus = options.enums === String ? $root.proto.TokenKycStatus[message.defaultKycStatus] === undefined ? message.defaultKycStatus : $root.proto.TokenKycStatus[message.defaultKycStatus] : message.defaultKycStatus;
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                object.deleted = message.deleted;
            if (message.autoRenewAccount != null && message.hasOwnProperty("autoRenewAccount"))
                object.autoRenewAccount = $root.proto.AccountID.toObject(message.autoRenewAccount, options);
            if (message.autoRenewPeriod != null && message.hasOwnProperty("autoRenewPeriod"))
                object.autoRenewPeriod = $root.proto.Duration.toObject(message.autoRenewPeriod, options);
            if (message.expiry != null && message.hasOwnProperty("expiry"))
                object.expiry = $root.proto.Timestamp.toObject(message.expiry, options);
            if (message.memo != null && message.hasOwnProperty("memo"))
                object.memo = message.memo;
            if (message.tokenType != null && message.hasOwnProperty("tokenType"))
                object.tokenType = options.enums === String ? $root.proto.TokenType[message.tokenType] === undefined ? message.tokenType : $root.proto.TokenType[message.tokenType] : message.tokenType;
            if (message.supplyType != null && message.hasOwnProperty("supplyType"))
                object.supplyType = options.enums === String ? $root.proto.TokenSupplyType[message.supplyType] === undefined ? message.supplyType : $root.proto.TokenSupplyType[message.supplyType] : message.supplyType;
            if (message.maxSupply != null && message.hasOwnProperty("maxSupply"))
                if (typeof message.maxSupply === "number")
                    object.maxSupply = options.longs === String ? String(message.maxSupply) : message.maxSupply;
                else
                    object.maxSupply = options.longs === String ? $util.Long.prototype.toString.call(message.maxSupply) : options.longs === Number ? new $util.LongBits(message.maxSupply.low >>> 0, message.maxSupply.high >>> 0).toNumber() : message.maxSupply;
            if (message.feeScheduleKey != null && message.hasOwnProperty("feeScheduleKey"))
                object.feeScheduleKey = $root.proto.Key.toObject(message.feeScheduleKey, options);
            if (message.customFees && message.customFees.length) {
                object.customFees = [];
                for (let j = 0; j < message.customFees.length; ++j)
                    object.customFees[j] = $root.proto.CustomFee.toObject(message.customFees[j], options);
            }
            if (message.pauseKey != null && message.hasOwnProperty("pauseKey"))
                object.pauseKey = $root.proto.Key.toObject(message.pauseKey, options);
            if (message.pauseStatus != null && message.hasOwnProperty("pauseStatus"))
                object.pauseStatus = options.enums === String ? $root.proto.TokenPauseStatus[message.pauseStatus] === undefined ? message.pauseStatus : $root.proto.TokenPauseStatus[message.pauseStatus] : message.pauseStatus;
            if (message.ledgerId != null && message.hasOwnProperty("ledgerId"))
                object.ledgerId = options.bytes === String ? $util.base64.encode(message.ledgerId, 0, message.ledgerId.length) : options.bytes === Array ? Array.prototype.slice.call(message.ledgerId) : message.ledgerId;
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = options.bytes === String ? $util.base64.encode(message.metadata, 0, message.metadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.metadata) : message.metadata;
            if (message.metadataKey != null && message.hasOwnProperty("metadataKey"))
                object.metadataKey = $root.proto.Key.toObject(message.metadataKey, options);
            return object;
        };

        /**
         * Converts this TokenInfo to JSON.
         * @function toJSON
         * @memberof proto.TokenInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenInfo
         * @function getTypeUrl
         * @memberof proto.TokenInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TokenInfo";
        };

        return TokenInfo;
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

    proto.FractionalFee = (function() {

        /**
         * Properties of a FractionalFee.
         * @memberof proto
         * @interface IFractionalFee
         * @property {proto.IFraction|null} [fractionalAmount] A Fraction of the transferred tokens to assess as a fee.<br/>
         * This value MUST be less than or equal to one.<br/>
         * This value MUST be greater than zero.
         * @property {number|Long|null} [minimumAmount] A minimum fee to charge, in units of 10<sup>-decimals</sup> tokens.
         * <p>
         * This value is OPTIONAL, with a default of `0` indicating no minimum.<br/>
         * If set, this value MUST be greater than zero.<br/>
         * If set, all transfers SHALL pay at least this amount.
         * @property {number|Long|null} [maximumAmount] A maximum fee to charge, in units of 10<sup>-decimals</sup> tokens.
         * <p>
         * This value is OPTIONAL, with a default of `0` indicating no maximum.<br/>
         * If set, this value MUST be greater than zero.<br/>
         * If set, any fee charged SHALL NOT exceed this value.<br/>
         * This value SHOULD be strictly greater than `minimum_amount`.
         * If this amount is less than or equal to `minimum_amount`, then
         * the fee charged SHALL always be equal to this value and
         * `fractional_amount` SHALL NOT have any effect.
         * @property {boolean|null} [netOfTransfers] Flag requesting to assess the calculated fee against the sender,
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

        /**
         * Constructs a new FractionalFee.
         * @memberof proto
         * @classdesc A descriptor for a fee based on a portion of the tokens transferred.
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
         * @implements IFractionalFee
         * @constructor
         * @param {proto.IFractionalFee=} [properties] Properties to set
         */
        function FractionalFee(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A Fraction of the transferred tokens to assess as a fee.<br/>
         * This value MUST be less than or equal to one.<br/>
         * This value MUST be greater than zero.
         * @member {proto.IFraction|null|undefined} fractionalAmount
         * @memberof proto.FractionalFee
         * @instance
         */
        FractionalFee.prototype.fractionalAmount = null;

        /**
         * A minimum fee to charge, in units of 10<sup>-decimals</sup> tokens.
         * <p>
         * This value is OPTIONAL, with a default of `0` indicating no minimum.<br/>
         * If set, this value MUST be greater than zero.<br/>
         * If set, all transfers SHALL pay at least this amount.
         * @member {number|Long} minimumAmount
         * @memberof proto.FractionalFee
         * @instance
         */
        FractionalFee.prototype.minimumAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
         * @member {number|Long} maximumAmount
         * @memberof proto.FractionalFee
         * @instance
         */
        FractionalFee.prototype.maximumAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
         * @member {boolean} netOfTransfers
         * @memberof proto.FractionalFee
         * @instance
         */
        FractionalFee.prototype.netOfTransfers = false;

        /**
         * Creates a new FractionalFee instance using the specified properties.
         * @function create
         * @memberof proto.FractionalFee
         * @static
         * @param {proto.IFractionalFee=} [properties] Properties to set
         * @returns {proto.FractionalFee} FractionalFee instance
         */
        FractionalFee.create = function create(properties) {
            return new FractionalFee(properties);
        };

        /**
         * Encodes the specified FractionalFee message. Does not implicitly {@link proto.FractionalFee.verify|verify} messages.
         * @function encode
         * @memberof proto.FractionalFee
         * @static
         * @param {proto.IFractionalFee} message FractionalFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FractionalFee.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fractionalAmount != null && Object.hasOwnProperty.call(message, "fractionalAmount"))
                $root.proto.Fraction.encode(message.fractionalAmount, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.minimumAmount != null && Object.hasOwnProperty.call(message, "minimumAmount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.minimumAmount);
            if (message.maximumAmount != null && Object.hasOwnProperty.call(message, "maximumAmount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.maximumAmount);
            if (message.netOfTransfers != null && Object.hasOwnProperty.call(message, "netOfTransfers"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.netOfTransfers);
            return writer;
        };

        /**
         * Encodes the specified FractionalFee message, length delimited. Does not implicitly {@link proto.FractionalFee.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FractionalFee
         * @static
         * @param {proto.IFractionalFee} message FractionalFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FractionalFee.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FractionalFee message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FractionalFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FractionalFee} FractionalFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FractionalFee.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FractionalFee();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.fractionalAmount = $root.proto.Fraction.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.minimumAmount = reader.int64();
                        break;
                    }
                case 3: {
                        message.maximumAmount = reader.int64();
                        break;
                    }
                case 4: {
                        message.netOfTransfers = reader.bool();
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
         * Decodes a FractionalFee message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FractionalFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FractionalFee} FractionalFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FractionalFee.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FractionalFee message.
         * @function verify
         * @memberof proto.FractionalFee
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FractionalFee.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fractionalAmount != null && message.hasOwnProperty("fractionalAmount")) {
                let error = $root.proto.Fraction.verify(message.fractionalAmount);
                if (error)
                    return "fractionalAmount." + error;
            }
            if (message.minimumAmount != null && message.hasOwnProperty("minimumAmount"))
                if (!$util.isInteger(message.minimumAmount) && !(message.minimumAmount && $util.isInteger(message.minimumAmount.low) && $util.isInteger(message.minimumAmount.high)))
                    return "minimumAmount: integer|Long expected";
            if (message.maximumAmount != null && message.hasOwnProperty("maximumAmount"))
                if (!$util.isInteger(message.maximumAmount) && !(message.maximumAmount && $util.isInteger(message.maximumAmount.low) && $util.isInteger(message.maximumAmount.high)))
                    return "maximumAmount: integer|Long expected";
            if (message.netOfTransfers != null && message.hasOwnProperty("netOfTransfers"))
                if (typeof message.netOfTransfers !== "boolean")
                    return "netOfTransfers: boolean expected";
            return null;
        };

        /**
         * Creates a FractionalFee message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FractionalFee
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FractionalFee} FractionalFee
         */
        FractionalFee.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FractionalFee)
                return object;
            let message = new $root.proto.FractionalFee();
            if (object.fractionalAmount != null) {
                if (typeof object.fractionalAmount !== "object")
                    throw TypeError(".proto.FractionalFee.fractionalAmount: object expected");
                message.fractionalAmount = $root.proto.Fraction.fromObject(object.fractionalAmount);
            }
            if (object.minimumAmount != null)
                if ($util.Long)
                    (message.minimumAmount = $util.Long.fromValue(object.minimumAmount)).unsigned = false;
                else if (typeof object.minimumAmount === "string")
                    message.minimumAmount = parseInt(object.minimumAmount, 10);
                else if (typeof object.minimumAmount === "number")
                    message.minimumAmount = object.minimumAmount;
                else if (typeof object.minimumAmount === "object")
                    message.minimumAmount = new $util.LongBits(object.minimumAmount.low >>> 0, object.minimumAmount.high >>> 0).toNumber();
            if (object.maximumAmount != null)
                if ($util.Long)
                    (message.maximumAmount = $util.Long.fromValue(object.maximumAmount)).unsigned = false;
                else if (typeof object.maximumAmount === "string")
                    message.maximumAmount = parseInt(object.maximumAmount, 10);
                else if (typeof object.maximumAmount === "number")
                    message.maximumAmount = object.maximumAmount;
                else if (typeof object.maximumAmount === "object")
                    message.maximumAmount = new $util.LongBits(object.maximumAmount.low >>> 0, object.maximumAmount.high >>> 0).toNumber();
            if (object.netOfTransfers != null)
                message.netOfTransfers = Boolean(object.netOfTransfers);
            return message;
        };

        /**
         * Creates a plain object from a FractionalFee message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FractionalFee
         * @static
         * @param {proto.FractionalFee} message FractionalFee
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FractionalFee.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fractionalAmount = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.minimumAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.minimumAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.maximumAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maximumAmount = options.longs === String ? "0" : 0;
                object.netOfTransfers = false;
            }
            if (message.fractionalAmount != null && message.hasOwnProperty("fractionalAmount"))
                object.fractionalAmount = $root.proto.Fraction.toObject(message.fractionalAmount, options);
            if (message.minimumAmount != null && message.hasOwnProperty("minimumAmount"))
                if (typeof message.minimumAmount === "number")
                    object.minimumAmount = options.longs === String ? String(message.minimumAmount) : message.minimumAmount;
                else
                    object.minimumAmount = options.longs === String ? $util.Long.prototype.toString.call(message.minimumAmount) : options.longs === Number ? new $util.LongBits(message.minimumAmount.low >>> 0, message.minimumAmount.high >>> 0).toNumber() : message.minimumAmount;
            if (message.maximumAmount != null && message.hasOwnProperty("maximumAmount"))
                if (typeof message.maximumAmount === "number")
                    object.maximumAmount = options.longs === String ? String(message.maximumAmount) : message.maximumAmount;
                else
                    object.maximumAmount = options.longs === String ? $util.Long.prototype.toString.call(message.maximumAmount) : options.longs === Number ? new $util.LongBits(message.maximumAmount.low >>> 0, message.maximumAmount.high >>> 0).toNumber() : message.maximumAmount;
            if (message.netOfTransfers != null && message.hasOwnProperty("netOfTransfers"))
                object.netOfTransfers = message.netOfTransfers;
            return object;
        };

        /**
         * Converts this FractionalFee to JSON.
         * @function toJSON
         * @memberof proto.FractionalFee
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FractionalFee.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FractionalFee
         * @function getTypeUrl
         * @memberof proto.FractionalFee
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FractionalFee.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.FractionalFee";
        };

        return FractionalFee;
    })();

    proto.FixedFee = (function() {

        /**
         * Properties of a FixedFee.
         * @memberof proto
         * @interface IFixedFee
         * @property {number|Long|null} [amount] The amount to assess for each transfer.
         * <p>
         * This value MUST be greater than `0`.<br/>
         * This amount is expressed in units of 10<sup>-decimals</sup> tokens.
         * @property {proto.ITokenID|null} [denominatingTokenId] The token type used to pay the assessed fee.
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

        /**
         * Constructs a new FixedFee.
         * @memberof proto
         * @classdesc A fixed fee to assess for each token transfer, regardless of the
         * amount transferred.<br/>
         * This fee type describes a fixed fee for each transfer of a token type.
         * 
         * The fee SHALL be charged to the `sender` for the token transfer
         * transaction.<br/>
         * This fee MAY be assessed in HBAR, the token type transferred, or any
         * other token type, as determined by the `denominating_token_id` field.
         * @implements IFixedFee
         * @constructor
         * @param {proto.IFixedFee=} [properties] Properties to set
         */
        function FixedFee(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * The amount to assess for each transfer.
         * <p>
         * This value MUST be greater than `0`.<br/>
         * This amount is expressed in units of 10<sup>-decimals</sup> tokens.
         * @member {number|Long} amount
         * @memberof proto.FixedFee
         * @instance
         */
        FixedFee.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
         * @member {proto.ITokenID|null|undefined} denominatingTokenId
         * @memberof proto.FixedFee
         * @instance
         */
        FixedFee.prototype.denominatingTokenId = null;

        /**
         * Creates a new FixedFee instance using the specified properties.
         * @function create
         * @memberof proto.FixedFee
         * @static
         * @param {proto.IFixedFee=} [properties] Properties to set
         * @returns {proto.FixedFee} FixedFee instance
         */
        FixedFee.create = function create(properties) {
            return new FixedFee(properties);
        };

        /**
         * Encodes the specified FixedFee message. Does not implicitly {@link proto.FixedFee.verify|verify} messages.
         * @function encode
         * @memberof proto.FixedFee
         * @static
         * @param {proto.IFixedFee} message FixedFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FixedFee.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.amount);
            if (message.denominatingTokenId != null && Object.hasOwnProperty.call(message, "denominatingTokenId"))
                $root.proto.TokenID.encode(message.denominatingTokenId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FixedFee message, length delimited. Does not implicitly {@link proto.FixedFee.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.FixedFee
         * @static
         * @param {proto.IFixedFee} message FixedFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FixedFee.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FixedFee message from the specified reader or buffer.
         * @function decode
         * @memberof proto.FixedFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.FixedFee} FixedFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FixedFee.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.FixedFee();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.amount = reader.int64();
                        break;
                    }
                case 2: {
                        message.denominatingTokenId = $root.proto.TokenID.decode(reader, reader.uint32());
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
         * Decodes a FixedFee message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.FixedFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.FixedFee} FixedFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FixedFee.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FixedFee message.
         * @function verify
         * @memberof proto.FixedFee
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FixedFee.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.denominatingTokenId != null && message.hasOwnProperty("denominatingTokenId")) {
                let error = $root.proto.TokenID.verify(message.denominatingTokenId);
                if (error)
                    return "denominatingTokenId." + error;
            }
            return null;
        };

        /**
         * Creates a FixedFee message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.FixedFee
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.FixedFee} FixedFee
         */
        FixedFee.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.FixedFee)
                return object;
            let message = new $root.proto.FixedFee();
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.denominatingTokenId != null) {
                if (typeof object.denominatingTokenId !== "object")
                    throw TypeError(".proto.FixedFee.denominatingTokenId: object expected");
                message.denominatingTokenId = $root.proto.TokenID.fromObject(object.denominatingTokenId);
            }
            return message;
        };

        /**
         * Creates a plain object from a FixedFee message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.FixedFee
         * @static
         * @param {proto.FixedFee} message FixedFee
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FixedFee.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                object.denominatingTokenId = null;
            }
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.denominatingTokenId != null && message.hasOwnProperty("denominatingTokenId"))
                object.denominatingTokenId = $root.proto.TokenID.toObject(message.denominatingTokenId, options);
            return object;
        };

        /**
         * Converts this FixedFee to JSON.
         * @function toJSON
         * @memberof proto.FixedFee
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FixedFee.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FixedFee
         * @function getTypeUrl
         * @memberof proto.FixedFee
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FixedFee.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.FixedFee";
        };

        return FixedFee;
    })();

    proto.RoyaltyFee = (function() {

        /**
         * Properties of a RoyaltyFee.
         * @memberof proto
         * @interface IRoyaltyFee
         * @property {proto.IFraction|null} [exchangeValueFraction] The fraction of fungible value exchanged for an NFT to collect
         * as royalty.
         * <p>
         * This SHALL be applied once to the total fungible value transferred
         * for the transaction.<br/>
         * There SHALL NOT be any adjustment based on multiple transfers
         * involving the NFT sender as part of a single transaction.
         * @property {proto.IFixedFee|null} [fallbackFee] A fixed fee to assess if no fungible value is known to be traded
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

        /**
         * Constructs a new RoyaltyFee.
         * @memberof proto
         * @classdesc A fee to assess during a CryptoTransfer that changes ownership of a
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
         * @implements IRoyaltyFee
         * @constructor
         * @param {proto.IRoyaltyFee=} [properties] Properties to set
         */
        function RoyaltyFee(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * The fraction of fungible value exchanged for an NFT to collect
         * as royalty.
         * <p>
         * This SHALL be applied once to the total fungible value transferred
         * for the transaction.<br/>
         * There SHALL NOT be any adjustment based on multiple transfers
         * involving the NFT sender as part of a single transaction.
         * @member {proto.IFraction|null|undefined} exchangeValueFraction
         * @memberof proto.RoyaltyFee
         * @instance
         */
        RoyaltyFee.prototype.exchangeValueFraction = null;

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
         * @member {proto.IFixedFee|null|undefined} fallbackFee
         * @memberof proto.RoyaltyFee
         * @instance
         */
        RoyaltyFee.prototype.fallbackFee = null;

        /**
         * Creates a new RoyaltyFee instance using the specified properties.
         * @function create
         * @memberof proto.RoyaltyFee
         * @static
         * @param {proto.IRoyaltyFee=} [properties] Properties to set
         * @returns {proto.RoyaltyFee} RoyaltyFee instance
         */
        RoyaltyFee.create = function create(properties) {
            return new RoyaltyFee(properties);
        };

        /**
         * Encodes the specified RoyaltyFee message. Does not implicitly {@link proto.RoyaltyFee.verify|verify} messages.
         * @function encode
         * @memberof proto.RoyaltyFee
         * @static
         * @param {proto.IRoyaltyFee} message RoyaltyFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoyaltyFee.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.exchangeValueFraction != null && Object.hasOwnProperty.call(message, "exchangeValueFraction"))
                $root.proto.Fraction.encode(message.exchangeValueFraction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.fallbackFee != null && Object.hasOwnProperty.call(message, "fallbackFee"))
                $root.proto.FixedFee.encode(message.fallbackFee, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoyaltyFee message, length delimited. Does not implicitly {@link proto.RoyaltyFee.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RoyaltyFee
         * @static
         * @param {proto.IRoyaltyFee} message RoyaltyFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoyaltyFee.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoyaltyFee message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RoyaltyFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RoyaltyFee} RoyaltyFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoyaltyFee.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RoyaltyFee();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.exchangeValueFraction = $root.proto.Fraction.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.fallbackFee = $root.proto.FixedFee.decode(reader, reader.uint32());
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
         * Decodes a RoyaltyFee message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RoyaltyFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RoyaltyFee} RoyaltyFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoyaltyFee.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoyaltyFee message.
         * @function verify
         * @memberof proto.RoyaltyFee
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoyaltyFee.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.exchangeValueFraction != null && message.hasOwnProperty("exchangeValueFraction")) {
                let error = $root.proto.Fraction.verify(message.exchangeValueFraction);
                if (error)
                    return "exchangeValueFraction." + error;
            }
            if (message.fallbackFee != null && message.hasOwnProperty("fallbackFee")) {
                let error = $root.proto.FixedFee.verify(message.fallbackFee);
                if (error)
                    return "fallbackFee." + error;
            }
            return null;
        };

        /**
         * Creates a RoyaltyFee message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RoyaltyFee
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RoyaltyFee} RoyaltyFee
         */
        RoyaltyFee.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RoyaltyFee)
                return object;
            let message = new $root.proto.RoyaltyFee();
            if (object.exchangeValueFraction != null) {
                if (typeof object.exchangeValueFraction !== "object")
                    throw TypeError(".proto.RoyaltyFee.exchangeValueFraction: object expected");
                message.exchangeValueFraction = $root.proto.Fraction.fromObject(object.exchangeValueFraction);
            }
            if (object.fallbackFee != null) {
                if (typeof object.fallbackFee !== "object")
                    throw TypeError(".proto.RoyaltyFee.fallbackFee: object expected");
                message.fallbackFee = $root.proto.FixedFee.fromObject(object.fallbackFee);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoyaltyFee message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RoyaltyFee
         * @static
         * @param {proto.RoyaltyFee} message RoyaltyFee
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoyaltyFee.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.exchangeValueFraction = null;
                object.fallbackFee = null;
            }
            if (message.exchangeValueFraction != null && message.hasOwnProperty("exchangeValueFraction"))
                object.exchangeValueFraction = $root.proto.Fraction.toObject(message.exchangeValueFraction, options);
            if (message.fallbackFee != null && message.hasOwnProperty("fallbackFee"))
                object.fallbackFee = $root.proto.FixedFee.toObject(message.fallbackFee, options);
            return object;
        };

        /**
         * Converts this RoyaltyFee to JSON.
         * @function toJSON
         * @memberof proto.RoyaltyFee
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoyaltyFee.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoyaltyFee
         * @function getTypeUrl
         * @memberof proto.RoyaltyFee
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoyaltyFee.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RoyaltyFee";
        };

        return RoyaltyFee;
    })();

    proto.CustomFee = (function() {

        /**
         * Properties of a CustomFee.
         * @memberof proto
         * @interface ICustomFee
         * @property {proto.IFixedFee|null} [fixedFee] A fixed fee to be charged to the `sender` for every token transfer.
         * <p>
         * This type of fee MAY be defined for any token type.<br/>
         * This type of fee MAY be more consistent and reliable than
         * other types.
         * @property {proto.IFractionalFee|null} [fractionalFee] A fee defined as a fraction of the tokens transferred.
         * <p>
         * This type of fee MUST NOT be defined for a non-fungible/unique
         * token type.<br/>
         * This fee MAY be charged to either sender, as an increase to the
         * amount sent, or receiver, as a reduction to the amount received.
         * @property {proto.IRoyaltyFee|null} [royaltyFee] A fee charged as royalty for any transfer of a
         * non-fungible/unique token.
         * <p>
         * This type of fee MUST NOT be defined for a
         * fungible/common token type.
         * @property {proto.IAccountID|null} [feeCollectorAccountId] The account to receive the custom fee.
         * @property {boolean|null} [allCollectorsAreExempt] Flag indicating to exempt all custom fee collector accounts for this
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

        /**
         * Constructs a new CustomFee.
         * @memberof proto
         * @classdesc A transfer fee to assess during a CryptoTransfer.<br/>
         * This fee applies to transactions that transfer units of the token to
         * which the fee is attached. A custom fee may be either fixed or fractional,
         * and must specify a fee collector account to receive the assessed fees.
         * 
         * Custom fees MUST be greater than zero (0).
         * @implements ICustomFee
         * @constructor
         * @param {proto.ICustomFee=} [properties] Properties to set
         */
        function CustomFee(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * A fixed fee to be charged to the `sender` for every token transfer.
         * <p>
         * This type of fee MAY be defined for any token type.<br/>
         * This type of fee MAY be more consistent and reliable than
         * other types.
         * @member {proto.IFixedFee|null|undefined} fixedFee
         * @memberof proto.CustomFee
         * @instance
         */
        CustomFee.prototype.fixedFee = null;

        /**
         * A fee defined as a fraction of the tokens transferred.
         * <p>
         * This type of fee MUST NOT be defined for a non-fungible/unique
         * token type.<br/>
         * This fee MAY be charged to either sender, as an increase to the
         * amount sent, or receiver, as a reduction to the amount received.
         * @member {proto.IFractionalFee|null|undefined} fractionalFee
         * @memberof proto.CustomFee
         * @instance
         */
        CustomFee.prototype.fractionalFee = null;

        /**
         * A fee charged as royalty for any transfer of a
         * non-fungible/unique token.
         * <p>
         * This type of fee MUST NOT be defined for a
         * fungible/common token type.
         * @member {proto.IRoyaltyFee|null|undefined} royaltyFee
         * @memberof proto.CustomFee
         * @instance
         */
        CustomFee.prototype.royaltyFee = null;

        /**
         * The account to receive the custom fee.
         * @member {proto.IAccountID|null|undefined} feeCollectorAccountId
         * @memberof proto.CustomFee
         * @instance
         */
        CustomFee.prototype.feeCollectorAccountId = null;

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
         * @member {boolean} allCollectorsAreExempt
         * @memberof proto.CustomFee
         * @instance
         */
        CustomFee.prototype.allCollectorsAreExempt = false;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * CustomFee fee.
         * @member {"fixedFee"|"fractionalFee"|"royaltyFee"|undefined} fee
         * @memberof proto.CustomFee
         * @instance
         */
        Object.defineProperty(CustomFee.prototype, "fee", {
            get: $util.oneOfGetter($oneOfFields = ["fixedFee", "fractionalFee", "royaltyFee"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CustomFee instance using the specified properties.
         * @function create
         * @memberof proto.CustomFee
         * @static
         * @param {proto.ICustomFee=} [properties] Properties to set
         * @returns {proto.CustomFee} CustomFee instance
         */
        CustomFee.create = function create(properties) {
            return new CustomFee(properties);
        };

        /**
         * Encodes the specified CustomFee message. Does not implicitly {@link proto.CustomFee.verify|verify} messages.
         * @function encode
         * @memberof proto.CustomFee
         * @static
         * @param {proto.ICustomFee} message CustomFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomFee.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fixedFee != null && Object.hasOwnProperty.call(message, "fixedFee"))
                $root.proto.FixedFee.encode(message.fixedFee, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.fractionalFee != null && Object.hasOwnProperty.call(message, "fractionalFee"))
                $root.proto.FractionalFee.encode(message.fractionalFee, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.feeCollectorAccountId != null && Object.hasOwnProperty.call(message, "feeCollectorAccountId"))
                $root.proto.AccountID.encode(message.feeCollectorAccountId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.royaltyFee != null && Object.hasOwnProperty.call(message, "royaltyFee"))
                $root.proto.RoyaltyFee.encode(message.royaltyFee, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.allCollectorsAreExempt != null && Object.hasOwnProperty.call(message, "allCollectorsAreExempt"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.allCollectorsAreExempt);
            return writer;
        };

        /**
         * Encodes the specified CustomFee message, length delimited. Does not implicitly {@link proto.CustomFee.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CustomFee
         * @static
         * @param {proto.ICustomFee} message CustomFee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomFee.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CustomFee message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CustomFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CustomFee} CustomFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomFee.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CustomFee();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.fixedFee = $root.proto.FixedFee.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.fractionalFee = $root.proto.FractionalFee.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.royaltyFee = $root.proto.RoyaltyFee.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.feeCollectorAccountId = $root.proto.AccountID.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.allCollectorsAreExempt = reader.bool();
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
         * Decodes a CustomFee message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.CustomFee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CustomFee} CustomFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomFee.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CustomFee message.
         * @function verify
         * @memberof proto.CustomFee
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomFee.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.fixedFee != null && message.hasOwnProperty("fixedFee")) {
                properties.fee = 1;
                {
                    let error = $root.proto.FixedFee.verify(message.fixedFee);
                    if (error)
                        return "fixedFee." + error;
                }
            }
            if (message.fractionalFee != null && message.hasOwnProperty("fractionalFee")) {
                if (properties.fee === 1)
                    return "fee: multiple values";
                properties.fee = 1;
                {
                    let error = $root.proto.FractionalFee.verify(message.fractionalFee);
                    if (error)
                        return "fractionalFee." + error;
                }
            }
            if (message.royaltyFee != null && message.hasOwnProperty("royaltyFee")) {
                if (properties.fee === 1)
                    return "fee: multiple values";
                properties.fee = 1;
                {
                    let error = $root.proto.RoyaltyFee.verify(message.royaltyFee);
                    if (error)
                        return "royaltyFee." + error;
                }
            }
            if (message.feeCollectorAccountId != null && message.hasOwnProperty("feeCollectorAccountId")) {
                let error = $root.proto.AccountID.verify(message.feeCollectorAccountId);
                if (error)
                    return "feeCollectorAccountId." + error;
            }
            if (message.allCollectorsAreExempt != null && message.hasOwnProperty("allCollectorsAreExempt"))
                if (typeof message.allCollectorsAreExempt !== "boolean")
                    return "allCollectorsAreExempt: boolean expected";
            return null;
        };

        /**
         * Creates a CustomFee message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.CustomFee
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CustomFee} CustomFee
         */
        CustomFee.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CustomFee)
                return object;
            let message = new $root.proto.CustomFee();
            if (object.fixedFee != null) {
                if (typeof object.fixedFee !== "object")
                    throw TypeError(".proto.CustomFee.fixedFee: object expected");
                message.fixedFee = $root.proto.FixedFee.fromObject(object.fixedFee);
            }
            if (object.fractionalFee != null) {
                if (typeof object.fractionalFee !== "object")
                    throw TypeError(".proto.CustomFee.fractionalFee: object expected");
                message.fractionalFee = $root.proto.FractionalFee.fromObject(object.fractionalFee);
            }
            if (object.royaltyFee != null) {
                if (typeof object.royaltyFee !== "object")
                    throw TypeError(".proto.CustomFee.royaltyFee: object expected");
                message.royaltyFee = $root.proto.RoyaltyFee.fromObject(object.royaltyFee);
            }
            if (object.feeCollectorAccountId != null) {
                if (typeof object.feeCollectorAccountId !== "object")
                    throw TypeError(".proto.CustomFee.feeCollectorAccountId: object expected");
                message.feeCollectorAccountId = $root.proto.AccountID.fromObject(object.feeCollectorAccountId);
            }
            if (object.allCollectorsAreExempt != null)
                message.allCollectorsAreExempt = Boolean(object.allCollectorsAreExempt);
            return message;
        };

        /**
         * Creates a plain object from a CustomFee message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CustomFee
         * @static
         * @param {proto.CustomFee} message CustomFee
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomFee.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.feeCollectorAccountId = null;
                object.allCollectorsAreExempt = false;
            }
            if (message.fixedFee != null && message.hasOwnProperty("fixedFee")) {
                object.fixedFee = $root.proto.FixedFee.toObject(message.fixedFee, options);
                if (options.oneofs)
                    object.fee = "fixedFee";
            }
            if (message.fractionalFee != null && message.hasOwnProperty("fractionalFee")) {
                object.fractionalFee = $root.proto.FractionalFee.toObject(message.fractionalFee, options);
                if (options.oneofs)
                    object.fee = "fractionalFee";
            }
            if (message.feeCollectorAccountId != null && message.hasOwnProperty("feeCollectorAccountId"))
                object.feeCollectorAccountId = $root.proto.AccountID.toObject(message.feeCollectorAccountId, options);
            if (message.royaltyFee != null && message.hasOwnProperty("royaltyFee")) {
                object.royaltyFee = $root.proto.RoyaltyFee.toObject(message.royaltyFee, options);
                if (options.oneofs)
                    object.fee = "royaltyFee";
            }
            if (message.allCollectorsAreExempt != null && message.hasOwnProperty("allCollectorsAreExempt"))
                object.allCollectorsAreExempt = message.allCollectorsAreExempt;
            return object;
        };

        /**
         * Converts this CustomFee to JSON.
         * @function toJSON
         * @memberof proto.CustomFee
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomFee.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CustomFee
         * @function getTypeUrl
         * @memberof proto.CustomFee
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CustomFee.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.CustomFee";
        };

        return CustomFee;
    })();

    proto.Duration = (function() {

        /**
         * Properties of a Duration.
         * @memberof proto
         * @interface IDuration
         * @property {number|Long|null} [seconds] The number of seconds for this duration.
         */

        /**
         * Constructs a new Duration.
         * @memberof proto
         * @classdesc A length of time in seconds.
         * 
         * It is RECOMMENDED that this message be used whenever an amount of time,
         * rather than a specific point in time, is needed.
         * @implements IDuration
         * @constructor
         * @param {proto.IDuration=} [properties] Properties to set
         */
        function Duration(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * The number of seconds for this duration.
         * @member {number|Long} seconds
         * @memberof proto.Duration
         * @instance
         */
        Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Duration instance using the specified properties.
         * @function create
         * @memberof proto.Duration
         * @static
         * @param {proto.IDuration=} [properties] Properties to set
         * @returns {proto.Duration} Duration instance
         */
        Duration.create = function create(properties) {
            return new Duration(properties);
        };

        /**
         * Encodes the specified Duration message. Does not implicitly {@link proto.Duration.verify|verify} messages.
         * @function encode
         * @memberof proto.Duration
         * @static
         * @param {proto.IDuration} message Duration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Duration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
            return writer;
        };

        /**
         * Encodes the specified Duration message, length delimited. Does not implicitly {@link proto.Duration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Duration
         * @static
         * @param {proto.IDuration} message Duration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Duration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Duration message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Duration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Duration} Duration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Duration.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Duration();
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
         * Decodes a Duration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Duration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Duration} Duration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Duration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Duration message.
         * @function verify
         * @memberof proto.Duration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Duration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seconds != null && message.hasOwnProperty("seconds"))
                if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                    return "seconds: integer|Long expected";
            return null;
        };

        /**
         * Creates a Duration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Duration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Duration} Duration
         */
        Duration.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Duration)
                return object;
            let message = new $root.proto.Duration();
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
         * Creates a plain object from a Duration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Duration
         * @static
         * @param {proto.Duration} message Duration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Duration.toObject = function toObject(message, options) {
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
         * Converts this Duration to JSON.
         * @function toJSON
         * @memberof proto.Duration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Duration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Duration
         * @function getTypeUrl
         * @memberof proto.Duration
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Duration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Duration";
        };

        return Duration;
    })();

    return proto;
})();

export { $root as default };
