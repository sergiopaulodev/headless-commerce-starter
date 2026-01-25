import { getProductByHandle } from "@/lib/commerce/products";
import { failure } from "@/lib/commerce/adapters/types";

export async function loadProduct(handle) {
    try {
        return await getProductByHandle(handle);
        } catch (err) {
            return failure({
            code: "INTEGRATION_FAILURE",
            message: "Failed to load product",
            details: err?.message ?? null,
            });
    }
}