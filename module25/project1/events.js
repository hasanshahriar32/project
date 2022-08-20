function makeRed(){
    document.body.style.backgroundColor = 'red';
}

console.log('Hello World');



//makeBlue
// 3.onclick property
const makeBlueButton = document.getElementById('makeBlue');
makeBlueButton.onclick = makeBlueBody;
//here we use makeBlue instead of makeBlue() cause makeBlue() will automatically run when the page loads instead of makeBlueButton.onclick

function makeBlueBody(){
    document.body.style.backgroundColor = 'skyBlue';
}




// option 4
const makePurpleButton = document.getElementById('makePurple');
makePurpleButton.onclick = function makePurpleBtn(){
    document.body.style.backgroundColor = 'purple';
}