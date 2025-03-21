import express from "express";
import "dotenv/config";
const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(3000, () => {
    
    console.log(`${process.env.SECRET_PASSWORD}`)
  console.log('Listening on port 3000');
});
