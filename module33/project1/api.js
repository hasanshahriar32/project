




const div = document.querySelector('div');
const loadQuote = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayQuote(data))
}

const displayQuote = data =>{
const li = document.createElement('li');
li.innerText = data.quote;
div.appendChild(li);
}