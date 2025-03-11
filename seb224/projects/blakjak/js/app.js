
const playCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
let deck = []

let playerScore = 0
let dealerScore = 0







const initGame = () => {
    deck = []
    playCards.forEach(card => {
        for (let i = 0; i < 4; i++) {
            const j = Math.floor(Math.random() * (deck.length + 1))
            deck.splice(j, 0, card)
        }
    })

    playerHand = []
    dealerHand = []
    gameOver = false

    statusEl.textContent = "Game Ready!"
    playerScoreEl.textContent = "0"
    dealerScoreEl.textContent = "0"
   
}



initGame()

const newDeckBtn = document.getElementById("new-deck-btn").addEventListener("click", initGame)

const hitBtn = document.getElementById("hit-btn");
const standBtn = document.getElementById("stand-btn");



const dealCards = () => {
    if (deck.length < 4) {
        statusEl.textContent = "Not enough cards! Click New Deck."
        return
    }

const dealBtn = document.getElementById("deal-btn").addEventListener("click", dealCards)



const playerScoreEl = document.getElementById("player-score");
const dealerScoreEl = document.getElementById("dealer-score");
const playerHandEl = document.querySelector(".player-area");
const dealerHandEl = document.querySelector(".dealer-area");
const statusEl = document.getElementById("game-status");

