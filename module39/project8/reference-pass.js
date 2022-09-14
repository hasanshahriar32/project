// (Advanced) function  arguments pass by reference pass by value

function sum (a){

    console.log(arguments);
    console.log(arguments[0]);
    const args = [...arguments];
    console.log(args);
    
}

const total = sum(1,2,3);
//output: [Arguments] { '0': 1, '1': 2, '2': 3 }
//output: 1
//output: [ 1, 2, 3 ]

// Here arguments is a special local var of VScode which sets the arguments automatically to an array-like object.
// It is not a real array, but it has a length property and it has indexed elements.
// It is not an array, but it looks like an array.


//if we wanna make it an simple arguments, then we can use […arguments]

typeof arguments;
//output: object

sum.length;
//output: 1
//reason: it is the number of arguments that the function expects.


//if we wanna make it an simple arguments, then we can use [...arguments]

let num1=5;
let num2=10;
function multiply(num1,num2){
    const results = num1*num2;
    return results;
}
const total1 = multiply(num1,num2);
console.log(total1);
//output: 50

// ### Use case of pass by reference

// if we change any value of an variable inside of a function in case of object/array; it will change the value out of scope (globally).

let obj = {
    name: "John",
    age: 30
}

function changeName(obj){
    obj.name = "Jack";
}

console.log(obj);
//output: { name: 'John', age: 30 }
changeName(obj);
console.log(obj);
//output: { name: 'Jack', age: 30 }

// ### Use case of pass by value
