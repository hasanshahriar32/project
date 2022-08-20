
const student = {
    name: 'nana',
    id : 12,
    study: function(time){
        console.log(time,'study kortese');
    }
}

const collection = document.getElementsByTagName('li');
console.log(collection);
for(const li of collection){
    console.log(li.innerText);
}
document.getElementsByTagName('h1')


const headings = document.getElementsByTagName('h1');
console.log(headings);
for (const h1 of headings){
    console.log(h1.innerText);
}
console.log(headings.classList);
const tour = document.getElementById('tour');
console.log(tour.innerText);


const places = document.getElementsByClassName('important-places');
console.log(places);
for(const place of places){
    console.log(place.innerText);
}



//query selector

const visit = document.querySelector('.important-places');
console.log(visit);