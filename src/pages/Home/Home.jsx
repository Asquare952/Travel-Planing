import Styles from "./home.module.css";
import NavBar from "../../Component/header/NavBar";
import Hero from "../../Component/Hero/Hero"
import Review from "../../Component/Review/Review";
const Home = () => {
  return (
    <>
    <NavBar/>
      <div className={Styles.homePage}>
        <Hero />
        <Review/>
      </div>
    </>
  );
};

export default Home;
