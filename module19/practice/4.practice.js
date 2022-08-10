//first way

function odd_even(num){
    if (num %2 ==0){
        return "even";

    }
    else{
        return "odd";
    }
}
var result = odd_even(5);
console.log(result);




//second way
function odd_even(num){
    if (num %2 ==0){
        console.log('even');

    }
    else{
        console.log('odd');
    }
}
odd_even(2);