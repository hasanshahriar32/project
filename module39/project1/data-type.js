
let a ={book: 5, pen:4};
let b = a;
console.log(a, b);
//if we change the value of a, b will also change
a.book = 10;
console.log(a, b);
//if we change the value of b, a will also change
b.pen = 10;
console.log(a, b);
//if this non-primitive data type is assigned to another variable, the value of the variable will be the same as the original variable
//if the value of the original variable is changed, the value of the new variable will also change
//if the value of the new variable is changed, the value of the original variable will also change
