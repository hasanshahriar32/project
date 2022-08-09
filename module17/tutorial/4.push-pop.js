// use push to add element to the end of the array


var numbers = [12, 34, 345, 56];
numbers.pop(56);
console.log(numbers);
numbers.push(78);

console.log(numbers);


var friends = ["John", "Mark", "Jane", "Mary"];
friends.push("Mike");
console.log(friends);

// use pop to remove element from the end of the array

console.log("object popped: ");
var element = numbers.pop();
console.log(element);


// remove first element from array

numbers.shift();
console.log(numbers);


// add new element before array

numbers.unshift(69);
console.log(numbers);

var element = numbers.shift();
console.log(element);
