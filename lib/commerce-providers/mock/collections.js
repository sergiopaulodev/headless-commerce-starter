import CollectionSchema from "@/lib/commerce/contracts/Collection.schema";

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

function validateCollection(rawCollection) {
    const result = CollectionSchema.safeParse(rawCollection);

    if (!result.success) {
        console.warn(
            "[mock-provider] invalid collection filtered:",
            rawCollection.handle,
            result.error.format()
        );
        return null;
    }

    return result.data;
}

export function getCollections() {
    return MOCK_COLLECTIONS
        .map(validateCollection)
        .filter(Boolean);
}

export function getCollectionByHandle(handle) {
    const collection = MOCK_COLLECTIONS.find(
        (c) => c.handle === handle
    );

    if (!collection) return null;

    return validateCollection(collection);
}

export { MOCK_COLLECTIONS };