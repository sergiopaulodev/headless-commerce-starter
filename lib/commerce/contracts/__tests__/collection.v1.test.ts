import { describe, it, expect } from "vitest";
import CollectionSchema from "../Collection.schema";

describe("Collection contract v1", () => {
    it("accepts a valid collection", () => {
        const result = CollectionSchema.safeParse({
            id: "col_1",
            handle: "summer-collection",
            title: "summer Collection",
            description: "Seasonal products",
            products: ["prod_1", "prod_2"],
        });
    expect(result.success).toBe(true);

    });

    it("rejects empty handle", () => {
        const result = CollectionSchema.safeParse({
            id: "col_3",
            handle: "",
            title: "Invalid Collection",
            products: ["prod_1"],
        });

    expect(result.success).toBe(false);
    });

    it("rejects missing product field", () => {
        const result = CollectionSchema.safeParse({
            id: "col_4",
            handle: "no-products",
            title: "No Products Collection",
        });
    expect(result.success).toBe(false);
    });

    it("accepts empty products array (current v1 behavior)", () => {
        const result = CollectionSchema.safeParse({
            id: "col_5",
            handle:"empty-collection",
            title: "Empty Collection",
            products: [],
        });
    expect(result.success).toBe(true);
    });
});