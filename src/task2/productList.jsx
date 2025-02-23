import React from 'react';
// import ProductItem from './productItem';
import ProductItem from './ProductItem';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="ProductList">
            {products.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;