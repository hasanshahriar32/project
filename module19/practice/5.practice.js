// 5) You are in a hurry to go to your school on time. But when you are crossing the road, the 
// traffic signal is red coloured. In this situation, if you try to cross the road, you may be in 
// danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
// coloured traffic signal, you should cross the road. So write a JS code, where there is a 
// variable called signal. Its value can be green, yellow or red & we will get different activities as 
// output depending on the variable. So, hurry up.



// Language: javascript
// Path: module19\practice\6.practice.js
// Compare this snippet from module19\practice\5.practice.js:
// //first way
//
function traffic_signal(signal){
    if (signal == 'green'){
        return 'cross the road';
    }
    else if (signal == 'yellow'){
        return 'stop';
    }
    else{
        return 'in danger';
    }
}
var result = traffic_signal('red');
console.log(result);

// //second way
// switch (signal){
//     case 'green':
//         console.log('cross the road');
//         break;
//     case 'yellow':
//         console.log('stop');
//         break;
//     case 'red':
//         console.log('in danger');
//         break;
// }
