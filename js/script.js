var response = document.querySelector(".response");
var showGuess = document.querySelector(".show-guess");
const button = document.querySelector("button");
const number = document.querySelector(".number");
let randomNumber = Math.floor(Math.random() * 27);
const num = number.value;
const form = document.querySelector("form");


const playGame = function (num) {
  if (num === randomNumber) {
    response.innerText = "Hey, you totally guessed the number! Great job!";
  } else if (num !== randomNumber) {
    response.innerText = `Sorry. Your guess is incorrect. The number is ${randomNumber}.`;
  }
  else if (num > 26) {
    response.innerText = "We need a number between 1 and 26.";
    return;
  } else if (num < 1) {
    response.innerText = "We need a number between 1 and 26.";
    return;
  } else {
    response.innerText = "That's not a number. Please try again.";
  }
  showGuess.innerText = randomNumber;
  const playAgain = document.createElement("button");
  playAgain.innerText = "Play Again";
  playAgain.classList.add("play-again");
  button.classList.add("hidden");
  form.append(playAgain);

}

button.addEventListener("click", playGame);

playAgain.addEventListener("click", function () {
  window.location.reload();
})














