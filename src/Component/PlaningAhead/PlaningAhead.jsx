import Styles from "./planingAhead.module.css";
import AirHelp from "../../img/airhelp.png"
const PlaningAhead = () => {
  return (
    <>
      <section className={Styles.planingAhead} id={Styles.PlaningAhead}>
        <div className={Styles.title}>
          <h4>Planing Ahead</h4>
        </div>
        <div className={Styles.secTitle}>
          <h4>Let’s review your checklist of everything</h4>
        </div>
        <div className={Styles.contents}>
          <div className={Styles.left}>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur ds.</li>
              <li>Lorem ipsum dolor sit amet, consectetur ds.</li>
              <li>Lorem ipsum dolor sit amet, consectetur ds.</li>
            </ul>
          </div>
          <div className={Styles.middle}>
            <img src={AirHelp} alt="Air help" />
          </div>
          <div className={Styles.right}>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur ds.</li>
              <li>Lorem ipsum dolor sit amet, consectetur ds.</li>
              <li>Lorem ipsum dolor sit amet, consectetur ds.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaningAhead;
