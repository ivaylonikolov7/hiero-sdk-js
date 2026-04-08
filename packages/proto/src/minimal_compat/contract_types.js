import { wrapSchema } from "./wrapper.js";
import {
    ContractGetInfoResponseSchema,
    ContractGetInfoResponse_ContractInfoSchema,
    ContractNonceInfoSchema,
    ContractStateChangeSchema,
    StorageChangeSchema,
} from "../minimal_gen/contract_types_pb.js";
import { ResponseHeaderSchema } from "../minimal_gen/common_pb.js";
import { ResponseCodeEnum } from "../minimal_gen/response_code_pb.js";
import {
    AccountIDSchema,
    ContractIDSchema,
    TokenRelationshipSchema,
    KeySchema,
    ThresholdKeySchema,
    KeyListSchema,
} from "../minimal_gen/basic_types_pb.js";
import { TimestampSchema } from "../minimal_gen/timestamp_pb.js";
import { DurationSchema } from "../minimal_gen/duration_pb.js";

export const proto = {
    ContractGetInfoResponse: wrapSchema(ContractGetInfoResponseSchema),
    ContractInfo: wrapSchema(ContractGetInfoResponse_ContractInfoSchema),
    ContractNonceInfo: wrapSchema(ContractNonceInfoSchema),
    ContractStateChange: wrapSchema(ContractStateChangeSchema),
    StorageChange: wrapSchema(StorageChangeSchema),
    ResponseHeader: wrapSchema(ResponseHeaderSchema),
    ResponseCodeEnum,
    AccountID: wrapSchema(AccountIDSchema),
    ContractID: wrapSchema(ContractIDSchema),
    TokenRelationship: wrapSchema(TokenRelationshipSchema),
    Key: wrapSchema(KeySchema),
    ThresholdKey: wrapSchema(ThresholdKeySchema),
    KeyList: wrapSchema(KeyListSchema),
    Timestamp: wrapSchema(TimestampSchema),
    Duration: wrapSchema(DurationSchema),
};
