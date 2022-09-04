const loadUsers = ()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(data => displayUser(data.results))
}
const clearUsers = ()=>{
    document.getElementById('users').innerHTML = '';
}


const displayUser = (users)=>{
    const container = document.getElementById('users');
    container.classList.add('container');
    for(const user of users){
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
        <img src="${user.picture.large}">
        <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
        <p>${user.location.city}</p>
        `
        container.appendChild(div);

    }
}


//load style

