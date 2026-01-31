import { adaptProduct } from "@/lib/commerce/adapters";
import { log } from "@/lib/observability/logger";
import { LOG_LEVELS } from "@/lib/observability/log-config";

export async function loadProducts(provider) {
  const rawProducts = await provider.getProducts();

  const results = rawProducts
    .filter(p => p.available)
    .map(adaptProduct)
    .filter(r => r.success)
    .map(r => r.data);

  log(LOG_LEVELS.INFO, {
    layer: "integration",
    event: "products_loaded",
    count: results.length,
  });

  return results;
}