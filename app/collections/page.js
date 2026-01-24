import { getCollections } from "@/lib/commerce/collections";
import { CollectionList } from "@/components/collections/CollectionList";

export default async function CollectionPage() {
    const results = await getCollections();

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