import Image from "next/image";
import classes from "./page.module.css";
import Map from "@/components/map/map";
import EmailInput from "@/components/emailInput/emailInput";
import CheckList from "@/components/checkList/checkList";
import ConfirmButton from "@/components/confirmButton/ConfirmButton";

export default async function DashboardScreen() {
  return (
    <section className={classes.dashboardContainer}>
      <h1>Law firms Details</h1>
      <article className={classes.leftColumn}>
        <div className={classes.card}>
          <Image src="/image.png" alt="SVG Image" width={100} height={100} />
          <h3>Tran & Sorelle</h3>
          <div>
            <Image
              src="/icons/star.svg"
              alt="SVG Image"
              width={22}
              height={22}
            />

            <p>4.5 Rating</p>
          </div>
        </div>
        <div className={classes.textCard}>
          <h2>Brief Description </h2>
          <p>
            Eva Icons is a pack of more than 480 beautifully crafted Open Source
            icons for common actions and items. Download our set on the desktop
            to use them in your digital products for Web, iOS and Android.
            Compatible with
          </p>
        </div>
        <div className={classes.textCard}>
          <h2>Address </h2>
          <p>C/ de Ganduxer, 70, Sarrià-Sant Gervasi, 08021 Barcelona, Spain</p>
        </div>
        <div className={classes.mapContainer}>
          <Map />
        </div>
      </article>
      <article className={classes.rightColumn}>
        <div className={classes.casesContainer}>
          <div className={classes.one}>
            <h3>45</h3>
            <p>total cases</p>
          </div>
          <div className={classes.two}>
            <h3>45</h3>
            <p>Active cases</p>
          </div>
        </div>
        <EmailInput />
        <CheckList />
        <ConfirmButton />
      </article>
    </section>
  );
}
