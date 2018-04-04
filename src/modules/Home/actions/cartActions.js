export const setEmptyCart = (cartId) => {

    return fetch('https://demo.sylius.com/shop-api/carts/' + cartId, { 
            method: 'POST',
            body: JSON.stringify({ channel: 'US_WEB' }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(response => response.json());
}

export const getCart = (cartId) => {
    return fetch('https://demo.sylius.com/shop-api/carts/' + cartId, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      })
    .then(response => response.json());
}

export const generateCartId = () => {
    const uuidv1 = require('uuid/v1');
    return uuidv1(); 
}

export const addToCart = (cartId, cartItem) => {

    return fetch('https://demo.sylius.com/shop-api/carts/' + cartId + '/items', { 
        method: 'POST',
        body: JSON.stringify({
            "productCode": cartItem,
            "quantity": 1 }),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(response => response.json());
}

export const removeFromCart = (cartId, cartItem) => {

    return fetch('https://demo.sylius.com/shop-api/carts/' + cartId + '/items/' + cartItem, { 
        method: 'DELETE',
        body: JSON.stringify({
            "productCode": cartItem,
            "quantity": 1 }),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(response => response.json());
}