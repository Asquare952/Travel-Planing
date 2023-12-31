import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
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
    setMenuToggle(!servicesToggle);
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

            <li>
              {servicesToggle ? (
                <Link
                  to=""
                  onClick={servicestoggler}
                  className={Styles.navItem}
                >
                  Services
                </Link>
              ) : (
                <ul>
                  <li>
                    <Link to="/" className={Styles.navItem}>
                      Planning
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className={Styles.navItem}>
                      Financing
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className={Styles.navItem}>
                      Purchasing
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className={Styles.navItem}>
                      Reviewing
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className={Styles.navItem}>
                      Flying
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="" className={Styles.navItem}>
                Continents
              </Link>
            </li>
            <li>
              <Link to="" className={Styles.navItem}>
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
