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
    products: z.array(z.string()),
});

export default CollectionSchema;