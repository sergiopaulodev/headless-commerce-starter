// Consumes Product Contract v1 (frozen)

import { adaptProduct } from "./adapters";
import { MOCK_PRODUCTS } from "../commerce-providers/mock/products" 
import { success } from "zod";

export async function getProducts() {
    const available = MOCK_PRODUCTS.filter(
        (product) => product.available
    )
    return available.map(adaptProduct);
}

export async function getProductByHandle(handle) {
    const product = MOCK_PRODUCTS.find(
        (p) => p.handle === handle
    );

    if (!product || !product.available){
        return {
            success: false,
            error: {
                code: "NOT_FOUND",
                message: "Product not found or unavailable",
            },
        };
    }

    return adaptProduct(product);

}


export { getProducts, getProductByHandle }