import { CDN_URL } from "../utils/constants";


const ItemList = ({ items }) => {

    console.log(items);

    return (
        <div>
            {items.map(item => (
                <div className="item-details" key={item.card.info.id}>
                    <div className="item-name-container">
                        <div className="item-name">
                            <h3>{item.card.info.name}</h3>
                            <p>RS : {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100} </p>
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
                            <p>Add +</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;