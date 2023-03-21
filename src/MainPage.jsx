import React, {Component} from 'react';
import './CSS/MainPage.css';
import DisplayItems from "./Components/DisplayItems";

class MainPage extends Component {
    render() {
        return (
            <div className="parent">
                <DisplayItems />
            </div>
        );
    }
}

export default MainPage;