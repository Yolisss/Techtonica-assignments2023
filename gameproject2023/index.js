//1. randomize number
//using Math.random method
//floor method helps us round down and return
//the largest integer less than or equal to a
//given number
//ex. console.log(Math.floor(5.95));
//output: 5
//console.log(Math.floor(5.05));
// Expected output: 5

//fetching the id we want to modify from html
// let fetchMysteryNum = document.getElementById("mysterynumber");

//using math/floor method to give us the random number
//(winning num)
let winningNumber = Math.floor(Math.random() * 10 + 1);
//created variable to hold value when user makes a wrong
//guess
console.log(winningNumber);
let wrongAnswers = [];

document.getElementById("submitGuess").onclick = function (e) {
  e.preventDefault();
  let userPopUpMessage = document.querySelector("#mysteryNumber");
  console.log(userPopUpMessage);

  let userGuess = document.getElementById("guessInput").value;

  let reset = document.getElementById("resetElement");

  //get the users guess
  //comparing if guess != winning num
  if (userGuess < winningNumber) {
    wrongAnswers.push(userGuess);
    console.log(wrongAnswers);
    document.getElementById("randomguesses").innerHTML += userGuess + "," + " ";
    userPopUpMessage.innerHTML = "Sorry, guess higher";
  } else if (userGuess > winningNumber) {
    wrongAnswers.push(userGuess);
    console.log(wrongAnswers);
    document.getElementById("randomguesses").innerHTML += userGuess + "," + " ";
    userPopUpMessage.innerHTML = "Sorry, guess lower";
  } else {
    userPopUpMessage.innerHTML = "Winner, Winner, Chicken Dinner!";
    //added classList.toggle
    //"visible" = calls the css in the project
    reset.classList.toggle("visible");
    //console.log(reset);
    //window.location.reload(true);
  }
};

document.getElementById("resetButton").onclick = function (e) {
  window.location.reload(true);
};

//ex winning num = 5
//guess 1
//tell user to guess higher
//if(userGuess < winningNumber){
//alert('guess higher);
//}

//ex winning num = 5
//guess 8
//tell user to guess lower
//if(userGuess > winningNumber){
//alert('guess lo);
//}

//fetching the submit button by fetching the its id 'submit'
// let fetchSubmit = document.getElementById("submit");
// document.addEventListener("click", mysteryNumber);

// let userInput = document.getElementById("guessInput").value;

// function mysteryNumber(userInput) {
//   //userInput.preventDefault();
//   if (userInput != winningNumber) {
//     wrongAnswers.push(userInput);
//     //return "Sorry, try again";
//     alert("sorry, try again");
//   } else {
//     alert("you got it right");
//   }
// }

// mysteryNumber(userInput);
