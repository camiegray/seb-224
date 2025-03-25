// Here is where we import modules
import express from "express"
import "dotenv/config";
import mongoose from "mongoose";
import ejs from "ejs"
import Fruit from "./models/fruits.js";



const app = express();
mongoose.connect(process.env.MONGODB_URI);
// server.js
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });
  
  // Import the Fruit model

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs")
  });

  // server.js

// GET /fruits/new
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
  });
  
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
