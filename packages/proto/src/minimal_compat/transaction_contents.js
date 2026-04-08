import { wrapSchema } from "./wrapper.js";
import { SignedTransactionSchema } from "../minimal_gen/common_pb.js";

const proto = {
    SignedTransaction: wrapSchema(SignedTransactionSchema),
};

export default { proto };
export { proto };
