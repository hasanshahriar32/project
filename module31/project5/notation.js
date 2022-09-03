const student  = {
    name : 'John',
    age : 30,
    class : 'VI',
    marks : {
        maths : 80,
        science : 90,
        social : 70

    }

}
const marks = student.marks;
const science = student.marks.science;
console.log(science);


const subject = 'science';
const scienceMarks = student.marks[subject];
console.log(scienceMarks);

//if we wanna do the same thing with dot notation
const mathsMarks = student.marks.subject;
console.log(mathsMarks);
//it will return undefined because it will look for a property called subjectinside the marks object

//it would worked if we decline it like
// const mathsMarks = student.marks.maths;


//
// Language: javascript
// Path: module31\project5\reduce.js
//