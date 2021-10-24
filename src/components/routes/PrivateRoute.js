import React from "react";
import { Redirect, Route } from "react-router";
const PrivateRoute = ({ path, exact, component, isRegester }) => {
  return !isRegester ? (
    <Redirect to="/login" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PrivateRoute;
