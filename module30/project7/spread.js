const max = Math.max(12,324,34,34);
console.log(max);

const numbers = [4,34,543,56];
const largest= Math.max(...numbers);
console.log(...numbers);
console.log(largest);


//if we wanna make a array from a previously made array
const numbers2=[...numbers];
numbers2.push(22);
console.log(numbers);
console.log(numbers2);

const numbers3 = [222,33,...numbers,111];
console.log(numbers3);




//without apread operator
var a = ['sh','me'];
console.log(a);
// ['sh','me']


//with spread operator
var a1 = ['sh','me'];
console.log(...a1);
// sh me
