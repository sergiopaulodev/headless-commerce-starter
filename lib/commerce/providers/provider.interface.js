/**
 * Provider Interface Contract (Structural)
 * ----------------------------------------
 * Providers return RAW provider-level data.
 * Domain validation is handled in adapters.
 */

/**
 * @typedef {Object} ProviderProductRaw
 * @property {string} handle
 * @property {string} title
 * @property {number} price
 * @property {boolean} available
 */

/**
 * @typedef {Object} ProviderCollectionRaw
 * @property {string} handle
 * @property {string} title
 * @property {string[]} productHandles
 */

/**
 * @typedef {Object} CommerceProvider
 * @property {(handle: string) => Promise<ProviderProductRaw|null>} getProductByHandle
 * @property {(handle: string) => Promise<ProviderCollectionRaw|null>} getCollectionByHandle
 * @property {() => Promise<ProviderCollectionRaw[]>} getCollections
 */
