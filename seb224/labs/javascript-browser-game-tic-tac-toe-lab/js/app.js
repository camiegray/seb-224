//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.




let board;
let turn;
let winner;
let tie;

const squareEls = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8')
];

const messageEl = document.getElementById("message");

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function init() {
    board = ['', '', '', '', '', '', '', '', ''];
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
    for (let i = 0; i < board.length; i++) {
        squareEls[i].textContent = board[i];
        if (board[i] == 'X') {
            squareEls[i].style.color = 'blue';
        } else if (board[i] == 'O') {
            squareEls[i].style.color = 'red';
        } else {
            squareEls[i].style.color = 'black';
            squareEls[i].textContent = ''; // Ensure empty squares are truly empty
        }
    }
}

function updateMessage() {
    if (winner == false && tie == false) {
        messageEl.textContent = "Player " + turn + "'s turn";
    } else if (winner == false && tie == true) {
        messageEl.textContent = "Tie!";
    } else {
        messageEl.textContent = "Player " + turn + " wins!";
    }
}

function handleClick(event) {
    let squareIndex = Number(event.target.id);
    
    if (board[squareIndex] == 'X' || board[squareIndex] == 'O' || winner == true) {
        return;
    }
    
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
}

function placePiece(index) {
    board[index] = turn;
}

function checkForWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i];
        let a = combo[0];
        let b = combo[1];
        let c = combo[2];
        
        if (board[a] != '' && board[a] == board[b] && board[a] == board[c]) {
            winner = true;
        }
    }
}

function checkForTie() {
    if (winner == true) {
        return;
    }
    
    let hasEmpty = false;
    for (let i = 0; i < board.length; i++) {
        if (board[i] == '') {
            hasEmpty = true;
        }
    }
    
    if (hasEmpty == false) {
        tie = true;
    }
}

function switchPlayerTurn() {
    if (winner == true) {
        return;
    }
    
    if (turn == 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
}

window.onload = function() {
    for (let i = 0; i < squareEls.length; i++) {
        if (squareEls[i]) {
            squareEls[i].addEventListener('click', handleClick);
        }
    }
    
    let resetBtnEl = document.getElementById('reset');
    if (resetBtnEl) {
        resetBtnEl.addEventListener('click', init);
    }
    
    init();
}