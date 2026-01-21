import { ProductSchema } from "../contracts/Product.schema";
import { success, failure } from "./types";

export function adaptProduct(input) {
    const result = ProductSchema.safeParse(input);

    if (!result.success) {
        return failure({
            message: "Invalid Product contract v1",
            issues: result.error.issues,
        });
    }

    return success(result.data);
}