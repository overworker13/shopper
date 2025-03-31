import React from "react"
import { useState } from "react"
import './NavBar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router"

export default function NavBar(){
    const [menu, setMenu] = useState("shop");
    const linkStyle = {
        textDecoration: 'none', 
    }
    
    return(
        <div className="navBar">
            <div className="nav-Logo">
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className="nav-Menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={linkStyle} to='/'>Shop</Link>{menu === "shop"? <hr />:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style={linkStyle} to='/men'>Men</Link>{menu === "men"? <hr />:<></>}</li>
                <li onClick={()=>{setMenu("woman")}}><Link style={linkStyle} to='/woman'>Woman</Link>{menu === "woman"? <hr />:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={linkStyle} to='/kids'>Kids</Link>{menu === "kids"? <hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="CartImg" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
