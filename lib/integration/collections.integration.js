import { getCollections, getCollectionByHandle } from "@/lib/commerce/collections";
import { log } from "@/lib/observability/logger";
import { LOG_LEVELS } from "@/lib/observability/log-config";
import { loadProduct } from "./product.integration";

export async function loadCollections() {
  const results = await getCollections();

  log(LOG_LEVELS.INFO, {
    layer: "integration",
    event:"collections_loaded",
    count: results.length,
  });

  return results;
}

export async function loadCollection(handle) {
    const result = await getCollectionByHandle(handle);
    
    if (!result.success) {
        log(LOG_LEVELS.WARN, {
            layer: "integration",
            event: "collection_not_found",
            handle,
        });
        return result;
    }

    const collection = result.data;

    const { success: products, failures } = 
        await resolveCollectionProducts(collection.products);

    if (failures.length > 0) {
        log(LOG_LEVELS.WARN, {
            layer: "integration",
            event: "collection_product_resolution_partial_failure",
            handle,
            failedCount: failures.length,
        });
    }



    log(LOG_LEVELS.INFO, {
        layer: "integration",
        event: "collection_loaded_with_products",
        handle,
        productCount: products.length,
    });

    return {
        success: true,
        data: {
            ...collection,
            products,
        },
    };

}

async function resolveCollectionProducts(productHandles) {
    const results = await Promise.all(
        productHandles.map(handle => loadProduct(handle))
    );

    const success = results.filter(r => r.success).map(r => r.data);
    const failures = results.filter(r => !r.success);

    return { success, failures };

}