import Styles from "./home.module.css";
import Header from "../../Component/header/NavBar";
import Hero from "../../Component/Hero/Hero"
import ToolList from "../../Component/ToolList/ToolList";
import PhotoGallery from "../../Component/PhotoGallery/PhototGalla";
import PlaningAhead from "../../Component/PlaningAhead/PlaningAhead";
import Testimonals from "../../Component/Testimonals/Testimonals";
import Contact from "../../Component/Contact/Contact";
import Footer from "../../Component/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className={Styles.homePage}>
        <Hero />
        <ToolList />
        <PhotoGallery />
        <PlaningAhead />
        <Testimonals />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
