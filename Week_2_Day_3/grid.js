function randomize(event){
  event.preventDefault();

  // get random number between 0 and 9
  var ranNum = Math.random();
  var boxIndex = Math.floor((ranNum*9));

  // console.log(ranNum)
  console.log(boxIndex);

  // create array of all boxes on page
  // var grid = document.getElementByClassName(".cell");
  var grid = document.querySelectorAll('.cell');
  //grid[boxIndex].innerHTML = "hello";
  console.log("grid: "+ grid[boxIndex]);
  // inputVal.style.color = "red";

}

// element.innerHTML

// input.value

// input.style.color

// input.style.borderRadius

