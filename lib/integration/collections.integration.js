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

    log(LOG_LEVELS.INFO, {
        layer: "integration",
        event: "collection_loaded",
        handle,
    });

    return result;

}

async function resolveCollectionProducts(productHandles) {
    const result = await Promise.all(
        productHandles.map(handle => loadProduct(handle))
    );

    const success = result.filter(r => r.success).map(r => r.data);
    const failures = result.filter(r => !r.success);

    return { success, failures };

}
