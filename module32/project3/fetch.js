console.log('api going to fetch data');



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
// //   .then(response => console.log(response));
//   //response.json is not similar but close to JSON.parse 
//   .then(json => console.log(json))

function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';	
fetch(url)
.then(response => response.json())
.then (json => console.log(json))

}

