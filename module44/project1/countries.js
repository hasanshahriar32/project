const localCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries = countries =>{
    // console.log(countries);
    const allCountriesHtml = countries.map(country => getCountriesHtml(country))
    console.log(allCountriesHtml);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHtml.join(' ');	
}


const getCountriesHtml =({name,flags,area,region}) =>{
    // const {name,flags}= country;
    //option 3
    return `
    <div class = "country">
        <h2 title="this is the name of the country">${name.common}</h2>
        <p>Area: ${area}</p>
        <p>Region: ${region}</p>
        <br>
        <img src="${flags.png}">

    </div>
    `
}


// const getCountriesHtml =country =>{

//     //option 2
//     const {name,flags}=country;
//     return `
//     <div class = "country">
//         <h2>${name.common}</h2>
//         <br>
//         <img src="${flags.png}">

//     </div>
//     `
// }


// const getCountriesHtml =country =>{

//     //option 1
//     return `
//     <div class = "country">
//         <h2>${country.name.common}</h2>
//         <br>
//         <img src="${country.flags.png}">

//     </div>
//     `
// }

localCountries();

