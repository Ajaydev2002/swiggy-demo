
import { CDN_URL } from "../utils/constants";

const RestrauntCardContainer = (props) => {

  const { resData } = props;
  
  const resInfo = resData.info

  return (
    <div className="res-cards-items">
      <div className="res-image-container">
        <img className="res-card-image" src={CDN_URL + resInfo.cloudinaryImageId} />
      </div>

      <div className="res-name">
        
        <h2>{resInfo.name}</h2>

        <div className="section-2">
          <div className="rating">{resInfo.avgRating}</div>
          <div className="locality"><h2>{resInfo.locality}</h2></div>
        </div>
      </div>

      <div className="food-rate-details">
        <p className="cuisines">{resInfo.cuisines.join(",")}</p>
        <p className="costfortwo">{resInfo.costForTwo}</p>
      </div>
    </div>
  )
}

export const WithOpenedLabel = () => {
  return (props) => {
    return (
      <div className="opened-container">
         <label className="opened-label">Opened</label>
         <RestrauntCardContainer {...props}/>
      </div>
    )
  }
}

export default RestrauntCardContainer;