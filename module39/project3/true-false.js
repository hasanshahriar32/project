//1. true or false 
const x =false;
if (x){
    console.log('value of x is truthy');        
}
else{
    console.log('value of x is falsy');        
}


//2. any number except 0 is truthy


//3. any string except empty string is truthy
// space is also a string
//'0' is also a string
//' false' is also a string
const x1 = 'sakib';
if (x1){
    console.log('value of x is truthy');        
}
else{
    console.log('value of x is falsy');        
}

//4. undefined is falsy
//5. null is falsy  
//6. NaN is falsy
//7. empty array is truthy
//8. empty object is truthy
//9. any function is truthy


//optional
const x2 = '';
if (!x2){
    console.log('value of x is falsy');        
}
//check truthy
if (!!x2){
    console.log('value of x is truthy');        
}


//! is called bang operator
//!! is called double bang operator
//use case: check if a variable is truthy or falsy
//converts any value to boolean




