//first solve
var a= 13;
var b= 79;
var c= 45;


//first method using logical operator
if(a>b && a>c){
    console.log(a + ' is the largest number');
}
else if(b>a && b>c){
    console.log(b + ' is the largest number');
}
else{
    console.log(c + ' is the largest number');
}

//second method using ternary operator
var largest = a>b? a>c? a:c:b>c? b:c;
console.log(largest + ' is the largest number');

//third method using switch case
switch(true){
    case a>b && a>c:
        console.log(a + ' is the largest number');
        break;
    case b>a && b>c:
        console.log(b + ' is the largest number');
        break;
    default:
        console.log(c + ' is the largest number');
        break;
}


//fourth method using if else
if(a>b){
    if(a>c){
        console.log(a + ' is the largest number');
    }
    else{
        console.log(c + ' is the largest number');
    }
}
else{
    if(b>c){
        console.log(b + ' is the largest number');
    }
    else{
        console.log(c + ' is the largest number');
    }
}


//second solve

var a= 9;
var b= 8;
var c= 9;

if (a==b || a==c || b==c){
    console.log('The triangle is Isosceles');
}
else{
    console.log('The triangle is Scalene');
}

console.log(6!=6);