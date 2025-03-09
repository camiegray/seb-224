#  Writing a Function in JavaScript

![Learning Markdown](https://plus.unsplash.com/premium_photo-1682464699619-1cb44ff3175e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D)


In JavaScript, functions are blocks of reusable code. They allow you to bundle functionality, make it more readable, and avoid repetition. Here's a brief tutorial on writing an arrow function in JavaScript.

## 1. Basic syntax

const functionName = (params) => {
  // code to be executed
}

1. **const**: const should be used whenever a function expression is assigned to a variable.
2. **The function name**: The name you choose for the function.
3. **The arrow syntax**: Indicates that this will be a function.
4. **The body**: The statements that make up the function itself. Surrounded by curly braces.

#### *Example:*

```const greet` = (name) => {
  console.log ("Hello, " + name + "!");
}```

> Tip: Functions often perform actions, so naming with a verb can make it clear what the function does. Examples include fetchData( ), calculateArea( ), or printReport( ). 


# 2. Calling a function

To execute the function, you call or invoke it by using its name followed by parentheses.

#### *Example:*

`greet('Alice');` // Outputs: Hello, Alice!

## 3. Return values

Functions can process data input and output a value using the return keyword.

#### *Example:* 

```const addNums `= (numA, numB) => {
  return numA + numB
}```

`const total = addNums(2, 4);`

`console.log(total)` // Expected value: 6

For more information on functions and how they are used in JS, check out the MDN docs. 
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)


VS Code supports Markdown files out of the box. Simply save your document with an .md extension. This allows you to effortlessly switch between the code view and a live preview of your Markdown content. If you have an existing Markdown document, you can easily open and modify it within VS Code as well.

You can view a preview side-by-side with the file you are editing and see changes reflected in real-time as you edit.

Use these keyboard shortcuts to open a preview tab in VS Code:

Mac: ⌘ Command + K followed by V
Windows/Linux: Ctrl + K followed by V