import { lazy } from "react";

// project imports

import MainLayout from "../layout/MainLayout";
import Loadable from "../ui-component/Loadable";
import DashboardDefault from "../views/dashboard/Default";
import Faq from "../views/pages/learn/Faq";
import Platfrom from "../views/pages/learn/Platfrom";
import Inventory from "../views/pages/manage/Inventory";
import TestingAssests from "../views/pages/manage/TestingAssests";
import Topologies from "../views/pages/manage/Topologies";
import Reports from "../views/pages/results/Reports";
import Results from "../views/pages/results/Results";
import Slas from "../views/pages/results/Slas";
import MyTest from "../views/pages/tests/MyTest";
import SetupPhase from "../views/pages/tests/SetupPhase";
import SetupaTest from "../views/pages/tests/SetupaTest";
// import { Outlet } from 'react-router';
import { AuthenticatedTemplate } from "@azure/msal-react";
import AddTopology from "../views/pages/manage/AddTopology";
import AllTestCases from "../views/pages/test-management/AllTestCases";
import Playlists from "../views/pages/test-management/Playlists";
import Callback from "../views/utilities/Callback";

// dashboard routing

// ==============================|| MAIN ROUTING ||============================== //

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
          path: "setup-phase",
          element: <SetupPhase />,
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
          path: "add-topology",
          element: <AddTopology />,
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
    {
      path: "test-management",
      children: [
        {
          path: "all-test-cases",
          element: <AllTestCases />,
        },
        {
          path: "playlists",
          element: <Playlists />,
        },
      ],
    },
  ],
};

export default MainRoutes;
