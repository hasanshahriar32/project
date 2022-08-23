document.getElementById('btn-more').addEventListener('click', function(){
    console.log('click');
});
document.getElementById('btn-enter').addEventListener('mouseenter', function(){
    console.log('mouseenter');
});
document.getElementById('btn-move').addEventListener('mousemove', function(){
    console.log('MOusemove');
});

//with keyboard events
document.getElementById('key-down').addEventListener('keydown', function (event){
    console.log('keydown');
    console.log(event.target.value);
    
});
document.getElementById('key-press').addEventListener('keyup', function(){
    console.log('keyup');
});
document.getElementById('key-up').addEventListener('keypress', function(){
    console.log('keypress');
});



//with focus and blur events
document.getElementById('focus').addEventListener('focus', function(){
    console.log('focus');
}
);
document.getElementById('focus').addEventListener('blur', function(){
    console.log('blur');
}
);

