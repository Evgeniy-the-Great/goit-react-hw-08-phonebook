import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  singInOperation,
  singUpOperation,
} from "../../../redux/register/registerOperations";
import style from "./RegisterForm.module.css";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [nick, setNick] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    name === "email" && setEmail(value);
    name === "password" && setPasword(value);
    name === "nick" && setNick(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    location.pathname === "/register"
      ? dispatch(singUpOperation({ email, password, nick }))
      : dispatch(singInOperation({ email, password }));
  };

  return (
    <form onSubmit={onHandleSubmit} className={style.registerForm}>
      {location.pathname === "/register" && (
        <label className={style.registerLabel}>
          Name
          <input
            type="text"
            value={nick}
            name="nick"
            onChange={onHandleChange}
            placeholder="Write your nick"
            className={style.registerInput}
          />
        </label>
      )}
      <label className={style.registerLabel}>
        Email
        <input
          type="text"
          value={email}
          name="email"
          onChange={onHandleChange}
          placeholder="Write your email"
          className={style.registerInput}
        />
      </label>
      <label className={style.registerLabel}>
        Password
        <input
          type="text"
          value={password}
          name="password"
          onChange={onHandleChange}
          placeholder="Write your password"
          className={style.registerInput}
        />
      </label>
      <button type="submit" className={style.registerBtn}>
        {location.pathname === "/register" ? "Register" : "Login"}
      </button>
    </form>
  );
};

export default RegisterForm;
