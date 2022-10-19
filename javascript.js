
// declaration Strings to game
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let choices = [rock, paper, scissors];

console.log(choices);
console.log(typeof(choices));

// function which choose random element 
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min) + min);
}


// function which choose random string from array
function getComputerChoice(choices) {
  return choices[random(0, choices.length)];
}

// console.log(getComputerChoice(choices));

let calcRock = 0;
let calcPaper = 0;
let calcScissors = 0;
let testFunction = getComputerChoice;
let test1;

function get100() {
  for(i = 0; i < 1000; ++i) {
    test1 = testFunction(choices);
    if (test1 === "Paper") {
      calcPaper += 1;
    } else if (test1 === "Rock") {
      calcRock += 1;
    } else {
      calcScissors += 1;
    }
  }
}

get100()
console.log('Sum = ' + calcRock + ' Rock');
console.log('Sum = ' + calcPaper + ' Paper');
console.log('Sum = ' + calcScissors + ' Scissors');
