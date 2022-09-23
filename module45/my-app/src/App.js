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
  // const name = ['anon', 'anon2', 'anon3'];	
  const name2 = [{id: 1, name: 'anon', job: 'developer', addres: 'USA'}, 
                 {id: 2, name: 'anon2', job: 'developer', addres: 'USA'},
                 {id: 3, name: 'anon3', job: 'developer', addres: 'USA'},
                 {id: 4, name: 'anon4', job: 'developer', addres: 'USA'},];
  return (
    
 
    <div className="App">
      {
      // name.map(name => <Person name={name}></Person>)
      name2.map(name => <Person serial={name.id} name={name.name} job={name.job} addres={name.addres}></Person>)
    }
      {/* <Person name="anon" addres={addres[0]} job="cyber specialist"></Person>
      <Person name = "fuad"></Person>
      <Person name = "kajol" job = "coding"></Person> */}
    </div>
  );
}

function Person( props ) {
  return  <div className='person'><h1><span>id{props.serial}: </span>{props.name}</h1>
            <p>{props.job}</p>
            <p>{props.addres}</p></div>
}

export default App;
