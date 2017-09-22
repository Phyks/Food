require('es6-promise').polyfill();
require('isomorphic-fetch');

/**
 * TODO: Handle country/locale
 */
export default function (EAN) {
    return fetch(
        `https://world.openfoodfacts.org/api/v0/product/${EAN}.json`,
    )
        .then(response => response.json())
        .catch(exc => console.error(`Unable to fetch product: ${exc}.`));
}
