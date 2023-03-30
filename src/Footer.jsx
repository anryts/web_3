import React, {Component} from 'react';
import './CSS/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-div">
                <div className="footer-links">
                    <a href="https://github.com/anryts/web_3" target="_blank" rel="noopener noreferrer">
                        <h4>To check codebase you can go to my GitHub</h4>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;