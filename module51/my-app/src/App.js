import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Buttons from './Components/Buttons/Buttons';
import Navbars from './Components/Navbar/Navbar';
import Toasting from './Components/Toasting/Toasting';
import TailNav from './Components/TailNav/TailNav';


function App() {
  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      {/* <Navbars></Navbars>
      <Button variant='danger'>Hello Booty</Button>
      <Buttons></Buttons>
      <Toasting></Toasting> */}
      <TailNav></TailNav>
      <h1>Welcome to tailwind</h1>



    </div>
  );
}

export default App;
