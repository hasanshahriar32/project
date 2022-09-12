const showAlert = () =>{
    alert("Hello World!");
}



const askSomething = () =>{
    const answer = confirm("Do you want to continue?");
    console.log(answer);
    if(answer === true){
        alert("You clicked OK");
    }else{
        alert("You clicked Cancel");
    }
}

const userinfo = () => {
    const name = prompt("What is your name?" , "Enter your name here");
    // const name = prompt("What is your name?", "John Doe");
    //John Doe is the default value

    if (!!name){
        // !! is a double negation operator
        // it converts the value to a boolean
        // if the value is null or undefined, it will be false
        alert(`Hello ${name}`);
    }
    else {
        alert("You didn't enter anything");
    }
}