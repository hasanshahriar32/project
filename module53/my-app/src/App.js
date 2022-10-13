import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Orders from './components/Orders/Orders';


function App() {
  const router = createBrowserRouter(
    [
      { path: '/', element: <Layout></Layout>},
      { path: '/shop', element: <Layout></Layout>},
      { path: '/home', element: <Layout></Layout>},
      { path: '/orders', element: <Orders></Orders>},
      { path: '/about', element: <About></About>},
      { path: '*', element: <Layout></Layout>},

    ]

  );
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
