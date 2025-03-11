"use client";
import Image from "next/image";
import classes from "./header.module.css";
import Profile from "../profile/profile";
import SelectLang from "../select-lang/selectLan";
import HeaderSearch from "../headerSearch/headerSearch";
import Notify from "../notify/notify";

export default function Header() {
  return (
    <header className={classes.header}>
      <Image
        className={classes.logo}
        width={120}
        height={50}
        alt="Dashboard logo"
        src="/logo.svg"
      />
      <div className={classes.search}>
        <HeaderSearch />
      </div>
      <div className={classes.searchIcon}>
        <Image
          className={classes.searchIcon}
          src="/icons/search.svg"
          alt="Search"
          width={26}
          height={26}
        />{" "}
      </div>

      <SelectLang />
      <Notify />
      <Profile />
    </header>
  );
}
