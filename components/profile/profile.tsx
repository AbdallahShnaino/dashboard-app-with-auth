import Image from "next/image";
import classes from "./profile.module.css";
export default function Profile() {
  return (
    <div className={classes.container}>
      <Image width={40} height={40} alt="person image" src={"/person.png"} />
      <div className={classes.userInfo}>
        <h2 className={classes.title}>Ahmed Ali</h2>
        <h4 className={classes.role}>Mnager</h4>
      </div>
    </div>
  );
}
