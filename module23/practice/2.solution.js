/**Problem:2   isJavaScriptFile**

ফাংশন নেম দিতে হবে** isJavascriptFile** । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) 
যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।
**Sample Data**
Input
'app.js'
'js.png'
'image.js.png'
'image.jpg.js'
Output
true
false
false
true 
**/


function isJavaScriptFile(ending){
    let type = typeof ending;
    if (type === 'string') {
        if (ending.endsWith('.js')){
            return true;
        }
        return false; 
    }
    else{
        return "error!";
    }
}

console.log(isJavaScriptFile('app.js'));
console.log(isJavaScriptFile('js.png'));
console.log(isJavaScriptFile('image.js.png'));
console.log(isJavaScriptFile('image.jpg.js'));
console.log(isJavaScriptFile(34));



    