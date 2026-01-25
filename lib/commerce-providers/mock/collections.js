import { adaptProviderCollection } from "../adapters/collection.provider.adapter";

const MOCK_COLLECTIONS = [
    {
        id:"col_001",
        handle: "remeras",
        title: "Remeras",
        description: "Nuestra colección de remeras",
        products: ["camiseta-basica"],
    },
    {
        id: "col_002",
        handle: "buzos",
        title: "Buzos",
        description: null,
        products: ["buzo-oversize"],
    },
];

export function getCollections() {
    return MOCK_COLLECTIONS.map(adaptProviderCollection);
}

export function getCollectionByHandle(handle) {
    const collection = MOCK_COLLECTIONS.find( (c) => c.handle === handle );

    if (!collection) return null;

    return adaptProviderCollection(collection);
}

export { MOCK_COLLECTIONS };