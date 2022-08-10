const color = "yellow";
if (color === "red") {
    console.log("Color is red");
} else if (color === "blue") {
    console.log("Color is blue");
} else {
    console.log("Color is not red or blue");
}

//switch
switch (color){
    case 'red': console.log('you are red');
    break;
    case "blue": console.log('you are blue');
    break;
    case "yellow": console.log('you are yellow');
    break;
    default: console.log("you are not red, blue, or yellow");
}