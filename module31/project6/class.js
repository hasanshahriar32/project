//syntatic sugar


// class rules:
//1. starts with a capital letter
//2. must have a constructor method
//3. must have a super method
//4. must have a this keyword



class Instructor{
    name;
    designation = 'web developer';
    team = 'web development';
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`at ${time}`);
    }
    createQuix(module){
        console.log(`create quiz ${module}`);
    }

}
const amir = new Instructor('amir', 'karachi');
console.log(amir);
amir.startSupportSession('9:00');
amir.createQuix('module 1');
// console.log();



const solaiman = new Instructor('solaiman', 'karachi');
console.log(solaiman);
// structure of class
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayName(){
//         console.log(this.name);
//     }
// }
// const amir = new Person('amir', 25);
// console.log(amir);   
// amir.sayName();
// console.log(amir.name);


