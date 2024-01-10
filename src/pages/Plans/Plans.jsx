import Styles from "./plans.module.css"
import Header from "../../Component/header/NavBar";
import Contact from "../../Component/Contact/Contact";
import Footer from "../../Component/Footer/Footer";
const Plans = () => {
  return (
    <>
      <Header />
      <main className={Styles.plansPage}>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}
 
export default Plans;