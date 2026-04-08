import { wrapSchema } from "./wrapper.js";
import {
    TransactionReceiptSchema,
    NodeIDSchema,
    ExchangeRateSchema,
    ExchangeRateSetSchema,
    ContractFunctionResultSchema,
    ContractLoginfoSchema,
    TransactionRecordSchema,
    TransactionGetReceiptResponseSchema,
    TransactionGetRecordResponseSchema,
} from "../minimal_gen/receipt_record_pb.js";
import {
    ResponseHeaderSchema,
    TransactionResponseSchema,
    ResponseType,
} from "../minimal_gen/common_pb.js";
import { ResponseCodeEnum } from "../minimal_gen/response_code_pb.js";
import {
    AccountIDSchema,
    ContractIDSchema,
    FileIDSchema,
    TokenIDSchema,
    TopicIDSchema,
    ScheduleIDSchema,
    TransactionIDSchema,
    TransferListSchema,
    TokenTransferListSchema,
    TokenAssociationSchema,
    AccountAmountSchema,
    NftTransferSchema,
} from "../minimal_gen/basic_types_pb.js";
import { AssessedCustomFeeSchema } from "../minimal_gen/custom_fees_pb.js";
import { TimestampSchema } from "../minimal_gen/timestamp_pb.js";

export const proto = {
    TransactionReceipt: wrapSchema(TransactionReceiptSchema),
    NodeID: wrapSchema(NodeIDSchema),
    ExchangeRate: wrapSchema(ExchangeRateSchema),
    ExchangeRateSet: wrapSchema(ExchangeRateSetSchema),
    ContractFunctionResult: wrapSchema(ContractFunctionResultSchema),
    ContractLoginfo: wrapSchema(ContractLoginfoSchema),
    AssessedCustomFee: wrapSchema(AssessedCustomFeeSchema),
    TransactionRecord: wrapSchema(TransactionRecordSchema),
    TransactionGetReceiptResponse: wrapSchema(TransactionGetReceiptResponseSchema),
    TransactionGetRecordResponse: wrapSchema(TransactionGetRecordResponseSchema),
    ResponseHeader: wrapSchema(ResponseHeaderSchema),
    TransactionResponse: wrapSchema(TransactionResponseSchema),
    ResponseType,
    ResponseCodeEnum,
    AccountID: wrapSchema(AccountIDSchema),
    ContractID: wrapSchema(ContractIDSchema),
    FileID: wrapSchema(FileIDSchema),
    TokenID: wrapSchema(TokenIDSchema),
    TopicID: wrapSchema(TopicIDSchema),
    ScheduleID: wrapSchema(ScheduleIDSchema),
    TransactionID: wrapSchema(TransactionIDSchema),
    TransferList: wrapSchema(TransferListSchema),
    TokenTransferList: wrapSchema(TokenTransferListSchema),
    TokenAssociation: wrapSchema(TokenAssociationSchema),
    AccountAmount: wrapSchema(AccountAmountSchema),
    NftTransfer: wrapSchema(NftTransferSchema),
    Timestamp: wrapSchema(TimestampSchema),
};
