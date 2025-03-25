import express from "express";
import "./db/connections.js";
import methodOverride from "method-override";
import morgan from "morgan";
import { configDotenv } from "dotenv";
configDotenv();
import Planet from "../models/planets.js";

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
      .then((newPlanet) => {
        // Normalize the class value to lower case for consistency
        const planetType = newPlanet.class.toLowerCase();
  
        if (planetType === "gas" || planetType === "gas giant") {
          res.redirect("/planets/gas");
        } else if (planetType === "rocky") {
          res.redirect("/planets/rocky");
        } else {
          // Fallback redirect if the class doesn't match expected types
          res.redirect("/planets");
        }
      })
      .catch((err) => res.status(500).send(err));
  });
  
app.get("/add", (req, res) => {
    res.render("add");
  });
  
  app.get("/planets/gas", (req, res) => {
    Planet.find({ class: /gas/i }) // Using regex for case-insensitive matching
      .then((planets) => res.render("planets/gas", { planets }))
      .catch((err) => res.status(500).send(err));
  });
  
  // Route to display rocky planets
  app.get("/planets/rocky", (req, res) => {
    Planet.find({ class: /rocky/i })
      .then((planets) => res.render("planets/rocky", { planets }))
      .catch((err) => res.status(500).send(err));
  });
app.listen(3000, () => {
  console.log("App is running on port: 3000");
})
