// Declaration Strings to game
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let winner = '';
const roundResult = document.createElement('div');
const score = document.querySelector('.score');
const lastGame = document.querySelector('.lastGame');
const computerScore = document.querySelector('.computerScore');
const playerScore = document.querySelector('.playerScore');

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
  
/*   let testCalcRock = 0;
  let testCalcPaper = 0;
  let testCalcScissors = 0;

  function get1000() {
    for(i = 0; i < 1000; ++i) {
      let test1 = getComputerChoice(choices);
      if (test1 === "paper") {
        testCalcPaper += 1;
      } else if (test1 === "rock") {
        testCalcRock += 1;
      } else {
        testCalcScissors += 1;
      }
    }
  }

  get1000()
  console.log('Sum = ' + testCalcRock + ' Rock');
  console.log('Sum = ' + testCalcPaper + ' Paper');
  console.log('Sum = ' + testCalcScissors + ' Scissors'); */
 

let calcRock = 0;
let calcPaper = 0;
let calcScissors = 0;

let scoreComputer = 0;
let scorePlayer = 0;


// Function that play a single round of Rock Paper Scissors

function playRound(computerSelection, playerSelection) {
  //computerSelection = computerSelection.toLowerCase();
  //playerSelection = playerSelection.toLowerCase();
  console.log("computer has = " + computerSelection);
  console.log("player has = " + playerSelection);

  // Operation SWITCH (boolean)
  switch (true) {

   // Result = Tie
    case (computerSelection === playerSelection):
      console.log("TIE");
      roundResult.textContent = 'Tie';
      lastGame.appendChild(roundResult);
    break;

    // If computer choose Rock (IF)
    case (computerSelection === "rock"):
      if (playerSelection === "scissors") {
        scoreComputer += 1;
        console.log(`+1 for computer`);
        roundResult.textContent = `+1 for computer`;
        lastGame.appendChild(roundResult);
      } else {
        scorePlayer += 1;
        console.log(`+1 for player`);
        roundResult.textContent = `+1 for player`;
        lastGame.appendChild(roundResult);

      } 
    break;

    // If computer choose Paper (IF)
    case (computerSelection === "paper"):
      if (playerSelection === "rock") {
        scoreComputer += 1;
        console.log(`+1 for computer`);
        roundResult.textContent = `+1 for computer`;
        lastGame.appendChild(roundResult);

      } else {
        scorePlayer += 1;
        console.log(`+1 for player`);
        roundResult.textContent = `+1 for player`;
        lastGame.appendChild(roundResult);

      } 
    break;

    // If computer choose Scissors (Ternary operator)
    case (computerSelection === "scissors"):
      (playerSelection === "paper") 
        ? (scoreComputer += 1,
        console.log(`+1 for computer`),
        roundResult.textContent = `+1 for computer`,
        lastGame.appendChild(roundResult))
        : (scorePlayer += 1,
        console.log(`+1 for player`),
        roundResult.textContent = `+1 for player`,
        lastGame.appendChild(roundResult));
    break;
 }
}

    
  function checkWinner() {
    let victoriesNumber = 5;
  // Check if the winner exists
  if ((scoreComputer >= victoriesNumber) || (scorePlayer >= victoriesNumber)) {

    // Check who is the winner
    (scoreComputer > scorePlayer) ? winner = "Computer" : winner = "Player";
  
    roundResult.textContent = `The winner is: ${winner} !!!`;
    lastGame.appendChild(roundResult);

    const scores = document.createElement('div');
    score.textContent =`Score: Computer has ${scoreComputer}, Player has ${scorePlayer}`;
    score.appendChild(scores);
  }
}


// Run the game
function game() {

  if(winner) {
    scoreComputer = 0;
    scorePlayer = 0;
    winner = '';
  };

  playRound(computerSelection(), playerSelection);
  checkWinner();
  // Display scores
  playerScore.textContent = `Player score: ${scorePlayer}.`;
  computerScore.textContent = `Computer score: ${scoreComputer}.`;
}


// Declaration two parameters to compare (Player vs Comp) and assignment them
function computerSelection() {
  const computerSelection = getComputerChoice(choices);
  return computerSelection;
};


let playerSelection = '';

let playerClick = document.querySelectorAll('button');
playerClick.forEach((button) => {
  button.addEventListener('click', function(e) {
    playerSelection = e.target.id;
    console.log(button.id);
    if(winner) {
      location.reload();
    }
    return game();
    
  });
});
