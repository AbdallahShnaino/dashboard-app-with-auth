"use client";

import React, { useEffect } from "react";
import Swal from "sweetalert2";
import styles from "./popup.module.css";
import { redirect } from "next/navigation";

const Popup = () => {
  useEffect(() => {
    Swal.fire(
      "Oh Your not registered with us",
      "Let's make an account",
      "error"
    ).then((result) => {
      if (result.isConfirmed) {
        redirect("/sign-up");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User canceled the action.");
      }
    });
  }, []);

  return (
    <div className={styles["popup-container"]}>
      <h1></h1>
    </div>
  );
};

export default Popup;
