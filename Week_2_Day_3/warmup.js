var name = "bill";
var tired = false;
var cars = 10;
var people = ["jes", "aaron", "pam"];
var person = {name: "jes", haircolor: "brown", age: "32"};

var a ="This is a string with a problem";
var b = ["this", "should", "be", "a", "seven", "element", "array"];
var c = {firstKey: "first", secondKey: "second", thirdKey: "third"};
function tellMeSomethingNice(){
	return "you look great!";
}

function grades(){
	var luke = {name: "luke", grade: 96};
	var katie = {name: "katie", grade: 78};
	var kevin = {name: "kevin", grade: 46};
	var amanda = {name: "amanda", grade: 84};
	var students = [luke, katie, kevin, amanda];
	var letterGrade = null;

	for(var i = 0; i < students.length; i++) {
		letterGrade = students[i].grade;
		if(letterGrade>=0 && letterGrade<=59) {
			console.log(students[i].name+": got an F");
		} else if(letterGrade>=60 && letterGrade<=69) {
			console.log(students[i].name+": got a D");
		}	else if(letterGrade>=70 && letterGrade<=79) {
			console.log(students[i].name+": got a C");
		}	else if(letterGrade>=80 && letterGrade<=89) {
			console.log(students[i].name+": got a B");
		}	else if(letterGrade>=90 && letterGrade<=100) {
			console.log(students[i].name+": got a A");
		}		
	}
}
grades();

// Defining Global and Local Scope in my own words. Local Scope
// is anything contained inside of another Variable. Global only 
// once in a script. 

// 1. local
// 2. trick question
// 3. global
// 4. global
// 5. nothing
// 6. 10
// 7. global
// 8. nothing
// 9. nothing
   
// FizzBuzz
// Im stuck on this

// get the value of the first name box

var firstName = document.getElementById('firstName');

// grab the text that displays on the page
var myHeader = document.getElementById('myHeader');
  