/**
 * Alternate mock provider used exclusively for provider swap safety tests.
 * Implements the CommerceProvider structural contract.
 */
export const AltMockProvider = {
  async getProducts() {
    return [
      {
        handle: "alt-product",
        title: "Alt Product",
        price: 123,
        available: true,
      },
    ];
  },

  async getProductByHandle(handle) {
    if (handle === "alt-product") {
      return {
        handle: "alt-product",
        title: "Alt Product",
        price: 123,
        available: true,
      };
    }
    return null;
  },

  async getCollections() {
    return [];
  },

  async getCollectionByHandle() {
    return null;
  },
};
