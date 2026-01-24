import CollectionSchema from "@/lib/commerce/contracts/Collection.schema";
import { success, failure } from "./types";

export function adaptCollection(input) {
    const result = CollectionSchema.safeParse(input);

    if (!result.success) {
        return failure({
            code: "COLLECTION_CONTRACT_INVALID",
            message: "Collection does not satisfy v1 contract",
            details: result.error.format(),
        });
    }

    return success(result.data);
}
