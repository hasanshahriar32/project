//no more usage of var

//let: let it to assign
//const: don't allow to reassign


let money = 25;
money = 35;
console.log(money);

const bird = 'bird';
//type error: assignment to const variable


// we can't change the value of a constant; but can modify the previously assigned value. like-

// - can push, pop; in case of array


const age = [30,25,55,5];
age.push(25);
console.log(age);

// - can change the value of keys; in case of object

const student = {
    name : 'lol',
    age : 20

}
console.log(student);
student.name = 'hol';
console.log(student);


