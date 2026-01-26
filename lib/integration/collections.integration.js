import { getCollections, getCollectionByHandle } from "@/lib/commerce/collections";
import { log } from "@/lib/observability/logger";
import { LOG_LEVELS } from "@/lib/observability/log-config";

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
