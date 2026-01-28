import { MOCK_PRODUCTS } from "@/lib/commerce-providers/mock/products";
import { MOCK_COLLECTIONS } from "@/lib/commerce-providers/mock/collections";

export const MockProvider = {
    async getProducts() {
        return MOCK_PRODUCTS;
    },

    async getProductByHandle(handle) {
        return MOCK_PRODUCTS.find(p => p.handle === handle) ?? null;
    },

    async getCollections() {
        return MOCK_COLLECTIONS;
    },

    async getCollectionByHandle(handle) {
        return MOCK_COLLECTIONS.find(c => c.handle === handle) ?? null;
    },
}