import { Link } from "react-router-dom";
import { useState } from "react";
// import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Styles from "./NavBar.module.css";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const toggler = () => {
    setMenuToggle(!menuToggle);
  };
  

  const [servicesToggle, setServicesToggle] = useState(false);
  const servicestoggler = () => {
    setServicesToggle(!servicesToggle);
  };


  return (
    <>
      <header>
        <div className={Styles.logo}>
          <Link to="/">Travelulu</Link>
        </div>
        {menuToggle ? (
          <IoCloseSharp className={Styles.closeIcon} onClick={toggler} />
        ) : (
          <FiMenu className={Styles.menuIcon} onClick={toggler} />
        )}
      </header>
      {/* <hr /> */}
      {menuToggle ? (
        <nav className={Styles.navBarLinks}>
          <ul>
            <li>
              <a href="/" className={Styles.navItem}>
                Home
              </a>
            </li>
            {servicesToggle ? (
              <li>
                <Link onClick={servicestoggler}>Services</Link>
              </li>
            ) : (
              <li>
                <Link onClick={servicestoggler}>Services</Link>
              </li>
            )}

            {servicesToggle ? (
              <ul className={Styles.servicesItems}>
                <li>
                  <a className={Styles.navItem} href="#toolList">
                    Tool List
                  </a>
                </li>
                <li>
                  <a className={Styles.navItem} href="#photoGallery">
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a className={Styles.navItem} href="#planingAhead">
                    Planing Ahead
                  </a>
                </li>
                <li>
                  <a className={Styles.navItem} href="#testimonals">
                    Testimonals
                  </a>
                </li>
              </ul>
            ) : null}

            <li>
              <a href="" className={Styles.navItem}>
                Continents
              </a>
            </li>
            <li>
              <a href="#contact" className={Styles.navItem}>Contact</a>
            </li>
            <li>
              <a href="" className={Styles.navItem}>
                Privacy
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default NavBar;
