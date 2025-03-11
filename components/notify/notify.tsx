import Image from "next/image";
import classes from "./notify.module.css";
export default function Notify() {
  return (
    <Image
      className={classes.notify}
      width={24}
      height={24}
      alt="Notification icon"
      src="/icons/notify.svg"
    />
  );
}
