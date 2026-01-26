/**
 * Collection Contract v1 (frozen)
 *
 * INVARIANTS:
 * - `handle` is the public identifier and routing key.
 * - `products` references Product handles.
 * - Product order matters.
 * - No dynamic rules or filtering in v1.
 *
 * EXCLUSIONS:
 * - Smart collections
 * - Filters, pagination, SEO metadata
 *
 *
 * CHANGE POLICY:
 * - Any structural changes require Collection v2.
 */


import { z } from "zod";

const CollectionSchema = z.object({
    id: z.string(),
    handle: z.string().min(1),
    title: z.string(),
    description: z.string().nullable().optional(),
    products: z.array(z.string()).default([]), // product handles referenced by this collection (domain invariant)

}).superRefine((collection, ctx) => {
     const hasEmptyHandle = collection.products.some(h => !h || h.trim() === "");
     if (hasEmptyHandle) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Collection.products cannot contain empty product handles",
            path: ["products"],
        });
     }

    const seen = new Set();
    
    for (const handle of collection.products) {
        if (seen.has(handle)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Collection.products cannot contain duplicate product handles",
                path: ["products"],
            });
        }
        seen.add(handle);
    }

});

export default CollectionSchema;