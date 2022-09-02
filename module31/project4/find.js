const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = numbers.find((number) => {
    return number > 5;
}
);
console.log(found);
//
// // find the first user in the admin group
// const users = [
//     {name: 'Jill'},
//     {name: 'Alex'},
//     {name: 'Bill'},
//     {name: 'Alex'}
// ];
// const user = users.find((user) => {
//     return user.name === 'Alex';
// });
// console.log(user);
//