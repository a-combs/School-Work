function changeHeader(event){
	//event.preventDefault();
	//console.log(event);
	var firstNameElement = document.getElementById("firstName");

	// grab value of the first name input
	// set equal to a variable.
	var firstName = firstNameElement.value;

	// grab the header html element
	var headerHtmlElement = document.getElementById("header");

	// set innerHTML value of the header element
	// equal to the variable that holds the value
	// of the first name input.
	headerHtmlElement.innerHTML = "Welcome, " + firstName + "";

}

document.getElementById("myForm").addEventListener("submit", changeHeader);

// addEventListener(addEventListenerFor, callBackFuncion);

// submit
// click

function changeFooter(event){

	var lastNameElement = document.getElementById("lastName");

	var lastName = lastNameElement.value;

	var footerHtmlElement = document.getElementById("footer");
	
	footerHtmlElement.innerHTML = "Goodbye, " + lastName + "";
}

document.getElementById("myForm").addEventListener("submit", changeFooter);

