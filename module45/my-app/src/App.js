import logo from './logo.svg';
import './App.css';



// const version = 0.1;
// const about = {
//   name: 'React',
//   version: 17.0
// }


// const aboutStyle = {
//   color: 'red',
//   fontSize: '20px'
// }

function App() {
  return (

 
    <div className="App">
      <Person name="anon" job="cyber specialist"></Person>
      <Person name = "fuad"></Person>
      <Person name = "kajol" job = "coding"></Person>
    </div>
  );
}

function Person( props ) {
  return  <div className='person'><h1>{props.name}</h1>
            <p>{props.job}</p></div>
}

export default App;
