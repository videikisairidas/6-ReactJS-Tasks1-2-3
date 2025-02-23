import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            {cart.map(item => (
                <div key={item.id} className='cartItem'>
                    <h3>{item.name}</h3>
                    <h6>{item.price}</h6>
                    <img src={item.image}></img>
                    <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;