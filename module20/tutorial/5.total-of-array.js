//write a  function findOddSum() that will take the array [5,7,8,10,45,30] as the input and wil return the sum of the odd numbers


// function findOddSum(numbers) {
//     for (var i = 0; i < numbers.length; i++) {
//         var total = 0;
//         while (numbers[i]%2!==0){
//             var total = total + numbers[i]; 
//             return total;
//         }
        
        
        
// } 
// return total;
// }  
// var numbers = [12,54,654,654,964,54,654,54];
// findOddSum(numbers);
// console.log(total);


//write a  function findOddSum() that will take the array [5,7,8,10,45,30] as the input and wil return the sum of the odd numbers
function findOddSum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        
        total = total + numbers[i];
    }
    return total;
}
var numbers = [12,54,654,654,965,54,654,55];
var total = findOddSum(numbers);
console.log(total);
