console.log("sup")

// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - 
// display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button

// 4) Handle generating random selections for the computer player



/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors'];
/*-------------------------------- Variables --------------------------------*/

let playerChoice;
let computerChoice; 
let msg;

/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.querySelector('#result-display');

/*-------------------------------- Functions --------------------------------*/
const play = () => {
    console.log("play")
}
/*----------------------------- Event Listeners -----------------------------*/

document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);

