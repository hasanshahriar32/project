


const cartArray = [];
function display(cartProduct){
    const tableBody  = document.getElementById('playerList');
    tableBody.innerHTML = '';
    for(i=0;i<cartProduct.length;i++){  //loop to display the cart
        console.log(cartArray[i].playerName);
        
        
        const name = cartArray[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `<th> ${i+1}</th>
        <td>${name}</td>`;
        playerList.appendChild(tr);
        


}
}
// delete from cart
document.getElementById('clear').addEventListener('click',function(){
    console.log(clear.innerHTML);
    cartArray.length = 0;
    document.getElementById('total-added-player').innerHTML = 0;
    document.getElementById('totalPlayerPrice').innerHTML = 0;
    document.getElementById('playerList').innerHTML = '';
    document.getElementById('btn-delete').style.display = 'none';
    const addToCartBtn = document.getElementsByClassName('btn');
    for (i=0;i<addToCartBtn.length;i++){
        addToCartBtn[i].style.display = 'block';
    }
    

}

);


//add to cart
function addToCart(element){

    
    //console.log(element.parentNode.parentNode.children[0].innerHTML);
    const playerName = element.parentNode.parentNode.children[0].innerHTML;


const playerObj ={
    playerName: playerName,
}



//console.log(playerObj);
    cartArray.push(playerObj);
    console.log(cartArray);
    
    const playerNumber = document.getElementById('total-added-player');
    if (cartArray.length <= 5){
        playerNumber.innerHTML = cartArray.length;
    }
    else{
        playerNumber.innerHTML = '<h3 class = "bg-error">maximum reached</h3>';
    }
    
    if (cartArray.length > 5){
        document.getElementById('btn-delete').removeAttribute('disabled');
    }

    display(cartArray);


    
    
//disabling the add to list button
const addToCartBtn = document.getElementsByClassName('btn');
for (i=0;i<addToCartBtn.length;i++){
    if (addToCartBtn[i].parentNode.parentNode.children[0].innerHTML === playerName){
        addToCartBtn[i].setAttribute('disabled',true);
    }


}


}



//console.log(perPlayer);
function calculatorPlayer(){
    const player = document.getElementById('perPlayer').value;
    const perPlayer = parseInt(player);
    if(cartArray.length <= 5){
        
    console.log(cartArray.length);
    console.log(perPlayer);
    const total = cartArray.length * perPlayer;
    console.log(total);
    document.getElementById('totalPlayerPrice').innerHTML = total;
    }
    else
    {
    const total = 5 * perPlayer;
    console.log(total);
    document.getElementById('totalPlayerPrice').innerHTML = total;

}
}

function total(){
    const player = document.getElementById('totalPlayerPrice').innerText;
    const playertotal = parseInt(player);
    const coach = document.getElementById('coach').value;
    const coachtotal = parseInt(coach);
    const manager = document.getElementById('manager').value;
    const managertotal = parseInt(manager);
    const total = playertotal + coachtotal + managertotal;
    document.getElementById('totalPrice').innerHTML = total;
}
