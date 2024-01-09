import Styles from "./layout.module.css"
import {Header, Contact, Footer} from "../../Component"
const Layout = ({children}) => {
  return ( 
    <>
    <Header/>
    <div className={Styles.layoutContainer}>
      {children}
      <Contact/>
      <Footer/>
    </div>
    </>
   );
}

export default Layout;