import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import AllAppsPage from "../Main/AllAppsPage";
import HomePage from "../Main/HomePage";
import AppDetailsPage from "../Main/AppDetailsPage";
import InstallationPage from "../Main/InstallaitonPage";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Root,
    loader: () => fetch("/appsData.json"),

    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/apps",
        Component: AllAppsPage,
      },
      {
        path: "/apps/app/:appId",
        Component: AppDetailsPage,
      },
      {
        path: "/installedApps",
        Component: InstallationPage,
      },
    ],
  },
]);
export default router;
