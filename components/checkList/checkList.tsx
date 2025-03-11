"use client";
import { useState } from "react";
import classes from "./checkList.module.css"; // Import CSS file
import Image from "next/image";

export default function CheckList() {
  const [btnState, setBtnState] = useState([
    {
      status: true,
      mainText: "30 Min",
      secondaryText: "$20",
    },
    {
      status: false,
      mainText: "1 Hour",
      secondaryText: "$20",
    },
  ]);

  const handleClick = (index: number) => {
    const newBtnState = [...btnState];
    newBtnState[index] = {
      ...newBtnState[index],
      status: !newBtnState[index].status,
    };
    setBtnState(newBtnState);
  };

  return (
    <div className={classes.listContainer}>
      {btnState.map((data, index) => {
        return (
          <div
            className={classes.listItem}
            onClick={() => handleClick(index)}
            key={index}
          >
            <Image
              className={classes.searchIcon}
              src={data.status ? "/icons/checked.svg" : "/icons/un-checked.svg"}
              alt="btn status icon"
              width={26}
              height={26}
            />
            <div className={classes.textContainer}>
              <span className={classes.mainText}>{data.mainText}</span>
              <span className={classes.secondaryText}>
                {data.secondaryText}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
