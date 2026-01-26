import { Provider } from "@/lib/providers";
import { adaptCollection } from "./adapters";
import { failure } from "./adapters/types";
import { ERROR_CODES } from "@/lib/errors/error-codes";


 export async function getCollections() {
    const raw = await Provider.getCollections();
    return raw.map(adaptCollection);
 }

 export async function getCollectionByHandle(handle) {
   if (!handle) {
        return failure({
            code: ERROR_CODES.COLLECTION_NOT_FOUND,
            message: "Collection handle is required",
        });
   }

   const raw = await Provider.getCollectionByHandle(handle);

   if (!raw) {
        return failure({
            code: ERROR_CODES.COLLECTION_NOT_FOUND,
            message: "Collection not found",
        });
   }
   
    return adaptCollection(raw);
 }