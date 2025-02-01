import RestrauntCardContainer from "./RestrauntCardContainer";
import { useEffect, useState } from "react";
import Shimmer from "./shimmmer";
import { Link } from "react-router-dom";


const Body = () => {

    const [ListOfRestarants, setListofRestarants] = useState([]);
    const [filteredRestarants, setFilteredRestarants] = useState([]);

    const [searchText,setSearchText] = useState("")

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
       const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

        const json = await data.json(); 

        console.log(json);

        setListofRestarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle);
    }


    return ListOfRestarants.length === 0 ? <Shimmer/> : (
        <div id="body-container">

            <div className="search">
                <input type="text" className="search-box" value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button
                onClick={() => {
                    const filterRestarants = (ListOfRestarants?.restaurants || []).filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setListofRestarants(filterRestarants);
                }}
                >Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList =(ListOfRestarants?.restaurants || []).filter(
                        (res) => res.info.avgRating > 4.4
                    );
                    setListofRestarants(filteredList);
                }}
                >Top Rating restaurants</button>
            </div>   

            <div className="res-container">
                {(ListOfRestarants?.restaurants || []).map((restaurants)=>(
                    <Link  key ={restaurants.info.id}
                     to={"/Restraunts/"+ restaurants.info.id}>
                        <RestrauntCardContainer resData={restaurants}/>
                    </Link>
                ))}    
            </div>
        </div>
    );
}


export default Body;