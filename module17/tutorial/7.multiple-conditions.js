var isGraduated = true;
var salary = 25000;
var cars = 1;



//for && condition

// if (isGraduated ==true) {
//     console.log("efficient for marriage");

// }

// else {
//     console.log('tor kopale bia nai');
// }

// if (isGraduated ==true && salary > 50000) {
//     console.log("efficient for marriage");

// }

// else {
//     console.log('tor kopale bia nai');
// }

if (isGraduated ==true && salary > 5000 && cars > 0) {
    console.log("efficient for marriage");

}

else {
    console.log('tor kopale bia nai');
}



//for || condition

if (isGraduated === true || salary >5000 || cars > 1){
    console.log("efficient for prem");

}
else{
    console.log("tor friend er number dao");
}


//mixing && and || condition

if (isGraduated === true || salary >5000 && cars > 1){
    console.log("efficient for prem");

}
