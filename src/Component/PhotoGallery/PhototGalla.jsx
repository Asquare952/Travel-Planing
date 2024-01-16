import Styles from "./photoGalla.module.css"
import Bitch from "../../img/bitch.png"
import Door from "../../img/door.png"
import Toy from "../../img/toy on water.png"
const PhotoGallery = () => {
  return (
    <>
      <div className={Styles.PhotoGallery} id="photoGallary">
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
                <div className={Styles.content}>
                  <img src={Bitch} alt="" className={Styles.imgOne} />
                </div>
              </div>
              <div className={Styles.bottomCard}>
                <div className={Styles.content}>
                  <img src={Door} alt="" class="imgTwo" />
                </div>
              </div>
              <div className={Styles.bottomCard}>
                <div className={Styles.content}>
                  <img src={Toy} alt="" class="imgOne" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default PhotoGallery;