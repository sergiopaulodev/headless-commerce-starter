import { loadCollection } from "@/lib/integration/collections.integration";
import { ErrorState } from "@/components/ui/ErrorState";

export default async function CollectionPage({ params }) {
    const { handle } = await params;

    const result = await loadCollection(handle);

    if (!result.success) {
        return <ErrorState code={result.error.code} />;       
    }

    const collection = result.data;

    return (
        <main>
            <h1>{collection.title}</h1>

            {collection.description && <p>{collection.description}</p>}

            <p>Productos en esta colección:</p>
            <ul>
                {collection.products.map((productHandle) => (
                    <li key={productHandle}>{productHandle}</li>
                        )
                    )
                }
            </ul>
        </main>
    );
}
