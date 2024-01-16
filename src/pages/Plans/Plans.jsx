import Styles from "./plans.module.css"
import Header from "../../Component/header/NavBar";
import Contact from "../../Component/Contact/Contact";
import Footer from "../../Component/Footer/Footer";
import Destination from "../../Component/SearchDestination/SearchDestination";
const Plans = () => {
  return (
    <>
      <Header />
      <main className={Styles.plansPage}>
        <Destination />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
 
export default Plans;