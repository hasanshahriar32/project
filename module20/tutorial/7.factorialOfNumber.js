//factorial for a number using recursive function
function mulOfNum(number){
    let result = 1;
    for (let i=1; i<=number; i++  ){
        result = result*i;

    }
    return result;
}

console.log(mulOfNum(9));