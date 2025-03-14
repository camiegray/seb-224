const playCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let deck = [];
let playerScore = 0;
let dealerScore = 0;
let playerHand = [];
let dealerHand = [];
let gameOver = false;
let playerWins = 0;
let dealerWins = 0;

const playerScoreEl = document.getElementById("player-score");
const dealerScoreEl = document.getElementById("dealer-score");
const playerHandEl = document.querySelector(".player-area");
const dealerHandEl = document.querySelector(".dealer-area");
const statusEl = document.getElementById("game-status");
const playerWinsEl = document.getElementById("player-wins");
const dealerWinsEl = document.getElementById("dealer-wins");
const rulesList = document.getElementById("rules-list");

const shuffleAudio = new Audio("./assets/sound/cards_shuffling.mp3");
const fourCardsAudio = new Audio("./assets/sound/four_cards_dealt.mp3");
const oneCardAudio = new Audio("./assets/sound/one_card_dealt.mp3");

const playSound = (audioClip) => {
  audioClip.currentTime = 0;
  audioClip.play();
};

const shuffleSound = () => playSound(shuffleAudio);
const playFourCardsSound = () => playSound(fourCardsAudio);
const playOneCardSound = () => playSound(oneCardAudio);

const initGame = () => {
  shuffleDeck();
  shuffleSound();
  rulesList.style.display = "none";
  rulesList.style.opacity = "0";
  playerHandEl.innerHTML = "";
  dealerHandEl.innerHTML = "";
  statusEl.textContent = "Game Ready! The cards have been shuffled!";
  playerScoreEl.textContent = "0";
  dealerScoreEl.textContent = "0";
};

const shuffleDeck = () => {
  deck = [];
  for (let i = 0; i < 6; i++) {
    playCards.forEach((card) => {
      for (let j = 0; j < 4; j++) {
        deck.push(card);
      }
    });
  }

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

const calculateScore = (hand) => {
  let score = 0;
  let aces = 0;

  hand.forEach((card) => {
    if (typeof card === "number") {
      score += card;
    } else if (card === "J" || card === "Q" || card === "K") {
      score += 10;
    } else if (card === "A") {
      aces += 1;
      score += 11;
    }
  });

  while (score > 21 && aces > 0) {
    score -= 10;
    aces -= 1;
  }

  return score;
};

const dealCards = () => {
  if (deck.length < 4) {
    statusEl.textContent = "Not enough cards! Click New Deck.";
    return;
  }

  gameOver = false;

  playerHand = [deck.shift(), deck.shift()];
  dealerHand = [deck.shift(), deck.shift()];

  playerHandEl.innerHTML = "";
  dealerHandEl.innerHTML = "";
  playFourCardsSound();
  playerHand.forEach((card) => {
    let cardEl = document.createElement("div");
    cardEl.textContent = card;
    cardEl.classList.add("card");
    playerHandEl.appendChild(cardEl);
  });

  dealerHand.forEach((card, index) => {
    let cardEl = document.createElement("div");
    cardEl.textContent = index === 0 ? card : "?";
    cardEl.classList.add("card");
    dealerHandEl.appendChild(cardEl);
  });
  playerScore = calculateScore(playerHand);
  dealerScore = calculateScore(dealerHand);

  playerScoreEl.textContent = playerScore;
  dealerScoreEl.textContent = calculateScore([dealerHand[0]]);

  statusEl.textContent = "Player's Turn!";

  if (playerScore === 21) {
    statusEl.textContent = "Blak Jak! Player wins!";
    revealDealerHand();
    playerWins++;
    playerWinsEl.textContent = playerWins;
    gameOver = true;
  }
};

const hit = () => {
  if (deck.length === 0) {
    statusEl.textContent = "No more cards in the deck! Click New Deck.";
    return;
  }
  if (gameOver) {
    statusEl.textContent = "Hand is done, deal again?";
    return;
  }
  playOneCardSound();
  let newCard = deck.shift();
  playerHand.push(newCard);

  let cardEl = document.createElement("div");
  cardEl.textContent = newCard;
  cardEl.classList.add("card");
  playerHandEl.appendChild(cardEl);

  playerScore = calculateScore(playerHand);
  playerScoreEl.textContent = playerScore;

  if (playerScore === 21) {
    statusEl.textContent = "Player hits 21! Player Wins!";
    playerWins++;
    playerWinsEl.textContent = playerWins;
    revealDealerHand();
    gameOver = true;
  } else if (playerScore > 21) {
    statusEl.textContent = "Player Busts! Dealer Wins.";

    dealerWins++;
    dealerWinsEl.textContent = dealerWins;
    revealDealerHand();
    gameOver = true;
  }
};

const revealDealerHand = () => {
  dealerHandEl.children[1].textContent = dealerHand[1];
  dealerScore = calculateScore(dealerHand);
  dealerScoreEl.textContent = dealerScore;

  dealerHand.forEach((card, index) => {
    if (index > 1) {
      let cardEl = document.createElement("div");
      cardEl.textContent = card;
      cardEl.classList.add("card");
      dealerHandEl.appendChild(cardEl);
    }
  });
};

const stand = () => {
  if (gameOver || playerHand.length === 0) {
    statusEl.textContent = "Hand is over, deal the cards!";
    return;
  }

  dealerHandEl.children[1].textContent = dealerHand[1];
  dealerScore = calculateScore(dealerHand);
  dealerScoreEl.textContent = dealerScore;

  while (dealerScore < 17) {
    let newCard = deck.shift();
    dealerHand.push(newCard);

    let cardEl = document.createElement("div");
    cardEl.textContent = newCard;
    cardEl.classList.add("card");
    dealerHandEl.appendChild(cardEl);

    dealerScore = calculateScore(dealerHand);
    dealerScoreEl.textContent = dealerScore;
  }

  determineWinner();
};

const determineWinner = () => {
  gameOver = true;

  if (playerScore > 21) {
    statusEl.textContent = "Player Busts! Dealer Wins.";
    dealerWins++;
  } else if (dealerScore > 21) {
    statusEl.textContent = "Dealer Busts! Player Wins!";
    playerWins++;
  } else if (playerScore > dealerScore) {
    statusEl.textContent = "Player Wins!";
    playerWins++;
  } else if (playerScore < dealerScore) {
    statusEl.textContent = "Dealer Wins!";
    dealerWins++;
  } else {
    statusEl.textContent = "It's a Tie!";
  }
  playerWinsEl.textContent = playerWins;
  dealerWinsEl.textContent = dealerWins;
};
const fadeOnClick = (rulesList) => {
  let opacity = rulesList.style.opacity === "1" ? 1 : 0;
  let targetOpacity = opacity === 1 ? 0 : 1;
  let displayState = targetOpacity === 1 ? "block" : "none";

  if (targetOpacity === 1) rulesList.style.display = "block"; // Make it visible before fading in

  const intervalId = setInterval(() => {
    if (
      (targetOpacity === 1 && opacity < 1) ||
      (targetOpacity === 0 && opacity > 0)
    ) {
      opacity += targetOpacity === 1 ? 0.1 : -0.1;
      rulesList.style.opacity = opacity;
    } else {
      clearInterval(intervalId);
      if (targetOpacity === 0) rulesList.style.display = "none";
    }
  }, 50);
};

const hitBtn = document.getElementById("hit-btn").addEventListener("click", hit);
const standBtn = document.getElementById("stand-btn").addEventListener("click", stand);
const newDeckBtn = document.getElementById("new-deck-btn").addEventListener("click", initGame);
const dealBtn = document.getElementById("deal-btn").addEventListener("click", dealCards);
const rulesBtn = document .getElementById("rules-btn") .addEventListener("click", () => {
    const isHidden =
    rulesList.style.display === "none" || !rulesList.style.display;
    rulesList.style.display = isHidden ? "block" : "none";
    rulesList.style.opacity = isHidden ? "1" : "0";
  });

initGame();
