const numbers = [12, 18, 13, 15 , 30, 35];
const filtered = numbers.filter(filter=>filter>=18);
console.log(filtered);

// filters even numbers
const numbers1 = [12, 18, 13, 15 , 30, 35];
const filtered1 = numbers1.filter(filter=>filter%2===0);
console.log(filtered1);

const products = [
    {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    {name: 'banana', type: 'fruit', quantity: 10, price: 15},
    {name: 'celery', type: 'vegetable', quantity: 30, price: 13},
    {name: 'orange', type: 'fruit', quantity: 3, price: 10}
];
const filtered2 = products.filter(filter=>filter.quantity>0 );
console.log(filtered2);