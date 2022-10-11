import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Main from './components/Layout/Main';
import Contact from './components/Contact/Contact';
import ErrorHandle from './components/errorHandle/errorHandle';
import Users from './components/Users/Users';
import User from './components/Users/User';
import UserDetails from './components/Users/UserDetails';
import ProductDetails from './components/Products/ProductDetails';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Main></Main>, children:[
      { path: '/product', loader:()=>{return fetch('https://jsonplaceholder.typicode.com/posts')}, element: <Products>Products</Products>},
      { path: '/contact', element: <Contact>Products</Contact>},
      { path: '/home', element: <Home>Home Page</Home>},
      { path: '/users', loader:()=>{return fetch('https://jsonplaceholder.typicode.com/users')}, element: <Users>Our Users</Users>},
      { path: '/about', element: <About>About Us</About>}

    ]},
    
    { path: '/Header', element: <Header></Header>},
    { path: '/user/:userId', loader:({params})=>{return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)}, element:<UserDetails></UserDetails>} ,
    { path: '/product/:productId' ,loader:({params})=>{return fetch (`https://jsonplaceholder.typicode.com/posts/${params.productId}`)}, element: <ProductDetails></ProductDetails>},
    { path: '*', element: <ErrorHandle></ErrorHandle>},
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
