import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

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

    /** Properties of a NftID. */
    interface INftID {

        /**
         * A token identifier.<br/>
         * This token represents the collection containing this NFT.
         */
        token_ID?: (proto.ITokenID|null);

        /**
         * A unique serial number.<br/>
         * This serial number is unique within its token type.
         */
        serialNumber?: (number|Long|null);
    }

    /**
     * An identifier for a unique token (or "NFT"), used by both contract
     * and token services.
     */
    class NftID implements INftID {

        /**
         * Constructs a new NftID.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INftID);

        /**
         * A token identifier.<br/>
         * This token represents the collection containing this NFT.
         */
        public token_ID?: (proto.ITokenID|null);

        /**
         * A unique serial number.<br/>
         * This serial number is unique within its token type.
         */
        public serialNumber: (number|Long);

        /**
         * Creates a new NftID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NftID instance
         */
        public static create(properties?: proto.INftID): proto.NftID;

        /**
         * Encodes the specified NftID message. Does not implicitly {@link proto.NftID.verify|verify} messages.
         * @param message NftID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INftID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NftID message, length delimited. Does not implicitly {@link proto.NftID.verify|verify} messages.
         * @param message NftID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INftID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NftID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NftID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.NftID;

        /**
         * Decodes a NftID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NftID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.NftID;

        /**
         * Verifies a NftID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NftID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NftID
         */
        public static fromObject(object: { [k: string]: any }): proto.NftID;

        /**
         * Creates a plain object from a NftID message. Also converts values to other types if specified.
         * @param message NftID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.NftID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NftID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NftID
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

    /** Properties of a TopicID. */
    interface ITopicID {

        /** A whole number shard identifier. */
        shardNum?: (number|Long|null);

        /** A whole number realm identifier. */
        realmNum?: (number|Long|null);

        /** A whole number topic identifier, unique within its realm and shard. */
        topicNum?: (number|Long|null);
    }

    /**
     * An unique identifier for a topic.<br/>
     * Topics are part of the consensus service, messages are published to a topic.
     */
    class TopicID implements ITopicID {

        /**
         * Constructs a new TopicID.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITopicID);

        /** A whole number shard identifier. */
        public shardNum: (number|Long);

        /** A whole number realm identifier. */
        public realmNum: (number|Long);

        /** A whole number topic identifier, unique within its realm and shard. */
        public topicNum: (number|Long);

        /**
         * Creates a new TopicID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TopicID instance
         */
        public static create(properties?: proto.ITopicID): proto.TopicID;

        /**
         * Encodes the specified TopicID message. Does not implicitly {@link proto.TopicID.verify|verify} messages.
         * @param message TopicID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITopicID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TopicID message, length delimited. Does not implicitly {@link proto.TopicID.verify|verify} messages.
         * @param message TopicID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITopicID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TopicID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TopicID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TopicID;

        /**
         * Decodes a TopicID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TopicID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TopicID;

        /**
         * Verifies a TopicID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TopicID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TopicID
         */
        public static fromObject(object: { [k: string]: any }): proto.TopicID;

        /**
         * Creates a plain object from a TopicID message. Also converts values to other types if specified.
         * @param message TopicID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TopicID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TopicID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TopicID
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ScheduleID. */
    interface IScheduleID {

        /** A whole number shard */
        shardNum?: (number|Long|null);

        /** A whole number realm */
        realmNum?: (number|Long|null);

        /** A whole number schedule, unique within its realm and shard */
        scheduleNum?: (number|Long|null);
    }

    /** An unique identifier for a Schedule */
    class ScheduleID implements IScheduleID {

        /**
         * Constructs a new ScheduleID.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IScheduleID);

        /** A whole number shard */
        public shardNum: (number|Long);

        /** A whole number realm */
        public realmNum: (number|Long);

        /** A whole number schedule, unique within its realm and shard */
        public scheduleNum: (number|Long);

        /**
         * Creates a new ScheduleID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScheduleID instance
         */
        public static create(properties?: proto.IScheduleID): proto.ScheduleID;

        /**
         * Encodes the specified ScheduleID message. Does not implicitly {@link proto.ScheduleID.verify|verify} messages.
         * @param message ScheduleID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IScheduleID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScheduleID message, length delimited. Does not implicitly {@link proto.ScheduleID.verify|verify} messages.
         * @param message ScheduleID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IScheduleID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScheduleID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScheduleID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ScheduleID;

        /**
         * Decodes a ScheduleID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScheduleID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ScheduleID;

        /**
         * Verifies a ScheduleID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScheduleID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScheduleID
         */
        public static fromObject(object: { [k: string]: any }): proto.ScheduleID;

        /**
         * Creates a plain object from a ScheduleID message. Also converts values to other types if specified.
         * @param message ScheduleID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ScheduleID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScheduleID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ScheduleID
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TransactionID. */
    interface ITransactionID {

        /**
         * A timestamp for the transaction start time.<br/>
         * This is the earliest expected start time for this transaction.
         * <p>
         * This value MUST be strictly less than `consensusTimestamp` when the
         * transaction is submitted.
         */
        transactionValidStart?: (proto.ITimestamp|null);

        /**
         * An Account identifier.
         * <p>
         * The identified account SHALL pay transaction fees for this transaction.
         */
        accountID?: (proto.IAccountID|null);

        /**
         * A scheduled transaction flag.<br/>
         * If set, this transaction represents the execution of a Schedule after
         * all necessary signatures are gathered.
         * <p>
         * This flag MUST NOT be set in a user-submitted transaction.
         */
        scheduled?: (boolean|null);

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
         */
        nonce?: (number|null);
    }

    /**
     * A transaction identifier.<br/>
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
     */
    class TransactionID implements ITransactionID {

        /**
         * Constructs a new TransactionID.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITransactionID);

        /**
         * A timestamp for the transaction start time.<br/>
         * This is the earliest expected start time for this transaction.
         * <p>
         * This value MUST be strictly less than `consensusTimestamp` when the
         * transaction is submitted.
         */
        public transactionValidStart?: (proto.ITimestamp|null);

        /**
         * An Account identifier.
         * <p>
         * The identified account SHALL pay transaction fees for this transaction.
         */
        public accountID?: (proto.IAccountID|null);

        /**
         * A scheduled transaction flag.<br/>
         * If set, this transaction represents the execution of a Schedule after
         * all necessary signatures are gathered.
         * <p>
         * This flag MUST NOT be set in a user-submitted transaction.
         */
        public scheduled: boolean;

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
         */
        public nonce: number;

        /**
         * Creates a new TransactionID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransactionID instance
         */
        public static create(properties?: proto.ITransactionID): proto.TransactionID;

        /**
         * Encodes the specified TransactionID message. Does not implicitly {@link proto.TransactionID.verify|verify} messages.
         * @param message TransactionID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITransactionID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransactionID message, length delimited. Does not implicitly {@link proto.TransactionID.verify|verify} messages.
         * @param message TransactionID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITransactionID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransactionID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransactionID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TransactionID;

        /**
         * Decodes a TransactionID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransactionID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TransactionID;

        /**
         * Verifies a TransactionID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransactionID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransactionID
         */
        public static fromObject(object: { [k: string]: any }): proto.TransactionID;

        /**
         * Creates a plain object from a TransactionID message. Also converts values to other types if specified.
         * @param message TransactionID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TransactionID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransactionID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TransactionID
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
}
