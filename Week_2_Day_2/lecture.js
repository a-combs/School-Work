// We need to create an array of numbers
// We need to reverse the array
// if/else statement that checks to see if the number is gt or ls 10
// Alert/log the result
// this should be inside of a for loop

// globally scoped
var numbers = [0, 20, 56, 678];

numbers.reverse();

for(var i = 0; i < numbers.length; i++){
	if(numbers[i] < 10){
		alert("less is more");
	} else {
		alert("more is better");
	}	
}

function func(something){
// locally scoped
	numbers = "0,1,2,3";
	console.log("inside function", numbers);
}

nemberTest("sonething");
console.log("outside function", numbers);

//local scope
var z = 3;
function someF(){
	var z = 20;
	console.log(z);
}
someF()
>> 20;


