const user = {
    name: 'John',
    age: 30,
    isAdmin: true,
    courses: ['html', 'css', 'js'],
}
console.log(user);
JSON.stringify(user);
console.log(JSON.stringify(user));



const shop={
    owner: 'John',
    address: {
        city: 'New York',
        street: 'Main',
        number: 23,
    },
    items: ['bread', 'milk', 'apples'],
    isOpen: true,
    revenue: 5000,
    isNew: false,
    }
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

console.log(typeof shop);
console.log( typeof shopJSON);
// javascripot object notation
// JSON is a data format that is used to store and exchange data
// JSON is text, written with JavaScript object notation
// JSON is language independent, data is written in name/value pairs
// JSON is "self-describing" and easy to understand




// Stringified JSON  to original JS Object
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);


// In same process, arrays can be Stringified to JSON format and can be reversed.
const arr = [1, 2, 3, 4, 5];
console.log(arr);
const arrJSON = JSON.stringify(arr);
console.log(arrJSON);
console.log(typeof arrJSON);

const arrObj = JSON.parse(arrJSON);
console.log(arrObj);
console.log(typeof arrObj);
