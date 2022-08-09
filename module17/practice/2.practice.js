var name = ['me', 'tom' , 'jane', 'peter', 'john'];
var total = 100;
var mark=[85,66,95,56,40];

for(var i=0; i<=4; i++){
    if(mark[i]>=80){
        console.log(name[i]+' got A');
    }
    else if(mark[i]>=60){
        console.log(name[i]+' got B');
    }
    else if(mark[i]>=50){   
        console.log(name[i]+' got C');
    }
    else if(mark[i]>=40){
        console.log(name[i]+' got D');
    }
    else{
        console.log(name[i]+' failed');
    }


}