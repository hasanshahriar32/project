import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddUser from "./Components/NewUser/AddUser";
import UpdateUser from "./Components/Update/UpdateUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/update/:id",
      element: <UpdateUser></UpdateUser>,
      loader: ({ params }) =>
        fetch(
          ` https://node-mongo-crud-server-amber.vercel.app/users/${params.id}`
        ),
    },
    {
      path: "/users/add",
      element: <AddUser></AddUser>,
      loader: () =>
        fetch(" https://node-mongo-crud-server-amber.vercel.app/users"),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
