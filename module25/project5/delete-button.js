document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const message = event.target.value;
    const btn_delete = document.getElementById('btn-delete');
    console.log(message);
    if (message === 'delete'){
        btn_delete.removeAttribute('disabled',true);
    }
    else{
        btn_delete.setAttribute('disabled',true);
    }

});




document.getElementById('btn-delete'),addEventListener('click', function() {
    const secret = document.getElementById('secretInfo');
    console.log('secret deleted');
    secret.style.display = 'none';
});

