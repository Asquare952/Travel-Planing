import Styles from "./destination.module.css";
const Deals = () => {
  return (
    <>
      <section className={Styles.findDeals}>
        <div className={Styles.title}>
          <h4>Find deals on hotels, homes and much more...</h4>
        </div>

        <form className={Styles.destinationForm}>
          <div>
            <select id={Styles.destination}>
              <option value="Where are you going?">Where are you going?</option>
              <option value="">America</option>
              <option value="">China</option>
              <option value="">United Kindom</option>
              <option value="">France</option>
              <option value="">Saudi Arabia</option>
              <option value="">Qatar</option>
            </select>
          </div>
          <div>
            <select name="Check-in Check-out" id={Styles.check}>
              <option value="Check-in - Check-out">Check-in - Check-out</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div>
            <select name="0-Chidren 0-Adult" id={Styles.adult}>
              <option value="2 adults - 0 children">
                2 adults - 0 children
              </option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <button className={Styles.btnSearch}>Search</button>
        </form>
      </section>
      <div className={Styles.line}></div>
    </>
  );
};

export default Deals;
