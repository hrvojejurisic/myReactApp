import React from 'react';
// Utils
import { formatPrice } from 'utils';
// Actions
import { BASE } from '.././actions';

const Product = ({
    code,
    images,
    name,
    averageRating,
    variants,
    addToCartCallback
  }) => {
    // Rating  
    let rating = averageRating/5*100;

    // Price  
    variants = Object.values(variants);
    let finalPrice = variants[0].price;

    // Images
    let image = images.find(image => image.code === "thumbnail");
    
    return(
        <li className="item" data-id={code}>
            <img  src={BASE + 'media/cache/resolve/sylius_shop_product_thumbnail/' + image.path} alt={name}/>
            <div className="product-info">
                <h2>{name}</h2>
                {averageRating ? <p className="rating"><span style={{width:rating + '%'}}></span></p> : null}
                <div className="add-to-cart">
                    <p className="price">
                        {formatPrice(finalPrice.current)} {finalPrice.currency}
                    </p>
                    <button value={code} onClick={ addToCartCallback } >Add to Cart</button>
                </div>
            </div>
        </li>
    );
}


export default Product;
