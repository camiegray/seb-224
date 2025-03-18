import express from "express"
import morgan from "morgan"


// Create an Express app
const app = express();
app.use(morgan("dev"))

// Define routes here (we'll add them soon)

app.get("/greetings/:name", (req, res) => {
  res.send (
    `<h1>Hi there ${req.params.name} </h1>`
  )

})
app.get("/roll/:number", (req, res) => {
    const num = +req.params.number;
    if (!isNaN(num)) {
      const randomInt = Math.floor(Math.random() * (num + 1)); 
      res.send(`<h1>You rolled a ${randomInt}</h1>`);
    } else {
      res.send("<h1>You must specify a valid number</h1>");
    }
  });

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get("/collectibles/:index", (req, res) => {
    const index = +req.params.index;
    if (isNaN(index) && index <= collectibles.length) {
      return res.send("<h1>This item is not yet in stock. Check back soon!</h1>");
    }
    else {const { name, price } = collectibles[index];
    res.send(`<h1>So, you want the ${name}? For ${price}, it can be yours!</h1>`);
    
  });

app.listen(3000, () => {
    console.log("Express app is running on port 3000");
  });
  