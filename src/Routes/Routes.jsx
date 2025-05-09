import { createBrowserRouter } from "react-router";
import App from "../App";
import AppLayout from "../Layouts/AppLayout";
import AuthLayout from "../Layouts/AuthLayout";
import MyProfile from "../Components/MyProfile";
import ErrorComponent from "../Components/ErrorComponent";
import Loading from "../Components/Loading";
import Login from "../Components/Login";
import Register from "../Components/Register";

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
    children:[
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      }
    ]
  },
  {
    path: "/*",
    Component: ErrorComponent
  },
]);
export default route;
