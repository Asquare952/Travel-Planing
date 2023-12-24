import Styles from "./review.module.css"
import Plane from "../../img/AirplaneTilt.svg"
import Globe from "../../img/GlobeHemisphereEast.svg"
import Bicycle from "../../img/Bicycle.svg"
const Review = () => {
  return (
    <>
      <div className={Styles.Review} id={Styles.Review}>
        <div className={Styles.reviewContent}>
          <div className={Styles.reviewItem}>
            <div className={Styles.img}>
              <img src={Plane} alt="" />
            </div>
            <div>
              <h4>23,973</h4>
              <p>Travel to over 23 thousand locations around the world.</p>
            </div>
          </div>
          <div className={Styles.reviewItem}>
            <div className={Styles.img}>
              <img src={Globe} alt="" />
            </div>
            <div>
              <h4>82,000</h4>
              <p>Read tens of thousands of reviews of destinations.</p>
            </div>
          </div>
          <div className={Styles.reviewItem}>
            <div className={Styles.img}>
              <img src={Bicycle} alt="" />
            </div>
            <div>
              <h4>4,000,000</h4>
              <p>Visited by millions of travellers every single day.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Review;