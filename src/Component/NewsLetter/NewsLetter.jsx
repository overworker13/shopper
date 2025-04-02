import React from "react";
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="newsLetter">
            <h1>Get Exclusive Offer On Your email</h1>
            <p>Sunscribe to our newletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your Email id" />
                <button>Subscribe</button>
            </div>

        </div>
    )
}

export default NewsLetter