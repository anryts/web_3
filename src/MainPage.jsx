import React, {Component} from 'react';
import './CSS/MainPage.css';
import data from "./Components/data";
import Item from "./Components/item";
import DisplayItems from "./Components/DisplayItems";

const MainPage = ({handleClick}) => {
        return (
            <div className="parent">
                <DisplayItems handleClick={handleClick}/>
            </div>
        );
}

export default MainPage;