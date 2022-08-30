const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newarray = [...array, 20,30];
console.log(newarray);
const maximum = (...numbers) => {
    let max = numbers[0];
    for(const number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}
console.log(maximum(...newarray));

//2nd way
const maximum1 = Math.max(...newarray);
console.log(maximum1);