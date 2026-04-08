import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of a NetworkGetVersionInfoResponse. */
    interface INetworkGetVersionInfoResponse {

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        header?: (proto.IResponseHeader|null);

        /**
         * An API version.
         * <p>
         * This SHALL be the current Hedera API (HAPI) protobuf message version
         * accepted by the network.
         */
        hapiProtoVersion?: (proto.ISemanticVersion|null);

        /**
         * A Services version.
         * <p>
         * This SHALL be the current version of the Hedera Services software
         * operating the network.
         */
        hederaServicesVersion?: (proto.ISemanticVersion|null);
    }

    /**
     * A response to a `NetworkGetVersionInfoQuery`.
     *
     * This SHALL return `SemanticVersion` information for both Hedera API (HAPI)
     * and Hedera Services.
     */
    class NetworkGetVersionInfoResponse implements INetworkGetVersionInfoResponse {

        /**
         * Constructs a new NetworkGetVersionInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INetworkGetVersionInfoResponse);

        /**
         * The standard response information for queries.<br/>
         * This includes the values requested in the `QueryHeader`
         * (cost, state proof, both, or neither).
         */
        public header?: (proto.IResponseHeader|null);

        /**
         * An API version.
         * <p>
         * This SHALL be the current Hedera API (HAPI) protobuf message version
         * accepted by the network.
         */
        public hapiProtoVersion?: (proto.ISemanticVersion|null);

        /**
         * A Services version.
         * <p>
         * This SHALL be the current version of the Hedera Services software
         * operating the network.
         */
        public hederaServicesVersion?: (proto.ISemanticVersion|null);

        /**
         * Creates a new NetworkGetVersionInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NetworkGetVersionInfoResponse instance
         */
        public static create(properties?: proto.INetworkGetVersionInfoResponse): proto.NetworkGetVersionInfoResponse;

        /**
         * Encodes the specified NetworkGetVersionInfoResponse message. Does not implicitly {@link proto.NetworkGetVersionInfoResponse.verify|verify} messages.
         * @param message NetworkGetVersionInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INetworkGetVersionInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NetworkGetVersionInfoResponse message, length delimited. Does not implicitly {@link proto.NetworkGetVersionInfoResponse.verify|verify} messages.
         * @param message NetworkGetVersionInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INetworkGetVersionInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NetworkGetVersionInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetworkGetVersionInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.NetworkGetVersionInfoResponse;

        /**
         * Decodes a NetworkGetVersionInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NetworkGetVersionInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.NetworkGetVersionInfoResponse;

        /**
         * Verifies a NetworkGetVersionInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NetworkGetVersionInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NetworkGetVersionInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.NetworkGetVersionInfoResponse;

        /**
         * Creates a plain object from a NetworkGetVersionInfoResponse message. Also converts values to other types if specified.
         * @param message NetworkGetVersionInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.NetworkGetVersionInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NetworkGetVersionInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NetworkGetVersionInfoResponse
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

    /** Properties of a ServiceEndpoint. */
    interface IServiceEndpoint {

        /**
         * A 32-bit IPv4 address.<br/>
         * This is the address of the endpoint, encoded in pure "big-endian"
         * (i.e. left to right) order (e.g. `127.0.0.1` has hex bytes in the
         * order `7F`, `00`, `00`, `01`).
         */
        ipAddressV4?: (Uint8Array|null);

        /**
         * A TCP port to use.
         * <p>
         * This value MUST be between 0 and 65535, inclusive.
         */
        port?: (number|null);

        /**
         * A node domain name.
         * <p>
         * This MUST be the fully qualified domain name of the node.<br/>
         * This value MUST NOT exceed 253 characters.<br/>
         * When the `domain_name` field is set, the `ipAddressV4`
         * field MUST NOT be set.<br/>
         * When the `ipAddressV4` field is set, the `domain_name`
         * field MUST NOT be set.
         */
        domainName?: (string|null);
    }

    /**
     * A network node endpoint.<br/>
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
     */
    class ServiceEndpoint implements IServiceEndpoint {

        /**
         * Constructs a new ServiceEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IServiceEndpoint);

        /**
         * A 32-bit IPv4 address.<br/>
         * This is the address of the endpoint, encoded in pure "big-endian"
         * (i.e. left to right) order (e.g. `127.0.0.1` has hex bytes in the
         * order `7F`, `00`, `00`, `01`).
         */
        public ipAddressV4: Uint8Array;

        /**
         * A TCP port to use.
         * <p>
         * This value MUST be between 0 and 65535, inclusive.
         */
        public port: number;

        /**
         * A node domain name.
         * <p>
         * This MUST be the fully qualified domain name of the node.<br/>
         * This value MUST NOT exceed 253 characters.<br/>
         * When the `domain_name` field is set, the `ipAddressV4`
         * field MUST NOT be set.<br/>
         * When the `ipAddressV4` field is set, the `domain_name`
         * field MUST NOT be set.
         */
        public domainName: string;

        /**
         * Creates a new ServiceEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceEndpoint instance
         */
        public static create(properties?: proto.IServiceEndpoint): proto.ServiceEndpoint;

        /**
         * Encodes the specified ServiceEndpoint message. Does not implicitly {@link proto.ServiceEndpoint.verify|verify} messages.
         * @param message ServiceEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IServiceEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceEndpoint message, length delimited. Does not implicitly {@link proto.ServiceEndpoint.verify|verify} messages.
         * @param message ServiceEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IServiceEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ServiceEndpoint;

        /**
         * Decodes a ServiceEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ServiceEndpoint;

        /**
         * Verifies a ServiceEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.ServiceEndpoint;

        /**
         * Creates a plain object from a ServiceEndpoint message. Also converts values to other types if specified.
         * @param message ServiceEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ServiceEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServiceEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NodeAddress. */
    interface INodeAddress {

        /**
         * ServiceEndpoint is now used to retrieve a node's list of IP
         * addresses and ports.<br/>
         * The IP address of the Node, as a string, encoded in UTF-8.<br/>
         * This value SHALL NOT be populated.
         */
        ipAddress?: (Uint8Array|null);

        /**
         * ServiceEndpoint is now used to retrieve a node's list of IP
         * addresses and ports.<br/>
         * The port number of the grpc server for the node.<br/>
         * This value SHALL NOT be populated.
         */
        portno?: (number|null);

        /**
         * Description provides short text functionality.<br/>
         * A short description of the node.
         * <p>
         * This field SHALL NOT be populated.
         */
        memo?: (Uint8Array|null);

        /**
         * A hexadecimal String encoding of an X509 public key.
         * <p>
         * This X509 RSA _public_ key SHALL be used to verify record stream files
         * (e.g., record stream files).<br/>
         * This field SHALL be a string of hexadecimal characters, encoded UTF-8,
         * which, translated to binary, form the public key DER encoding.
         */
        RSA_PubKey?: (string|null);

        /**
         * A numeric identifier for the node.
         * <p>
         * This value SHALL NOT be sequential.
         * <p>
         * A `0.0.101` field
         */
        nodeId?: (number|Long|null);

        /**
         * An account to be paid the "node" portion of transaction fees.<br/>
         * The "node" fees are paid to the node that submitted the transaction.
         * <p>
         * A `0.0.101` field
         */
        nodeAccountId?: (proto.IAccountID|null);

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
         */
        nodeCertHash?: (Uint8Array|null);

        /**
         * A node's service IP addresses and TCP ports.<br/>
         * Nodes require multiple endpoints to ensure that inter-node communication
         * (e.g. gossip) is properly separated from client communication to
         * API endpoints.
         * <p>
         * A `0.0.101` field
         */
        serviceEndpoint?: (proto.IServiceEndpoint[]|null);

        /**
         * A short description of the node.
         * <p>
         * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
         * (default 100) bytes when encoded as UTF-8.
         */
        description?: (string|null);

        /**
         * This is replaced by per-account stake tracking and dynamic
         * calculation.<br/>
         * The amount of tinybar staked to the node.<br/>
         * This value SHOULD NOT be populated, and SHALL be ignored.
         */
        stake?: (number|Long|null);
    }

    /**
     * The data about a node, including its service endpoints and the Hedera account
     * to be paid for services provided by the node (that is, queries answered and
     * transactions submitted).
     *
     * All active fields are populated in the `0.0.102` address book file.<br/>
     * Only fields documented with "`0.0.101` field" are populated in the 0.0.101
     * address book file.
     *
     * This message MAY be superseded by messages in state/addressbook/node.proto
     * and node_get_info.proto.
     */
    class NodeAddress implements INodeAddress {

        /**
         * Constructs a new NodeAddress.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INodeAddress);

        /**
         * ServiceEndpoint is now used to retrieve a node's list of IP
         * addresses and ports.<br/>
         * The IP address of the Node, as a string, encoded in UTF-8.<br/>
         * This value SHALL NOT be populated.
         */
        public ipAddress: Uint8Array;

        /**
         * ServiceEndpoint is now used to retrieve a node's list of IP
         * addresses and ports.<br/>
         * The port number of the grpc server for the node.<br/>
         * This value SHALL NOT be populated.
         */
        public portno: number;

        /**
         * Description provides short text functionality.<br/>
         * A short description of the node.
         * <p>
         * This field SHALL NOT be populated.
         */
        public memo: Uint8Array;

        /**
         * A hexadecimal String encoding of an X509 public key.
         * <p>
         * This X509 RSA _public_ key SHALL be used to verify record stream files
         * (e.g., record stream files).<br/>
         * This field SHALL be a string of hexadecimal characters, encoded UTF-8,
         * which, translated to binary, form the public key DER encoding.
         */
        public RSA_PubKey: string;

        /**
         * A numeric identifier for the node.
         * <p>
         * This value SHALL NOT be sequential.
         * <p>
         * A `0.0.101` field
         */
        public nodeId: (number|Long);

        /**
         * An account to be paid the "node" portion of transaction fees.<br/>
         * The "node" fees are paid to the node that submitted the transaction.
         * <p>
         * A `0.0.101` field
         */
        public nodeAccountId?: (proto.IAccountID|null);

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
         */
        public nodeCertHash: Uint8Array;

        /**
         * A node's service IP addresses and TCP ports.<br/>
         * Nodes require multiple endpoints to ensure that inter-node communication
         * (e.g. gossip) is properly separated from client communication to
         * API endpoints.
         * <p>
         * A `0.0.101` field
         */
        public serviceEndpoint: proto.IServiceEndpoint[];

        /**
         * A short description of the node.
         * <p>
         * This value, if set, MUST NOT exceed `transaction.maxMemoUtf8Bytes`
         * (default 100) bytes when encoded as UTF-8.
         */
        public description: string;

        /**
         * This is replaced by per-account stake tracking and dynamic
         * calculation.<br/>
         * The amount of tinybar staked to the node.<br/>
         * This value SHOULD NOT be populated, and SHALL be ignored.
         */
        public stake: (number|Long);

        /**
         * Creates a new NodeAddress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeAddress instance
         */
        public static create(properties?: proto.INodeAddress): proto.NodeAddress;

        /**
         * Encodes the specified NodeAddress message. Does not implicitly {@link proto.NodeAddress.verify|verify} messages.
         * @param message NodeAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INodeAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeAddress message, length delimited. Does not implicitly {@link proto.NodeAddress.verify|verify} messages.
         * @param message NodeAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INodeAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeAddress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.NodeAddress;

        /**
         * Decodes a NodeAddress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.NodeAddress;

        /**
         * Verifies a NodeAddress message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeAddress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeAddress
         */
        public static fromObject(object: { [k: string]: any }): proto.NodeAddress;

        /**
         * Creates a plain object from a NodeAddress message. Also converts values to other types if specified.
         * @param message NodeAddress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.NodeAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeAddress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeAddress
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NodeAddressBook. */
    interface INodeAddressBook {

        /** Published data for all nodes in the network */
        nodeAddress?: (proto.INodeAddress[]|null);
    }

    /**
     * A list of nodes and their metadata that contains details of the nodes
     * running the network.
     *
     * Used to parse the contents of system files `0.0.101` and `0.0.102`.
     */
    class NodeAddressBook implements INodeAddressBook {

        /**
         * Constructs a new NodeAddressBook.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.INodeAddressBook);

        /** Published data for all nodes in the network */
        public nodeAddress: proto.INodeAddress[];

        /**
         * Creates a new NodeAddressBook instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeAddressBook instance
         */
        public static create(properties?: proto.INodeAddressBook): proto.NodeAddressBook;

        /**
         * Encodes the specified NodeAddressBook message. Does not implicitly {@link proto.NodeAddressBook.verify|verify} messages.
         * @param message NodeAddressBook message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.INodeAddressBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeAddressBook message, length delimited. Does not implicitly {@link proto.NodeAddressBook.verify|verify} messages.
         * @param message NodeAddressBook message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.INodeAddressBook, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeAddressBook message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeAddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.NodeAddressBook;

        /**
         * Decodes a NodeAddressBook message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeAddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.NodeAddressBook;

        /**
         * Verifies a NodeAddressBook message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeAddressBook message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeAddressBook
         */
        public static fromObject(object: { [k: string]: any }): proto.NodeAddressBook;

        /**
         * Creates a plain object from a NodeAddressBook message. Also converts values to other types if specified.
         * @param message NodeAddressBook
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.NodeAddressBook, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeAddressBook to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeAddressBook
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SemanticVersion. */
    interface ISemanticVersion {

        /**
         * A major version.<br/>
         * Hedera does not increment this value and retains a `0` value to
         * indicate that API may change for any release.
         * <p>
         * This value SHALL increment for an incompatible API change.<br/>
         */
        major?: (number|null);

        /**
         * A minor version.<br/>
         * Hedera increments this value with each release.<br/>
         * There may be incompatible API changes in any Hedera Services release.
         * <p>
         * This value SHALL increment for backwards-compatible new
         * functionality.
         */
        minor?: (number|null);

        /**
         * A patch version.
         * <p>
         * This value SHALL increment for backwards-compatible bug fixes.
         */
        patch?: (number|null);

        /**
         * A pre-release version.
         * <p>
         * This MAY be denoted by appending a hyphen and a series of dot separated
         * identifiers per [Semver Specification](https://semver.org/#spec-item-9);
         * given a string `0.14.0-alpha.1+21AF26D3`, this field would contain
         * 'alpha.1'
         */
        pre?: (string|null);

        /**
         * A build version.
         * <p>
         * Build version MAY be denoted by appending a plus sign and a series of
         * dot separated identifiers immediately following the patch or pre-release
         * version per [Semver Specification](https://semver.org/#spec-item-10); so
         * given a string `0.14.0-alpha.1+21AF26D3`, this field
         * would contain '21AF26D3'
         */
        build?: (string|null);
    }

    /**
     * A software version according to "[semantic versioning](https://semver.org/)"
     * or "date versioning".
     *
     * Hedera currently modifies the "typical" semantic versioning somewhat, the
     * `major` version is always `0`, and each release increments the `minor`
     * version. The `patch` and `pre` components are used in the typical manner.
     * The `build` component is not generally used.
     */
    class SemanticVersion implements ISemanticVersion {

        /**
         * Constructs a new SemanticVersion.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISemanticVersion);

        /**
         * A major version.<br/>
         * Hedera does not increment this value and retains a `0` value to
         * indicate that API may change for any release.
         * <p>
         * This value SHALL increment for an incompatible API change.<br/>
         */
        public major: number;

        /**
         * A minor version.<br/>
         * Hedera increments this value with each release.<br/>
         * There may be incompatible API changes in any Hedera Services release.
         * <p>
         * This value SHALL increment for backwards-compatible new
         * functionality.
         */
        public minor: number;

        /**
         * A patch version.
         * <p>
         * This value SHALL increment for backwards-compatible bug fixes.
         */
        public patch: number;

        /**
         * A pre-release version.
         * <p>
         * This MAY be denoted by appending a hyphen and a series of dot separated
         * identifiers per [Semver Specification](https://semver.org/#spec-item-9);
         * given a string `0.14.0-alpha.1+21AF26D3`, this field would contain
         * 'alpha.1'
         */
        public pre: string;

        /**
         * A build version.
         * <p>
         * Build version MAY be denoted by appending a plus sign and a series of
         * dot separated identifiers immediately following the patch or pre-release
         * version per [Semver Specification](https://semver.org/#spec-item-10); so
         * given a string `0.14.0-alpha.1+21AF26D3`, this field
         * would contain '21AF26D3'
         */
        public build: string;

        /**
         * Creates a new SemanticVersion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SemanticVersion instance
         */
        public static create(properties?: proto.ISemanticVersion): proto.SemanticVersion;

        /**
         * Encodes the specified SemanticVersion message. Does not implicitly {@link proto.SemanticVersion.verify|verify} messages.
         * @param message SemanticVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISemanticVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SemanticVersion message, length delimited. Does not implicitly {@link proto.SemanticVersion.verify|verify} messages.
         * @param message SemanticVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISemanticVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SemanticVersion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SemanticVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SemanticVersion;

        /**
         * Decodes a SemanticVersion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SemanticVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SemanticVersion;

        /**
         * Verifies a SemanticVersion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SemanticVersion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SemanticVersion
         */
        public static fromObject(object: { [k: string]: any }): proto.SemanticVersion;

        /**
         * Creates a plain object from a SemanticVersion message. Also converts values to other types if specified.
         * @param message SemanticVersion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SemanticVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SemanticVersion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SemanticVersion
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
}
