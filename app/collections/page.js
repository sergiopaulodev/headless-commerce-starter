import { getCollections } from "@/lib/commerce/collections";

export default async function CollectionPage() {
    const collections = await getCollections();

    return (
        <main>
            <h1>Collections</h1>

            <ul>
                {collections.map((collection) => (
                    <li key={collection.id}>
                        <a href={`/collections/${collection.handle}`}>
                            {collection.title}
                        </a>
                    </li>
                    )
                )
                }
            </ul>
        </main>
    );
}