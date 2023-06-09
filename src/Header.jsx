import React, {Component} from 'react';
import './CSS/Header.css';
import Backet from "./Components/Cart";

const Header = ({cart, setCart, handleChange}) => {
        return (
            <div className="header-div">
                <h1>Hello world</h1>
                <Backet cart={cart} setCart={setCart} handleChange={handleChange}/>
            </div>
        );
}

export default Header;

