
// function add(a,b){
//     return total = a + b;

// }
// console.log(add(1,2));

//Block scope
//block scope is a scope that is defined within a block of code
//block of code is a set of code that is enclosed within curly braces
//block scope is only available within the block of code

// if(true){
//     var name = "John";
//     let age = 30;

// }
// console.log(name);
// console.log(age); //error

//hoisting
// hoisting is a javascript mechanism where variables and function declarations are moved to the top of their scope before code execution
// hoisting is only applicable to var and function declarations
// hoisting is not applicable to let and const

//example 2 of hoisting

for (var i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);


//hoisting of function
function print5(){
    console.log(5);
}
print5();
//print6();



//expression function is not hoisted
const print6 = function(){
    console.log(6);
}
print6();

//arrow function is not hoisted
//print7(); //error

//hoisting of arrow function
const print7 = () => {
    console.log(7);
}


//use var to declare a function returns undefined
//example 1
 var x= function(){
    console.log("hello");
}
console.log(x);
//output: function x(){console.log("hello");}
//example 2
var x = function(){
    console.log("hello");
}
console.log(x());
//output: hello undefined