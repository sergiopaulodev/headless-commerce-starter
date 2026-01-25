import { getProducts as getDomainProducts } from "@/lib/commerce/products";
import { failure } from "@/lib/commerce/adapters/types";

export async function loadProducts() {
    try {
        return await getDomainProducts();
    } catch (err) {
        return failure({
            code: "INTEGRATION_FAILURE",
            message: "Failed to load products",
            details: err?.message ?? null,
        });
    }
}