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
import CategoryUpdate from "../Settings/CategoryUpdate/CategoryUpdate";
import Category from "../Home/Categories/Category/Category";
import Singlecategory from "../Home/Categories/Category/Singlecategory";
import Categories from "../Home/Categories/Categories";
import AdminControl from "../Admin/AdminControl";
import AdminContol from "../Admin/AdminControl";
import AdminRoute from "../PrivateRoute/AdminRoute";
import Dashboard from "../DashBoard/Dashboard";
import Faq from "../Home/Faq/Faq";
// ..
AOS.init();

const Routes = () => {
  const router = createBrowserRouter([
    // update done
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/pricing", element: <Services /> },
        { path: "/blog", element: <Faq /> },

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
            // <PrivateRoute>
            <CarParts />
            // </PrivateRoute>
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
          path: "/admin",
          element: (
            <AdminRoute>
              <AdminContol></AdminContol>
            </AdminRoute>
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
          path: "/dashboard",
          element: (
            <PrivateRoute>
              <Dashboard />
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
          // loader: ({ params }) =>
          //   fetch(` https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/orders?UserId=${params.id}`),
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
              ` https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/singleOrder/${params.id}`
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
            fetch(
              ` https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/services/${params.id}`
            ),
        },
        {
          path: "/updateCategory/:id",
          element: (
            <PrivateRoute>
              <CategoryUpdate />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              ` https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/categoryEdit/${params.id}`
            ),
        },
        {
          // path: "/checkout/:id",
          // element: (
          //   <PrivateRoute>
          //     <Checkout />
          //   </PrivateRoute>
          // ),
          loader: ({ params }) =>
            fetch(
              ` https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/services/${params.id}`
            ),
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
            fetch(
              ` https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/services/${params.id}`
            ),
        },
      ],
    },
    {
      path: "/category",
      element: <Category />,
      children: [
        {
          path: "/category/:id",
          element: (
            <PrivateRoute>
              <Singlecategory />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              ` https://b612-used-products-resale-server-side-hasanshahriar32.vercel.app/category/${params.id}`
            ),
        },
        {
          path: "/category",
          element: <Categories />,
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
