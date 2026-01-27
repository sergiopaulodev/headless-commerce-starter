import { loadCollection } from "@/lib/integration/collections.integration";
import { ErrorState } from "@/components/ui/ErrorState";
import Link from "next/link";

export default async function CollectionPage({ params }) {
    const { handle } = await params;

    const result = await loadCollection(handle);

    if (!result.success) {
        return <ErrorState 
                    code={result.error.code} 
                    type={result.error.type}
                />;       
    }

    const collection = result.data;

    return (
        <main>
            <h1>{collection.title}</h1>

            {collection.description && <p>{collection.description}</p>}

            <p>Productos en esta colección:</p>
            <ul>
                {collection.products.map(product => (
                        <li key={product.id}>
                            <Link href={`/products/${product.handle}`}>
                                {product.title}
                            </Link>
                        </li>
                    ))}
            </ul>
        </main>
    );
}
