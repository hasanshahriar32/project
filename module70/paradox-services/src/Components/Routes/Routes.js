import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Profile/Profile";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register /> },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <div>
          <Header></Header>
          <ErrorPage></ErrorPage>
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
