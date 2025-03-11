"use client";

import React, { useActionState } from "react";
import classes from "./signUp.module.css";
import Submit from "./submit";
import { newSignUp } from "@/controllers/actions";

export default function SignUpForm() {
  const [state, formAction] = useActionState(newSignUp, {
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
        {state.errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>
      <div className={classes.formGroup}>
        <Submit />
      </div>
    </form>
  );
}
