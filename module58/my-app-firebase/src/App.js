import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';

function App() {
  const router= createBrowserRouter([
    {path : '/', element : <Main/> , children : [
      {path : '/', element : <Home></Home>},
      {path : '/home', element : <Home></Home>},
      {path : '/login', element : <Login></Login>},
      {path : '/register', element : <Register></Register>},
      {path : '*', element : <h1>404 Not Found</h1>}
    ]},	
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
