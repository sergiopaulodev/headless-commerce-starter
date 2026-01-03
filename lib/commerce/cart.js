import { getCart as getCartFromProvider } from "../commerce-providers/mock/cart";

export async function getCart() {
    return getCartFromProvider();
}