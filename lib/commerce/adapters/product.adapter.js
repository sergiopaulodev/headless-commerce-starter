import { ProductSchema } from "@/lib/commerce/contracts/Product.schema";
import { success, failure } from "./types";
import { logDomainError } from "../errors/logger";

export function adaptProduct(input) {
    const result = ProductSchema.safeParse(input);

    if (!result.success) {
        logDomainError({
            code: "PRODUCT_CONTRACT_INVALID",
            message: "Product does not satisfy v1 contract",
            context: {
                handle: input?.handle ?? null,
                issues: result.error.format(),
            },
        });

        return failure({
            code: "PRODUCT_CONTRACT_INVALID",
            message: "Product does not satisfy v1 contract",
            details: result.error.format(),
        });
    }

    return success(result.data);
}