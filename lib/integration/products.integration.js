import { adaptProduct } from "@/lib/commerce/adapters";
import { log } from "@/lib/observability/logger";
import { LOG_LEVELS } from "@/lib/observability/log-config";

export async function loadProducts() {
  const rawProducts = await Provider.getProducts();

  const available = rawProducts.filter(p => p.available);
  const results = available.map(adaptProduct)

  log(LOG_LEVELS.INFO, {
    layer: "integration",
    event: "products_loaded",
    count: results.length,
  });

  return results;
}