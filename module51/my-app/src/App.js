import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Buttons from './Components/Buttons/Buttons';
import Navbars from './Components/Navbar/Navbar';
import Toasting from './Components/Toasting/Toasting';
import TailNav from './Components/TailNav/TailNav';
import Pricing from './Components/Pricing/Pricing';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';
import BrokenPhone from './Components/BrokenPhone/BrokenPhone';
import { ArrowDownCircleIcon, ArrowDownIcon } from '@heroicons/react/24/solid'




function App() {
  return (
    <div id='home' className="App">

      {/* <Navbars></Navbars>
      <Button variant='danger'>Hello Booty</Button>
      <Buttons></Buttons>
      <Toasting></Toasting> */}
      
      
      <TailNav className="fixed  top-0"></TailNav>
      
      <h1 className='text-5xl m-10 hover:bg-slate-200 hover:text-gray-800 text-gray-300 font-extrabold font-mono duration-500 p-5 bg-stone-900'>Paradox Super Mall </h1>
      {/* <ArrowDownIcon className='text-xl '></ArrowDownIcon>  */}
      <BrokenPhone></BrokenPhone>
      <Pricing></Pricing>
      <AssignmentMarks className="flex w-full align-middle justify-center bg-slate-400"></AssignmentMarks>
      {/* <h1>Welcome to tailwind</h1> */}



    </div>
  );
}

export default App;
