import classes from "./cases.module.css";
export default function Cases() {
  return (
    <div className={classes.casesContainer}>
      <div className={classes.one}>
        <h3>45</h3>
        <p>total cases</p>
      </div>
      <div className={classes.two}>
        <h3>45</h3>
        <p>Active cases</p>
      </div>
    </div>
  );
}
