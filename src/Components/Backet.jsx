import React, {useEffect, useState} from 'react';
import './Backet.css';
import data from "./data";

const Basket = ({cart, setCart, handleChange}) => {

    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    });

    return (
        <div className="basket">
            <div className="basket-header" onClick={() => setIsBasketOpen(true)}>
                <span className="basket-icon">🛒</span>
                <span className="item-count">{cart.length}</span>
            </div>
            {isBasketOpen && (
                <div className="basket-popup">
                    <div className="basket-content">
                        { cart.length === 0 &&
                        <div style={{background:"red"}}>
                            <h1>Cart is empty </h1>
                            <h2>Go to the main page and add some items</h2>
                        </div>
                        }
                        {cart.length > 0 && <article>
                            {cart.map((item) => (
                                <div className="cart_box" key={item.id}>
                                    <div className="cart_img">
                                        <img src={item.img} alt="" />
                                        <p>{item.title}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => handleChange(item, 1)}>+</button>
                                        <button>{item.amount}</button>
                                        <button onClick={() => handleChange(item, -1)}>-</button>
                                    </div>
                                    <div>
                                        <span>{item.price}</span>
                                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                            <div className="total">
                                <span>Total Price of your Cart</span>
                                <span>UAH - {price}</span>
                            </div>
                        </article>
                        }
                        <button className="close-button" onClick={() => setIsBasketOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Basket;
