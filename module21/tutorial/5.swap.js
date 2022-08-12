//tempo

let first = 5;
let second = 7;
console.log(first , second);

//approach 1
const temp = first;
first = temp;
second = temp;
console.log(first , temp);


//approach 2   .... destructing
[first , second] = [second , first];
console.log(first , second);

