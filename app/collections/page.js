import { loadCollections } from "@/lib/integration/collections.integration";
import { CollectionList } from "@/components/collections/CollectionList";
import { ErrorState } from "@/components/ui/ErrorState";

export default async function CollectionPage() {
    const results = await loadCollections();

    const success = results.filter(r => r.success)

    if (success.length === 0) {
        const firstError = results.find(r => !r.success);
        return <ErrorState code={firstError?.error.code} />;
    }

    const collections = success.map(r => r.data);
    
    return (
        <main>
            <h1>Collections</h1>
            <CollectionList collections={collections} />
        </main>
    );
}