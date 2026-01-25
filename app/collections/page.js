import { loadCollections } from "@/lib/integration/collections.integration";
import { CollectionList } from "@/components/collections/CollectionList";

export default async function CollectionPage() {
    const results = await loadCollections();

    const collections = results
        .filter(r => r.success)
        .map(r => r.data);
    
    return (
        <main>
            <h1>Collections</h1>
            <CollectionList collections={collections} />
        </main>
    );
}