import React, {Component} from 'react';
import './CSS/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-div">
                <h1>Footer</h1>
                <div className="footer-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <h4>To check codebase you can go to my GitHub</h4>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;