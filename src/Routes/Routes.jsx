import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Installation from "../pages/Installation/Installation";
import Root from "../pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appsData.json"),
        // loader: () => fetch("https://hero-apps.pages.dev/apps.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        Component: AllApps,
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/appsData.json"),
        Component: AppDetails,
      },

      {
        path: "/installations",
        Component: Installation,
      },
    ],
  },
]);
