import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Signup from "../Authentication/Signup/Signup";
import Profile from "../Profile/Profile";
import Faq from "../Faq/Faq";
import Blog from "../Blog/Blog";
import Course from "../Course/Course";
import RequireAuth from "../Authentication/RequireAuth/RequireAuth";
import Checkout from "../Checkout/Checkout";
import About from "../About/About";
import CoursePrint from "../Course/CoursePrint";
import ErrorPage from "../ErrorPage/ErrorPage.js";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,

      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Signup />,
        },
        {
          path: "/profile",
          element: (
            <RequireAuth>
              <Profile />
            </RequireAuth>
          ),
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/course/:id",
          element: (
            <RequireAuth>
              <Course />
            </RequireAuth>
          ),
          loader: ({ params }) =>
            fetch(
              `https://paradox-hero-paradox-bd.vercel.app/courses/${params.id}`
            ),
        },
        {
          path: "/checkout/:id",
          element: (
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          ),
          loader: ({ params }) =>
            fetch(
              `https://paradox-hero-paradox-bd.vercel.app/courses/${params.id}`
            ),
        },
        {
          path: "/printCourse/:id",
          element: (
            <RequireAuth>
              <CoursePrint />
            </RequireAuth>
          ),
          loader: ({ params }) =>
            fetch(
              `https://paradox-hero-paradox-bd.vercel.app/courses/${params.id}`
            ),
        },
        {
          path: "/*",
          element: <ErrorPage />,
        },
      ],
      loader: () => fetch("https://paradox-hero-paradox-bd.vercel.app/courses"),
    },
    {
      path: "*",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
