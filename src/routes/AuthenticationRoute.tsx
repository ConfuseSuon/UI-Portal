import { lazy } from "react";

// project imports
import Loadable from "../ui-component/Loadable";
import MinimalLayout from "../layout/MinimalLayout";

// login option 3 routing
import Login from "../views/utilities/Login";
// const Callback = Loadable(lazy(async () => await import("../views/utilities/auth/Callback")))

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/login",
      element: <Login />,
    },
  ],
};

export default AuthenticationRoutes;
