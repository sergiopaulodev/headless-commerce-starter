import { loadProduct } from "@/lib/integration/product.integration";
import { ProductDetail } from "@/components/products/ProductDetail";
import { ErrorState } from "@/components/ui/ErrorState";

export default async function ProductPage({ params }) {
  const { handle } = await params;

  const result = await loadProduct(handle);

  if (!result.success) {
    return <ErrorState code={result.error.code} />;
  }

  return <ProductDetail product={result.data} />;
}
