// //inch  to feet

// const myInch = 12;
// const myFeet = myInch / 12;
// console.log(myFeet);

// const dadaInch = 146;
// const dadaFeet = dadaInch / 12;
// console.log(dadaFeet);


function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var myFeet = inchToFeet (12);
console.log(myFeet);


//mile to kilometer

function mileToKm(mile){
    const km = mile * 1.609;
    return km;

}

const myKm = mileToKm(5);
console.log(myKm);