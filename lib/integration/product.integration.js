import { getProductByHandle } from "@/lib/commerce/products";
import { log } from "@/lib/observability/logger";
import { LOG_LEVELS } from "@/lib/observability/log-config";

export async function loadProduct(handle) {
  const result = await getProductByHandle(handle);

  if (!result.success) {
    log(LOG_LEVELS.WARN, {
      layer: "integration",
      event: "product_not_found",
      handle,
    });

    return result;
  }

  log(LOG_LEVELS.INFO, {
    layer: "integration",
    event: "product_loaded",
    handle,
  });

  return result;
}