import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path:'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path:'about',
          element:<About></About>
        }
      ]
    },
    
  ])
  return (
    <div className="App">
      <header className="App-header">
      <RouterProvider router={router}></RouterProvider>

      </header>
    </div>
  );
}

export default App;
