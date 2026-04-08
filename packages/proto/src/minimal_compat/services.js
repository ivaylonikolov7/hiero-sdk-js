import { wrapSchema, createServiceStub } from "./wrapper.js";
import {
    TransactionSchema,
    TransactionBodySchema,
    SignedTransactionSchema,
    TransactionListSchema,
    TransactionResponseSchema,
    QuerySchema,
    ResponseSchema,
    QueryHeaderSchema,
    ResponseHeaderSchema,
    ResponseType,
} from "../minimal_gen/common_pb.js";
import {
    AccountIDSchema,
    SignatureMapSchema,
    TransactionIDSchema,
    KeySchema,
    ThresholdKeySchema,
    KeyListSchema,
    SignaturePairSchema,
} from "../minimal_gen/basic_types_pb.js";
import { TimestampSchema } from "../minimal_gen/timestamp_pb.js";
import { DurationSchema } from "../minimal_gen/duration_pb.js";
import { ResponseCodeEnumSchema } from "../minimal_gen/response_code_pb.js";

// Wrap message schemas
const Transaction = wrapSchema(TransactionSchema);
const TransactionResponse = wrapSchema(TransactionResponseSchema);
const Query = wrapSchema(QuerySchema);
const Response = wrapSchema(ResponseSchema);

// Service stubs
const CryptoService = createServiceStub("CryptoService", [
    "createAccount", "updateAccount", "cryptoTransfer", "cryptoDelete",
    "approveAllowances", "deleteAllowances", "addLiveHash", "deleteLiveHash",
    "getLiveHash", "getAccountRecords", "cryptoGetBalance", "getAccountInfo",
    "getTransactionReceipts", "getFastTransactionRecord", "getTxRecordByTxID",
    "getStakersByAccountID",
], TransactionSchema, TransactionResponseSchema);

const SmartContractService = createServiceStub("SmartContractService", [
    "createContract", "updateContract", "contractCallMethod",
    "getContractInfo", "contractCallLocalMethod", "ContractGetBytecode",
    "getBySolidityID", "getTxRecordByContractID", "deleteContract",
    "systemDelete", "systemUndelete", "callEthereum",
], TransactionSchema, TransactionResponseSchema);

const FileService = createServiceStub("FileService", [
    "createFile", "updateFile", "deleteFile", "appendContent",
    "getFileContent", "getFileInfo", "systemDelete", "systemUndelete",
], TransactionSchema, TransactionResponseSchema);

const ConsensusService = createServiceStub("ConsensusService", [
    "createTopic", "updateTopic", "deleteTopic", "getTopicInfo", "submitMessage",
], TransactionSchema, TransactionResponseSchema);

const FreezeService = createServiceStub("FreezeService", [
    "freeze",
], TransactionSchema, TransactionResponseSchema);

const NetworkService = createServiceStub("NetworkService", [
    "getVersionInfo", "getExecutionTime", "uncheckedSubmit", "getAccountDetails",
], TransactionSchema, TransactionResponseSchema);

const TokenService = createServiceStub("TokenService", [
    "createToken", "updateToken", "mintToken", "burnToken", "deleteToken",
    "wipeTokenAccount", "freezeTokenAccount", "unfreezeTokenAccount",
    "grantKycToTokenAccount", "revokeKycFromTokenAccount",
    "associateTokens", "dissociateTokens", "updateTokenFeeSchedule",
    "getTokenInfo", "getAccountNftInfos", "getTokenNftInfo", "getTokenNftInfos",
    "pauseToken", "unpauseToken", "updateNfts", "rejectToken",
    "airdropTokens", "cancelAirdrop", "claimAirdrop",
], TransactionSchema, TransactionResponseSchema);

const ScheduleService = createServiceStub("ScheduleService", [
    "createSchedule", "signSchedule", "deleteSchedule", "getScheduleInfo",
], TransactionSchema, TransactionResponseSchema);

const UtilService = createServiceStub("UtilService", [
    "prng",
], TransactionSchema, TransactionResponseSchema);

const AddressBookService = createServiceStub("AddressBookService", [
    "createNode", "deleteNode", "updateNode",
], TransactionSchema, TransactionResponseSchema);

export const proto = {
    Transaction,
    TransactionBody: wrapSchema(TransactionBodySchema),
    SignedTransaction: wrapSchema(SignedTransactionSchema),
    TransactionList: wrapSchema(TransactionListSchema),
    TransactionResponse,
    Query,
    Response,
    QueryHeader: wrapSchema(QueryHeaderSchema),
    ResponseHeader: wrapSchema(ResponseHeaderSchema),
    ResponseType,
    AccountID: wrapSchema(AccountIDSchema),
    SignatureMap: wrapSchema(SignatureMapSchema),
    SignaturePair: wrapSchema(SignaturePairSchema),
    TransactionID: wrapSchema(TransactionIDSchema),
    Key: wrapSchema(KeySchema),
    ThresholdKey: wrapSchema(ThresholdKeySchema),
    KeyList: wrapSchema(KeyListSchema),
    Timestamp: wrapSchema(TimestampSchema),
    Duration: wrapSchema(DurationSchema),
    CryptoService,
    SmartContractService,
    FileService,
    ConsensusService,
    FreezeService,
    NetworkService,
    TokenService,
    ScheduleService,
    UtilService,
    AddressBookService,
};
