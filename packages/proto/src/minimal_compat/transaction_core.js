import { wrapSchema } from "./wrapper.js";
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
} from "../minimal_gen/basic_types_pb.js";
import { TimestampSchema } from "../minimal_gen/timestamp_pb.js";
import { DurationSchema } from "../minimal_gen/duration_pb.js";

export const proto = {
    Transaction: wrapSchema(TransactionSchema),
    TransactionBody: wrapSchema(TransactionBodySchema),
    SignedTransaction: wrapSchema(SignedTransactionSchema),
    TransactionList: wrapSchema(TransactionListSchema),
    TransactionResponse: wrapSchema(TransactionResponseSchema),
    Query: wrapSchema(QuerySchema),
    Response: wrapSchema(ResponseSchema),
    QueryHeader: wrapSchema(QueryHeaderSchema),
    ResponseHeader: wrapSchema(ResponseHeaderSchema),
    ResponseType,
    AccountID: wrapSchema(AccountIDSchema),
    SignatureMap: wrapSchema(SignatureMapSchema),
    TransactionID: wrapSchema(TransactionIDSchema),
    Key: wrapSchema(KeySchema),
    ThresholdKey: wrapSchema(ThresholdKeySchema),
    KeyList: wrapSchema(KeyListSchema),
    Timestamp: wrapSchema(TimestampSchema),
    Duration: wrapSchema(DurationSchema),
};
