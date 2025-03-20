import express from "express"
const app = express();

app.get('/', (req, res) => {
    console.log("bananas")
  res.send('The server is running!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
