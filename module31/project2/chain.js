
//object in a array
const users = [
    {
        id: 1, name: 'John' , job : 'teacher'
    }
]

console.log(users[0]);
console.log(users[0].id);

//array in a object
const user = {
    id: 1, name: 'John' , job : 'teacher',
    friends: [
        {id: 2, name: 'Mark'},
        {id: 3, name: 'Jane'}
    ]
}
console.log(user.friends[0].name);



// Optional chaining at accessing nested elements

// - Reason: In many cases, user don’t give required info(object element). if the program search anything inside this property, it will return error
// - So, we use this to declare that: if there is an empty property/ no property then do not go further. Which will save us from getting error.

const user1 = {
    id: 1, name: 'John' , job : 'teacher',
    friends: [
        {id: 2, name: 'Mark', address: {city: 'New York', state: 'NY'}},
        {id: 3, name: 'Jane'}
    ]
}
console.log(user1.friends[0].name);
console.log(user1.friends[0].address.city);
console.log(user1.friends[1]?.address?.city);
console.log(user1.friends[1]?.address?.state);