import { loadProducts } from "@/lib/integration/products.integration";
import { MockProvider } from "@/lib/commerce/providers/mock.provider";
import { ProductList } from "@/components/products/ProductList";
import { ErrorState } from "@/components/ui/ErrorState";

export default async function HomePage() {
    const products = await loadProducts(MockProvider);

    if (!products || products.length === 0) {
        return <ErrorState 
                    code="EMPTY_CATALOG" 
                    type="business" 

                />;
    }

    return (
        <main>
            <h1>Products</h1>
            <ProductList products={products}/>
        </main>
    );
}