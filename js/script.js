document.getElementById("demo").innerHTML = "Hello Javascript";

function myFunction(){
    document.getElementById("demo2").style.fontSize = "45px";
}

function myFunction2(){
    document.getElementById("demo3").style.display ="none";
}

function myBtn(){
    document.getElementById("demo4").style.display="block";
}

function myBtn2(){
    document.getElementById("demo5").innerHTML = "paragraph change";
}

// js syntax 
document.getElementById("demo7").innerHTML = (5 + 6) * 10;
// the values can be of carious types, such as numbers and string
document.getElementById("demo8").innerHTML = "Mh" + " " + "Jibon";

var x = 5;
var y = 5;
var z = x + y;
document.getElementById("demo9").innerHTML = "The value of z is " + z;

// js let 
let a = 7;
if(true){
    let x = 6;
    console.log(a);
}

let a2 = 10;
{
    let a2 = 2;
}
document.getElementById("demo10").innerHTML = a2;

// carName = undefined;
carName = "volvo"
var carName;
console.log(carName);

// js const 
// with const , you cannot use a variable before it is declared
const b = 20;
{
    const b = 2;
}
document.getElementById("myDemo").innerHTML = "b is " + b;

// js operators 
let b1 = 5;
let b2 = 2;
let b3 = b1 + b2;
document.getElementById("demo11").innerHTML = "The sum of b1 + b2 is " + b3;

var c = 10;
c += 5;
document.getElementById("demo12").innerHTML = c;

let c1 = 5 + 5;
let c2 = "5" + 5;
let c3 = "Hello" + 5;
document.getElementById("demo13").innerHTML = c1 + "<br>" + c2 + "<br>" + c3;

// js arithmetic
// the decrement operator
let d = 5;
d--;
let d1 = d ;
document.getElementById("demo14").innerHTML = d1;

// js assignment 
let e = 10;
e += 5;
document.getElementById("demo15").innerHTML = e;

// js data type 
let e1 = 16 + 4 + "volvo";
document.getElementById("demo16").innerHTML = e1;

let e2 = "volvo" + 15 + 6;
document.getElementById("demo17").innerHTML = e2;

let f;      //now f is undefined
f = 5;      //now f is a number 
f = "New York";   //now f is a string

document.getElementById("demo18").innerHTML = f;

// Numbers can be written with, or without decimals
let f1 = 34.00
let f2 = 34;
let f3 = 3.14;
document.getElementById("demo19").innerHTML = f1 + "<br>" + f2 + "<br>" + f3;

// exponential notation
let f4 = 123e5;
let f5 = 123e-5;
document.getElementById("demo20").innerHTML = f4 + "<br>" + f5;

// js Booleans 
let g = 5;
let g1 = 5;
let g2 = 6;
document.getElementById("demo21").innerHTML = (g == g1) + "<br>" + (g == g2);

// the typeof 
var h = 5;
var h1 = 4;
var h2 = 3;
var myObject = { h:5, h1:4, h2:3 };
console.log(typeof myObject);


// js function 
function sleep(){
    console.log("Rafi is sleeping from 10 pm");
}
sleep();
console.log("My name is Jibon");

//--------
function sleep(name){
    console.log(name + " is sleeping from 10 pm");
}

sleep("Mehedi");
sleep("Hasan");
sleep("Jibon");
console.log(name);

//-------
function sleep(name, time){
    console.log(name + " is sleeping from " + time);
}
sleep("Jahid" , "5 PM");
sleep("Munna" , "6 PM");
sleep("Mosharof" , "7 PM");

// ------
function myBtn3(){
    return "Hello return"
}
document.getElementById("demo22").innerHTML = myBtn3();

// -----
let i = myFunction4(4, 4);
    document.getElementById("demo23").innerHTML = i;

    function myFunction4(a, b){
        return a * b;   
    }

// -----
let carNames = "BMW";
function myFunction1(){
    let carNames = "volvo";
    console.log(carNames);
}

console.log(carNames);
myFunction1();