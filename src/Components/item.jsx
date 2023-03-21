import React, {Component} from 'react';
import './item.css';

class Item extends Component {
    render() {
        const {name, description, price, image} = this.props;
        return (
            <div className="item-container">
                <div className="image-container">
                </div>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        );
    }
}

export default Item;
