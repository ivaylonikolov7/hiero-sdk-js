import { wrapSchema } from "./wrapper.js";
import { NetworkGetVersionInfoResponseSchema } from "../minimal_gen/network_info_pb.js";
import { ResponseHeaderSchema, ResponseType } from "../minimal_gen/common_pb.js";
import { ResponseCodeEnum } from "../minimal_gen/response_code_pb.js";
import {
    AccountIDSchema,
    ServiceEndpointSchema,
    NodeAddressSchema,
    NodeAddressBookSchema,
    SemanticVersionSchema,
    StakingInfoSchema,
} from "../minimal_gen/basic_types_pb.js";
import { TimestampSchema } from "../minimal_gen/timestamp_pb.js";

export const proto = {
    NetworkGetVersionInfoResponse: wrapSchema(NetworkGetVersionInfoResponseSchema),
    ResponseHeader: wrapSchema(ResponseHeaderSchema),
    ResponseType,
    ResponseCodeEnum,
    AccountID: wrapSchema(AccountIDSchema),
    ServiceEndpoint: wrapSchema(ServiceEndpointSchema),
    NodeAddress: wrapSchema(NodeAddressSchema),
    NodeAddressBook: wrapSchema(NodeAddressBookSchema),
    SemanticVersion: wrapSchema(SemanticVersionSchema),
    StakingInfo: wrapSchema(StakingInfoSchema),
    Timestamp: wrapSchema(TimestampSchema),
};
