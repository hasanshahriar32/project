
//1. direct


//2. add function
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




// option 3.1
const makePurpleButton = document.getElementById('makePurple');
makePurpleButton.onclick = function makePurpleBtn(){
    document.body.style.backgroundColor = 'purple';
}


//option 4

const makePinkButton = document.getElementById('makePink');
makePinkButton.addEventListener('click', pinky);
function pinky(){
    document.body.style.backgroundColor=('pink')
}

//option 4.1
const makeGreenButton = document.getElementById('makeGreen');
makeGreenButton.addEventListener('focus',function greeny(){
    document.body.style.backgroundColor = 'green';
})

// option 4.2
// most important

document.getElementById('makeGolden').addEventListener('click',function goldeny(){
    document.body.style.backgroundColor = 'goldenrod';
})  