import { notFound } from "next/navigation";
import { getCollectionByHandle } from "@/lib/commerce/collections";

export default async function CollectionPage({ params }) {
    const { handle } = await params;

    const collection = await getCollectionByHandle(handle);

    if (!collection) {
        notFound();
    }

    return (
        <main>
            <h1>{collection.title}</h1>

            {collection.description && (
                <p>{collection.description}</p>
            )}
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
