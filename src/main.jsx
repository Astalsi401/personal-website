import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/main.scss";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { getPages, getCategories, getSections } from "./components/functions";
import Header from "./components/header";
import IndexPage from "./routes/indexPage";
import PostPage from "./routes/postPage";
import ErrorPage from "./routes/error";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/personal-website/",
    element: <Root category="Home" />,
    errorElement: <ErrorPage />,
    loader: getCategories,
  },
  {
    path: "/personal-website/:href",
    loader: getCategories,
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/personal-website/:href",
        loader: getPages,
        element: <IndexPage />,
      },
    ],
  },
  {
    path: "/personal-website/:href/:page",
    loader: getPages,
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/personal-website/:href/:page",
        loader: getSections,
        element: <PostPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
