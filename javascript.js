// Declaration Strings to game
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let choices = [rock, paper, scissors];


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


// Testing section for count probability of tie
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

let scoreComputer = 0;
let scorePlayer = 0;


// Function that plays a single round of Rock Paper Scissors
function playRound(computerSelection, playerSelection) {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  console.log("computer has = " + computerSelection);
  console.log("player has = " + playerSelection);

  // Operation SWITCH (boolean)
  switch (true) {

   // Result = Tie
    case (computerSelection === playerSelection):
      console.log("TIE");
    break;

    // If computer choose Rock (IF)
    case (computerSelection === "rock"):
      if (playerSelection === "scissors") {
        scoreComputer += 1;
        console.log(`+1 for computer, sum comp = ${scoreComputer}`);
      } else {
        scorePlayer += 1;
        console.log(`+1 for player, sum player = ${scorePlayer}`);
      } 
    break;

    // If computer choose Paper (IF)
    case (computerSelection === "paper"):
      if (playerSelection === "rock") {
        scoreComputer += 1;
        console.log(`+1 for computer, sum comp = ${scoreComputer}`);
      } else {
        scorePlayer += 1;
        console.log(`+1 for player, sum player = ${scorePlayer}`);
      } 
    break;

    // If computer choose Scissors (Ternary operator)
    case (computerSelection === "scissors"):
      (playerSelection === "paper") 
        ? (scoreComputer += 1,
        console.log(`+1 for computer, sum comp = ${scoreComputer}`))
        : (scorePlayer += 1,
        console.log(`+1 for player, sum player = ${scorePlayer}`))
    break;
 }
}


function game() {
  let victoriesNumber = 5; // max 20-25 for i < 100 or do infinity for(;;)
  win: for (i=0; i<100; i++) {

    // Declaration two parameters to compare (Player vs Comp) and assignment them
    const computerSelection = getComputerChoice(choices);
    const playerSelection = getComputerChoice(choices);
    
    playRound(computerSelection, playerSelection);

    // Check if the winner exists
    if ((scoreComputer >= victoriesNumber) || (scorePlayer >= victoriesNumber)) {
      // Check who is the winner
      (scoreComputer > scorePlayer) ? winner = "Computer" : winner = "Player";
      console.log(`The winner is: ${winner} !!!`)
      console.log(`Score: Computer has ${scoreComputer}, Player has ${scorePlayer}`)
      break win;
    }

    // Overflow iterations
    if (i === 99) {
      console.log ("Too many iterations or something was wrong");
    }
  }
}

// Run the game
game()