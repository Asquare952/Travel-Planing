import Styles from "./photoGalla.module.css";
import Bitch from "../../img/bitch.png";
import Door from "../../img/door.png";
import Toy from "../../img/toy on water.png";
const PhotoGallery = () => {
  return (
    <>
      <section className={Styles.PhotoGallery} id="photoGallary">
        <div className={Styles.PhotoGalleryContent}>
          <div className={Styles.title}>
            <h4>Photo Gallery</h4>
          </div>
          {/* Top */}
          <div className={Styles.PhotoGalleryTop}>
            <div className={Styles.left}>
              <h4>View the wonderful places you can visit</h4>
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
          <div className={Styles.PhotoGalleryBottom}>
            <div className={Styles.bottomContainer}>
              <div className={Styles.bottomCard}>
                <img src={Bitch} alt="" className={Styles.imgOne} />
              </div>
              <div className={Styles.bottomCard}>
                <img src={Door} alt="" />
              </div>
              <div className={Styles.bottomCard}>
                <img src={Toy} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;
