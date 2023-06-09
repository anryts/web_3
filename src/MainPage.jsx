import React, {Component} from 'react';
import './CSS/MainPage.css';
import DisplayItems from "./Components/DisplayItems";

const MainPage = ({handleClick}) => {
        return (
            <div className="parent">
                <DisplayItems handleClick={handleClick}/>
            </div>
        );
}

export default MainPage;