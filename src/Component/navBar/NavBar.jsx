import React from "react"
import { useState } from "react"
import './NavBar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export default function NavBar(){
    return(
        <div className="navBar">
            <div className="nav-Logo">
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className="nav-Menu">
                <li>Shop <hr /></li>
                <li>Men</li>
                <li>Woman</li>
                <li>Kids</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="CartImg" />
            </div>
        </div>
    )
}
