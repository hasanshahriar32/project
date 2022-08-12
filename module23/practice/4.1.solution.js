/**A large number of people will go to the picnic. The number of buses will depend on the number of people. Suppose we have buses and micros. The capacity of each bus is 50 people and the capacity of each microbus is 11 and the price of each ticket of the public bus is Tk 250.  Now you have to write a function called **publicBusFare** which will take a number (how many will go) as a parameter. The total amount of money going to the public bus fair will return to you. 
 * **Sample Data**
Input
50
55
112
235
365
Output
0
1250
250
500
1000
 * 
*/

function publicBusFare(numberOfPeople) {
    let totalAmount = 0;
    let numberOfBuses = Math.floor(numberOfPeople / 50);
    let microPeople = numberOfPeople % 50;
    let numberOfMicroBuses = Math.floor(microPeople / 11);
    let publicBusPeople = microPeople % 11;
    let publicBusFare = 250 * publicBusPeople;
    return publicBusFare; 
}

console.log(publicBusFare(50));
console.log(publicBusFare(55));
console.log(publicBusFare(112));
console.log(publicBusFare(235));
console.log(publicBusFare(365));
