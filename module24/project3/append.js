console.log('append.js');


//where to append the new element
const firstNode = document.querySelector('#liked-fruit ul');
console.log(firstNode.childNodes);

//what to append    
const newElement = document.createElement('li');

//add  the child element to the parent element
newElement.textContent = 'Kiwi lol' ;
firstNode.appendChild(newElement);


const mainContainer = document.getElementById("main-content")

const section = document.createElement('section');


section.className = 'hobbyContainer';
section.id = 'hobby';

section.innerHTML = ' <h2>Hobby</h2> <p>I like to play computer games</p>';

mainContainer.appendChild(section);