import { wrapSchema } from "./wrapper.js";
import {
    AccountIDSchema,
    ContractIDSchema,
    FileIDSchema,
    TokenIDSchema,
    TopicIDSchema,
    ScheduleIDSchema,
    NftIDSchema,
    TransactionIDSchema,
    KeySchema,
    ThresholdKeySchema,
    KeyListSchema,
    SignatureMapSchema,
    SignaturePairSchema,
} from "../minimal_gen/basic_types_pb.js";
import { TimestampSchema } from "../minimal_gen/timestamp_pb.js";

export const proto = {
    AccountID: wrapSchema(AccountIDSchema),
    ContractID: wrapSchema(ContractIDSchema),
    FileID: wrapSchema(FileIDSchema),
    TokenID: wrapSchema(TokenIDSchema),
    TopicID: wrapSchema(TopicIDSchema),
    ScheduleID: wrapSchema(ScheduleIDSchema),
    NftID: wrapSchema(NftIDSchema),
    TransactionID: wrapSchema(TransactionIDSchema),
    Key: wrapSchema(KeySchema),
    ThresholdKey: wrapSchema(ThresholdKeySchema),
    KeyList: wrapSchema(KeyListSchema),
    SignatureMap: wrapSchema(SignatureMapSchema),
    SignaturePair: wrapSchema(SignaturePairSchema),
    Timestamp: wrapSchema(TimestampSchema),
};
