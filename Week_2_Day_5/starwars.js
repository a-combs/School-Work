function getFirstHalf(){
	var firstHalf = $("#first-half").val();
	return firstHalf;
}

function getSecondHalf(){
	var secondHalf = $("#second-half").val();
	return secondHalf;
}

function firstName(){
	var firstHalf = getFirstHalf();
	var secondHalf = getSecondHalf();
	alert(firstHalf + secondHalf);
}


function getLnFirstHalf(){
	var lNfirstHalf = $("#LN-first-half").val();
	return lNfirstHalf;
}

function getLnSecondHalf(){
	var lNsecondHalf = $("#LN-second-half").val();
	return lNsecondHalf;
}

function lastName(){
	var lNfirstHalf = getLnSecondHalf();
	var lNsecondHalf = getLnSecondHalf();
	alert();
}

$(document).ready(function(){

//	alert('firstName');
//	alert('lastName');
});
