import Styles from "./toolList.module.css";
const ToolList = () => {
  return (
    <>
      <div className={Styles.toolList} id={Styles.toolList}>
        <div className={Styles.toolListContent}>
          <div className={Styles.title}>
            <h4>Tool List</h4>
          </div>
          <div className={Styles.toolListTop}>
            <div className={Styles.left}>
              <h4>Use our assortment of travel plan tools</h4>
            </div>
            <div className={Styles.right}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque pulvinar lorem justo, Lorem ipsum dolor sit amet,
                consectetur
              </p>
            </div>
          </div>
          <div className={Styles.toolListBottom}></div>
        </div>
      </div>
    </>
  );
};

export default ToolList;
