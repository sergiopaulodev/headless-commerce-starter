import { ProductCard } from "./ProductCard";

export function ProductList({products}) {
    if (!products || products.length === 0) {
        return <p>No products available</p>;
    }

    return(
        <ul>
            {products.map((product) => (
                <li key={product.id} >
                    <ProductCard product={product} />
                </li>
            ))}
        </ul>
    );
}