import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainPage from "./MainPage";
import Footer from "./Footer";


const App = () => {

    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
    };

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;

        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
    };


    return (
        <div>
            <Header cart={cart} setCart={setCart} handleChange={handleChange}/>
            <MainPage handleClick ={handleClick}/>
            <Footer/>
        </div>
    );
};

export default App;