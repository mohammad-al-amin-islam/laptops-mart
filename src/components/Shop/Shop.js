import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Shop.css'
const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleCartBtn = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="products-area">
                {
                    items.map(product => <Item handleCartBtn={handleCartBtn} key={product.id} product={product}></Item>)
                }
            </div>
            <div className="cart-area">
                <h2 className='cart-header'>Selected Laptops:{cart.length}</h2>
                {
                    cart.map(item => <Cart key={item.id} item={item}></Cart>)
                }
                <div className="button-area">
                    <button className='cart-button'>Choose one for me</button>
                    <br />
                    <button className='cart-button'>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;