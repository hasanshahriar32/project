// import logo from './logo.svg';
import './App.css';
import GithubAuth from './Firebase/GithubAuth';
import GoogleAuth from './Firebase/GoogleAuth';
import React, { useState, useEffect, useRef } from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'
import TwitterAuth from './Firebase/TwitterAuth';
import UserPassAuth from './Components/UserInfo/UserPassAuth/UserPassAuth';
import UserPassAuthForm from './Components/UserInfo/UserPassAuth/UserPassAuthForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import UserPassLogin from './Components/UserPassLogin/UserPassLogin';
import LoginProviders from './Components/LoginProviders/LoginProviders';

const router = createBrowserRouter([
  {path: '/', element: <Main></Main> ,children: [
    {path: '/', element: <UserPassAuth></UserPassAuth>},
    {path: '/register', element: <UserPassAuth></UserPassAuth>},
    {path: '/login', element: <UserPassLogin></UserPassLogin>},
    {path: '/loginProviders', element: <LoginProviders></LoginProviders>},
  ]},

])

const App = (props) => { const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div className='appBack' ref={myRef}>
      <h1>Paradox Authentication App</h1>
      <RouterProvider router={router}></RouterProvider>
      {/* <UserPassAuth ></UserPassAuth> */}
      {/* <LoginProviders></LoginProviders> */}
      {/* <UserPassAuthForm></UserPassAuthForm> */}
  </div>
  );
}

export default App;
