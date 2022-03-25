import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-area">
                {
                    items.map(product => <h3>{product.name}</h3>)
                }
            </div>
            <div className="cart-area">
                <h2>Selected Laptops</h2>
            </div>
        </div>
    );
};

export default Shop;