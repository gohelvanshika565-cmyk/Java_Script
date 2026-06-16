// array method1
const courses = ["Full-stack Development","Ul & UX Design", "Data Science","Cyber Security"];


// array method2
// const courses = new Array("Full-stack Development","Ul & UX Design", "Data Science","Cyber Security")


// print in index[]
document.write("My courese is : " ,courses[0])
console.log(courses);




// add first line in element
courses.unshift("Digital Marketing");
console.log(courses);

// remove first line in element
courses.shift();




// add last line in element
courses.push("Digital Marketing");
console.log(courses);

// remove last line in list
courses.pop();




// lenght 
console.log(courses.length);

// remove index [1]
courses.splice(1,1)

// print index[0,1]
console.log(courses.slice(0,2));


// all course print in list
let courseData = "";
for(let course of courses){
    courseData += `<li>${course}</li>`
}
document.getElementById("courselist").innerHTML=courseData;



const number = [1,2,3,4,5];

// number double karna (1=2, 2=4, 3=6, 4=8, 5=10)
const multiNumber = number.map((n)=> n*2);
console.log(multiNumber);


// print even number (2,4)
const modNumber = number.filter((n)=> n % 2 == 0);
console.log(modNumber);

// sum of all number
const Total = number.reduce((sum,n)=> sum * n, 0);
console.log(Total);

// mul of all number
const mulTotal = number.reduce((mul,n)=> mul * n, 1);
console.log(mulTotal);