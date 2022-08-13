/**Problem:1   radianToDegree**

ফাংশন নেম দিতে হবে **radianToDegree **। এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)।
তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
**Sample Data:**
Input
10
25
199
Output
572.96
1432.39
11401.86
**/


function radianToDegree(radian){
    let type = typeof radian;
    console.log(type);
    if (type === 'number') {
        let degree = radian * 180 / Math.PI;
        return degree;
    }
    else{
        return ;
    }
}
console.log(radianToDegree(10));
console.log(radianToDegree(25));
console.log(radianToDegree("d"));
