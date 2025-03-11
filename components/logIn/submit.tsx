"use client";

import React from "react";
import classes from "./logIn.module.css";
import { useFormStatus } from "react-dom";

const SubmitArticle = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={classes.submitButton}>
      {pending ? "Logging in..." : "Log in"}
    </button>
  );
};

export default SubmitArticle;
