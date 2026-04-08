import { wrapSchema } from "./wrapper.js";
import {
    LiveHashSchema,
    CryptoGetInfoResponseSchema,
    CryptoGetInfoResponse_AccountInfoSchema,
    CryptoGetAccountBalanceResponseSchema,
} from "../minimal_gen/crypto_info_pb.js";
import { ResponseHeaderSchema, ResponseType } from "../minimal_gen/common_pb.js";
import { ResponseCodeEnum } from "../minimal_gen/response_code_pb.js";
import {
    AccountIDSchema,
    ContractIDSchema,
    TokenIDSchema,
    KeySchema,
    ThresholdKeySchema,
    KeyListSchema,
    TokenRelationshipSchema,
    TokenBalanceSchema,
    StakingInfoSchema,
    TokenFreezeStatus,
    TokenKycStatus,
} from "../minimal_gen/basic_types_pb.js";
import { TimestampSchema } from "../minimal_gen/timestamp_pb.js";
import { DurationSchema } from "../minimal_gen/duration_pb.js";

export const proto = {
    CryptoGetInfoResponse: wrapSchema(CryptoGetInfoResponseSchema),
    AccountInfo: wrapSchema(CryptoGetInfoResponse_AccountInfoSchema),
    CryptoGetAccountBalanceResponse: wrapSchema(CryptoGetAccountBalanceResponseSchema),
    LiveHash: wrapSchema(LiveHashSchema),
    ResponseHeader: wrapSchema(ResponseHeaderSchema),
    ResponseType,
    ResponseCodeEnum,
    AccountID: wrapSchema(AccountIDSchema),
    ContractID: wrapSchema(ContractIDSchema),
    TokenID: wrapSchema(TokenIDSchema),
    Key: wrapSchema(KeySchema),
    ThresholdKey: wrapSchema(ThresholdKeySchema),
    KeyList: wrapSchema(KeyListSchema),
    TokenRelationship: wrapSchema(TokenRelationshipSchema),
    TokenBalance: wrapSchema(TokenBalanceSchema),
    StakingInfo: wrapSchema(StakingInfoSchema),
    TokenFreezeStatus,
    TokenKycStatus,
    Timestamp: wrapSchema(TimestampSchema),
    Duration: wrapSchema(DurationSchema),
};
