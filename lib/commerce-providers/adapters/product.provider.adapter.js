export function adaptProviderProduct(input) {
    return {
        id: String(input.id),
        handle: String(input.handle),
        title: String(input.title),
        description: input.description ?? null,
        price: input.price ?? null,
        images: input.images ?? [],
        available: Boolean(input.available),
    };
}
