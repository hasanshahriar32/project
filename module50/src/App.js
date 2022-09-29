import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import FAQ from './Components/Questions/FAQ';
import Tasks from './Components/Tasks/Tasks';

function App() {

  return (
    <div className="App">
      <main>
        {/* <h1>Tasks</h1> */}
          <Header></Header>
          <Tasks></Tasks>
          <FAQ></FAQ>
          
          <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
