import { MockProvider } from "@/lib/commerce/providers/mock.provider";
import { adaptProduct } from "@/lib/commerce/adapters";
import { failure } from "@/lib/commerce/adapters/types";
import { ERROR_CODES } from "@/lib/errors/error-codes";
import { getProductByHandle } from "@/lib/commerce/products";
import { log } from "@/lib/observability/logger";
import { LOG_LEVELS } from "@/lib/observability/log-config";

const productCache = new Map();

export async function loadProduct(handle, provider = MockProvider) {
  
  if (productCache.has(handle)) {
    log(LOG_LEVELS.DEBUG, {
        layer: "integration",
        event: "product_cache_hit",
        handle,
    });	

    return productCache.get(handle);
    }
    
  if (!handle) {
    return failure({
     code: ERROR_CODES.PRODUCT_NOT_FOUND,
     message: "Product handle is required",
    });
  }

  const raw = await provider.getProductByHandle(handle);
  
   if (!raw || !raw.available) {
    return failure({
      code: ERROR_CODES.PRODUCT_NOT_FOUND,
      message: "Product not found",
    });
  }
  
  const result = adaptProduct(raw);

  if (result.success) {
        productCache.set(handle, result);
    }

  return result;
}