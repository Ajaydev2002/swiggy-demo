import { useState } from "react";
import ItemList from "./ItemList";

const RestrauntsCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }

    return (
        <div className="category-items">
            <div className="category-title" onClick={handleClick}>
                <h3>{data.title} ({data.itemCards.length})</h3>
                <p>+</p>
            </div>
            <div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
        
    )
}


export default RestrauntsCategory;