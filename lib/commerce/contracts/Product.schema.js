/**
 * Product Contract v1
 *
 * INVARIANTS:
 * - `id`, `handle`, `title` are required.
 * - `handle` is unique and used for routing.
 * - `available` controls visibility and navigation.
 * - `price` is optional; absence means not purchasable.
 * - `currency` is ISO 4217 string.
 * - `variants`, `inventory`, `collections` are excluded in v1.
 *
 * CHANGE POLICY:
 * - Any structural change requires Product v2.
 */

import { z } from 'zod';

export const ImageSchema = z.object({
    url: z.string().url(),
    alt: z.string().optional(),
});

export const PriceSchema = z.object({
    amount: z.number().min(0),
    currency: z.string().min(1),
});

export const ProductBaseSchema = z.object({
    id:z.string().min(1),
    handle: z.string().min(1),
    title: z.string().min(1),

    description: z.string().nullable().optional(),
    images: z.array(ImageSchema).default([]),
    tags: z.array(z.string()).default([]), // tags are always presente as array (domain invariant)

    price: PriceSchema.optional(),
    available: z.boolean(),
});

export const ProductSchema = ProductBaseSchema.superRefine(
    (product, ctx) => {
        if(product.available && !product.price) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Available product must have a price',
                path: ['price'],
            });
        }
        if (!product.available && product.price === undefined){
            return;
        }

        if (product.images.length > 0) {
            const hasInvalidImage = product.images.some(img => !img.url);

            if (hasInvalidImage) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "All images must contain a valid URL",
                    path: ["images"],
                });
            }
        }
    }
);

export default ProductSchema