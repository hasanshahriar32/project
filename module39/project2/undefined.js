// the ways to get undefiened
// 1. variable is not initialized
let first;
// console.log(a);

// 2. function does not return anything

function second(){
    const total = a+b;
}
const result = second();
console.log(result);

// 3. function does not return anything but we are not using the return keyword
function third(){
    const total = a+b;
    return;
}
const result2 = third();
console.log(result2);

//4. if the argument is not passed to the function
function fourth(x, y){
    const total = x + y;
    return total;
}
const result3 = fourth(5);
console.log(result3);

//5.if return has nothing on the right side of the return keyword then it will return undefined 

function fifth(x, y){
    const total = x + y;
    return;
}
const result4 = fifth(5, 6);
console.log(result4);

//6. if we are trying to access a property of an object that does not exist

const person = {name: 'sakib', age: 25};
console.log(person.phone);

//7. if we try to access an array element that does not exist

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]);

//8. slice method of an array returns undefined if the index is not valid

const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.slice(10));

//9.delete an element from an array

const numbers3 = [1, 2, 3, 4, 5];
delete numbers3[2];
console.log(numbers3);

//10. set a value of an object property to undefined

const person2 = {name: 'sakib', age: 25};
person2.name = undefined;
console.log(person2);

//11. set a value of an array element to undefined

const numbers4 = [1, 2, 3, 4, 5];
numbers4[2] = undefined;
console.log(numbers4);

//12. null is also a value of undefined

const numbers5 = [1, 2, 3, 4, 5];
numbers5[2] = null;
console.log(numbers5);


//13.type of undefined is undefined

let a;
console.log(typeof a);

//14. null is also a value of undefined
// null is an object
// reason why null is an object is because of a bug in javascript

const numbers6 = [1, 2, 3, 4, 5];
numbers6[2] = null;
console.log(numbers6);

