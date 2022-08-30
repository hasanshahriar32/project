//recap es6

// 6 things to know
// var, let, const, arrow functions, template strings, destructuring
const numbers = [1, 2, 3, 4, 5];
let salary= 450;
salary = salary + 50;


//for parameters
function calculateSalary(salary, tax = .25, bonus = 0) {
    const remaining = salary - (salary* tax + bonus);
    return remaining;
}
console.log(calculateSalary(salary));

//template string
const elementHtml = `
<div>
    <h1>salary</h1>
    <h2>${numbers[3]}</h2>
    <p>${calculateSalary(2000)}</p>
    </div> 
`;
console.log(elementHtml);



//array functin
const numbers4 = [1, 2, 3, 4, 5];
const doubleNumbers = numbers4.map(function(numbers4) {
    return numbers4 * 2;
} );
console.log(doubleNumbers);




//spread operator
const numbers3 = [1, 2, 3, 4, 5];
const result2 = [...numbers3, 6, 7, 8];
console.log(result2);


//destructuring
const numbers2 = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers2;
console.log(a, b, rest);

//another example
const {x,y, ...z} = {x: 1, y: 2, a: 3, b: 4, c: 5};
console.log(x, y, z);