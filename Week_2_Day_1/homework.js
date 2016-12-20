 function add(a,b){
    var answer = a + b;

    console.log(answer);
    return answer;
}

function subtract(a,b){
    var answer = a - b;
    
    console.log(answer);
    return answer;
}

function multiply(a,b){
   var answer = a * b;
    
    console.log(answer);
    return answer;
}

function divide(a,b){
    var answer = a / b;
    
    console.log(answer);
    return answer;
}



var a = add(5,6);
var b = subtract(12,2);
var c = add(a,b);

var x = multiply(5,6);
var y = divide(80,12);
var z = multiply(x,y);

console.log(`The variable c is equal to ${c} and the variable z is equal to ${z}`);

var pet = ('dempsey');
var toes = 10;
var tired = true;
var fruits = ['apples', 'oranges', 'grapes'];
    fruits.reverse();

var friends = [
    ['bob', 'red'], ['jim', 'blue'], ['tom', 'yellow']
];

var person = {name: 'tom', toeCount: 10, hairColor: 'brown'};
   console.log(name, toeCount, hairColor);

function squared(){
    var x = Math.sqrt(10);
    return squared;
}

function area(){
    var length = 10;
    var width = 5;
    console.log(length*width);
}

Math.random();
