import React from 'react';
import Item from '../Components/item';
import '../CSS/DisplayItems.css';
import items from "./items.json";

const DisplayItems = ({handleClick}) => {
    return (
        <div className="container">
            <div className="row">
                {items.map((item, index) => (
                    <div key={index} className="col">
                        <Item
                            key={item.id} item={item} handleClick={handleClick}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayItems;
