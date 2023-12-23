import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import MainPage from "./components/MainPage.jsx";
import ErrorPage from "./error-message.jsx";
import "./index.css";
import SplashPage from "./components/SplashPage.jsx";
import CartPage from "./components/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "splashpage",
        element: <SplashPage />,
      },
      {
        path: "mainPage",
        element: <MainPage />,
      },
      {
        path: "cartpage",
        element: <CartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />\
  </React.StrictMode>
);
