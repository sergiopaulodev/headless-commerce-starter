    import { adaptCollection } from "@/lib/commerce/adapters";
    import { failure } from "@/lib/commerce/adapters/types";
    import { ERROR_CODES } from "@/lib/errors/error-codes";
    import { log } from "@/lib/observability/logger";
    import { LOG_LEVELS } from "@/lib/observability/log-config";
    import { loadProduct } from "./product.integration";

    const collectionCache = new Map();

    export async function loadCollections(provider) {
        const rawCollections = await provider.getCollections()
        const results = rawCollections.map(adaptCollection);

    log(LOG_LEVELS.INFO, {
        layer: "integration",
        event:"collections_loaded",
        count: results.length,
    });

    return results;
    }

    export async function loadCollection(handle, provider) {

        if (collectionCache.has(handle)) {
            log(LOG_LEVELS.DEBUG, {
                layer: "integration",
                event: "collection_cache_hit",
                handle,
            });

            return collectionCache.get(handle);
        }

        const raw = await provider.getCollectionByHandle(handle);
        
        if (!raw) {
            return failure({
                code: ERROR_CODES.COLLECTION_NOT_FOUND,
                message: "Collection not found",
            });
        }

        const collection = adaptCollection(raw);

        const { success: products, failures } =
            await resolveCollectionProducts(collection.data.products, provider);

        const finalResult = {
            success: true,
            data: {
                ...collection.data,
                products,
            },
        };

        collectionCache.set(handle, finalResult);

        return finalResult;
    }


    async function resolveCollectionProducts(productHandles, provider) {
        const results = await Promise.all(
            productHandles.map(handle => loadProduct(handle, provider))
        );

        const success = results.filter(r => r.success).map(r => r.data);
        const failures = results.filter(r => !r.success);

        return { success, failures };

    }