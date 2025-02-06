import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";


const ItemList = ({ items }) => {

    //console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {

        dispatch(addItems(item));
    }


    return (
        <div>
            {items.map(item => (
                <div className="item-details" key={item.card.info.id}>
                    <div className="item-name-container">
                        <div className="item-name">
                            <h3>{item.card.info.name}</h3>
                            <p>₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100} /- </p>
                        </div>
                        <div className="item-des">
                            <p>{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="items-image-details">
                        <div className="image-container">
                            <img className="item-image" src={CDN_URL + item.card.info.imageId} />
                        </div>
                        <div className="add-button">
                            <button onClick={() => handleAddItem(item)}>Add +</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;