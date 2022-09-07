function dosomething(){
    console.log('fifth');
}

console.log('first');
console.log('second');
console.log('third');
console.log('fourth');
setTimeout(dosomething, 5000);
setTimeout(()=>{console.log('lol')},2000);

