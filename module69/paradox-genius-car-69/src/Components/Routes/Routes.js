import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import CarParts from "../CarParts/CarParts";
import Contact from "../Contact/Contact";
import ErrorPage from "../ErrorPage/ErrorPage";
import Header from "../Header/Header";
import HomeAbout from "../Home/About/HomeAbout/HomeAbout";
import Home from "../Home/Home";
import Team from "../Home/Team/Team";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Profile/Profile";
import Pricing from "../Services/Pricing/Pricing";
import Services from "../Services/Services";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Update from "../CarParts/Update/Update";
import SingleDetail from "../CarParts/SingleDetail/SingleDetail";
import Settings from "../Settings/Settings";
import Checkout from "../Checkout/Checkout";
import Orders from "../Orders/Orders";
import OrderRow from "../Orders/OrderRow";
// ..
AOS.init();

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/pricing", element: <Services /> },
        {
          path: "/about",
          element: (
            <div data-aos="fade-up-right">
              {" "}
              <HomeAbout />
            </div>
          ),
        },
        {
          path: "/services",
          element: (
            <PrivateRoute>
              <CarParts />
            </PrivateRoute>
          ),
        },

        {
          path: "/contact",
          element: (
            <div data-aos="fade-up">
              <Contact></Contact>
              <Team />
            </div>
          ),
        },
        { path: "/servicesCenter", element: <Pricing></Pricing> },
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
        {
          path: "/settings",
          element: (
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          ),
        },
        {
          path: "/orders/:id",
          element: (
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://car-server-three.vercel.app/orders?UserId=${params.id}`
            ),
        },
        {
          path: "/orderRow/:id",
          element: (
            <PrivateRoute>
              <OrderRow />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://car-server-three.vercel.app/singleOrder/${params.id}`
            ),
        },
        {
          path: "/updateService/:id",
          element: (
            <PrivateRoute>
              <Update />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://car-server-three.vercel.app/services/${params.id}`),
        },
        {
          path: "/checkout/:id",
          element: (
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://car-server-three.vercel.app/services/${params.id}`),
        },
        {
          path: "/service/:id",
          element: (
            <PrivateRoute>
              <SingleDetail>
                <Update />
              </SingleDetail>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`https://car-server-three.vercel.app/services/${params.id}`),
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
