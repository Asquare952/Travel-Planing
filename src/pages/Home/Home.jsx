import Styles from "./home.module.css";
import NavBar from "../../Component/header/NavBar";
import Hero from "../../Component/Hero/Hero"
const Home = () => {
  return (
    <>
    <NavBar/>
      <div className={Styles.homePage}>
        <Hero />
      </div>
    </>
  );
};

export default Home;
