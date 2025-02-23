import React from 'react';

const ProductItem = ({ product, addToCart }) => {
    return (
        <div className="productBox">
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <img src={product.image}></img>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;