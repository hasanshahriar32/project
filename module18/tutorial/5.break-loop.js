for (var i=0; i<20; i++){
    console.log(i);
    if(i>10){
        break;
    }
}

var roastGiven =0;
//using while loop
while(roastGiven <10 ){
    console.log('roast den');
    roastGiven++;
    if (roastGiven> 3)
    {
        break;
    }

}

var items = ['bottle', 'glass' , 'pen', 'mouse', 'pen'];
for (var i=0; i<items.length; i++){
    var item = items[i];
    if (item == 'pen'){
        break;
    }
    console.log(item);
}




//using continue




//display every element of an array
var numbers = [45 , 44, 66 ,12, 453 , 443, 34543 ,34 , 34, 4];
for (var i=0; i<numbers.length ; i++){
    var number = numbers[i];
    if(i>50){
        continue;
    }
    console.log(number);
}
