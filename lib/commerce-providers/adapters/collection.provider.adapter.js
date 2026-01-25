export function adaptProviderCollection(input) {
  return {
    id: String(input.id),
    handle: String(input.handle),
    title: String(input.title),
    description: input.description ?? null,
    products: input.products ?? [],
  };
}