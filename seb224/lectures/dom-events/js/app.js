// DOM events final

// Variables
let likeCount = 0;
let dislikeCount = 0;

// Cached elements
const ulEl = document.querySelector("ul");
const inputEl = document.querySelector("input");
const divElement = document.querySelector("div");
const likesEl = document.querySelector("#like-count");
const dislikeEl = document.querySelector("#dislike-count");
const commentBtn = document.querySelector("#comment-button");

// Event handlers
const commentHandler = (event) => {
  // Create a li and put the input value as its text value
  const liEl = document.createElement("li");
  liEl.textContent = inputEl.value;
  // Append the li to the Comments ul
  ulEl.appendChild(liEl);
  // Delete the input text once its been appended to the ul
  inputEl.value = "";
};

const handleReaction = (event) => {
  if(event.target.localName === 'div') {
    console.log('Youre clicking the div')
  }
  if (event.target.id === "like-button") {
    likeCount += 1;
    likesEl.textContent = `Likes: ${likeCount}`;
  }
  if (event.target.id === "dislike-button") {
    dislikeCount += 1;
    dislikeEl.textContent = `Dislikes: ${dislikeCount}`;
  }
};

// Event listeners
divElement.addEventListener("click", handleReaction);
commentBtn.addEventListener("click", commentHandler);