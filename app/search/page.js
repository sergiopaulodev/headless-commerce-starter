import { searchProducts } from "@/lib/commerce/search";
import { ProductList } from "@/components/products/ProductList";

export default async function SearchPage({ searchParams }) {
    const resolvedSearchParams = await searchParams;
    const query = resolvedSearchParams?.q ?? "";

    const results = await searchProducts(query);

    return (
        <section>
            <h1>Buscar productos</h1>

            {query && (
                <p>Resultados para: <strong>{query}</strong></p>
            )}

            {results.length > 0 ? (
                <ProductList products={results} />
            ) : (
                <p>No se encontraron productos.</p>
            )}
        </section>
    );
}