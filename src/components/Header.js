import { HEADER_LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameHeader, setBtnNameHeader] = useState("login");

    let btnName = "login"
    return (
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src= {HEADER_LOGO_URL}/> 
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact-us</Link></li>
                    <li>Cart-Item</li>
                    <button className="login-btn" onClick={() => {
                        btnNameHeader === "login" ? setBtnNameHeader("logout") : setBtnNameHeader("login");
                    }}>
                        {btnNameHeader}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;