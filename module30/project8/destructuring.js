const fish = {
    name: 'hilsha',
    color: 'silver',
    price: 4000,
    add: 'chandpur',
    phone: '017....'
}
// const phone = fish.phone;
// const color = fish.color;

//easy solution to declare this kind of variables from a object

const {phone} = fish;
console.log(phone);



//another example
//here the object property name & const name should be same
const {age,name} = {
    name: 'almas',
    age: 56,
    profession:'makeup artist',

}
console.log(age);
console.log(name);



// destructuring of an array
//in case of an array, the const name might not not same to the properties(flexible)
const [first, another]= [22,44];
console.log(first, another);

const nayoks = ['sakib', 'bappa'];
const [king, lost]= nayoks;
console.log(king);


function getNames(){
    return ['alim', 'halim'];
}
const [baba,caca] = getNames();
console.log(baba);