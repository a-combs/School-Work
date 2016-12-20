function changeHeader(){
        var firstNameElement = document.getElementById('firstname1');
        var firstName = firstNameElement.value;
        var headerHtmlElement = document.getElementById('header');

        var firstName2Element = document.getElementById('firstname2');
        var firstName2 = firstName2Element.value;

        var lastNameElement = document.getElementById('lastname1');
        var lastName = lastNameElement.value;

        var lastName2Element = document.getElementById('lastname2');
        var lastName2 = lastName2Element.value;
    headerHtmlElement.innerHTML = "Star Wars Name:" + firstName + firstName2 +' '+ lastName + lastName2;}