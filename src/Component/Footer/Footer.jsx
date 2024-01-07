import Styles from './footer.module.css'
const Footer = () => {
  return (
    <>
       <footer className={Styles.footer}>
        <div className={Styles.footerContent}>
          <div className={Styles.travelulu} id={Styles.footerCol}>
            <h4>Travelulu</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              ullamcorper magna, ac laoreet ex. Integer a consequat lectus.
              Nullam tortor sem
            </p>
            <h5>Copyright 2021. All Rights Reserved</h5>
          </div>
          <div className={Styles.services} id={Styles.footerCol}>
            <h4>Services</h4>
            <ul className={Styles.servicesList}>
              <li>Planing</li>
              <li>Financing</li>
              <li>Purchasing</li>
              <li>Meeting</li>
              <li>Flying</li>
            </ul>
          </div>
          <div className={Styles.continents} id={Styles.footerCol}>
            <h4>Continents</h4>
            <ul className={Styles.continentList}>
              <li>North America</li>
              <li>South America</li>
              <li>Asia</li>
              <li>Africa</li>
              <li>Europe</li>
              <li>Australia</li>
            </ul>
          </div>
          <div className={Styles.contact} id={Styles.footerCol}>
            <h4>Contact</h4>
            <p className={Styles.gmail}>Travelulu@website.com</p>
            <p className={Styles.address}>
              22 Street Address, Suburb Address Main City, PO Box Country
            </p>
            <p className={Styles.phoneNumber}>08 8888 88888</p>
          </div>
        </div>
      </footer>
    </>
  );
}
 
export default Footer;