console.log('hi');


function handleOnClick(){
    console.log('button clicked');
    const handler_status = document.getElementById('handlerStatus');
    handler_status.innerText = 'button clicked';


}

//option 2

document.getElementById('event-listener').addEventListener('click',function(){
    const handler_status = document.getElementById('handlerStatus');
    handler_status.innerText = 'default text';
    console.log('default text');
});


//option 2 recap
document.getElementById('btnUpdate').addEventListener('click',function(){
    console.log('update button clicked');
    const inputField = document.getElementById('inputField');
    console.log(inputField.value);
    const inputText = inputField.value;

    const  p= document.getElementById('inputText');
    p.innerText = inputText;
    inputField.value = '';

})