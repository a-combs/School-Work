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