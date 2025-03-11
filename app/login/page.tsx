import LogInForm from "@/components/logIn/logIn";
import Link from "next/link";
import classes from "./style.module.css";
export default function LoginScreen() {
  return (
    <section className={classes.mainWrapper}>
      <h2>Login Screen</h2>
      <LogInForm />
      <span>
        Don't Have an Account?{" "}
        <Link className={classes.link} href={"/sign-up"}>
          Sign Up Here
        </Link>
      </span>
    </section>
  );
}
