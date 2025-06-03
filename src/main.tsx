import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "@store";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "@routes";
import "@styles/main.scss";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
