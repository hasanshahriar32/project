//multi stage control condition
var money = 45;
var danish = 50;
var bread = 10;
var milk = 15;
if (money >= danish){
    console.log("danish khabo");
}
else if(bread < money){
    console.log("butter bun khabo");
}
else if(
    milk < money &&
    bread > milk
){
    console.log("milk khabo");
}
else{
    console.log("no food");
}

