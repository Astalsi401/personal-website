import { Outlet } from "react-router";
import { getIndex, getIndexPage, getSections } from "@functions";
import { ErrorPage } from "./error";
import { IndexPage } from "./index-page";
import { PostPage } from "./post-page";
import { Home } from "./home";
import { Root } from "./root";

export const routes = [
  {
    path: `${import.meta.env.BASE_URL}/`,
    Component: Root,
    children: [
      { index: true, Component: Home, loader: getIndexPage },
      {
        path: ":href",
        Component: Outlet,
        children: [
          { index: true, Component: IndexPage, loader: getIndexPage },
          { path: ":page", Component: PostPage, loader: getSections },
        ],
      },
    ],
    loader: getIndex,
    errorElement: <ErrorPage />,
  },
];
