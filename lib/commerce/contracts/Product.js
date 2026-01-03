/**
 * Product domain contract
 *
 * @typedef Product
 * @property {string} id
 * @property {string} handle
 * @property {string} title
 * @property {string | null} description
 * @property {{
 *   amount: number,
 *   currencyCode: string
 * } | null} price
 * @property {Array<{
 *   url: string,
 *   alt: string | null
 * }>} images
 * @property {"ACTIVE" | "DRAFT" | "ARCHIVED"} [status]
 */
