// Let’s practice creating, modifying, and iterating over an array of strings!

// Assign an empty array to a variable named books.
// Add ‘The Shining’ and ‘Pride and Prejudice’ or 2 other books of your choice to the books array.
// console.log() the second element of books.
// Update the second element by assigning to it ‘Dune’ or another book of your choice.
// Iterate over the entire books array and co

const books = [
  "The Shining",
  "Pride and Prejudice",
  "Harry Potter",
  "The Expanse",
];

let secondBook = books[1];
console.log(secondBook);

books[1] = "HiHi";
console.log(books);

books.unshift("Barbie");
console.log(books);

for (let book of books) {
    console.log("Another iteration");
    if (book === "Barbie") continue;
    if (book === "Harry Potter") break;
    console.log(book);
  }
   const booksCopy = [...books];

   console.log(booksCopy)

const slicedBooks = books.slice(2);

console.log(slicedBooks)

console.log("HERE")
console.log(books);
console.log(slicedBooks);

books [1] = "yo momma"
console.log("HERffffE")

console.log(books);
console.log(slicedBooks);

// for (let i = 0; i < books.length, i++ )
//     books.forEach( (book, index) =>  {console.log(book)} )
// console.log(books.at(-2))
// console.log(books.shift())

// const numsToSum = [2, 4, 6];
// let sum = 0 ;

// numsToSum.forEach((num) => {
//   sum = sum + num;
// sum will not be retained between iterations and will not
// be available outside of the callback function
// });

// console.log(sum);
// sum will be 12
vvvv