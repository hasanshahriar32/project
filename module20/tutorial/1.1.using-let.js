let age =11;
if(age>=18){
    let message = "You are old enough to vote";
    console.log(message);
}
console.log(message);
// Output: You are old enough to vote
// Output: ReferenceError: message is not defined
// Explanation: message is not defined because it is not in the scope of the if statement.
// The scope of the if statement is the if statement itself.
