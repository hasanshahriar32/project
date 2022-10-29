import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Shipping from "./components/Shipping/Shipping";
import RequireAuth from "./components/Routes/RequireAuth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/home",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },

        {
          path: "orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "shipping",
          element: (
            <RequireAuth>
              <Shipping></Shipping>
            </RequireAuth>
          ),
        },
        {
          path: "signup",
          element: <Signup></Signup>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "about",
          element: (
            <RequireAuth>
              <About></About>
            </RequireAuth>
          ),
        },
        {
          path: "*",
          loader: () => fetch("products.json"),
          element: <Home></Home>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router}></RouterProvider>
      </header>
    </div>
  );
}

export default App;
