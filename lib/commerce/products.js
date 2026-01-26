import { Provider } from "@/lib/providers";
import { adaptProduct } from "./adapters";
import { failure } from "./adapters/types";
import { ERROR_CODES } from "@/lib/errors/error-codes";

export async function getProducts() {
    const rawProducts = await Provider.getProducts();
    const available = rawProducts.filter(p => p.available);
    return available.map(adaptProduct);
}

export async function getProductByHandle(handle) {

    if (!handle){
        return failure ({
            code: ERROR_CODES.PRODUCT_NOT_FOUND,
            message: "Product handle is required",
        });
    }

    const raw = await Provider.getProductByHandle(handle);

    if(!raw || !raw.available){
        return failure({
            code: ERROR_CODES.PRODUCT_NOT_FOUND,
            message: "Product not found",
        });
    }

    return adaptProduct(raw);

}


export { getProducts, getProductByHandle }