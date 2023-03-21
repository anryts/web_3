import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import Header from "./Header";
import MainPage from "./MainPage";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header/>
        <MainPage/>
        <Footer/>
    </div>
);