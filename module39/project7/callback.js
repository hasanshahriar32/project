
//step 2
function greetings(greetingHandler,name){
    greetingHandler(name);
}
// step 3
function greetingHandler (name){
    console.log( 'Hello', name);
    console.log( 'How are you?');
}
//step 3(II)
function byeHandler (name){
    console.log( 'Bye', name);
    console.log( 'See you later');
}


//step 1
greetings(greetingHandler, "John");
greetings(byeHandler, "John");

