import { lazy } from "react";

// project imports
import Loadable from "../ui-component/Loadable";
import MinimalLayout from "../layout/MinimalLayout";

// login option 3 routing
import Login from "../views/utilities/Login";
import { AuthenticatedTemplate } from "@azure/msal-react";
import Callback from "../views/utilities/Callback";
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
    {
      path: "/callback",
      element: (
        <AuthenticatedTemplate>
          <Callback />
        </AuthenticatedTemplate>
      ),
    },
  ],
};

export default AuthenticationRoutes;
