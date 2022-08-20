// //nodes

// const firstNodes = document.getElementById('tour');
// console.log(tour.childNodes);
// console.log(tour.firstChild);


const firstNode = document.querySelector('#liked-fruit');
console.log(firstNode.childNodes);
console.log(firstNode.firstChild);
console.log(firstNode.firstChild.nextSibling);
console.log(firstNode.childNodes[3]);
console.log(firstNode.childNodes[3].childNodes);
console.log(firstNode.childNodes[3].nextSibling);
console.log(firstNode.childNodes[3].childNodes[1]);
console.log(firstNode.childNodes[3].childNodes[1].nextSibling.innerHTML);
console.log(firstNode.childNodes[3].childNodes[2].nextSibling);
console.log(firstNode.childNodes[3].childNodes[3].previousSibling);
console.log(firstNode.childNodes[3].childElementCount);




//appendChild
const newElement = document.createElement('li');
newElement.innerHTML = '<a href="https://www.google.com">Added With JS</a>';
firstNode.childNodes[3].appendChild(newElement);



//parentNode
console.log(firstNode.parentNode);
console.log(firstNode.parentNode.parentNode);
console.log(firstNode.parentNode.parentNode.parentNode);
console.log(firstNode.parentNode.parentNode.parentNode.parentNode); 



console.log(firstNode.parentElement);