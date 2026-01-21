import CollectionSchema from "../contracts/Collection.schema";
import { success, failure } from "./types";

export function adaptCollection(input) {
    const result = CollectionSchema.safeParse(input);

    if (!result.success) {
        return failure({
            message: "Invalid Collection contract v1",
            issues: result.error.issues,
        });
    }

    return success(result.data);
}
