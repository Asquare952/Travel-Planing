import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Styles from "./NavBar.module.css";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const toggler = () => {
    setMenuToggle(!menuToggle);
  };
  const ToolList = useRef(null);
  const PhotoGallery = useRef(null);
  const PlaningAhead = useRef(null);
  const Testimonals = useRef(null);
  const Contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [servicesToggle, setServicesToggle] = useState(false);
  const servicestoggler = () => {
    setServicesToggle(!servicesToggle);
  };

  const IconStyle = styled(FiMenu)`
    color: #5f2eea;
    font-size: 28px;
    cursor: pointer;
  `;

  const CloseIcon = styled(IoCloseSharp)`
    color: #5f2eea;
    font-size: 28px;
    cursor: pointer;
  `;

  return (
    <>
      <header>
        <div className={Styles.logo}>
          <Link to="/">Travelulu</Link>
        </div>
        {menuToggle ? (
          <CloseIcon onClick={toggler} />
        ) : (
          <IconStyle onClick={toggler} />
        )}
      </header>
      {/* <hr /> */}
      {menuToggle ? (
        <nav className={Styles.navBarLinks}>
          <ul>
            <li>
              <Link to="/" className={Styles.navItem}>
                Home
              </Link>
            </li>

            {servicesToggle ? (
              <ul>
                <li></li>
                <li>
                  <Link
                    onClick={() => scrollToSection(ToolList)}
                    className={Styles.navItem}
                  >
                    Tool List
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => scrollToSection(PhotoGallery)}
                    className={Styles.navItem}
                  >
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => scrollToSection(PlaningAhead)}
                    className={Styles.navItem}
                  >
                    Planing Ahead
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => scrollToSection(Testimonals)}
                    className={Styles.navItem}
                  >
                    Testimonals
                  </Link>
                </li>
              </ul>
            ) : (
              <li>
                <Link onClick={servicestoggler}>Services</Link>
              </li>
            )}

            <li>
              <Link to="" className={Styles.navItem}>
                Continents
              </Link>
            </li>
            <li>
              <Link
                onClick={() => scrollToSection(Contact)}
                className={Styles.navItem}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="" className={Styles.navItem}>
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default NavBar;
