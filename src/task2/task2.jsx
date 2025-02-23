import React, { useState } from 'react';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import ProductList from './productList';
import CreateProduct from './CreateProduct';
import Cart from './Cart';

const Task2 = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const location = useLocation();

    const addToCart = (product) => {
        if (!cart.some(item => item.id === product.id)) {
            setCart([...cart, product]);
            alert('Product is add to the cart');
        } else {
            alert('Product is already in the cart');
        }
    };

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id));
    };

    return (
        <div>
            <ul>
                <li className={location.pathname === '/task2/products' ? 'active' : ''}>
                    <Link to="/task2/products">Product List</Link>
                </li>
                <li className={location.pathname === '/task2/products/create' ? 'active' : ''}>
                    <Link to="/task2/products/create">Create Product</Link>
                </li>
                <li className={location.pathname === '/task2/cart' ? 'active' : ''}>
                    <Link to="/task2/cart">Cart</Link>
                </li>
            </ul>
            <Routes>
                <Route path="products/create" element={<CreateProduct setProducts={setProducts} />} />
                <Route path="products" element={<ProductList products={products} addToCart={addToCart} />} />
                <Route path="cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            </Routes>
        </div>
    );
};

export default Task2;