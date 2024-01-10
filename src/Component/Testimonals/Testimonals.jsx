import Styles from "./testimonals.module.css";
import BrownFace from "../../img/Brown Face.png";
import GirlFace from "../../img/Girl with hair.png";
import WiteFace from "../../img/White Face.png";
const Testimonals = () => {
  return (
    <>
      <section
        className={Styles.testimonalsContainer}
        ref={Testimonals}
      >
        <div className={Styles.title}>
          <h4>Testimonals</h4>
        </div>
        {/* Top */}
        <div className={Styles.top}>
          <div className={Styles.topContent}>
            <h4>Use our assortment of travel plan tools</h4>
          </div>
        </div>
        {/* Top */}

        {/* Bottom */}
        <div className={Styles.testimonals}>
          <div className={Styles.bottomContainer}>
            <div className={Styles.testimonalCard}>
              <div className={Styles.testimonalImg}>
                <img src={BrownFace} alt="" />
              </div>
              <div className={Styles.testimonalContent}>
                <div className={Styles.testimonal}>
                  <div className={Styles.nameAndPlaceOfVisit}>
                    <h4>Joe Blo</h4>
                    <p className={Styles.visit}>Visited: France</p>
                  </div>
                  <hr />
                  <p className={Styles.paraBottom}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque pulvinar lorem justo, id faucibus mi.”
                  </p>
                </div>
              </div>
            </div>
            <div className={Styles.testimonalCard}>
              <div className={Styles.testimonalImg}>
                <img src={GirlFace} alt="" />
              </div>
              <div className={Styles.testimonalContent}>
                <div className={Styles.testimonal}>
                  <div className={Styles.nameAndPlaceOfVisit}>
                    <h4>Jane Blo</h4>
                    <p className={Styles.visit}>Visited: France</p>
                  </div>
                  <hr />
                  <p className={Styles.paraBottom}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque pulvinar lorem justo, id faucibus mi.”
                  </p>
                </div>
              </div>
            </div>
            <div className={Styles.testimonalCard}>
              <div className={Styles.testimonalImg}>
                <img src={WiteFace} alt="" />
              </div>
              <div className={Styles.testimonalContent}>
                <div className={Styles.testimonal}>
                  <div className={Styles.nameAndPlaceOfVisit}>
                    <h4>Joe Blo</h4>
                    <p className={Styles.visit}>Visited: France</p>
                  </div>
                  <hr />
                  <p className={Styles.paraBottom}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque pulvinar lorem justo, id faucibus mi.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonals;
