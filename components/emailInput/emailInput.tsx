"use client";
import classes from "./emailInput.module.css"; // Import CSS file
import Image from "next/image";
export default function EmailInput() {
  return (
    <div className={classes.inputContainer}>
      <Image
        className={classes.searchIcon}
        src="/icons/mail.svg"
        alt="Search"
        width={26}
        height={26}
      />
      <input type="email" placeholder="Email" className={classes.emailInput} />
      <div className={classes.staticEmail}>user@example.com</div>
    </div>
  );
}
