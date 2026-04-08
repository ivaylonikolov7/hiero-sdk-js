import { wrapSchema } from "./wrapper.js";
import { TransactionResponseSchema } from "../minimal_gen/common_pb.js";
import { ResponseCodeEnum } from "../minimal_gen/response_code_pb.js";

const proto = {
    TransactionResponse: wrapSchema(TransactionResponseSchema),
    ResponseCodeEnum,
};

export default { proto };
export { proto };
