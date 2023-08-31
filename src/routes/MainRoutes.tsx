import { lazy } from "react";

// project imports

import MainLayout from "../layout/MainLayout";
import Loadable from "../ui-component/Loadable";
import MyTest from "../views/pages/tests/MyTest";
import Results from "../views/pages/results/Results";
import Slas from "../views/pages/results/Slas";
import Reports from "../views/pages/results/Reports";
import Inventory from "../views/pages/manage/Inventory";
import Topologies from "../views/pages/manage/Topologies";
import TestingAssests from "../views/pages/manage/TestingAssests";
import Platfrom from "../views/pages/learn/Platfrom";
import Faq from "../views/pages/learn/Faq";
// import { Outlet } from 'react-router';

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("../views/dashboard/Default"))
);

// ==============================|| MAIN ROUTING ||============================== //
const SetupaTest = Loadable(
  lazy(() => import("../views/pages/tests/SetupaTest"))
);

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "tests",
      children: [
        {
          path: "setup-a-test",
          element: <SetupaTest />,
        },
        {
          path: "my-tests",
          element: <MyTest />,
        },
      ],
    },
    {
      path: "results",
      children: [
        {
          path: "result",
          element: <Results />,
        },
        {
          path: "slas",
          element: <Slas />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
      ],
    },
    {
      path: "manage",
      children: [
        {
          path: "inventory",
          element: <Inventory />,
        },
        {
          path: "topologies",
          element: <Topologies />,
        },
        {
          path: "testing-assests",
          element: <TestingAssests />,
        },
      ],
    },
    {
      path: "learn",
      children: [
        {
          path: "platform",
          element: <Platfrom />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
      ],
    },
  ],
};

export default MainRoutes;
