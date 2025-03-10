//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.













/*-------------------------------- Constants --------------------------------*/

const squareEls = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
]
console.log('Square elements:', squareEls);



const messageEl = document.getElementById("message");
console.log('Message element:', messageEl);
/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
    console.log("Loading");
    
    board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    turn = 'X';
    winner = false;
    tie = false;
    
    render();
}

function render() {
    updateBoard();
    updateMessage();
}
function updateBoard() {
    board.forEach((cell, idx) => {
        if (cell === 'X') {
            squareEls[idx].style.color = 'blue';
        } else if (cell === 'O') {
            squareEls[idx].style.color = 'red';
        } else {
            squareEls[idx].style.color = 'black';
        }
    });
}
function updateMessage() {
    if (!winner && !tie) {
        // Game in progress
        messageEl.textContent = `Player ${turn}'s turn`;
    } else if (!winner && tie) {
        // Tie game
        messageEl.textContent = "It's a tie!";
    } else {
        // Winner
        messageEl.textContent = `Congratulations! Player ${turn} wins!`;
    }
}
init ();
/*----------------------------- Event Listeners -----------------------------*/



