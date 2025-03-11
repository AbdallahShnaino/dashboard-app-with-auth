import Link from "next/link";
import classes from "./ConfirmButton.module.css";

export default function ConfirmButton() {
  return (
    <div className={classes.buttonContainer}>
      <Link href="/dashboard/law" className={classes.link}>
        Choose Law Firms
      </Link>
      <button className={classes.confirmButton}>Confirm</button>
    </div>
  );
}
