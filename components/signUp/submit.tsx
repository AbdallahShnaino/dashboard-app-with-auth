"use client";

import React from "react";
import classes from "./signUp.module.css";
import { useFormStatus } from "react-dom";

const SubmitArticle = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={classes.submitButton}>
      {pending ? "Signing Up..." : "Sign Up"}
    </button>
  );
};

export default SubmitArticle;
