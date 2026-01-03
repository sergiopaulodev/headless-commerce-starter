import { getProducts } from "./products";

export async function searchProducts(query) {
    if (!query || query.trim().length === 0) {
        return [];
    }

    const products = await getProducts();
    const normalizedQuery = query.toLowerCase();

    return products.filter((product) => {
        return (
            product.title?.toLowerCase().includes(normalizedQuery) ||
            (product.description && 
                product.description.toLowerCase().includes(normalizedQuery))
        );
    });
}