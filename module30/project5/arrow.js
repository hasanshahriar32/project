// fucntion declaration
function add (first, second){
    const total =  first+ second;
    return total;
}
const result = add(20,30);
console.log(result);



//old method to declare and call function
// document.getElementById('btn-add'),onclick = function addBG(){

// }

//difference between function declaration vs. function expression


//function expression 
const add1 = function add1(first, second){
    const total =  first+ second;
    return total;
}
//function expression with anon. func.
// anonymous function 
const add2 = function (first, second){
    const total =  first+ second;
    return total;
}


const add3 = function(first, second){
    return first+ second
}
console.log(add3);
//arrow function
const add4 = (first, second)=> first+ second;
console.log(add4);