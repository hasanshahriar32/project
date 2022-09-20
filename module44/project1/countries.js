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


const getCountriesHtml =country =>{
    return `
    <div class = "country">
        <h2>${country.name.common}</h2>
        <br>
        <img src="${country.flags.png}">

    </div>
    `
}

localCountries();

