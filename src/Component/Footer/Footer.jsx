import React from "react";
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import icon from '../Assets/icon.js'
import socialIcons from "../Assets/icon.js";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={socialIcons[0].image} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={socialIcons[1].image} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={socialIcons[2].image} alt="" />
                </div>
            </div>
            <div className="footer-copyrigh">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    );
}

export default Footer