// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj);
// console.log(myJSON.name);


const obj1 = { a:1, b:2, c:3 , length:2};
console.log(Object.keys(obj1).length);


const obj3 = { a:1, b:2, c:3 , length:2};
const obj4 = { a:1, d:2, c:4 , length:2};
console.log(obj3 == obj4);


const getGf = (name='solina')=>'name';
console.log(getGf());