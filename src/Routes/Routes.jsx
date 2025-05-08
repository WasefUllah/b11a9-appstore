import { createBrowserRouter } from "react-router";
import App from "../App";
import AppLayout from "../Layouts/AppLayout";
import AuthLayout from "../Layouts/AuthLayout";
import MyProfile from "../Components/MyProfile";
import ErrorComponent from "../Components/ErrorComponent";
import Loading from "../Components/Loading";

const route = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: App,
        loader: () => fetch("/appData.json"),
        hydrateFallbackElement: <Loading></Loading>
      },
      { path: "/myProfile", Component: MyProfile },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
  },
  {
    path: "/*",
    Component: ErrorComponent
  },
]);
export default route;
