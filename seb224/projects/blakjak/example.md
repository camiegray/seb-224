
# Project Proposal Example (omit from your own file)

# To do's (omit from your own file when done)
- Read the [project requirements](https://generalassembly.instructure.com/courses/713/pages/browser-based-game-project-journey-start-here?module_item_id=61592)
- Your choice of game
- The GitHub repository for your project
    - Create files `index.html` `style.css` `app.js` `README.md` `PROPOSAL.md`
- User stories (MVP and stretch goals)
- Wire frames
- Pseudocode for the overall gameplay
- Any game-specific additional requirements (API used for data etc)
- Create a rough timeline of the project week
- Set up at least one 1:1 with Emre for Project Week [here](https://calendly.com/emre-surmeli/1-1s-with-ga) 👈

## Tic Tac Toe 
Project Choice as Title (Tell us which project you're doing!)

## Project Description 

My app is called Tic Tac Toe. It's a game app for players who want to play Tic Tac Toe online. Two players can join an online game and play a round of Tic Tac Toe, with the score being kept automatically and game results displayed at then end of a round -- whichever player won, or in the case of a draw, a tie between the users. Users will have the option to play again. In the future, I'd like to add a feature where one player can play against the computer. 

## Wire Frames

**Initial Landing View**

![image](https://media.git.generalassemb.ly/user/21811/files/0f7aee00-c1d9-11ea-9dad-de086a5c91fc)

**Results View**

![image](https://media.git.generalassemb.ly/user/21811/files/1a358300-c1d9-11ea-95da-6c14aefb0f18)

## User Stories

#### MVP Goals

- As a player, I want my game to recognize three ticks in a row so that I know who won.
- As a player, I would like to be informed when the game is over due to a tie.
- As a player, I would like to know whose turn it is so that I don't have to keep track.
- As a player, I would like to be informed with some indication when I mark a game box so that I know my selection worked.
- As a player who requires assistive technologies, I would like accessibility features so that I'm not left out of enjoying the game.
- As a player I would like to be able to restart the game after a win, loss or tie.
- As a player, I want the UI to be engaging and out of the way so that I enjoy the experience of playing the game.\*\*

#### Stretch Goals

- As a player, I would like a victory animation when I win the game, so that I feel good about my victory!
- As a player, I would like to hear an audible sound when I mark a game box so that I know my selection worked.
- As a player, I would like to play this game online so that I don't have to have my challenger sitting next to me.
- As a player who wants to dominate the battlefield I want to become the ultimate tic tac toe tactician so I can beat all of my opponents

## Pseudocode
```js
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
```

#### Notionboard Template
Notionboard template for building projects ( You can use this for any project )
https://www.notion.so/GA-Unit-3-Tunr-Lab-da2c82fafd4e4a7aa654676732db9ee3

#### Timeline - Daily Accountability
Example of a Timeline to keep organized and on task for hitting goals every single day you’re on the sprint for your project.

Create your own table using this markdown table generator website:
https://www.tablesgenerator.com/markdown_tables

Do not neglect to plan, you will thank yourself later for being proactive!
| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Thursday   |   | Create and present proposal        |          |                 |
| Friday     |   | Create html, js, css files         |          |                 |
| Saturday   |   | Create basic scaffolding           |          |                 |
| Sunday     |   | Add functionality                  |          |                 |
| Monday     |   | Add styling                        |          |                 |
| Tuesday    |   | Finaliza MVP                       |          |                 |
| Wedenesday |   | Work on stretch goals              |          |                 |
| Thursday   |   | Work on icebox items if applicable |          |                 |
| Friday     |   | Presentation Day!                  |          |                 |
|            |   |                                    |          |                 |
