import React from 'react';
import './item.css';

const Item = ({item, handleClick }) => {
    const {title, author, price, img } = item;
    return (
        <div className="item-container">
            <div className="image-container">
                <img src={img} alt=""/>
            </div>
            <h1>{title}</h1>
            <p>{author}</p>
            <p>{price} UAH</p>
            <button onClick={() =>handleClick(item)}>Add to basket</button>
        </div>
    );
};

export default Item;
