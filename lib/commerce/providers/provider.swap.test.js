import { loadProducts } from "@/lib/integration/products.integration";
import { loadProduct } from "@/lib/integration/product.integration";
import { MockProvider } from "./mock.provider";
import { AltMockProvider } from "./alt-mock.provider";

describe("Provider swap safety", () => {
  test("loadProducts works with default MockProvider", async () => {
    const result = await loadProducts(MockProvider);
    expect(Array.isArray(result)).toBe(true);
  });

  test("loadProducts works with alternate provider", async () => {
    const result = await loadProducts(AltMockProvider);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
    expect(result[0].handle).toBe("alt-product");
  });

  test("loadProduct works with alternate provider", async () => {
    const result = await loadProduct("alt-product", AltMockProvider);
    expect(result.success).toBe(true);
    expect(result.data.handle).toBe("alt-product");
  });

  test("loadProduct returns failure for missing product", async () => {
    const result = await loadProduct("does-not-exist", AltMockProvider);
    expect(result.success).toBe(false);
  });
});
