import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of a ConsensusGetTopicInfoResponse. */
    interface IConsensusGetTopicInfoResponse {

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        header?: (proto.IResponseHeader|null);

        /** The ID of the topic requested in the query. */
        topicID?: (proto.ITopicID|null);

        /** Information describing the current state of the topic. */
        topicInfo?: (proto.IConsensusTopicInfo|null);
    }

    /**
     * Query response to describe the current state of a topic in the Hedera
     * Consensus Service(HCS).
     */
    class ConsensusGetTopicInfoResponse implements IConsensusGetTopicInfoResponse {

        /**
         * Constructs a new ConsensusGetTopicInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IConsensusGetTopicInfoResponse);

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        public header?: (proto.IResponseHeader|null);

        /** The ID of the topic requested in the query. */
        public topicID?: (proto.ITopicID|null);

        /** Information describing the current state of the topic. */
        public topicInfo?: (proto.IConsensusTopicInfo|null);

        /**
         * Creates a new ConsensusGetTopicInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConsensusGetTopicInfoResponse instance
         */
        public static create(properties?: proto.IConsensusGetTopicInfoResponse): proto.ConsensusGetTopicInfoResponse;

        /**
         * Encodes the specified ConsensusGetTopicInfoResponse message. Does not implicitly {@link proto.ConsensusGetTopicInfoResponse.verify|verify} messages.
         * @param message ConsensusGetTopicInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IConsensusGetTopicInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConsensusGetTopicInfoResponse message, length delimited. Does not implicitly {@link proto.ConsensusGetTopicInfoResponse.verify|verify} messages.
         * @param message ConsensusGetTopicInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IConsensusGetTopicInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConsensusGetTopicInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConsensusGetTopicInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ConsensusGetTopicInfoResponse;

        /**
         * Decodes a ConsensusGetTopicInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConsensusGetTopicInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ConsensusGetTopicInfoResponse;

        /**
         * Verifies a ConsensusGetTopicInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConsensusGetTopicInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConsensusGetTopicInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.ConsensusGetTopicInfoResponse;

        /**
         * Creates a plain object from a ConsensusGetTopicInfoResponse message. Also converts values to other types if specified.
         * @param message ConsensusGetTopicInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ConsensusGetTopicInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConsensusGetTopicInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConsensusGetTopicInfoResponse
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

    /** Properties of a FixedCustomFee. */
    interface IFixedCustomFee {

        /**
         * A fixed custom fee.
         * <p>
         * The amount of HBAR or other token described by this `FixedFee` SHALL
         * be charged to the transction payer for each message submitted to a
         * topic that assigns this consensus custom fee.
         */
        fixedFee?: (proto.IFixedFee|null);

        /**
         * A collection account identifier.
         * <p>
         * All amounts collected for this consensus custom fee SHALL be transferred
         * to the account identified by this field.
         */
        feeCollectorAccountId?: (proto.IAccountID|null);
    }

    /**
     * A custom fee definition for a consensus topic.
     * <p>
     * This fee definition is specific to an Hedera Consensus Service (HCS) topic
     * and SHOULD NOT be used in any other context.<br/>
     * All fields for this message are REQUIRED.<br/>
     * Only "fixed" fee definitions are supported because there is no basis for
     * a fractional fee on a consensus submit transaction.
     */
    class FixedCustomFee implements IFixedCustomFee {

        /**
         * Constructs a new FixedCustomFee.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IFixedCustomFee);

        /**
         * A fixed custom fee.
         * <p>
         * The amount of HBAR or other token described by this `FixedFee` SHALL
         * be charged to the transction payer for each message submitted to a
         * topic that assigns this consensus custom fee.
         */
        public fixedFee?: (proto.IFixedFee|null);

        /**
         * A collection account identifier.
         * <p>
         * All amounts collected for this consensus custom fee SHALL be transferred
         * to the account identified by this field.
         */
        public feeCollectorAccountId?: (proto.IAccountID|null);

        /**
         * Creates a new FixedCustomFee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FixedCustomFee instance
         */
        public static create(properties?: proto.IFixedCustomFee): proto.FixedCustomFee;

        /**
         * Encodes the specified FixedCustomFee message. Does not implicitly {@link proto.FixedCustomFee.verify|verify} messages.
         * @param message FixedCustomFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IFixedCustomFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FixedCustomFee message, length delimited. Does not implicitly {@link proto.FixedCustomFee.verify|verify} messages.
         * @param message FixedCustomFee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IFixedCustomFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FixedCustomFee message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FixedCustomFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.FixedCustomFee;

        /**
         * Decodes a FixedCustomFee message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FixedCustomFee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.FixedCustomFee;

        /**
         * Verifies a FixedCustomFee message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FixedCustomFee message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FixedCustomFee
         */
        public static fromObject(object: { [k: string]: any }): proto.FixedCustomFee;

        /**
         * Creates a plain object from a FixedCustomFee message. Also converts values to other types if specified.
         * @param message FixedCustomFee
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.FixedCustomFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FixedCustomFee to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FixedCustomFee
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

    /** Properties of a ConsensusTopicInfo. */
    interface IConsensusTopicInfo {

        /**
         * A short description of this topic.
         * <p>
         * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
         * (default 100) bytes when encoded as UTF-8.
         */
        memo?: (string|null);

        /**
         * The latest running hash of the topic.
         * <p>
         * This 48-byte field is the output of a SHA-384 digest with input
         * data determined by the current version of the running hash algorithm
         * used by the network.<br/>
         * All new transactions SHALL use algorithm version `3`.<br/>
         * The bytes of each uint64 or uint32 encoded for the hash input
         * MUST be in Big-Endian format.
         * <p>
         * <hr/>
         * If the algorithm version is '3', then the input data to the
         * SHA-384 digest are, in order:
         * <ol>
         * <li>The previous running hash of the topic (48 bytes)</li>
         * <li>The `topicRunningHashVersion` (8 bytes)</li>
         * <li>The payer account's shard (8 bytes)</li>
         * <li>The payer account's realm (8 bytes)</li>
         * <li>The payer account's number (8 bytes)</li>
         * <li>The topic's shard (8 bytes)</li>
         * <li>The topic's realm (8 bytes)</li>
         * <li>The topic's number (8 bytes)</li>
         * <li>The number of seconds since the epoch when the
         * `ConsensusSubmitMessage` reached consensus (8 bytes)</li>
         * <li>The number of nanoseconds within the second when the
         * `ConsensusSubmitMessage` reached consensus (4 bytes)</li>
         * <li>The `topicSequenceNumber` (8 bytes)</li>
         * <li>The output of a SHA-384 digest of the message bytes from the
         * `ConsensusSubmitMessage` (48 bytes)</li>
         * </ol>
         */
        runningHash?: (Uint8Array|null);

        /**
         * A current sequence number (starting at 1 for the first message)
         * for messages on this topic.
         */
        sequenceNumber?: (number|Long|null);

        /**
         * An expiration time for this topic, in seconds since the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the UNIX epoch
         * with 0 at `1970-01-01T00:00:00.000Z`.
         */
        expirationTime?: (proto.ITimestamp|null);

        /**
         * A key that MUST sign any transaction to update or delete this topic.
         * <p>
         * If this value is not set (null) then the topic CANNOT be deleted,
         * modified, or updated.
         */
        adminKey?: (proto.IKey|null);

        /**
         * A key that MUST sign any transaction to submit a message to this topic.
         * <p>
         * If this value is not set (null) then any account MAY submit messages to
         * this topic.
         */
        submitKey?: (proto.IKey|null);

        /**
         * A duration, in seconds, to extend the `expirationTime` value when
         * this topic is automatically renewed.
         * <p>
         * If the `autoRenewAccount` value for this topic is set to a valid account
         * with sufficient HBAR balance to pay renewal fees when this topic
         * expires, the system SHALL automatically renew this topic, extending the
         * `expirationTime` value by the number of seconds described here.<br/>
         * If, however, the `autoRenewAccount` lacks sufficient HBAR balance
         * to pay renewal fees when this topic expires, this topic SHALL be
         * deleted after the time period specified in the `AUTORENEW_GRACE_PERIOD`
         * configuration value.
         */
        autoRenewPeriod?: (proto.IDuration|null);

        /**
         * An account that is designated to pay automatic renewal fees.
         * <p>
         * If this value is a valid account ID when this topic expires,
         * this account SHALL be charged the renewal fees for this topic,
         * if it holds sufficient HBAR balance. If the account does not hold
         * sufficient HBAR balance to pay renewal fees when necessary, then
         * this topic SHALL be deleted.<br/>
         * If this value is not set (null), or is not a valid account ID, when
         * this topic expires, then this topic SHALL be deleted after the time
         * period specified in the `AUTORENEW_GRACE_PERIOD` configuration value.
         */
        autoRenewAccount?: (proto.IAccountID|null);

        /**
         * A ledger ID of the network that generated this response.
         * <p>
         * This value SHALL identify the distributed ledger that responded to
         * this query.
         */
        ledgerId?: (Uint8Array|null);

        /**
         * Access control for update/delete of custom fees.
         * <p>
         * If unset, custom fees CANNOT be set for this topic.<br/>
         * If not set when the topic is created, this field CANNOT be set via
         * update.<br/>
         * If set when the topic is created, this field MAY be changed via update.
         */
        feeScheduleKey?: (proto.IKey|null);

        /**
         * A set of keys.<br/>
         * Keys in this list are permitted to submit messages to this topic without
         * paying custom fees associated with this topic.
         * <p>
         * If a topic submit message is signed by _any_ key included in this set,
         * custom fees SHALL NOT be charged for that transaction.<br/>
         * `fee_exempt_key_list` MAY contain keys for accounts that are inactive,
         * deleted, or non-existent.<br/>
         * If not set, there SHALL NOT be any fee-exempt keys.  In particular, the
         * following keys SHALL NOT be implicitly or automatically added to this
         * list: `adminKey`, `submitKey`, `fee_schedule_key`.
         * A `fee_exempt_key_list` MUST NOT contain more than
         * `MAX_ENTRIES_FOR_FEE_EXEMPT_KEY_LIST` keys.
         * A `fee_exempt_key_list` MUST NOT contain any duplicate keys.
         */
        feeExemptKeyList?: (proto.IKey[]|null);

        /**
         * A set of custom fee definitions.<br/>
         * These are fees to be assessed for each submit to this topic.
         * <p>
         * Each fee defined in this set SHALL be evaluated for
         * each message submitted to this topic, and the resultant
         * total assessed fees SHALL be charged.<br/>
         * Custom fees defined here SHALL be assessed in addition to the base
         * network and node fees.
         */
        customFees?: (proto.IFixedCustomFee[]|null);
    }

    /**
     * A query response describing the current state of a topic for the Hedera
     * Consensus Service (HCS).
     */
    class ConsensusTopicInfo implements IConsensusTopicInfo {

        /**
         * Constructs a new ConsensusTopicInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IConsensusTopicInfo);

        /**
         * A short description of this topic.
         * <p>
         * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
         * (default 100) bytes when encoded as UTF-8.
         */
        public memo: string;

        /**
         * The latest running hash of the topic.
         * <p>
         * This 48-byte field is the output of a SHA-384 digest with input
         * data determined by the current version of the running hash algorithm
         * used by the network.<br/>
         * All new transactions SHALL use algorithm version `3`.<br/>
         * The bytes of each uint64 or uint32 encoded for the hash input
         * MUST be in Big-Endian format.
         * <p>
         * <hr/>
         * If the algorithm version is '3', then the input data to the
         * SHA-384 digest are, in order:
         * <ol>
         * <li>The previous running hash of the topic (48 bytes)</li>
         * <li>The `topicRunningHashVersion` (8 bytes)</li>
         * <li>The payer account's shard (8 bytes)</li>
         * <li>The payer account's realm (8 bytes)</li>
         * <li>The payer account's number (8 bytes)</li>
         * <li>The topic's shard (8 bytes)</li>
         * <li>The topic's realm (8 bytes)</li>
         * <li>The topic's number (8 bytes)</li>
         * <li>The number of seconds since the epoch when the
         * `ConsensusSubmitMessage` reached consensus (8 bytes)</li>
         * <li>The number of nanoseconds within the second when the
         * `ConsensusSubmitMessage` reached consensus (4 bytes)</li>
         * <li>The `topicSequenceNumber` (8 bytes)</li>
         * <li>The output of a SHA-384 digest of the message bytes from the
         * `ConsensusSubmitMessage` (48 bytes)</li>
         * </ol>
         */
        public runningHash: Uint8Array;

        /**
         * A current sequence number (starting at 1 for the first message)
         * for messages on this topic.
         */
        public sequenceNumber: (number|Long);

        /**
         * An expiration time for this topic, in seconds since the epoch.
         * <p>
         * For this purpose, `epoch` SHALL be the UNIX epoch
         * with 0 at `1970-01-01T00:00:00.000Z`.
         */
        public expirationTime?: (proto.ITimestamp|null);

        /**
         * A key that MUST sign any transaction to update or delete this topic.
         * <p>
         * If this value is not set (null) then the topic CANNOT be deleted,
         * modified, or updated.
         */
        public adminKey?: (proto.IKey|null);

        /**
         * A key that MUST sign any transaction to submit a message to this topic.
         * <p>
         * If this value is not set (null) then any account MAY submit messages to
         * this topic.
         */
        public submitKey?: (proto.IKey|null);

        /**
         * A duration, in seconds, to extend the `expirationTime` value when
         * this topic is automatically renewed.
         * <p>
         * If the `autoRenewAccount` value for this topic is set to a valid account
         * with sufficient HBAR balance to pay renewal fees when this topic
         * expires, the system SHALL automatically renew this topic, extending the
         * `expirationTime` value by the number of seconds described here.<br/>
         * If, however, the `autoRenewAccount` lacks sufficient HBAR balance
         * to pay renewal fees when this topic expires, this topic SHALL be
         * deleted after the time period specified in the `AUTORENEW_GRACE_PERIOD`
         * configuration value.
         */
        public autoRenewPeriod?: (proto.IDuration|null);

        /**
         * An account that is designated to pay automatic renewal fees.
         * <p>
         * If this value is a valid account ID when this topic expires,
         * this account SHALL be charged the renewal fees for this topic,
         * if it holds sufficient HBAR balance. If the account does not hold
         * sufficient HBAR balance to pay renewal fees when necessary, then
         * this topic SHALL be deleted.<br/>
         * If this value is not set (null), or is not a valid account ID, when
         * this topic expires, then this topic SHALL be deleted after the time
         * period specified in the `AUTORENEW_GRACE_PERIOD` configuration value.
         */
        public autoRenewAccount?: (proto.IAccountID|null);

        /**
         * A ledger ID of the network that generated this response.
         * <p>
         * This value SHALL identify the distributed ledger that responded to
         * this query.
         */
        public ledgerId: Uint8Array;

        /**
         * Access control for update/delete of custom fees.
         * <p>
         * If unset, custom fees CANNOT be set for this topic.<br/>
         * If not set when the topic is created, this field CANNOT be set via
         * update.<br/>
         * If set when the topic is created, this field MAY be changed via update.
         */
        public feeScheduleKey?: (proto.IKey|null);

        /**
         * A set of keys.<br/>
         * Keys in this list are permitted to submit messages to this topic without
         * paying custom fees associated with this topic.
         * <p>
         * If a topic submit message is signed by _any_ key included in this set,
         * custom fees SHALL NOT be charged for that transaction.<br/>
         * `fee_exempt_key_list` MAY contain keys for accounts that are inactive,
         * deleted, or non-existent.<br/>
         * If not set, there SHALL NOT be any fee-exempt keys.  In particular, the
         * following keys SHALL NOT be implicitly or automatically added to this
         * list: `adminKey`, `submitKey`, `fee_schedule_key`.
         * A `fee_exempt_key_list` MUST NOT contain more than
         * `MAX_ENTRIES_FOR_FEE_EXEMPT_KEY_LIST` keys.
         * A `fee_exempt_key_list` MUST NOT contain any duplicate keys.
         */
        public feeExemptKeyList: proto.IKey[];

        /**
         * A set of custom fee definitions.<br/>
         * These are fees to be assessed for each submit to this topic.
         * <p>
         * Each fee defined in this set SHALL be evaluated for
         * each message submitted to this topic, and the resultant
         * total assessed fees SHALL be charged.<br/>
         * Custom fees defined here SHALL be assessed in addition to the base
         * network and node fees.
         */
        public customFees: proto.IFixedCustomFee[];

        /**
         * Creates a new ConsensusTopicInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConsensusTopicInfo instance
         */
        public static create(properties?: proto.IConsensusTopicInfo): proto.ConsensusTopicInfo;

        /**
         * Encodes the specified ConsensusTopicInfo message. Does not implicitly {@link proto.ConsensusTopicInfo.verify|verify} messages.
         * @param message ConsensusTopicInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IConsensusTopicInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConsensusTopicInfo message, length delimited. Does not implicitly {@link proto.ConsensusTopicInfo.verify|verify} messages.
         * @param message ConsensusTopicInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IConsensusTopicInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConsensusTopicInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConsensusTopicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ConsensusTopicInfo;

        /**
         * Decodes a ConsensusTopicInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConsensusTopicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ConsensusTopicInfo;

        /**
         * Verifies a ConsensusTopicInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConsensusTopicInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConsensusTopicInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.ConsensusTopicInfo;

        /**
         * Creates a plain object from a ConsensusTopicInfo message. Also converts values to other types if specified.
         * @param message ConsensusTopicInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ConsensusTopicInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConsensusTopicInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ConsensusTopicInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
