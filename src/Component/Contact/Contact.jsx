import Styles from "./contact.module.css"
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section className={Styles.contactContainer} id={Styles.contactContaier}>
        <div className={Styles.contactContent}>
          <p className={Styles.para}>Need more information to get started?</p>
          <Link>
          <button className={Styles.contactBtn}>Contact Us</button>
          </Link>
        </div>
      </section>
    </>
  );
}
 
export default Contact;