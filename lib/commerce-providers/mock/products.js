import ProductSchema from "@/lib/commerce/contracts/Product.schema";

const MOCK_PRODUCTS = [
  {
    id: "prod_001",
    handle: "camiseta-basica",
    title: "Camiseta básica",
    description: "Camiseta de algodón 100%, corte regular.",
    price: {
      amount: 12990,
      currency: "ARS"
    },
    images: [
      {
        url: "/images/camiseta-basica.jpg",
        alt: "Camiseta básica color blanco"
      }
    ],
    available: true,
  },
  {
    id: "prod_002",
    handle: "buzo-oversize",
    title: "Buzo oversize",
    description: "Buzo oversize de frisa pesada.",
    price: {
      amount: 25990,
      currency: "ARS"
    },
    images: [],
    available: true,
  },
  {
    id: "prod_003",
    handle: "producto-sin-precio",
    title: "Producto sin precio",
    description: null,
    images: [],
    available: false,
  }
];

function validateProduct(rawProduct) {
    const result = ProductSchema.safeParse(rawProduct);

    if (!result.success) {
        console.warn(
            '[mock-provider] invalid product filtered:',
            rawProduct.handle,
            result.error.format()
        );
        return null;
    }
    return result.data;
}

export function getProducts() {
    return MOCK_PRODUCTS
        .map(validateProduct)
        .filter(Boolean);
}

export function getProductByHandle(handle) {
    const product = MOCK_PRODUCTS.find(p => p.handle === handle);
    if (!product) return null;

    return validateProduct(product);
}


export { MOCK_PRODUCTS };