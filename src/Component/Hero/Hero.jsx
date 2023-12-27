import HeroImg from "../../img/boarding.png"
import Styles from "./hero.module.css"
const Hero = () => {
  return (
    <>
      {/* parent */}
      <div className={Styles.heroContainer}>
        {/* flex container */}
        <div className={Styles.heroContent}>
          {/* left */}
          <div className={Styles.heroLeft}>
            <div className={Styles.heroLeftContent}>
              <h4>Plan your next big trip overseas.</h4>
              <div className={Styles.heroBtn}>
                <button>Begin plans</button>
                <button>Review Plans</button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className={Styles.heroRight}>
            <div className={Styles.heroRightContent}>
              <img src={HeroImg} alt="" className={Styles.heroImg}/>
            </div>
          </div>
        </div>
        {/* flex container */}
      </div>
      {/* parent */}
    </>
  );
};

export default Hero;
