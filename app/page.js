import { getProducts } from "@/lib/commerce";
import { ProductList } from "@/components/products/ProductList";

export default async function HomePage() {
    const products = await getProducts();

    return (
        <main>
            <h1>Products</h1>
            <ProductList products={products}/>
        </main>
    );
}