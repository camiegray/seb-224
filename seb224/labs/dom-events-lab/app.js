
const display = document.querySelector(".display");

const buttons = document.querySelectorAll(".button.number");
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    display.textContent += button.textContent;
  });
});

const operators = document.querySelectorAll(".button.operator");
operators.forEach((operator) => {
  operator.addEventListener("click", function (event) {
    display.textContent += operator.textContent;
  });
});

const clearButton = document .querySelector(".button.clear") .addEventListener("click", function (event) {
    display.textContent = "";
  });

const equalsButton = document.querySelector(".button.equals") .addEventListener("click", function (event) {
    const expression = display.textContent;
    if (/[0-9+\-*/]*$/.test(expression)) {
      display.textContent = eval(expression);
    } else {
      display.textContent = "Error";
 } });

  
// const calculator = document.querySelector("#calculator").addEventListener ("click", funciton(event) {
//     console.log(event.target.innerText)
// )}
