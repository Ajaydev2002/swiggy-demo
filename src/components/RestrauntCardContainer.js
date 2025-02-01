import { CDN_URL } from "../utils/constants";

const RestrauntCardContainer = (props) => {

    const { resData } = props;
    const resInfo = resData.info
    return (
        <div className="res-cards-items">
             <div className="res-image-container">
                <img className="res-card-image" src={CDN_URL + resInfo.cloudinaryImageId}/>
             </div>

             <div className="res-name">
                <h2>{resInfo.name}</h2>
                <div className="rating">{resInfo.avgRating}</div>
                <div className="locality">{resInfo.locality}</div>
             </div>

             <div className="food-rate-details">
               <p>{resInfo.cuisines.join(",")}</p>
               <p>{resInfo.costForTwo}</p>
             </div>
        </div>
    )
}

export default RestrauntCardContainer;