// 1. These are the ways to display our message
//console.log("Hello world")
// alert("Hello World");
//document.write("Hello World")

// 2. javaScript console API
//console.error("This is an error");
//console.warn("This is warning")
//console.assert("Hello Everyone")

// 3. javaScript Variables 
// what are variables : Containers to store data values
// Number
var num1 = 55.5;
var num2 = 17;
//console.log(num1 + num2);

// String
var str1 = "This is santu here";
var str2 = 'This is Ajeet here';

// Object
var marks = {
    santu: 78,
    Ajeet: 80,
    Anju: 89
}

// booleans
var n = true;
var m = false;
//console.log(n, m);

// var und = undefined;
var und;
//console.log(und);

var n = null;
//console.log(n)

/*
At very high level, there are two data types in javaScript 
1. Primitive data type: undefined, null, number, string, boolean, symbol
2. Reference data type: Arrays and Object
*/

// var arr = [1,2,3,4,5, "santu"]
//console.log(arr)





// Operators
// Arithemetics operators : +,-,*,/
var a = 45;
var b = 10
// console.log("The values of a + b is: " , a+b);
// console.log("The values of a - b is: " , a-b);
// console.log("The values of a * b is: " , a*b);
// console.log("The values of a / b is: " , a/b);

// Assignment operators
var c = b;
c += 2;   // c = c-2
// console.log(c)

// camparison operators
var x = 12;
var y = 15;
// console.log(x == y)
// console.log(x <= y)
// console.log(x > y)

// logical operators
// Logical AND
// console.log(true && true)
// console.log(true && false)
// console.log(false && true);
// console.log(false && false);

// Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical NOT
// console.log(!true)
// console.log(!false)




// Functions in javaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(6, 4);
c2 = avg(10, 4);
console.log(c1, c2);


// Conditions in javaScript

var age = 9;
// if(age > 8) {
//     console.log("you are not a kid")
// }
// else{
//     console.log("you are a kid")
// }


// if-else ladder

/*age = 23;
if(age > 8 && age < 13) {
    console.log("you are not a kid")
}
else if(age >= 13 && age <= 19){
    console.log("you are a teenger")
}
else{
    console.log("you are an adult")
}*/


// For loop
// var arr = [1, 2, 3, 4, 5, "santu"];
// for(var i = 0; i < arr.length;i++) {
//     console.log(arr[i]);
// }

// ForEach loop
/*arr.forEach(function (element) {
    console.log(element);

})*/

// var a = 5; // it is old virsion
// const a = 5; // it prevent from override   
// let a = 5;  // it is new version 

// while loops
let j = 0;
/*while(j <arr.length) {
    console.log(arr[j])
    j++
}*/

// do-while loops
/*do{
    console.log(arr[j])
    j++
}
while(j <arr.length)*/ 


// Break
/*for(var i = 0; i < arr.length;i++) {
    if(i == 2) {
        break;
    }
    console.log(arr[i]);
}*/

// Continue
/*for(var i = 0; i < arr.length;i++) {
    if(i == 2) {
        continue;
    }
    console.log(arr[i]);
}*/




// Array

/*let arr = ["santu", "camera", 21, true,null];
//arr.pop();  // to remove last element
// arr.push("ajeet")
// arr.shift()  // it remove first element
console.log(arr.length)
const newLen = arr.unshift("Anju");
console.log(newLen)
console.log(arr)

arr.sort();
arr.toString();*/



// String

/*let myString = "santu is good boy"
console.log(myString.length)

myString.lastIndexOf("good")
myString.indexOf("is")
myString.slice(1,4)
myString.replace("santu" ,"ajeet")*/


// Date in javascript

/*let myDate = new Date();
console.log(myDate.getTime())
console.log(myDate.getFullYear())*/





// DOM: Document- Object-Manipulation

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background = "yellow"

// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
 
// console.log(elem.innerHTML)
// console.log(elem.innerText)

// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)