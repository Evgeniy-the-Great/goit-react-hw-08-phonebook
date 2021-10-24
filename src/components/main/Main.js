import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router";
import { isRegisterSelector } from "../../redux/register/registerSelectors";
import { mainRoutes } from "../routes/mainRoutes";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
const Main = () => {
  const isRegester = useSelector(isRegisterSelector);
  return (
    <main>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map(
            ({ path, exact, component, isPrivate, isRestricted }) =>
              isPrivate ? (
                <PrivateRoute
                  path={path}
                  exact={exact}
                  component={component}
                  isRegester={isRegester}
                  key={path}
                />
              ) : (
                <PublicRoute
                  path={path}
                  exact={exact}
                  component={component}
                  isRegester={isRegester}
                  isRestricted={isRestricted}
                  key={path}
                />
              )
          )}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
