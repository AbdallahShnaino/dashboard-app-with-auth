import classes from "./headerSearch.module.css";
import Image from "next/image";
export default function HeaderSearch() {
  return (
    <div className={classes.searchContainer}>
      <input
        className={classes.searchInput}
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
      />
      <Image
        className={classes.searchIcon}
        src="/icons/search.svg"
        alt="Search"
        width={26}
        height={26}
      />
    </div>
  );
}
