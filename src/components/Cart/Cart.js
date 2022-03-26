import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'


const Cart = ({ item }) => {
    const { img, name } = item;
    return (
        <div className='carts-area'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <FontAwesomeIcon icon={faRemove} />
        </div>
    );
};

export default Cart;