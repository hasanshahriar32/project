import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.dots.min'
import App from './App'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Vanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
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
  return <div ref={myRef}>
    <App />
  </div>
}
export default Vanta;