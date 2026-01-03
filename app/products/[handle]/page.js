import { getProductByHandle } from "@/lib/commerce";
import { ProductDetail } from "@/components/products/ProductDetail";

export default async function ProductPage({ params }) {
    const { handle } = await params;
    const product = await getProductByHandle(handle);

    if (!product) {
        return <p>Product not found</p>;
    }

    return <ProductDetail product={product} />;
};