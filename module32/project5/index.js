console.log('welcome');


function loadUsers(){
    console.log('dataLoading');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> displayData(data))
}

function displayData(data){
    // console.log(data);
    // for (const user of data){
    //     console.log(user.username);
    // }
    const ul=document.getElementById('users-list');
    for (const user of data){
        const li=document.createElement('li');
        li.innerText=user.username;
        ul.appendChild(li);
    }
}

