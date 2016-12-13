Math.floor(Math.random() *20) + 1;

// create a variable that generates a random number between one and 10.

var random = Math.floor(Math.random() * 10);

// create a variable that holds the result of the prompt of asking someone what numbert
// they want to guess.



// - wrong (the guess does not equal the random number);
// - right (the guess does equal the random number);

function guessingGame(){

	var randomNumber = Math.floor(Math.random() *100) +1;
	var guess = prompt("guess a number between 1 and 100");

	console.log(guess);
	if(guess == null){
		return;
	}


while(randomNumber != guess){
	if(randomNumber > guess){
		alert("your guess is too low!");
	}else{
		alert("your guess is too high");
	}
	guess = prompt("guess a number between 1 and 100!");
}

	alert("your right");
}

guessingGame();


// while(randomNumber != guess){
	// 	alert("eher.");
	// 	var guess = prompt("guess a number between 1 and 10");
	// }	

 	// alert("you are right");	




//	for(i=1; i<=3; i++){}
//		var guess = prompt("guess a number between 1 and 10!");

//		if(randomNumber == guess){
//		alert("your right!");
//		return;
//	} else {
//		alert("eher.");
//	}	