import CollectionSchema from "@/lib/commerce/contracts/Collection.schema";
import { success, failure } from "./types";
import { logDomainError } from "../errors/logger";

export function adaptCollection(input) {
    const result = CollectionSchema.safeParse(input);

    if (!result.success) {
        logDomainError({
            code: "COLLECTION_CONTRACT_INVALID",
            message: "Collection does not satisfy v1 contract",
            context: {
                handle: input?.handle ?? null,
                issues: result.error.format(),
            },
        });

        return failure({
            code: "COLLECTION_CONTRACT_INVALID",
            message: "Collection does not satisfy v1 contract",
            details: result.error.format(),
        });
    }

    return success(result.data);
}
