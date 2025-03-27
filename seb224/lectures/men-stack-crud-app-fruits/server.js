// Here is where we import modules
import express from "express"import "dotenv/config";
import mongoose from "mongoose";
import ejs from "ejs"
import Fruit from "./models/fruits.js";

import "./db/connection.js";

import fruitsRouter from "./controllers/fruits.js";

const PORT = process.env.PORT || "3000";
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.set("view engine", "ejs");

// Routes
app.use("/", fruitsRouter);

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs")
  });

  // server.js

// GET /fruits/new
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
  });
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
  });