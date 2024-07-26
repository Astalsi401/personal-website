import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store";
import { getPages, getCategories, getSections } from "@functions";
import { Header, Loading } from "@components";
import { IndexPage } from "@routes/indexPage";
import { PostPage } from "@routes/postPage";
import { ErrorPage } from "@routes/error";
import { Root } from "@routes/root";
import "@styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/personal-website/",
    element: (
      <>
        <Header />
        <Loading>
          <Root />
        </Loading>
      </>
    ),
    errorElement: <ErrorPage />,
    loader: getCategories,
  },
  {
    path: "/personal-website/:href",
    loader: getCategories,
    element: (
      <>
        <Header />
        <Loading>
          <Outlet />
        </Loading>
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
        <Loading>
          <Outlet />
        </Loading>
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
