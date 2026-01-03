import { 
    getCollections as getCollectionsFromProvider,
    getCollectionByHandle as getCollectionByHandleFromProvider,
 } from "../commerce-providers/mock/collections";

 export async function getCollections() {
    return getCollectionsFromProvider();
 }

 export async function getCollectionByHandle(handle) {
   if (!handle) return null;
   
    return getCollectionByHandleFromProvider(handle);
 }