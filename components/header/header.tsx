"use client";
import Image from "next/image";
import classes from "./header.module.css";
import Profile from "../profile/profile";
import SelectLang from "../select-lang/selectLan";
import HeaderSearch from "../headerSearch/headerSearch";
import Notify from "../notify/notify";

export default function Header() {
  /* 

  const handleLangChange = (event) => {
    const selected = languages.find((lang) => lang.code === event.target.value);
    setSelectedLang(selected);
  };
*/

  return (
    <header className={classes.header}>
      <Image
        className={classes.logo}
        width={120}
        height={50}
        alt="Dashboard logo"
        src="/logo.svg"
      />
      <HeaderSearch />
      <SelectLang />
      <Notify />
      <Profile />
    </header>
  );
}
