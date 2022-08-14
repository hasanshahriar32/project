/**Problem 3:  oilPrice**

ফাংশন নেম দিতে হবে** oilPrice**। এই ফাংশন তিনটা প্যারামিটার নিবে।
ভিডিও ভালো করে দেখবে।
* প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
* প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
* প্রতি লিটার অকটেনের এর দাম – 135 টাকা
এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।
.

**Sample Data**
Input
1, 1, 1
30, 20, 10
1,0,2
0,2,3
Output
379
7370
384
665
**/


function oilPrice(diesel,petrol,octane){
    let type1 = typeof diesel;
    let type2 = typeof petrol;
    let type3 = typeof octane;
    if (type1 === 'number' && type2 === 'number' && type3 === 'number') {
        let dieselPrice = diesel * 114;
        let petrolPrice = petrol * 130;
        let octanePrice = octane * 135;
        let totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }
    else{
        return "error!";
    }
}
console.log(oilPrice(1,1,1));
console.log(oilPrice(30,20,10));
console.log(oilPrice(1,0,2));
console.log(oilPrice(0,2,'x'));


    