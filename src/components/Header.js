import { HEADER_LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameHeader, setBtnNameHeader] = useState("login");

    const { loggedInUser } = useContext(UserContext);

    // subscribing the store using selector, the use selector will give access to the store and then tell what position should be accesed

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src={HEADER_LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact-us</Link>
                    </li>
                    <li>
                        <Link to="/Grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    <button className="login-btn" onClick={() => {
                        btnNameHeader === "login" ? setBtnNameHeader("logout") : setBtnNameHeader("login");
                    }}>
                        {btnNameHeader}
                    </button>
                    <li className="user-name-header">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;