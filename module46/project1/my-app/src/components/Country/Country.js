import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './Country.css'

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Hello from countries: {countries.length}</h1>
            <div  className='countries'>
            {
                countries.map (country =><SingleCountry key={country.cca3} country={country} ></SingleCountry>)
            }
            </div>
        </div>
    );
};



export default Country;