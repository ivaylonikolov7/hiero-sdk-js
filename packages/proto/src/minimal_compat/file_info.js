import { wrapSchema } from "./wrapper.js";
import {
    FileGetInfoResponseSchema,
    FileGetInfoResponse_FileInfoSchema,
    FileGetContentsResponseSchema,
    FileGetContentsResponse_FileContentsSchema,
} from "../minimal_gen/file_info_pb.js";
import { ResponseHeaderSchema, ResponseType } from "../minimal_gen/common_pb.js";
import { ResponseCodeEnum } from "../minimal_gen/response_code_pb.js";
import {
    FileIDSchema,
    ContractIDSchema,
    KeySchema,
    ThresholdKeySchema,
    KeyListSchema,
} from "../minimal_gen/basic_types_pb.js";
import { TimestampSchema } from "../minimal_gen/timestamp_pb.js";

export const proto = {
    FileGetInfoResponse: wrapSchema(FileGetInfoResponseSchema),
    FileInfo: wrapSchema(FileGetInfoResponse_FileInfoSchema),
    FileGetContentsResponse: wrapSchema(FileGetContentsResponseSchema),
    FileContents: wrapSchema(FileGetContentsResponse_FileContentsSchema),
    ResponseHeader: wrapSchema(ResponseHeaderSchema),
    ResponseType,
    ResponseCodeEnum,
    FileID: wrapSchema(FileIDSchema),
    ContractID: wrapSchema(ContractIDSchema),
    Key: wrapSchema(KeySchema),
    ThresholdKey: wrapSchema(ThresholdKeySchema),
    KeyList: wrapSchema(KeyListSchema),
    Timestamp: wrapSchema(TimestampSchema),
};
