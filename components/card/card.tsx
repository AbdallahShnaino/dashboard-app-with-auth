import classes from "./card.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={classes.card}>
      <Image src="/image.png" alt="SVG Image" width={100} height={100} />
      <h3>Tran & Sorelle</h3>
      <div>
        <Image src="/icons/star.svg" alt="SVG Image" width={22} height={22} />

        <p>4.5 Rating</p>
      </div>
    </div>
  );
}
