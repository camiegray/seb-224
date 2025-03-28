# 🃏 BlakJak - Browser-Based Blackjack Game 
##### [PLAY NOW](https://camiegray.github.io/seb-224/seb224/projects/blakjak/)

A sleek, interactive, and intuitive browser-based Blackjack game built entirely with HTML, CSS, and JavaScript.

---

<img src="assets/images/play.png" alt="Gameplay Screenshot" style="height: 350px; width:550px;"/>

---
## 🚩 Game Objective

> Your goal is to get your hand as close to **21** as possible without exceeding it ("busting"). Beat the dealer’s hand without going over 21 to win!

---

## 📜 Game Rules

1. **Initial Deal:**  
   You and the dealer each start with two cards. You can only see one of the dealer's cards until your turn ends.


2. **Card Values:**  
   - **Numeric Cards (2-10)**: Face value  
   - **Face Cards (J, Q, K)**: 10 points  
   - **Ace (A)**: Worth 1 or 11 points, whichever benefits your hand more.


3. **Player's Actions:**  
   - **Hit:** Take another card.  
   - **Stand:** Keep your current cards, ending your turn.


4. **Dealer’s Play:**  
   > - Dealer must hit on 16 or less and stand on 17 or more.


5. **Winning and Losing:**  
   - Player busts (exceeds 21): Dealer wins.  
   - Dealer busts: Player wins.  
   - Highest hand (without busting) wins.  
   - A tie results in no points awarded.


6. **Deck:**  
  > - The game uses **6 standard decks** of 52 cards each.  
   - Each card has **24 copies** total (6 decks × 4 copies per card).  
  > - Total: **312 cards**.

---
## **🎮 Buttons and Controls**

- ### `New Deck`: Shuffles and prepares a new deck for gameplay. Use this when cards run low.
- ### `Deal`: Deals initial cards to start each round (2 cards each to player and dealer). The dealers second card is not show until you finish your turn.
- ### `Hit`: Request another card from the deck.
-  ### `Stand`: Ends your turn, letting the dealer finish their play.

---
## 📌 Control Chart

| Button       | Action Description                           |
|--------------|----------------------------------------------|
| `HIT`      | Draw an additional card.                     |
| `STAND`    | End your turn; dealer plays.                 |
| `DEAL`     | Start a new round by dealing initial cards.  |
| `NEW DECK` | Shuffle a fresh 312-card deck.               |

---

## 🎧 Interactive Sound Effects

Immersive sound effects enhance gameplay:

| Sound Effect            | Event Trigger                |
|-------------------------|------------------------------|
| 🔀 **Cards Shuffling**  | Clicking `NEW DECK`   |
| 🃏 **Four Cards Dealt** | Clicking `DEAL`          |
| 🂡 **One Card Dealt**   | Clicking `HIT`           |

---
## 🚀 Future Improvements

- **Multiplayer functionality**
- **Betting and wagering mechanics**
- **Enhanced card animations and visual effects**
- **Adding card counting tool to help keep up the count**

## 🛠 Built With

- HTML5
- CSS3
- JavaScript
- Custom Audio Clips (Generated with AI)
- Custom Images and Art (Generated with AI)

## 📖 Additional Resources
- [Blackjack Rules & Strategies (Bicycle Cards)](https://bicyclecards.com/how-to-play/blackjack)
- [When To Hit/Stand Chart](https://www.blackjackapprenticeship.com/blackjack-strategy-charts/)

> Want to enhance your gameplay by learning to count cards?  
Check out this comprehensive guide:

- [**Blackjack Card Counting Guide**](https://www.blackjackapprenticeship.com/how-to-count-cards/)  
---
### 📚 References & Credits

- Deck-shuffling logic based on the [Fisher–Yates Shuffle Algorithm](https://stackoverflow.com/questions/59810241/how-to-fisher-yates-shuffle-a-javascript-array).

## 👤 Author
Developed by Camie Gray 

---
# 🌟 Enjoy Playing BlakJak! 🃏
