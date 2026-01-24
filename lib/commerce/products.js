// Consumes Product Contract v1 (frozen)

import { adaptProduct } from "./adapters";
import { failure } from "./adapters/types";
import { MOCK_PRODUCTS } from "../commerce-providers/mock/products" 

export async function getProducts() {
    const available = MOCK_PRODUCTS.filter(p => p.available);
    return available.map(adaptProduct);
}

export async function getProductByHandle(handle) {

    if (!handle){
        return failure ({
            code: "PRODUCT_NOT_FOUND",
            message: "Product handle is required",
        });
    }

    const product = MOCK_PRODUCTS.find(p => p.handle === handle && p.available);

    if(!product){
        return failure({
            code: "PRODUCT_NOT_FOUND",
            message: "Product not found",
        });
    }

    return adaptProduct(product);

}


export { getProducts, getProductByHandle }