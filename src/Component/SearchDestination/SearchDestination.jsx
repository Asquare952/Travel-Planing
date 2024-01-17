import Styles from "./destination.module.css";
import { CiSearch } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Deals = () => {
  return (
    <>
      <section className={Styles.findDeals}>
        <div className={Styles.title}>
          <h4>Find deals on hotels, homes and much more...</h4>
        </div>
        <form className={Styles.destinationForm}>
          <div className={Styles.formTitle}>
            <h4>Search</h4>
          </div>
          <div className={Styles.inputs}>
            <label For="Destination/property name">
              Destination/property name
            </label>
            <CiSearch className={Styles.icons} />
            <input type="text" placeholder="Gold Coast" />
          </div>
          <div className={Styles.inputs}>
            <label For="Check-in date">Check-in date</label>
            <FaCalendarAlt className={Styles.icons} />
            <input
              name="Check-in Check-out"
              id={Styles.check}
              placeholder="Check-in date"
            />
          </div>
          <div className={Styles.inputs}>
            <label For="Check-out date">Check-out date</label>
            <FaCalendarAlt className={Styles.icons} />
            <input
              name="Check-out date"
              id={Styles.adult}
              placeholder="Check-out date"
            />
          </div>
          <div className={Styles.inputs}>
            <label For="Travellers">Travellers</label>
            <CgProfile className={Styles.icons} />
            <input
              name="0-Chidren 0-Adult"
              id={Styles.adult}
              placeholder="2 adults - 0 childern"
            />
          </div>
          <button className={Styles.btnSearch}>Search</button>
        </form>
      </section>
    </>
  );
};

export default Deals;
