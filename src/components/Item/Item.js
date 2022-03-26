import React from 'react';
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Item = ({ product, handleCartBtn }) => {
    const { name, price, img } = product;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className="card-details">
                <h3 className='item-name'>{name}</h3>
                <p>Price: {price}</p>
            </div>
            <div className="add-to-cart">
                <button onClick={() => handleCartBtn(product)} className='card-button'>
                    <p>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Item;