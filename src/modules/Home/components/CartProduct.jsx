import React from 'react';
// Utils
import { formatPrice } from 'utils';
// Actions
import { BASE } from '.././actions';

const CartProduct = ({
    product,
    id,
    quantity,
    total,
    currency,
    removeFromCartCallback
  }) => { 
    // Images
    let image = product.images.find(image => image.code === "thumbnail");

    return(
          <li className="cart-item" > 
            <img src={BASE + 'media/cache/resolve/sylius_shop_product_thumbnail/' + image.path} alt={product.name}/>
            <div className="product-info">
              <p><strong>{product.name}</strong></p>
              <p className="qty-total">
                <span className="qty">Quantity: {quantity}</span>
                <span className="subtotal">Subtotal: {formatPrice(total)} {currency}</span>
              </p>
            </div>
            <button value={id} onClick={ removeFromCartCallback } ><span className="icon-cancel"></span></button>
          </li>
      );
  }
export default CartProduct;
