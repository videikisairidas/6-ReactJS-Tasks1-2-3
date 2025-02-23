import React, { useState } from 'react';

const CreateProduct = ({ setProducts }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { id: Date.now(), name, image, price };
        setProducts(prevProducts => [...prevProducts, newProduct]);
        setName('');
        setPrice('');
        setImage('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                required
            />
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
            />
            <button type="submit">Create Product</button>
        </form>
    );
};

export default CreateProduct;