import { loadProduct } from "@/lib/integration/product.integration";
import { MockProvider } from "@/lib/commerce/providers/mock.provider";
import { ProductDetail } from "@/components/products/ProductDetail";
import { ErrorState } from "@/components/ui/ErrorState";

export default async function ProductPage({ params }) {
  const { handle } = await params;

  const result = await loadProduct(handle, MockProvider);

  if (!result.success) {
    return <ErrorState 
                code={result.error.code} 
                type={result.error.type} 
            />;
  }

  return <ProductDetail product={result.data} />;
}
