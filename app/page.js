import { loadProducts } from "@/lib/integration/products.integration";
import { ProductList } from "@/components/products/ProductList";
import { ErrorState } from "@/components/ui/ErrorState";

export default async function HomePage() {
    const results = await loadProducts();

    const successful = results.filter(r => r.success);

    if (successful.length === 0) {
        const firstError = results.find(r => !r.success);
        return <ErrorState 
                    code={firstError?.error.code} 
                    type={firstError?.error.type} 

                />;
    }

    const products = successful.map(r => r.data);

    return (
        <main>
            <h1>Products</h1>
            <ProductList products={products}/>
        </main>
    );
}