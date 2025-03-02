// This lab provides an opportunity to practice defining and calling functions in JavaScript.

// A quick note before you dive in
// If you find yourself stuck during the lab, we encourage you to revisit the lesson materials first.
// They’re designed to provide you with the information and examples that will help you complete the exercises.

// If you’ve revisited the materials and are still facing challenges, don’t hesitate to collaborate with your classmates.

// Lastly, the internet is filled with resources specific to JavaScript functions.
// Websites like Google, MDN Web Docs on Functions, and Stack Overflow are just a few clicks away.
//  Use these as a last resort before reaching out for help.

// Happy coding!

// Lab Exercises
// Copy and paste each of the following exercises into your JavaScript file.
//  To check your work, open the index.html file in a web browser and inspect the browser console,
//  or run the JavaScript file directly in your terminal using node app.js.

/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log("Exercise 2 Result:", isAdult(21));

// Exercise 3: isCharAVowel()

// Write a function named isCharAVowel that takes a single character as
// an argument. It should return true if the character is a vowel and
// false otherwise. For the purposes of this exercise, the character
// y should not be considered a vowel.

// Example: isCharAVowel('a') should return true.

// Complete the exercise in the space below:

const vowels = new Set("aeiouAEIOU");
function isCharAVowel(char) {
  if (vowels.has(char)) {
    return true;
  } else {
    return false;
  }
}

console.log("Exercise 3 Result:", isCharAVowel("a"));

const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function isCharAVowel1(char1) {
  if (vowel.includes(char1)) {
    return true;
  } else {
    return false;
  }
}

console.log("Exercise 3.1 Result:", isCharAVowel1("b"));

const aVowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function isCharAVowel2(char2) {
  for (let x = 0; x < aVowel.length; x++) {
    if (char2 === aVowel[x]) return true;
  }
  {
    return false;
  }
}
console.log("Exercise 3.2 Result:", isCharAVowel2("b"));

// Exercise 4: generateEmail()

// Create a function named generateEmail. It should take two strings:
// a name and a domain. It should return a simple email address.

// Example: generateEmail('johnsmith', 'example.com')
// should return 'johnsmith@example.com'.

function generateEmail(name, domain) {
  // let x = name
  // let y = domain
  return name + "@" + domain;
}
console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

//  Exercise 5: greetUser()

// Define a function called greetUser. It should take a name and a
// time of day (morning, afternoon, evening) and return a personalized
// greeting.

// Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

function greetUser(name, tod) {
  return "Good " + tod + " " + name;
}

console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

// Exercise 6: maxOfThree()

// Define a function, maxOfThree. It should accept three numbers
// and return the largest among them.

function maxOfThree(...numbers) {
  return Math.max(...numbers);
}

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

function maxOfTree(a, b, c) {
  return Math.max(a, b, c);
}

console.log("Exercise 6.1 Result:", maxOfTree(5, 10, 8));

// Exercise 7: calculateTip()

// Create a function called calculateTip. It should take two arguments:
// the bill amount and the tip percentage (as a whole number).
// The function should return the amount of the tip.

function calculateTip(bill, tip) {
  // let tipPercentage = tip/=100
  // return bill*=tipPercentage
  return (bill *= tip /= 100);
}

console.log("Exercise 7 Result:", calculateTip(50, 20));

// Exercise 8: convertTemperature()
// Write a function named convertTemperature.
// It takes two arguments: a temperature and a string representing the
// scale ('C' for Celsius, 'F' for Fahrenheit).
// Convert the temperature to the other scale.

function convertTemperature(temp, scale) {
  if (scale === "F") {
    results = ((temp - 32) * 5) / 9;
  } else {
    results = (temp * 9) / 5 + 32;
  }
  return results.toFixed(2) + " degrees";
}

console.log("Exercise 8 Result:", convertTemperature(32, "C"));
console.log("Exercise 8.1 Result:", convertTemperature(56, "F"));

// Exercise 9: basicCalculator()

// Create a function named basicCalculator.
// It should take three arguments: two numbers and a string representing
// an operation ('add', 'subtract', 'multiply', 'divide').
// Perform the provided operation on the two numbers.
// In operations where the order of numbers is important,
// treat the first parameter as the first operand and the
// second parameter as the second operand.

function basicCalculator(num1, num2, string1) {
  let ops = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      return a / b;
    },
  };
  if (ops[string1]) {
    return ops[string1](num1, num2);
  }
}

console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));



console.log("I did use chatgpt but only to explain things and check my work. The last one stumped me so chat gpt gave me some really good ideas and i can recreate it at anytime")