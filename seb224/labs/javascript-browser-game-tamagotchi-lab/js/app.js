// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.


let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}
 
let timer 

let gameover


const boredomBtn = document.createElement("boredom-btn").addEventListener("click")
const hungerBtn = document.createElement("hunger-btn").addEventListener("click")
const sleepinessBtn = document.createElement("sleepiness-btn").addEventListener("click")

const playBtn = document.createElement("play-btn").addEventListener("click")
const sleepBtn = document.createElement("sleep-btn").addEventListener("click")
const feedBtn = document.createElement("feed-btn").addEventListener("click")

const resetBtn = document.createElement("reset-btn").addEventListener("click")
const gameMesage = document.createElement("game-message").addEventListener("click")
