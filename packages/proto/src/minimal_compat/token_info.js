import { wrapSchema } from "./wrapper.js";
import { TokenInfoSchema } from "../minimal_gen/token_info_pb.js";
import {
    AccountIDSchema,
    ContractIDSchema,
    TokenIDSchema,
    KeySchema,
    ThresholdKeySchema,
    KeyListSchema,
    FractionSchema,
    TokenType,
    SubType,
    TokenSupplyType,
    TokenKeyValidation,
    TokenFreezeStatus,
    TokenKycStatus,
    TokenPauseStatus,
} from "../minimal_gen/basic_types_pb.js";
import {
    FractionalFeeSchema,
    FixedFeeSchema,
    RoyaltyFeeSchema,
    CustomFeeSchema,
} from "../minimal_gen/custom_fees_pb.js";
import { TimestampSchema } from "../minimal_gen/timestamp_pb.js";
import { DurationSchema } from "../minimal_gen/duration_pb.js";

export const proto = {
    TokenInfo: wrapSchema(TokenInfoSchema),
    AccountID: wrapSchema(AccountIDSchema),
    ContractID: wrapSchema(ContractIDSchema),
    TokenID: wrapSchema(TokenIDSchema),
    Key: wrapSchema(KeySchema),
    ThresholdKey: wrapSchema(ThresholdKeySchema),
    KeyList: wrapSchema(KeyListSchema),
    Fraction: wrapSchema(FractionSchema),
    TokenType,
    SubType,
    TokenSupplyType,
    TokenKeyValidation,
    TokenFreezeStatus,
    TokenKycStatus,
    TokenPauseStatus,
    FractionalFee: wrapSchema(FractionalFeeSchema),
    FixedFee: wrapSchema(FixedFeeSchema),
    RoyaltyFee: wrapSchema(RoyaltyFeeSchema),
    CustomFee: wrapSchema(CustomFeeSchema),
    Timestamp: wrapSchema(TimestampSchema),
    Duration: wrapSchema(DurationSchema),
};
