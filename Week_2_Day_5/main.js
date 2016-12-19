function popAlert(){
  alert("whatever");
}

function findH1(){
  console.log(document.getElementsByTagName('h1')[0].innerHTML);
  console.log($('h1').text());

  // console.log(document.getElementById('greeting').innerText);
  // console.log($('#greeting')[0].innerText);

  console.log($('#greeting').text());


}

function changeGreeting(greetingText = ""){
  $('#greeting').text(greetingText);
  return greetingText;
}

function hideH3(){
  $('#hide').hide();
}

// var hideH3 = function(){
//   $('#hide').hide();
// }
//Exercise:
// Add a new element to your html page.
// Using what we've learned, hide the element after 4 seconds!

function fadeInH3(){
  $('#hide').fadeIn(1000);
}

function fadeInH3AfterOneSecond(){
  setTimeout(fadeInH3, 1000);
}

function hideThenShowH3(){
  $('#hide').hide(400, fadeInH3AfterOneSecond);
}

$(document).ready(function(){
    findH1();
    var greetingText = "Wonderful Text";
    setTimeout(function() {
      $('#greeting').text(greetingText);
    }, 3000);

    setTimeout("changeGreeting('Wonderful Text')", 3000);
    // setTimeout(hideH3, 1000); //hides h3 after 4 seconds
    // setTimeout(fadeInH3, 2000); // fadeIn after 5 seconds, 1 second after its faded out
    hideThenShowH3();
    // hideH3();
    // popAlert();
});


// setTimeout(fadeInH3, 5000)// fades the h3 back in after 5 seconds (thats one second after it fades out!)

// hideThenFade()

// function waitThenFadeInH3(){
//   setTimeout(fadeInH3, 5000);
// }

// function hideThenFade(){
//   $('#hide').hide(400, waitThenFadeInH3);
// }


