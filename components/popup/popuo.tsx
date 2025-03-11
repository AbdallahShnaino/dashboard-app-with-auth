"use client";

import React, { useEffect } from "react";
import Swal from "sweetalert2";
import styles from "./popup.module.css"; // Import your CSS module file
import { redirect } from "next/navigation";

const Popup = () => {
  // Show the SweetAlert2 popup when the component mounts
  useEffect(() => {
    Swal.fire(
      "Oh Your not registered with us",
      "Let's make an account",
      "error"
    ).then((result) => {
      if (result.isConfirmed) {
        redirect('/sign-up')
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User canceled the action.");
      }
    });
  }, []);

  return (
    <div className={styles["popup-container"]}>
      <h1>Your content here</h1>
      {/* Additional content or styles */}
    </div>
  );
};

export default Popup;
