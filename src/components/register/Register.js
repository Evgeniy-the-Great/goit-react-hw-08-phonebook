import React from "react";
import { useSelector } from "react-redux";
import {
  errorSelector,
  loaderSelector,
} from "../../redux/register/registerSelectors";
import RegisterForm from "./registerForm/RegisterForm";

const Register = () => {
  const error = useSelector(errorSelector);
  const loader = useSelector(loaderSelector);

  return (
    <>
      {error && alert(`Warning! ${error}`)}
      <RegisterForm />
      {loader && <h2>...loading</h2>}
    </>
  );
};

export default Register;
