
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x + "<br>";
//   console.log(x);
// }
const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    // console.log(section.innerHTML);
    section.style.border = '2px solid red'
    section.style.borderRadius = '5px'
    section.style.margin = '2px'
    section.style.backgroundColor = 'skyBlue'
}

const placesLiked = document.getElementById("hol");
placesLiked.style.color ='blue';

const headerStyle = document.getElementsByTagName('h1')
// headerStyle[1].style.color = 'red';
headerStyle[0].classList.add('headerColor');


