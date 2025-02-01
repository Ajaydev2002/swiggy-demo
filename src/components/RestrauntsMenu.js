import { useState,useEffect } from "react";
import Shimmer from "./shimmmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestrauntsMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId  } = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)

        const json = await data.json();

        console.log(json);

        setResInfo(json.data);
    };

    if ( resInfo === null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (
        <div>
            <div className="restraunt-detail">
                <h1>{name}</h1>
                <h2>{cuisines.join(",")}</h2>
                <p>{costForTwoMessage} - {avgRating}star</p>
            </div>
            <div className="restraunt-menu-lists">
                <ul>
                    {itemCards.map(item => ( 
                         <li key={item.card.info.id}>
                        {item.card.info.name} - RS:{item.card.info.price/100}</li>
                    )
                    )};
                </ul>
            </div>
        </div>
    )
}


export default RestrauntsMenu;