import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./pages/app/App";
import Error from "./components/error/error";
import Read from "./pages/read";
import "./reset.css"
import "./index.css";
import Gane from "./pages/game";

/**
 *  路由
 * APP 作为indexPage 也就是路径 “ / ”
 * Read readPage “ /read ”
 * and so on
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/read",
        element: <Read></Read>,
      },
      {
        path: "/game",
        element:<Gane></Gane>
      },
    ]
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
