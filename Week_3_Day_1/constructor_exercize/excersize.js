// creat object with attributes and method to assign and return a letter grade

function Student(name, grade){
	this.name = name;
	this.grade = grade;
	this.letterGrade = function(){
		if(this.grade>=0 && this.grade<=59) {
			console.log(this.name+": got an F");
		} else if(this.grade>=60 && this.grade<=69) {
			console.log(this.name+": got an D");
		}	else if(this.grade>=70 && this.grade<=79) {
			console.log(this.name+": got an C");
		}	else if(this.grade>=80 && this.grade<=89) {
			console.log(this.name+": got an B");
		}	else if(this.grade>=90 && this.grade<=100) {
			console.log(this.name+": got an A");
		}
	};
}
var student = new Student("Aaron", 100);

// create an object that allow's you to store strings that represent an Album
function Album(photos = []){
    this.photos = photos; // Array
    this.addNewPhoto = function(photoObject){
        this.photos.push(photoObject);
    };
}

function Photo(location, fileName){
    this.location = location;
    this.fileName = fileName;
}

var photo1 = new Photo("Hawaii", "photo1.jpg");
var photo2 = new Photo("Austin", "photo2.jpg");


var myAlbum = new Album([photo1, photo2]);

var photoObject = new Photo('home', 'home.jpg');


myAlbum.addNewPhoto(photoObject);

// object 3

function Family(adult, child){
	this.adult = adult;
	this.child = child;
	this.addFamilyMember = function(newMember = []){
		this.adult.push(newMember);
			return newMember + " is now part of the family";
	};
}

function Person(name, age){
	this.name = name;
	this.age = age;
}

function Adult(name, age, occupation){
	this.occupation = occupation;
	Person.apply(this, arguments);
}

Adult.prototype = Object.create(Person.prototype);

function Child(name, age, school){
	this.school = school;
	Adult.apply(this, arguments);
}

Child.prototype = Object.create(Adult.prototype);

var family = new Family([adult, child]);
var person = new Person("Tom", 35);
var adult = new Adult("Steve", 22, "Carpenter");
var child = new Child("AJ", 10, "Purple Sage Elementary");
var newMember = new 
