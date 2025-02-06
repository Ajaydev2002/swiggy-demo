import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItems());
    }

    return (
        <div className="cart-container">
            <div className="cart-name">
                <h1>Cart Items</h1>
                <button className="clear-cart" onClick={handleClearCart}>ClearCart</button>
            </div>

            <div className="cart-item-list"> <ItemList items={cartItems}/></div>
        </div>
    );
}

export default Cart;