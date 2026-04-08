import { wrapSchema } from "./wrapper.js";
import {
    ConsensusTopicInfoSchema,
    ConsensusGetTopicInfoResponseSchema,
} from "../minimal_gen/consensus_info_pb.js";
import { ResponseHeaderSchema, ResponseType } from "../minimal_gen/common_pb.js";
import { ResponseCodeEnum } from "../minimal_gen/response_code_pb.js";
import {
    AccountIDSchema,
    TopicIDSchema,
    KeySchema,
    ThresholdKeySchema,
    KeyListSchema,
} from "../minimal_gen/basic_types_pb.js";
import { FixedFeeSchema, FixedCustomFeeSchema } from "../minimal_gen/custom_fees_pb.js";
import { TimestampSchema } from "../minimal_gen/timestamp_pb.js";
import { DurationSchema } from "../minimal_gen/duration_pb.js";

export const proto = {
    ConsensusTopicInfo: wrapSchema(ConsensusTopicInfoSchema),
    ConsensusGetTopicInfoResponse: wrapSchema(ConsensusGetTopicInfoResponseSchema),
    ResponseHeader: wrapSchema(ResponseHeaderSchema),
    ResponseType,
    ResponseCodeEnum,
    AccountID: wrapSchema(AccountIDSchema),
    TopicID: wrapSchema(TopicIDSchema),
    Key: wrapSchema(KeySchema),
    ThresholdKey: wrapSchema(ThresholdKeySchema),
    KeyList: wrapSchema(KeyListSchema),
    FixedFee: wrapSchema(FixedFeeSchema),
    FixedCustomFee: wrapSchema(FixedCustomFeeSchema),
    Timestamp: wrapSchema(TimestampSchema),
    Duration: wrapSchema(DurationSchema),
};
