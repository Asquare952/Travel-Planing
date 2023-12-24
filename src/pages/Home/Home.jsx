import Styles from "./home.module.css";
import NavBar from "../../Component/header/NavBar";
import Hero from "../../Component/Hero/Hero"
import Review from "../../Component/Review/Review";
import ToolList from "../../Component/ToolList/ToolList";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className={Styles.homePage}>
        <Hero />
        <Review />
        <ToolList/>
      </div>
    </>
  );
};

export default Home;
