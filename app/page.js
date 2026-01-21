import { getProducts } from "@/lib/commerce";
import { ProductList } from "@/components/products/ProductList";

export default async function HomePage() {
    const results = await getProducts();

    const products = results
    .filter(r => r.success)
    .map(r => r.data);

    return (
        <main>
            <h1>Products</h1>
            <ProductList products={products}/>
        </main>
    );
}