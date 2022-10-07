import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Buttons from './Components/Buttons/Buttons';
import Navbars from './Components/Navbar/Navbar';
import Toasting from './Components/Toasting/Toasting';
import TailNav from './Components/TailNav/TailNav';
import Pricing from './Components/Pricing/Pricing';



function App() {
  return (
    <div className="App">

      {/* <Navbars></Navbars>
      <Button variant='danger'>Hello Booty</Button>
      <Buttons></Buttons>
      <Toasting></Toasting> */}
      
      <TailNav className="fixed  top-0"></TailNav>
      <Pricing></Pricing>
      {/* <h1>Welcome to tailwind</h1> */}



    </div>
  );
}

export default App;
