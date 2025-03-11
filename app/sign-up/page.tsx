import SignUpForm from "@/components/signUp/signUp";
import Link from "next/link";
import classes from "./../login/style.module.css";

export default function SignUpScreen() {
  return (
    <section className={classes.mainWrapper}>
      <h2>Registration Screen</h2>
      <SignUpForm />
      <span>
        Already Have an Account{" "}
        <Link className={classes.link} href={"/login"}>
          Login Here
        </Link>
      </span>{" "}
    </section>
  );
}
