import { z } from "zod";

const CartLineSchema = z.object({
    productHandle: z.string().min(1),
    quantity: z.number().int().min(1),
    unitPrice: z.object({
        amount: z.number().int().nonnegative(),
        currency: z.string().min(3),
    }),
});

const CartSchema = z.object({
    id: z.string().min(1),
    lines: z.array(CartLineSchema),
    currency: z.string().min(3),
    createdAt: z.string().min(1),
    updatedAt: z.string().min(1),
}).superRefine((cart, ctx) => {
    // no duplicate product handles
    const handles = cart.lines.map((line) => line.productHandle);
    const uniqueHandles = new Set(handles);

    if (handles.length !== uniqueHandles.size) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Duplicate productHandle in cart lines",
            path:["lines"],
        });
    }

    // Currency consistency
    cart.lines.forEach((line, index) => {
        if (line.unitPrice.currency !== cart.currency) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Cart line currency must match cart currency",
                path: ["lines", index, "unitPrice", "currency"],
            });
        }
    });
});

export default CartSchema;