import Image from "next/image";
import classes from "./profile.module.css";
export default function Profile() {
  return (
    <div className={classes.container}>
      <Image width={40} height={40} alt="person image" src={"/person.png"} />
      <h2>Ahmed Ali</h2>
      <h4>Mnager</h4>
    </div>
  );
}
