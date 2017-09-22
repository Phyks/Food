require('es6-promise').polyfill();
require('isomorphic-fetch');

/**
 * TODO: Handle country/locale
 * TODO: Handle errors
 */
export default function (EAN) {
    return fetch(
        `https://world.openfoodfacts.org/api/v0/product/${EAN}.json`,
    )
        .then(response => response.json())
        .then(response => ({
            // Return a clean object with only interesting fields
            icon: response.product.image_thumb_url,
            name: response.product.product_name,
        }))
        .catch(exc => console.error(`Unable to fetch product: ${exc}.`));
}
