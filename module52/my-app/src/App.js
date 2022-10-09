import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>Default Page</div>},
    { path: '/home', element: <div>Home Page</div>},
    { path: '/About', element: <div>About Us</div>}

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
