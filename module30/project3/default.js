
//old js
function add(first, second){
    second = second ||0;
    //this means if second have a value, then it will not change; if not then it will be 0

    const  total = first+second;
    return total;
}
let result = add(20,30);
console.log(result);


//es6
function add(first, second = 0){
 
    const  total = first+second;
    return total;
}
let result2 = add(20);
console.log(result2);

// again not only just the number , empty string can be used for such arguments.

console.log('name of the newBorn of hasan family');
function baby(firstName, secondName = 'hasan'){
    const name = firstName + " "+ secondName;
    return name;
}
const newBorn = baby('ayan')
console.log(newBorn);
