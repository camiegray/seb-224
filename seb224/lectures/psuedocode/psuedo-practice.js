// Pseudocode practice



//1. Sum of Two Numbers

    //Declare a function that identifies the sum with two values inside of a and b
    //Let sum equal the addition of those
    //Return the sum


    function sum(a, b) {
        let sum = a+b;
        return sum;
    }
    console.log(sum(4, 5));

//2. Find the Maximum of Three Numbers
    
    // Define the three numbers by assigning each number a variable
    // Declare a math.max() function with each of the three vriables within the parenthesis
    // Give that results a variable called maximum
    // Console log the new variable maximum

    let num1 = 10
    let num2 = 11
    let num3 = 12
 
    let maximum = Math.max(num1, num2, num3) 
        


    
    console.log("The maximum is", maximum);


//3. Check if a Number is Even or Odd
    function evenOdds(number) {
        if (number % 2 === 1)  {
        return"The number is odd"
        } 


        else { 
         return "The number is even"
     }
}
    console.log(evenOdds(6))


//4. Reverse a String
    // Declare a function called preVerse with a single parameter called name
    // Iniated a variable called postVerse that splits the name, reverse its, and then joings
    // Return the results that is called postVerse
    // Console log to call the functions with arguments defined

    function preVerse(name) {
        let postVerse= name.split("").reverse().join('');

        return postVerse
        
    }

    console.log(preVerse("Camie"))


//5. Find the Factorial of a Number
    // Declare a function named fact with variable A for the intended factorial
    // Declare a loop function where  i start at 1 and increase by 1 as long is it is less than or equal to the variable a
    // Apply a factorial modifier to results and then return them
    // Console log the variable A if not already defined
  
    function fact(a) {
       let results= 1
        for (let i = 1; i <= a; i++) {
        results*= i;
        }
        return results;
    }
    console.log(fact(5));
 
 
 // 6. Check if a Word is a Palindrome
    // Declare a funtion with variable str as the attribute
    // Let the results be assigned to variable palin
    // Split the attribute and reverse it prior to joining them
    // If results variable and the argument of the function and === to each other then return a boolean


    function isPal(str) {}
    let palin= str.split("").reverse().join("");
        return palin=== str;


    // if (palin === str) {
    //     return true
    // }
    // else {
    //     return "False"
    // }

 }

    console.log(isPal("Camie"))



//7. Find the Largest Number in an Array

    function theBiggest(arr) {
        return Math.max(...arr)


    }
    let arr= [5, 7, 87, 19, 119, 86, 45]
    console.log(theBiggest(arr))

    function highTemp(degrees) {
        let highest = degrees[0] 


        for (i= 0; i < degrees.length; i++) {
        
        if (degrees[i] > highest) {
            highest= degrees [i]

       

               }       
                
            }
            
    return highest
}


    let degrees = [20, 14, 4, 3, 1, 5, 7, 77]
    console.log(highTemp(degrees))

//8. Count the Number of Vowels in a String
const str = "Hello World!";
const regex = /[aeiouAEIOU]/g;  // Regex to match vowels, with global search (g flag)

const vowels = str.match(regex);  // Find all vowels in the string

console.log(vowels);  // Logs the vowels found: ['e', 'o', 'o']

//9. Remove Duplicates from an Array

//10. FizzBuzz  
    


// If a number is divisible by 3, print "Fizz".
// If a number is divisible by 5, print "Buzz".
// If a number is divisible by both 3 and 5, print "FizzBuzz".