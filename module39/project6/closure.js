function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        console.log(roast);
    }
}
kitchen(); 
//returns a function
let roast = kitchen();
roast();

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

const secondserver = kitchen();
console.log(secondserver());
console.log(secondserver());
console.log(secondserver());
console.log(secondserver());


