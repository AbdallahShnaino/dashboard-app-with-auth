import { redirect } from "next/navigation";

export default function Home() {
  redirect("/sign-up");
  return <h1>Hello I'am Farah</h1>;
}
