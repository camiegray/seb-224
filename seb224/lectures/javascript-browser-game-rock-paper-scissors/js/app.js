// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button

// 4) Handle generating random selections for the computer player

// 5) Compare the player choice to the computer choice, and check for a winner

// 6) Render a win/lose/tie message to the player
//    Include both player and computer selections in the message
//    Clearly indicate who won

/*-------------------------------- Variables (const) --------------------------------*/
const choices = ["rock", "paper", "scissors"];

/*-------------------------------- Variables (let) --------------------------------*/
let playerChoice;
let computerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector("#result-display");

/*-------------------------------- Functions --------------------------------*/
const getPlayerChoice = (e) => {
  playerChoice = e.target.id;
};

const getComputerChoice = () => {
  const randomIdx = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIdx];
};

const compare = () => {
  if (playerChoice === computerChoice) {
    msg = "You tied!";
  } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
    // "rock" vs. "scissors"
    msg = "Congrats! You win!";
  } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
    // "paper" vs. "rock"
    msg = "Congrats! You win!";
  } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
    // "scissors" vs. "paper"
    msg = "Congrats! You win!";
  } else {
    msg = "You lose! Try again?";
  }
};

const render = () => {
  resultDisplayEl.textContent = `The computer chose ${computerChoice}. ${msg}`;
};

const play = (e) => {
  getPlayerChoice(e); // captures player choice, updates state
  getComputerChoice(); // randomly selects computers choice, updates state
  compare(); // determines winning result
  render(); // renders result message back to the user
};

/*----------------------------- Event Listeners -----------------------------*/
// document.querySelector("#rock").addEventListener("click", play);
// document.querySelector("#paper").addEventListener("click", play);
// document.querySelector("#scissors").addEventListener("click", play);
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", play);
});