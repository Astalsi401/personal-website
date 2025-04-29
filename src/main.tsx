import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store";
import { getPages, getCategories, getSections } from "@functions";
import { Header } from "@components";
import { Loading } from "@ui/loading";
import { IndexPage, PostPage, ErrorPage, Root } from "@routes";
import "@styles/main.scss";

const router = createBrowserRouter([
  {
    path: `${import.meta.env.BASE_URL}/`,
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
    path: `${import.meta.env.BASE_URL}/:href`,
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
        path: `${import.meta.env.BASE_URL}/:href`,
        loader: getPages,
        element: <IndexPage />,
      },
    ],
  },
  {
    path: `${import.meta.env.BASE_URL}/:href/:page`,
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
        path: `${import.meta.env.BASE_URL}/:href/:page`,
        loader: getSections,
        element: <PostPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
