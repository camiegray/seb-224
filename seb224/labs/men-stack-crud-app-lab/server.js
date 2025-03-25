import express from "express";
import "./db/connections.js";
import methodOverride from "method-override";
import morgan from "morgan";
import { configDotenv } from "dotenv";
configDotenv();
import Planet from "./models/planet.js";

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use(morgan("dev"))
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
    res.render("home");
  });
  
app.get("/planets", (req, res) => {
    res.render("planets/landing.ejs");
  });

app.post("/planets", (req, res) => {
    const { name, description, class: planetClass } = req.body;
    Planet.create({ name, description, class: planetClass })
    .then(() => res.redirect("/planets"))
    .catch((err) => res.status(500).send(err));
});
app.get("/add", (req, res) => {
    res.render("add");
  });
  
app.get("/gas/:id", (req, res)=>{


})
app.get("/rocky/:id", (req, res)=> {
    const {id} = req.params;
    const planet = 
res.render
    
})
app.listen(3000, () => {
  console.log("App is running on port: 3000");
})
