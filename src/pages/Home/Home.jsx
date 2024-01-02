import Styles from "./home.module.css";
import NavBar from "../../Component/header/NavBar";
import Hero from "../../Component/Hero/Hero"
import Review from "../../Component/Review/Review";
import ToolList from "../../Component/ToolList/ToolList";
import PhotoGallery from "../../Component/PhotoGallery/PhototGalla";
import PlaningAhead from "../../Component/PlaningAhead/PlaningAhead"
const Home = () => {
  return (
    <>
      <NavBar />
      <div className={Styles.homePage}>
        <Hero />
        <Review />
        <ToolList/>
        <PhotoGallery/>
        <PlaningAhead/>
      </div>
    </>
  );
};

export default Home;
