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
    const num = Number(req.params.number);
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
    }
  });





  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];
  
  const filterShoes = ({ "min-price": minPrice, "max-price": maxPrice, type } = {}) => {
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;
    return shoes.filter(shoe =>
      shoe.price >= min &&
      shoe.price <= max &&
      (!type || shoe.type === type)
    );
  };
  
  app.get("/shoes", (req, res) => {
    res.send(filterShoes(req.query));
  });
  
app.listen(3000, () => {
    console.log("Express app is running on port 3000");
  });
  