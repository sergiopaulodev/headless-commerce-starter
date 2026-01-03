import { ProductCard } from "./ProductCard";

export function ProductList({products}) {
    if (!products || products.lenght === 0) {
        return <p>No products availeble</p>;
    }

    return(
        <ul>
            {products.map((product) => (
                <ProductCard key={product.handle} product={product} />
            ))}
        </ul>
    );
}