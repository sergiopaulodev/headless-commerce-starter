import { loadProduct } from "@/lib/integration/product.integration";
import { ProductDetail } from "@/components/products/ProductDetail";

export default async function ProductPage({ params }) {
    const { handle } = params;
    const result = await loadProduct(handle);

    if (!result.success) {
        return <p>Product not found</p>;
    }

    return <ProductDetail product={product.data} />;
};