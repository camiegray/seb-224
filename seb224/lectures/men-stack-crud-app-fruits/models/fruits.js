// Here is where we import modules
import express from "express"
import "dotenv/config";
import mongoose from "mongoose";
import ejs from "ejs"


const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
  });
  const Fruit = mongoose.model("Fruit", fruitSchema); //

  // models/fruit.js

  export default Fruit;