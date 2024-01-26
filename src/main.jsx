import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getPages } from "./components/functions";
import Header from "./components/header";
import IndexPage from "./routes/indexPage";
import Root, { loader as getCategories } from "./routes/root";
import ErrorPage from "./routes/error";
import "./assets/styles/main.min.css";
import { Outlet } from "react-router-dom";

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
        element: (
          <>
            <IndexPage />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
