"use client";

import React, { useActionState } from "react";
import classes from "./logIn.module.css";
import Submit from "./submit";
import { userLogin } from "@/controllers/actions";
import Popup from "../popup/popuo";

export default function LogInForm() {
  const [state, formAction] = useActionState(userLogin, {
    errors: [],
  });

  return (
    <form className={classes.newsForm} action={formAction}>
      <div className={classes.formGroup}>
        <label htmlFor="email" className={classes.formLabel}>
          Enter Your Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className={classes.formInput}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="password" className={classes.formLabel}>
          Enter Your Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className={classes.formInput}
        />
      </div>

      <ul className={classes.errors}>
        {state.errors.map((err, index) =>
          err === "This user not exist on our system" ? (
            <React.Fragment key={index}>
              <Popup />
            </React.Fragment>
          ) : (
            <li key={index}>{err}</li>
          )
        )}
      </ul>

      <div className={classes.formGroup}>
        <Submit />
      </div>
    </form>
  );
}
