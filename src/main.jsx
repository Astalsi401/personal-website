import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/root";
import App from "./components/App";
import "./assets/styles/main.min.css";

const router = createBrowserRouter([
  {
    path: "/peronsal-website/",
    element: <Home category="Home" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
