import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Auhentication/Login/Login";
import Register from "../Auhentication/Register/Register";
import Details from "../Details/Details";
import SingleNews from "../Details/SingleNews";
import Home from "../Home/Home";
import Latest from "../Latest/Latest";
import Main from "../Main/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () =>
          fetch("https://paradox-news-server.vercel.app/category/08"),
      },
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://paradox-news-server.vercel.app/category/08"),
      },
      {
        path: "/detail/:id",
        element: <SingleNews></SingleNews>,
        loader: ({ params }) =>
          fetch(`https://paradox-news-server.vercel.app/news/${params.id}`),
      },
    ],
  },
  {
    path: "category/:id",
    element: <Details></Details>,
    loader: ({ params }) =>
      fetch(`https://paradox-news-server.vercel.app/category/${params.id}`),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/latest",
    element: <Latest></Latest>,
    loader: () => fetch("https://paradox-news-server.vercel.app/category/01"),
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default routes;
