import React from 'react';
import './Item.css'
const Item = ({ product }) => {
    const { name, id, price, img } = product;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className="card-details">
                <h3 className='item-name'>{name}</h3>
                <p>Price: {price}</p>
            </div>
            <div className="add-to-cart">
                <button className='card-button'>Add To Cart</button>

            </div>
        </div>
    );
};

export default Item;