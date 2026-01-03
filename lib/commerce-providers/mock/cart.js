import CartSchema from "@/lib/commerce/contracts/Cart.schema";

const MOCK_CART = {
    id: "cart_001",
    currency: "ARS",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    lines: [
        {
            productHandle: "camiseta-basica",
            quantity: 2,
            unitPrice: {
                amount: 12000,
                currency: "ARS",
            },
        },
    ],
};

function validateCart(rawCart) {
    const result = CartSchema.safeParse(rawCart);

    if (!result.success) {
        console.warn(
            "[mock-provider] invalid cart filtered:",
            result.error.format()
        );
        return null;
    }

    return result.data;
}

export function getCart() {
    return validateCart(MOCK_CART);
}

export { MOCK_CART };