const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = [];
for (const number of numbers){
    const result = number * 2;
    output.push(result);
}
console.log(output);



const doubleIt = number => number * 2;

function getDouble (numbers){
    const output = [];
    for (const number of numbers){
        const result = doubleIt(number);
        output.push(result);
    }
    return output;
}
console.log(getDouble(numbers));

// function doubleIt(number){
//     return number * 2;
// }

/*
purpose: to double the value of each element in an array
STEP 1: GET AN ARRAY
STEP 2: FOR EACH ELEMENT IN THE ARRAY, DOUBLE THE VALUE
STEP 3: RETURN THE ARRAY
*/




//SHORTHAND VERSION
//USING MAP
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output1 = numbers1.map(number => number * 2);
console.log(output);








