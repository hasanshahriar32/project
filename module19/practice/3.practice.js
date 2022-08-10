var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function make_avg(numbers) {
    var total = 0;
    for (var i=0; i<numbers.length; i++){
        total += numbers[i];

    }
    var avg = total/numbers.length;
    return avg;
}
var avg = make_avg(numbers);
console.log(avg);