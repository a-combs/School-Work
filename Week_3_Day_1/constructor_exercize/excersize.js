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
var album = new Album("photo1", "photo2", "photo3");
var photo1 = new Photo1("beach", "beach.jpeg");
var photo2 = new Photo2("lake", "lake.jpeg");
var photo3 = new Photo3("house", "house.jpeg");

function Album(location, fileName){
	this.location = location;
	this.fileName = fileName;
}