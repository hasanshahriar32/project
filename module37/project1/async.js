function dosomething(){
    console.log('fifth');
}

console.log('first');
console.log('second');
console.log('third');
console.log('fourth');
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response =>{
        console.log('api request completed');
        return response.json();
  })
  //in case of multi-line arrow function, we need to use return keyword
  .then(json => setTimeout(()=>{console.log(json)}, 3000));
setTimeout(dosomething, 5000);
setTimeout(()=>{console.log('lol')},2000);

