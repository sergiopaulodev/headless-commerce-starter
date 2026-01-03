import { shopifyFetch } from "./client";
import { PRODUCTS_QUERY, PRODUCT_BY_HANDLE_QUERY } from './queries';

export async function getProducts({first = 10} = {}) {
    const data = await shopifyFetch({
        query: PRODUCTS_QUERY,
        variables: { first },
    });
    return data.products.edges;
}

export async function getProductByHandle(handle) {
    if (!handle) {
        throw new Error('Product handle is requierd');
    }

    const data = await shopifyFetch({
        query: PRODUCT_BY_HANDLE_QUERY,
        variables: { handle },
    });

    return data.productByHandle;
}