import { getProducts } from "@/lib/commerce/products";
import { log } from "@/lib/observability/logger";
import { LOG_LEVELS } from "@/lib/observability/log-config";

export async function loadProducts() {
  const results = await getProducts();

  log(LOG_LEVELS.INFO, {
    layer: "integration",
    event: "products_loaded",
    count: results.length,
  });

  return results;
}