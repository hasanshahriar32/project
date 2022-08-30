const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (const number of numbers){
    sum += number*number;

}
const avg = sum/numbers.length;
console.log(avg);

//2nd way
const avgArray = numbers => {
    let sum = 0;
    for(const number of numbers){
        sum += number*number;
    }
    return sum/numbers.length;
}
console.log(avgArray(numbers));
