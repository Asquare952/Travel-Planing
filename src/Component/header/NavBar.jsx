import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Styles from "./NavBar.module.css";
const NavBar = () => {
const [menuToggle, setMenuToggle] = useState(false);
const toggler = () => {
  setMenuToggle(!menuToggle);
};

  const IconStyle = styled(FiMenu)`
    color: #5F2EEA;
    font-size: 28px;
    cursor: pointer;
  `;

 
  return (
    <>
      <header>
        <div className={Styles.logo}>
          <Link to="/">Travelulu</Link>
        </div>

        <div onClick={toggler}>
          <IconStyle />
        </div>
      </header>
      <hr />
      {menuToggle ? (
        <nav className={Styles.navBarLinks}>
          <Link to="/" className={Styles.navItem}>
            Home
          </Link>
          <Link to="" className={Styles.navItem}>
            Services
          </Link>
          <Link to="" className={Styles.navItem}>
            Continents
          </Link>
          <Link to="" className={Styles.navItem}>
            Contact
          </Link>
          <Link to="" className={Styles.navItem}>
            Privacy
          </Link>
        </nav>
      ) : null}
    </>
  );
};

export default NavBar;
