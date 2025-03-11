import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {
  redirect("/sign-up");
  return <h1>hello</h1>;
}
