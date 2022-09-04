console.log('welcome to the app');


function loadData(){
const url = 'https://jsonplaceholder.typicode.com/todos/1';	
fetch(url)
    .then(response => response.json())
    .then (json => console.log(json))

}



function loadUsers(){

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => response.json())
    .then (data => displayUsers(data))

}


function displayUsers(data){
    console.log(data);
}