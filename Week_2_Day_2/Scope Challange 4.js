//In a Javascript file, write code that does the following things:
//checks that the password is 12345678
//checks that the username contains at least one number
//if anything is wrong, send an alert message saying "incorrect"
//Your page should also include an H1 tag. If the information in the form is correct, have Javascript change the text in the H1.

	var password = document.getElementById("password");

	var username = document.getElementById("username");

	function checkform() {
		var passwordvalue = password.value;

		if (passwordvalue !== "12345678") {
			alert ("incorrect!");

		} else {
		
		var usernamevalue=username.value;

		var regex = /\d/g;

		if (regex.test(usernamevalue) === false) {
			alert ("incorrect!");

		} else {

			document.getElementById("formheading").innerText="Thank you for filling out the form!";
			}
		}
		return false;
	}