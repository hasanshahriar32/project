//1. convert radian to degree

function radianToDegree(radian){
    let type = typeof radian;
    console.log(type);
    if (type === 'number') {
        let degree = radian * 180 / Math.PI;
        return degree;
    }
    else{
        return "error!";
    }
}
// console.log(radianToDegree(10));



//2. check whether the given name is a javascript file or not

function isJavaScriptFile(ending){
    let type = typeof ending;
    if (type === 'string') {
        if (ending.endsWith('.js')){
            return true;
        }
        return false; 
    }
    else{
        return "error!";
    }
}
// console.log(isJavaScriptFile('app.js'));



//3. calculate the oil price i have to pay

function oilPrice(diesel,petrol,octane){
    let type1 = typeof diesel;
    let type2 = typeof petrol;
    let type3 = typeof octane;
    if (type1 === 'number' && type2 === 'number' && type3 === 'number') {
        let dieselPrice = diesel * 114;
        let petrolPrice = petrol * 130;
        let octanePrice = octane * 135;
        let totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }
    else{
        return "error!";
    }
}
// console.log(oilPrice(1,1,1));




//4. public bus fare

function publicBusFare(numberOfPeople) {
    let type = typeof numberOfPeople;
    if (type === 'number') {
        let totalAmount = 0;
        let numberOfBuses = Math.floor(numberOfPeople / 50);
        let microPeople = numberOfPeople % 50;
        let numberOfMicroBuses = Math.floor(microPeople / 11);
        let publicBusPeople = microPeople % 11;
        let publicBusFare = 250 * publicBusPeople;
        return publicBusFare; 
    }
    else{
        return "error!";
    }
}
// console.log(publicBusFare(50));




//5. is best friend

function isBestFriend(person1, person2) {
    let type1 = typeof person1;
    let type2 = typeof person2;
    if (type1 === 'object' && type2 === 'object') {
        if (person1.friend === person2.name && person2.friend === person1.name) {
            return true;
        } else {
            return false;
        }
    }
    else{
        return ;
    }
}


// console.log(isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" }));