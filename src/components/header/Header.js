import React from "react";
import Navigation from "../navigation/Navigation";
import sprite from "../icons.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.logo}>
          <svg width="25" height="25" className={style.headerLogo}>
            <use href={sprite + "#icon-book"} />
          </svg>
          <h1 className={style.hederTitle}>Phonebook</h1>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
