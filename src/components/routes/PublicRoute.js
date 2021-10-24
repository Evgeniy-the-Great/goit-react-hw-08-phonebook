import React from "react";
import { Redirect, Route } from "react-router";
const PublicRoute = ({ path, exact, component, isRegester, isRestricted }) => {
  return isRegester && isRestricted ? (
    <Redirect to="/contacts" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
