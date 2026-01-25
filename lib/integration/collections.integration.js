import { getCollections } from "@/lib/commerce/collections";
import { failure } from "@/lib/commerce/adapters/types";

export async function loadCollections() {
  try {
    return await getCollections();
  } catch (err) {
    return failure({
      code: "INTEGRATION_FAILURE",
      message: "Failed to load collections",
      details: err?.message ?? null,
    });
  }
}
