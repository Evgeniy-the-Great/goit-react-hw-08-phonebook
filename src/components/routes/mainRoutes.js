import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../page/homePage" /*webPackChunkName:'HomePage'*/)
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Contacts",
    path: "/contacts",
    exact: true,
    component: lazy(() =>
      import("../page/phonebookPage" /*webPackChunkName:'PhonebookPage'*/)
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Register ",
    path: "/register",
    exact: true,
    component: lazy(() =>
      import("../page/RegisterPage" /*webPackChunkName:'RegisterPage'*/)
    ),

    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Login ",
    path: "/login",
    exact: true,
    component: lazy(() =>
      import("../page/RegisterPage" /*webPackChunkName:'RegisterPage'*/)
    ),
    isPrivate: false,
    isRestricted: true,
  },
];
