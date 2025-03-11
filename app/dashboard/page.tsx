import classes from "./page.module.css";
import Map from "@/components/map/map";
import EmailInput from "@/components/emailInput/emailInput";
import CheckList from "@/components/checkList/checkList";
import ConfirmButton from "@/components/confirmButton/ConfirmButton";
import Cases from "@/components/cases/cases";
import Card from "@/components/card/card";
import TextCard from "@/components/textCard/textCard";

export default async function DashboardScreen() {
  return (
    <section className={classes.dashboardContainer}>
      <h1>Law firms Details</h1>
      <article className={classes.leftColumn}>
        <Card />
        <TextCard />
        <TextCard />
        <div className={classes.mapContainer}>
          <Map />
        </div>
      </article>
      <article className={classes.rightColumn}>
        <Cases />
        <EmailInput />
        <CheckList />
        <ConfirmButton />
      </article>
    </section>
  );
}
