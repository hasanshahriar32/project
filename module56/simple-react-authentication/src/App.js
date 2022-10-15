// import logo from './logo.svg';
import './App.css';
import GithubAuth from './Firebase/GithubAuth';
import GoogleAuth from './Firebase/GoogleAuth';
import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import TwitterAuth from './Firebase/TwitterAuth';
const App = (props) => { const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div className='appBack' ref={myRef}>
      <h1>Paradox Authentication</h1>
    <GoogleAuth></GoogleAuth>
      <GithubAuth></GithubAuth>
      <TwitterAuth></TwitterAuth>
  </div>
  );
}

export default App;
