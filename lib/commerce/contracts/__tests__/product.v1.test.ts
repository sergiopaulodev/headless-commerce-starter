import { describe, it, expect } from "vitest";
import { ProductSchema } from "@/lib/commerce/contracts/Product.schema";

describe("Product contract v1", () => {
    it("accepts a valid product", () => {
        const result = ProductSchema.safeParse({
            id: "prod_1",
            handle: "test-product",
            title: "Test product",
            available: true,
            price: {
                amount: 1000,
                currency: "USD",
            },
        });

        expect(result.success).toBe(true);
    });

    it("rejects product without id", () => {
        const result =  ProductSchema.safeParse({
            handle:"invalid-product",
            title:"Invalid product",
            available:true,
        });

        expect(result.success).toBe(false);
    });
});