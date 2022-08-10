var cart = {
    books: 3,
    sunglass: 5,
    keyboard: 1,
    pen: 45,
    pencil: 24
}


 //arrray vs object
// var items = ['books', 'shoes', 'sunglass', 'keyboard', 'pen', 'pencil'];
// var prices = [10, 20, 30, 40, 50, 60];


var keys = Object.keys(cart);
console.log(keys);
var keyValues = Object.values(cart);
console.log(keyValues);


// //1st way
// for (var i=0; i < keys.lengh ; i++){
//     console.log(keys[i]);
//     var propertyName =keys[i];
//     var propertyValue = keyValues[i];
//     console.log(propertyName + ': ' + propertyValue);

// }

//2nd way

for(var propertyName in cart){
    const value = cart[propertyName];
    console.log(propertyName + ': ' + value);
}




Object.entries(cart).forEach(function(item){
    console.log(item);
}
);

