// const add = (first,second)=> first+ second;
// const getfullname = (first,second)=>first+" "+second;
// const multiply = (a,b)=>a*b;

// const result = multiply(7,8);
// console.log(result);


// // //with multiple parameters
// // const addall = (a,d,g,rf,r,g,h)=>a+d+g+rf+r+g+h;
// // const result1 = addall(1,2,3,4,5,6,7);
// // console.log(result1);

// //with arrow function
// const addall1 = (a,d,g,r,g,h)=>{
//     return a+d+g+r+g+h;
// }
// const result2 = addall1(1,2,3,5,6,7);
// console.log(result2);

// //with arrow function and single parameter
// const addall2 = a=>a+1;
// const result3 = addall2(1);
// console.log(result3);

// //with arrow function and no parameter
// const addall3 = ()=>{
//     return 1+1;
// }
// const result4 = addall3();
// console.log(result4);

// //with arrow function and no parameter and no return statement
// const addall4 = ()=>1+1;
// const result5 = addall4();
// console.log(result5);

// //with arrow function and no parameter and no return statement and no curly braces
// const addall5 = ()=>1+1;
// const result6 = addall5();
// console.log(result6);

// //with arrow function and no parameter and no return statement and no curly braces and no semicolon
// const addall6 = ()=>1+1;
// const result7 = addall6();
// console.log(result7);

// //with arrow function and no parameter and no return statement and no curly braces and no semicolon and no space
// const addall7 = ()=>1+1;
// const result8 = addall7();
// console.log(result8);

// //with arrow function and no parameter and no return statement and no curly braces and no semicolon and no space and no space
// const addall8 = ()=>1+1;
// const result9 = addall8();
// console.log(result9);

// //with arrow function and no parameter and no return statement and no curly braces and no semicolon and no space and no space and no space
// const addall9 = ()=>1+1;


// //with one parameter and simple version
// //this is applicable if we have only one parameter
// const addall10 = a=>a+1;


// // //mulltiline arrow function
// // const addall11 = (a,b){
// //     return a+b;
// // };
// // const result10 = addall11(1,2);


//mulltiline arrow function
const  doMath=(x,y,z)=>{
    const firstsum =x+y;
    const multisum = x*z;
    const result = multisum /2;
    //in case of multiline arrow function, to return something, use return statement
    return result;
}
const result10 = doMath(1,2,3);
console.log(result10);


//arror function:
let me={
	name : "john",
	thisInArrow: () =>{
		console.log("my name is: "+ this.name)}
};
me.thisInArrow();
//my name is: undefined


//regular functions
let me1 = {
    name: 'johm',
    thisInArrow(){
        console.log('my name is: '+ this.name);
    },
    
};
me1.thisInArrow();
//my name is: johm

