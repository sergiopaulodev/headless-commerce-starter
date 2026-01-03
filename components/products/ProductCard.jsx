import Link from "next/link";

export function ProductCard({ product }) {
    return(
        <li>
            <a href={`/products/${product.handle}`}>
                {product.title} 
            </a>
        </li>
    );
}