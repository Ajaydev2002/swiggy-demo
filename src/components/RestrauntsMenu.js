import { useState, useEffect } from "react";
import Shimmer from "./shimmmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestrauntsCategory from "./RestrauntsCategory";


const RestrauntsMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)

        const json = await data.json();

        //console.log(json);

        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(itemCards);
    
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const Categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c?.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


        //console.log(Categories);

    return (
        <div>
            <div className="restraunt-detail">
                <h2>{name}</h2>
                <h3>{avgRating} - {cuisines.join(",")}</h3>
            </div>
            <div className="restraunt-menu-lists">
                {
                    Categories.map((category) => (
                        <RestrauntsCategory key={category?.card?.card.title} data={category?.card?.card}/>  
                    ))
                }
            </div>
        </div>
    )
}


export default RestrauntsMenu;