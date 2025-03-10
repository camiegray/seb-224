# BlakJak

A card game to practice beating the real tables at! Mimics the BlackJack card game or 21. With 2 cards given at random to the player and the computer you can add a card or stop adding based on if you think you will be the closest to 21 while only seeing one of two cards that the dealer has.
 #### **Landing View**
    
 ![image1](https://i.imgur.com/SmUSV9a.jpeg)

---
#### **Results**
![image2](https://i.imgur.com/IzuM29O.jpeg)
 ---
## **User Stories**
---

### MVP Goals
---
1. As a user, I want to a starting page that is visually appealling and extremely apparent that it is a game and what kind it is.

2. As a user, I want to see all the option for gameplay in viable locations across the page that make interaction intuitive and easy to learn.

3. As a user, I want the availability of those buttons to be easily accessible and perform a very obvious function.

4. As a user, I want a display to show the card count number to be vibrant and hard to miss so that I can make informed decision on my next selection.

5. As a user, I want it to be very apparent what the computer's choices are as well as that plays a vital role in my own decisions.



6. As a user, I want to make sure I know that status of every round of gameplay and who has won the round

7. As a user, I wan to a clear option to restart the game at any point 

8. As a user, I want to see the count of win/loss by myself (Player 1) and the computer.

9. As a user, I want to deal the cards again and make sure that I can continue practicing.


### Stretch Goals
1. As a user, I would like a betting function be implemented

2. As a user, I would like to have an option to increase the amount of decks to be played with.

3. As a user, I would like a card counting function to be implemented that way I can keep track of the cards to help with the legal strategy of counting cards.

4. As a user, I would like a reshuffle button to reshuffle the deck.

5. As a user, I would like animations to make the game more enjoyable.

6. As a user, I want to know why I have won/lost/tie, indicating if I did not reach the endgame identifier or the computer did better etc.

7. As a user, would like to add a `split` button that will match the card game rules.


## **Psuedocode**
---
* There will be `playerScore` and `dealerScore` variables indicating the current score of the round.

* There will be `playerHand` and `dealerHand` variables indicating the current numbers/cards that are being dealt to the player.

* The `DEAL`, `STAND`, and `HIT` buttons will contain the dealing of the cards, keeping your current cards, and adding a single card, functionality with a `New Deck` button to clear the current game or ended game and restart with a new shuffled deck.

* Will need a `display` to show the current card count of the `playerHand` and `dealerHand` named `currentHand` to help the play not lose count or have to continously look at their hand. (For ease of gameplay)

* Using `.push` or `.unshift` functions will help push any cards that are given to the player by the `deal` or `hit` buttons to their hand.

* Need to use `for` or `if` statement to indicate how the computer will select if it uses the `hit` or `stand` option.

* Event listeners will be added for button clicks that will reference cached elements to perform a function that the button is assigned.

* A `checkGameEnd` function that checks the win/loss condition to end the game and display...

* Message function that will display when the round is complete, indicating which player has won the round.
 
* Will need to create a function for the iconic blackjack card pair that auto wins the match, disabling any `hit` or `stand` functionality.

* Create a `createDeck` function to generate a standard deck of 52 cards, the runs in conjunction with the `init()` and the 

* Create CSS that provides a function flexbox layout that is visually appealling, user-friendly, and functional.

* Will have a rules button that displays the current set of rules for the game and the contents of the deck.

> ## ***Timeline***

| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Monday     |   | Create proposal                    |      N/A |                 |
| Tuesday    |   | Desing html and css                | Flexbox  |                 |
| Wednesday  |   | Javascript                         |  Cached  |                 |
| Thursday   |   | Javascript                         | optimize |                 |
| Friday     |   | Bring it all together              |          | Will be hard    |
| Saturday   |   | Perfect it                         |          | Yay             |
| Monday     |   | Presentation Day                   |          |                 |
