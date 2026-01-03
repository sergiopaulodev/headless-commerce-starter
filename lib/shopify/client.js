const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const API_VERSION = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION;



const SHOPIFY_API_URL = `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`;

export async function shopifyFetch ({ query, variables = {} }) {

    const response = await fetch(SHOPIFY_API_URL, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
                },
            body: JSON.stringify({
                query,
                variables,
            }),

        });
    
    if(!response.ok) {
        throw new Error(`Shopify API error: ${response.status}`);
        }
    
    const data = await response.json();

    if (data.errors) {
        throw new Error(`Shopify GraphQL error: ${JSON.stringify(data.errors)}`);

        }
    return data.data;
}
