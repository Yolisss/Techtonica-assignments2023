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
let wrongAnswers = [];

//fetching the submit button by fetching the its id 'submit'
let fetchSubmit = document.getElementById("submit");
document.addEventListener("click", mysteryNumber);

function mysteryNumber(usersGuess) {
  //click.preventDefault();
  if (usersGuess != winningNumber) {
    wrongAnswers.push("usersGuess");
    return "Sorry, try again";
  }
}

mysteryNumber();
