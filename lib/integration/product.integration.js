import { getProductByHandle } from "@/lib/commerce/products";
import { log } from "@/lib/observability/logger";
import { LOG_LEVELS } from "@/lib/observability/log-config";

const productCache = new Map();

export async function loadProduct(handle) {
  
  if (productCache.has(handle)) {
    log(LOG_LEVELS.DEBUG, {
        layer: "integration",
        event: "product_cache_hit",
        handle,
    });	

    return productCache.get(handle);
    }

  const result = await getProductByHandle(handle);

  if (result.success) {
        productCache.set(handle, result);
    }

  return result;
}