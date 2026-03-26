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
    element: <Root />, // ✅ use element
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        element: <Home />,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        element: <AllApps />,
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/appsData.json"),
        element: <AppDetails />,
      },
      {
        path: "/installations",
        loader: () => fetch("/appsData.json"),
        element: <Installation />,
      },
    ],
  },
]);
