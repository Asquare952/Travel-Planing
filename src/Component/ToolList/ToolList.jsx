import Styles from "./toolList.module.css";
import Clock from "../../img/time.png"
import PlaneAndMoney from "../../img/plane-and-money.png"
import Money from "../../img/money.png"
const ToolList = () => {
  return (
    <>
      <section className={Styles.toolList} ref={ToolList}>
        <div className={Styles.toolListContent}>
          <div className={Styles.title}>
            <h4>Tool List</h4>
          </div>
          {/* Top */}
          <div className={Styles.toolListTop}>
            <div className={Styles.left}>
              <h4>Use our assortment of travel plan tools</h4>
            </div>
            <div className={Styles.right}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque pulvinar lorem justo, Lorem ipsum dolor sit amet,
                consectetur
              </p>
            </div>
          </div>
          {/* Bottom */}
          <div className={Styles.toolListBottom}>
            <div className={Styles.bottomContainer}>
              <div className={Styles.bottomCard}>
                <div className={Styles.content}>
                  <img src={Clock} alt="" className={Styles.imgOne} />
                  <h4>Plan Trip Dates</h4>
                  <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button class="card-btn">LEARN MORE</button>
                </div>
              </div>
              <div className={Styles.bottomCard}>
                <div className={Styles.content}>
                  <img src={PlaneAndMoney} alt="" class="imgTwo" />
                  <h4>Plan Trip Dates</h4>
                  <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button class="card-btn">LEARN MORE</button>
                </div>
              </div>
              <div className={Styles.bottomCard}>
                <div className={Styles.content}>
                  <img src={Money} alt="" class="imgOne" />
                  <h4>Plan Trip Dates</h4>
                  <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button class="card-btn">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolList;
