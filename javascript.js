// Declaration Strings to game
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let choices = [rock, paper, scissors];

console.log(choices);
console.log(typeof(choices));


// Function which choose random element 
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min) + min);
}


// Function which choose random string from array
function getComputerChoice(choices) {
  return choices[random(0, choices.length)];
}


// Testing section for count probability of drawing
  /*
  let testCalcRock = 0;
  let testCalcPaper = 0;
  let testCalcScissors = 0;
  let testFunction = getComputerChoice;
  let test1;

  function get100() {
    for(i = 0; i < 1000; ++i) {
      test1 = testFunction(choices);
      if (test1 === "Paper") {
        testCalcPaper += 1;
      } else if (test1 === "Rock") {
        testCalcRock += 1;
      } else {
        testCalcScissors += 1;
      }
    }
  }

  get100()
  console.log('Sum = ' + calcRock + ' Rock');
  console.log('Sum = ' + calcPaper + ' Paper');
  console.log('Sum = ' + calcScissors + ' Scissors');
  */

let calcRock = 0;
let calcPaper = 0;
let calcScissors = 0;


// Declaration two parameters to compare (Player vs Comp)
const computerSelection = getComputerChoice();
const playerSelection = "Rock";

// Function that plays a single round of Rock Paper Scissors
function playRound(computerSelection, playerSelection) {

}
