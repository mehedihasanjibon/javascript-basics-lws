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