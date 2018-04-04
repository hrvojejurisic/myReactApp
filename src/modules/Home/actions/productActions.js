export const BASE = 'https://demo.sylius.com/';

export const getProducts = () => {
    return fetch('https://demo.sylius.com/shop-api/taxon-products/books?channel=US_WEB&page=1').then(response => response.json());
}
