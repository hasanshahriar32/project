// == checks only value

const first = 2;
const second = 2;
if (first == second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

// != checks only value
// !== checks value and type


// === checks value and type
const thied = 2;
const fourth = '2';
if (thied === fourth){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

//type coercion/type conversion/ type casting 
//converts one type to another type
//converts string to number

const first1 = 2;
const second1 = '2';
const sum = first1 + second1;
console.log(sum);


//==  will check the value. if the type is not same, then it will convert the values at same type (type coercion) and then check whether the valuer are equal or not.

//example
const first2 = 2;
const second2 = '2';
if (first2 == second2){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
//output: condition is true

//example 2
const first4 = 1;
const second4 = true;
if (first4 == second4){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
//output: condition is true



//=== will  check the value and type. if the type is not same  then it won't check the value. it will return false.

//example
const first3 = 2;
const second3 = '2';
if (first3 === second3){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
//output: condition is false

//example 2
const first5 = 1;
const second5 = true;
if (first5 === second5){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
//output: condition is false


//comparing non primitive values
// comparing objects
// comparing arrays
// comparing functions

//comparing objects
const first6 = {name: 'shahriar'};
const second6 = {name: 'shahriar'};
if (first6 == second6){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
//output: condition is false
// the result is false because the objects are stored in different memory location. so the address is different. so the result is false.
//equal comparison doesn’t work for non-primitive type
//if we want to compare the objects, we have to loop through the objects and check the values.
//


