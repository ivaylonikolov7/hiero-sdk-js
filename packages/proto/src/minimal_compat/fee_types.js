import { wrapSchema } from "./wrapper.js";
import {
    ExchangeRateSchema,
    ExchangeRateSetSchema,
} from "../minimal_gen/receipt_record_pb.js";
import {
    FeeComponentsSchema,
    FeeDataSchema,
    FeeScheduleSchema,
    TransactionFeeScheduleSchema,
    CurrentAndNextFeeScheduleSchema,
} from "../minimal_gen/basic_types_pb.js";
import { TimestampSchema, TimestampSecondsSchema } from "../minimal_gen/timestamp_pb.js";

export const proto = {
    ExchangeRate: wrapSchema(ExchangeRateSchema),
    ExchangeRateSet: wrapSchema(ExchangeRateSetSchema),
    FeeComponents: wrapSchema(FeeComponentsSchema),
    FeeData: wrapSchema(FeeDataSchema),
    FeeSchedule: wrapSchema(FeeScheduleSchema),
    TransactionFeeSchedule: wrapSchema(TransactionFeeScheduleSchema),
    CurrentAndNextFeeSchedule: wrapSchema(CurrentAndNextFeeScheduleSchema),
    Timestamp: wrapSchema(TimestampSchema),
    TimestampSeconds: wrapSchema(TimestampSecondsSchema),
};
