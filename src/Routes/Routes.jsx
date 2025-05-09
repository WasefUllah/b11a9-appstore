import { createBrowserRouter } from "react-router";
import App from "../App";
import AppLayout from "../Layouts/AppLayout";
import AuthLayout from "../Layouts/AuthLayout";
import MyProfile from "../Components/MyProfile";
import ErrorComponent from "../Components/ErrorComponent";
import Loading from "../Components/Loading";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Blogs from "../Components/Blogs";
import AppDetails from "../Components/AppDetails";
import PrivateRoute from "../Provider/PrivateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: App,
        loader: async () => {
          const appData = await fetch("/appData.json").then((res) =>
            res.json()
          );
          const faqData = await fetch("/faq.json").then((res) => res.json());
          return { appData, faqData };
        },
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        Component: Blogs,
        loader: () => fetch("/blogs.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <AppDetails></AppDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/appData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorComponent,
  },
]);
export default route;
