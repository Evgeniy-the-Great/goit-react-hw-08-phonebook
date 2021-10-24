import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isRegisterSelector } from "../../redux/register/registerSelectors";
import style from "./NavigationItem.module.css";

const NavigationItem = ({ name, path, exact, isPrivate, isRestricted }) => {
  const isRegister = useSelector(isRegisterSelector);
  return (
    <>
      {isPrivate && !isRestricted && isRegister && (
        <li className={style.navItem}>
          <NavLink
            to={path}
            exact={exact}
            className={style.navLink}
            activeClassName={style.activeNavLink}
          ></NavLink>
        </li>
      )}
      {!isPrivate && isRestricted && !isRegister && (
        <li className={style.navItem}>
          <NavLink
            to={path}
            exact={exact}
            className={style.navLink}
            activeClassName={style.activeNavLink}
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
