import { getProductByHandle } from "@/lib/commerce";
import { ProductDetail } from "@/components/products/ProductDetail";

export default async function ProductPage({ params }) {
    const { handle } = await params;
    const result = await getProductByHandle(handle);

    if (!result.success) {
        return <p>Product not found</p>;
    }

    const product = result.data;

    return <ProductDetail product={product} />;
};