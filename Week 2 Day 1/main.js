function change() {
	document.getElementById('myElement').innerHTML = "My New Text";
}

function promptMe() {
	var name = prompt('What is your name?');
	var greeting = `Hello, ${name}.`;	
	document.getElementById('myElement').innerHTML = greeting;
}

var names = [['Mandy', 'Solis'], ['Guy', 'Davis'], ['Aaron', 'Combs'], ['Jimmy', 'Nguyen'], ['Ross', 'Weidner']];

console.log (names[0][0], names[1][0], names[2][0], names[3][0], names[4][0]);

var Aaron = {eyeColor: "Hazel", hairColor: "Brown"};
console.log(Aaron.hairColor, Aaron.eyeColor);

var a = 1;
var b = 2;
console.log(a+b);
alert(a+b);

var Aaron = {firstName: 'Aaron', lastName: 'Combs', birthday: "08/30/81", interests: ['music', 'cars', 'dogs']};
console.log(Aaron.interests);
 
if(10>2){
 console.log("yes thats correct");
 	 } else {
 console.log("no thats false");
}

var a = prompt('whats the number');
if(a<10) {
	alert("the variable is less than ten"); 
}else if(a==10){
	alert("yes thats correct"); 
} else {
	alert("the variable is greater than ten");	
}

