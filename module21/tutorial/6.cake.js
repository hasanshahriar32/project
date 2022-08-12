//maximum of three number

let jim = 84;
let della = 75;

if (jim>della){
    console.log('jim will get the cake');
}
else{
    console.log('della will get the cake');
}

// jim = 84;
// della = 99;
// let cinku = 77;

function maximum (jim , della , cinku){
    let maxi = Math.max(jim , della , cinku);
    return maxi;
}
maxi = maximum(84 , 99 , 77);
console.log(maxi + ' holder will get the cake');