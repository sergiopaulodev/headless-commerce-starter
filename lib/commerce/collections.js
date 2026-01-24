import { adaptCollection } from "./adapters";
import { 
    getCollections as getCollectionsFromProvider,
    getCollectionByHandle as getCollectionByHandleFromProvider,
 } from "../commerce-providers/mock/collections";

 export async function getCollections() {
    const collections = await getCollectionsFromProvider();
    return collections.map(adaptCollection);
 }

 export async function getCollectionByHandle(handle) {
   if (!handle) {
        return {
            success: false,
            error: {
                code: "COLLECTION_NOT_FOUND",
                message: "Collection handle is required",
            },
        };
   }

   const collection = await getCollectionByHandleFromProvider(handle);

   if (!collection) {
        return {
            success: false,
            error: {
                code: "COLLECTION_NOT_FOUND",
                message: "Collection not found",
            },
        };
   }
   
    return adaptCollection(collection);
 }