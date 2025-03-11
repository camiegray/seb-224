const playCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
let deck = []
let playerScore = 0
let dealerScore = 0
let playerHand = []
let dealerHand = []
let gameOver = false

// Cache DOM elements


// Game Initialization
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

// Function to calculate score
const calculateScore = (hand) => {
    let score = 0
    let aces = 0

    hand.forEach(card => {
        if (typeof card === "number") {
            score += card
        } else if (card === "J" || card === "Q" || card === "K") {
            score += 10
        } else if (card === "A") {
            aces += 1
            score += 11
        }
    })

    while (score > 21 && aces > 0) {
        score -= 10
        aces -= 1
    }

    return score
}

// Deal Cards Function
const dealCards = () => {
    if (deck.length < 4) {
        statusEl.textContent = "Not enough cards! Click New Deck."
        return
    }

    playerHand = [deck.shift(), deck.shift()]
    dealerHand = [deck.shift(), deck.shift()]

    playerHandEl.innerHTML = ""
    dealerHandEl.innerHTML = ""

    playerHand.forEach(card => {
        let cardEl = document.createElement("div")
        cardEl.textContent = card
        cardEl.classList.add("card")
        playerHandEl.appendChild(cardEl)
    })

    dealerHand.forEach((card, index) => {
        let cardEl = document.createElement("div")
        cardEl.textContent = index === 0 ? card : "?"
        cardEl.classList.add("card")
        dealerHandEl.appendChild(cardEl)
    })

    playerScore = calculateScore(playerHand)
    dealerScore = calculateScore(dealerHand)

    playerScoreEl.textContent = playerScore
    dealerScoreEl.textContent = calculateScore([dealerHand[0]]) // Only show first card's score

    statusEl.textContent = "Player's Turn!"
}


// Attach event listeners AFTER function definitions
document.getElementById("new-deck-btn").addEventListener("click", initGame)
document.getElementById("deal-btn").addEventListener("click", dealCards)
const playerScoreEl = document.getElementById("player-score")
const dealerScoreEl = document.getElementById("dealer-score")
const playerHandEl = document.querySelector(".player-area")
const dealerHandEl = document.querySelector(".dealer-area")
const statusEl = document.getElementById("game-status")

const hitBtn = document.getElementById("hit-btn")
const standBtn = document.getElementById("stand-btn")
// Initialize the game
initGame()




































