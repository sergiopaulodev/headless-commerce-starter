import Link from "next/link";

export function ProductCard({ product }) {
    return(
            <Link href={`/products/${product.handle}`}>
                {product.title} 
            </Link>
    );
}