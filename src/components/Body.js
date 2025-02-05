import RestrauntCardContainer, { WithOpenedLabel } from "./RestrauntCardContainer";
import { useEffect, useState } from "react";
import Shimmer from "./shimmmer";
import { Link } from "react-router-dom";


const Body = () => {

    const [ListOfRestarants, setListofRestarants] = useState([]);
    const [filteredRestarants, setFilteredRestarants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantsCardOpened = WithOpenedLabel(RestrauntCardContainer);

    console.log(ListOfRestarants);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListofRestarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle);
        setFilteredRestarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle);
    }


    return ListOfRestarants.length === 0 ? <Shimmer /> : (
        <div id="body-container">

            <div className="search-container">


                <div className="search">
                    <input type="text" className="search-box" placeholder="Search for Restaurants" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);

                        }}/>
                    <button className="search-res"
                        onClick={() => {
                            const filterRestarants = (ListOfRestarants?.restaurants).filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestarants(filterRestarants);
                        }}
                    >Search</button>
                </div>


                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        const filteredList = (ListOfRestarants?.restaurants || []).filter((res) =>
                            res.info.avgRating > 4.4
                        );
                        setListofRestarants(filteredList);
                    }}
                    >Top Rating restaurants</button>
                </div>

                <div className="filtered">Filter</div>

                <div className="new">New on swiggy</div>

            </div>

            <div className="food-delivery"><h2>Top Restaurants with online food delivery in Bangalore</h2></div>

            <div className="res-container">
                {(filteredRestarants.restaurants || filteredRestarants || []).map((restaurants) => (
                    <Link key={restaurants.info.id}
                        to={"/Restraunts/" + restaurants.info.id}>
                        {
                            restaurants.info.isOpen ?
                                (<RestaurantsCardOpened resData={restaurants} />) :
                                (<RestrauntCardContainer resData={restaurants} />)
                        }
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default Body;