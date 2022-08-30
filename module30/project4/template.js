// three ways to declare string
const person = 'adam sandler';
const person2 = "ben white";
const person3 = `donald`;


const notmultiline = 'first line text';
const multiline = `second line
third line
fourth line`;
console.log(multiline);


//dynamic string
//old js
const a=10;
const b = 15;
const sum = 'sum of '+ a +' and '+b+ " is: "+ (a+b);
console.log(sum);

//new es6
const newsum = `the sum of ${a} and ${b} is: ${a+b} `;
console.log(newsum);