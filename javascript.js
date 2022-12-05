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
const computerChoice = document.querySelector('.computerChoice');
const playerChoice = document.querySelector('.playerChoice');

const rockIcon = document.createElement('i');
rockIcon.classList.add('icon-hand-grab-o');
const paperIcon = document.createElement('i');
paperIcon.classList.add('icon-hand-paper-o');
const scissorsIcon = document.createElement('i');
scissorsIcon.classList.add('icon-hand-peace-o');

const rockIconC = document.createElement('i');
rockIconC.classList.add('icon-hand-grab-o');
const paperIconC = document.createElement('i');
paperIconC.classList.add('icon-hand-paper-o');
const scissorsIconC = document.createElement('i');
scissorsIconC.classList.add('icon-hand-peace-o');

const arrowLeft = document.createElement('i');
arrowLeft.classList.add('icon-left-thin');
const arrowRight = document.createElement('i');
arrowRight.classList.add('icon-right-thin');

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

  choiceIcon( playerSelection, computerSelection);
  removeAllChild(lastGame);
  // Operation SWITCH (boolean)
  switch (true) {

   // Result = Tie
    case (computerSelection === playerSelection):
      lastGame.textContent = '=';
    break;

    // If computer choose Rock (IF)
    case (computerSelection === "rock"):
      if (playerSelection === "scissors") {
        scoreComputer += 1;
        lastGame.appendChild(arrowLeft);
      } else {
        scorePlayer += 1;
        lastGame.appendChild(arrowRight);
      } 
    break;

    // If computer choose Paper (IF)
    case (computerSelection === "paper"):
      if (playerSelection === "rock") {
        scoreComputer += 1;
        lastGame.appendChild(arrowLeft);

      } else {
        scorePlayer += 1;
        lastGame.appendChild(arrowRight);

      } 
    break;

    // If computer choose Scissors (Ternary operator)
    case (computerSelection === "scissors"):
      (playerSelection === "paper") 
        ? (scoreComputer += 1,
          lastGame.appendChild(arrowLeft))
        : (scorePlayer += 1,
          lastGame.appendChild(arrowRight))
    break;
 }
}

function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};


function choiceIcon(player, computer) {
  removeAllChild(playerChoice);
  if (player === "rock") playerChoice.appendChild(rockIcon);
  if (player === "paper") playerChoice.appendChild(paperIcon);
  if (player === "scissors") playerChoice.appendChild(scissorsIcon);

  removeAllChild(computerChoice);
  if (computer === "rock") computerChoice.appendChild(rockIconC);
  if (computer === "paper") computerChoice.appendChild(paperIconC);
  if (computer === "scissors") computerChoice.appendChild(scissorsIconC);
}

    
  function checkWinner() {
    let victoriesNumber = 5;
  // Check if the winner exists
  if ((scoreComputer >= victoriesNumber) || (scorePlayer >= victoriesNumber)) {

    // Check who is the winner
    if (scoreComputer > scorePlayer) {
      winner = "Computer";
      computerScore.style.background =`rgba(10, 147, 211, 0.6)`;
      computerScore.style.padding =`8px`;
      computerScore.style.border =`1px solid black`;
      lastGame.textContent = `The winner is: ${winner}. :(`;
      lastGame.style.cssText = `box-shadow: 0px 5px 50px rgb(0, 0, 0);`;

    } else {
      winner = "Player";
      playerScore.style.background =`rgba(10, 147, 211, 0.6)`;
      playerScore.style.padding =`8px`;
      playerScore.style.border =`1px solid black`;
      lastGame.textContent = `YOU are the WINNER !!!`; 
      lastGame.style.cssText = `box-shadow: 0px 5px 60px 20px gold;`;
    }
  }
}


// Run the game
function game() {

  if(winner) {
    scoreComputer = 0;
    scorePlayer = 0;
    winner = '';
  };

  lastGame.style['font-size'] = '100px';
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
    if(winner) location.reload();
    playerSelection = e.target.id;
    lastGame.style.cssText = `box-shadow: 0px 0px 0px black`;
    return game();
  });
});
