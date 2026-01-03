import { getCart } from "@/lib/commerce/cart";

export default async function CartPage() {
    const cart = await getCart();

    return (
        <section>
            <h1>Carrito</h1>

            {cart && cart.lines.length > 0 ? (
                <ul>
                    {cart.lines.map((line) => (
                        <li key={line.productHandle}>
                            {line.productHandle} x {line.quantity}
                        </li>
                        )
                    )}
                </ul>
                ) : (
                    <p>El carrito está vacío</p>
                )
            }
        </section>
    )
}