import HeroImg from "../../img/boarding.png";
import { Link } from "react-router-dom";
import Plane from "../../img/AirplaneTilt.svg";
import Globe from "../../img/GlobeHemisphereEast.svg";
import Bicycle from "../../img/Bicycle.svg";
import Styles from "./hero.module.css";
const Hero = () => {
  return (
    <>
      {/* parent */}
      <section className={Styles.heroContainer}>
        {/* flex container */}
        <div className={Styles.heroContent}>
          {/* left */}
          <div className={Styles.heroLeft}>
            <div className={Styles.heroLeftContent}>
              <h4>Plan your next big trip overseas.</h4>
              <div className={Styles.heroBtn}>
                <Link to="/Plans">
                  <button className={Styles.btnHero}>Begin plans</button>
                </Link>
                <Link to="/">
                  <button className={Styles.btnHero}>Review Plans</button>
                </Link>
              </div>
            </div>
          </div>
          {/* right */}
          <div className={Styles.heroRight}>
            <div className={Styles.heroRightContent}>
              <img src={HeroImg} alt="" className={Styles.heroImg} />
            </div>
          </div>
        </div>

        <div className={Styles.Review}>
          <div className={Styles.reviewContent}>
            <div className={Styles.reviewItem}>
              <div className={Styles.position}>
                <div>
                  <img src={Plane} alt="" className={Styles.img} />
                </div>
                <h4>23,973</h4>
                <p>Travel to over 23 thousand locations around the world.</p>
              </div>
            </div>
            <div className={Styles.reviewItem}>
              <div className={Styles.position}>
                <div>
                  <img src={Globe} alt="" className={Styles.img} />
                </div>
                <h4>82,000</h4>
                <p>Read tens of thousands of reviews of destinations.</p>
              </div>
            </div>
            <div className={Styles.reviewItem}>
              <div className={Styles.position}>
                <div>
                  <img src={Bicycle} alt="" className={Styles.img} />
                </div>
                <h4>4,000,000</h4>
                <p>Visited by millions of travellers every single day.</p>
              </div>
            </div>
          </div>
        </div>
        {/* flex container */}
      </section>
      {/* parent */}
    </>
  );
};

export default Hero;
