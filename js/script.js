var response = document.querySelector(".response");
var showGuess = document.querySelector(".show-guess");
//var num = Number(prompt("Guess a number between 1-26. :)")); */
const button = document.querySelector("button");
const number = document.querySelector(".number");

let answer = number.target.value;

let randomNumber = Math.floor(Math.random() * 27);

button.addEventListener("click", function (answer){
    
  showGuess.innerText = randomNumber;
  if (answer === randomNumber) {
    response.innerText = "Hey, you totally guessed the number! Great job!";

  } else if (answer > randomNumber) {
    response.innerText = `Sorry, your guess is too high. The number is ${randomNumber} `;
  } else {
    response.innerText = "That's not a number. Please try again.";
  }})
/*function guessNumber(name, num) {
  var randomNumber = Math.floor(Math.random() * 27); // This will produce a number between 1 and 25 - this line is error free :)

  if (num > 26) {
    response.innerText = "We need a number between 1 and 26.";

    return;
  } else if (num < 1) {
    response.innerText = "We need a number between 1 and 25.";
    return;
  }

  // We've got a number between 1 and 25, let's do this.
  showGuess.innerText = num;

  if (num === randomNumber) {
    response.innerText = `Hey, ${name}, you totally guessed the number! Must be your lucky day.`;
  } else if (num < randomNumber) {
    response.innerText = `Hey, ${name}, your guess was too low. The number was ${randomNumber}.`;
  } else if (num > randomNumber) {
    response.innerText = `Hey, ${name}, your guess was too high. The number was ${randomNumber}.`;
  } else {
    response.innerText = `That's not a number, {name}!`;
  }
}

guessNumber("Saxby", num); */