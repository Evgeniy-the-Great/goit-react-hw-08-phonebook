import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { singOutSuccess } from "../../redux/register/regisretActions";
import {
  isRegisterSelector,
  registerEmailSelector,
} from "../../redux/register/registerSelectors";
import NavigationItem from "../navigationItem/NavigationItem";
import { mainRoutes } from "../routes/mainRoutes";
import style from "./Navigation.module.css";

const Navigation = ({ routes = mainRoutes }) => {
  const isRegister = useSelector(isRegisterSelector);
  const registerEmail = useSelector(registerEmailSelector);

  const dispatch = useDispatch();
  const exit = () => dispatch(singOutSuccess());
  return (
    <>
      {registerEmail && <p className={style.regesterEmail}>{registerEmail}</p>}
      <nav className={style.nav}>
        <ul className={style.navList}>
          {routes.map(({ path, name, exact, isPrivate, isRestricted }) => (
            <NavigationItem
              path={path}
              name={name}
              exact={exact}
              key={path}
              isPrivate={isPrivate}
              isRestricted={isRestricted}
            />
          ))}
          {isRegister && (
            <li className={style.navLink} onClick={exit}>
              Exit
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
