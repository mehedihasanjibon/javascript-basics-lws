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