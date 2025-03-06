// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) return len;

  // Remove the first letter of the string
  let restOfString = str.substring(1);

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}

let nums = [1, 2, 3, 4];
function sumOfArray() {
  let sum = 0;
  nums.forEach((num) => {
    sum = num + sum;
  });
  return sum;
}
console.log(sumOfArray());

let array2 = [1, 2, 4, 5, 6];
function findMax() {
  let max = array2[0];
  for (let num of array2) {
    if (num > max) max = num;
  }
  return max;
}
console.log(findMax());


function factorial(factor) {
    if (factor >1 ) { 
        return factor * factorial(factor - 1);  
    } else {
        return 1;  
    }
}

console.log(factorial(5));  


  

//   function fibonacci() {
    const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

    function fibonacci(index) {
        let result = null;
        fibonacciSequence.forEach((value, i) => {
            if (i === index) {
                result = value;
            }
        });
        return result;
    }
    
    console.log(fibonacci(8));  // Output: 34
    
    
//   function coinFlips() {
//     // This function returns an array of all possible outcomes from flipping a coin N times.
//     // Input type: Integer
//     // For example, coinFlips(2) would return the following:
//     // ["HH", "HT", "TH", "TT"]
//     // H stands for Heads and T stands for tails
//     // Represent the two outcomes of each flip as "H" or "T"
//   }

//   function letterCombinations() {
//     // This function returns an array of all combinations of the given letters
//     // Input type: Array of single characters
//     // For example, letterCombinations(["a","b","c"]) would return the following:
//     // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
//   }
