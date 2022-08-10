var cart = {
    books: 3,
    sunglass: 5,
    keyboard: 1,
    pen: 45,
    pencil: 24
}

var penCount = cart.pen;
// console.log(cart);

var properties = Object.keys(cart);
console.log(properties);
var propertyValues = Object.values (cart);
console.log(propertyValues);



//update property values

//first way
cart.pen = 50;
console.log(cart);

//second way
cart['pen']=100;
console.log(cart);

//third way
var newProperty = 'pen';
cart[newProperty] = 1;
console.log(cart);

