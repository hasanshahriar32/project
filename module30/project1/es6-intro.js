document.getElementById('apply-bg').addEventListener('click', function(){
    console.log('apply background');
    const friends = document.getElementsByClassName('friend-name');
    console.log(friends);
    for(const friend of friends){
        console.log(friend.innerHTML);
        friend.style.backgroundColor = '#f5f5f5';

    }
})
document.getElementById('third-button').addEventListener('click', function(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';

})


document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer  = document.getElementById('bondhu');
    const friend = document.createElement('div');
    friend.innerHTML = `
                <h3 class="friend-name">friend: $</h3>
                <p>Laudantium molestias ducimus animi corrupti.</p>
    `
    friendContainer.appendChild(friend);
});