import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);

export default routes;
