import express from "express"
const app = express();

const inventory = [
    { name: 'Candle', qty: 4 },
    { name: 'Cheese', qty: 10 },
    { name: 'Phone', qty: 1 },
    { name: 'Tent', qty: 0 },
    { name: 'Torch', qty: 5 }
  ]

app.get('/', (req, res) => {
    console.log("bananas")
  res.render('home.ejs', {
    msg: "Welcome tinfoil",
    player: {
        name: "crazies",
    },
    inventory: inventory,
    });
});

app.get("/:itemID", (req, res)=> {
console.log(req);

})


app.listen(3000, () => {
  console.log('Listening on port 3000');
});
