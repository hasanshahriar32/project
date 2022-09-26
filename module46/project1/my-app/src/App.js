// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  
  return (

    <div className="App">
      {/* <LoadCountries /> */}
      <Country></Country>



    </div>
  );
}





// function LoadCountries(){
//   const [countries, setCountries]  = useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
  
//   }, [])
//   return (
//     <div>
//       <h1>Visiting Every Country</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country  name={country.name.common} capital={country.capital} population={country.population} flag = {country.flags.svg}></Country>)

//       }
//     </div>
//   )
// }


// function Country(props){
//   return (
    
//       <div >
//       <h2>Name: {props.name}</h2>
//       <p>Capital: {props.capital}</p>
//       <h5> Population: {props.population}</h5>
//       <img style={{width: "150px"}} src={props.flag} alt="" />
//     </div>
   
//   )
// }

export default App;
