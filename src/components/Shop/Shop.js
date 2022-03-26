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
        let newCart = [];
        const added = cart.find(item => item.id === product.id);
        if (!added) {
            if (cart.length !== 4) {
                newCart = [...cart, product];
                setCart(newCart);
            }
        }

    }


    //will choose randomly one laptop
    const chooseOneButton = () => {
        if (cart.length !== 0) {
            const randomItem = cart[Math.floor(Math.random() * cart.length)];
            const newCart = [randomItem];
            setCart(newCart);
        }

    }

    //This will make empty cart
    const chooseAgainBtn = () => {
        const newCart = [];
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
                    <button onClick={chooseOneButton} className='cart-button'>Choose one for me</button>
                    <br />
                    <button onClick={chooseAgainBtn} className='cart-button'>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;