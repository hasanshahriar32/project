const names = ['lol','hol','dhol','pod', 'hi', 'hello', 'world', 'hello world', 'hello world lol', 'hello world lol hol', 'hello world lol hol dhol', 'hello world lol hol dhol pod'];
let a=[];

//check if the length of each element is even or odd
for(const name of names){
    //console.log(name);
    if(name.length % 2 == 0){
        a.push(name);
    }
    else{
        continue;
    }
}
console.log(a);

//check if the length of each element is even or odd
//2nd way
const nameArray = names => {
    let a = [];
    for(const name of names){
        if(name.length % 2 == 0){
            a.push(name);
        }
        else{
            continue;
        }
    }
    return a;
}
console.log(nameArray(names));