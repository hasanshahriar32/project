import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Buttons from './Components/Buttons/Buttons';
import Navbars from './Components/Navbar/Navbar';
import Toasting from './Components/Toasting/Toasting';
import TailNav from './Components/TailNav/TailNav';
import { Bars3Icon } from '@heroicons/react/24/solid'


function App() {
  return (
    <div className="App">

      {/* <Navbars></Navbars>
      <Button variant='danger'>Hello Booty</Button>
      <Buttons></Buttons>
      <Toasting></Toasting> */}
      <Bars3Icon className="h-6 w-6 text-blue-500"/>
      <TailNav></TailNav>
      <h1>Welcome to tailwind</h1>



    </div>
  );
}

export default App;
