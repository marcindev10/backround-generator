var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log( 'answer:', _.without(array, 3 ));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right,  " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
 


let person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let firstName = person.firstName;
let lastName = person.lastName;
let age = person.age;
let eyeColor = person.eyeColor;


let a = 'test';
let b = true;
let c = 789;

let okObj = {
  a: a,
  b: b,
  c: c
};




const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)






























