import React from 'react';
import './SingleCountry.css'

const SingleCountry = (props) => {
    // console.log(props.country);
    const {name, capital, population, flags, area, region} = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p><small>Area: {area}sq.km</small></p>
            <img style={{width: "150px"}} src={flags.png} alt="" />
            
        </div>
    );
};

export default SingleCountry;