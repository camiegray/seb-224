import express from "express";
import "./db/connections.js";
import methodOverride from "method-override";
import morgan from "morgan";
import { configDotenv } from "dotenv";
configDotenv();
import Planet from "./models/planets.js";

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/planets", (req, res) => {
  res.render("planets/landing");
});

app.post("/planets", (req, res) => {
  const { name, description, class: planetClass } = req.body;
  Planet.create({ name, description, class: planetClass })
    .then((newPlanet) => {
      const planetType = newPlanet.class.toLowerCase();

      if (planetType === "gas" || planetType === "gas giant") {
        res.redirect("/planets/gas");
      } else if (planetType === "rocky") {
        res.redirect("/planets/rocky");
      } else {
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

app.get("/planets/rocky", (req, res) => {
  Planet.find({ class: /rocky/i })
    .then((planets) => res.render("planets/rocky", { planets }))
    .catch((err) => res.status(500).send(err));
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedPlanet = await Planet.findByIdAndDelete(req.params.id);
    if (!deletedPlanet) return res.status(404).send("Planet not found");
    res.redirect("/planets");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/edit/:id", async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id);
    if (!planet) return res.status(404).send("Planet not found");
    res.render("edit", { planet });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/edit/:id", async (req, res) => {
  const { name, description, class: planetClass } = req.body;
  try {
    const updatedPlanet = await Planet.findByIdAndUpdate(
      req.params.id,
      { name, description, class: planetClass },
      { new: true, runValidators: true }
    );
    if (!updatedPlanet) return res.status(404).send("Planet not found");

    const category = updatedPlanet.class.toLowerCase().includes("gas")
      ? "gas"
      : "rocky";
    res.redirect(`/planets/${category}/${updatedPlanet._id}`);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/planets/gas/:id", async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id);
    if (!planet) return res.status(404).send("Planet not found");
    res.render("show", { planet, category: "gas" });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Show a specific rocky planet
app.get("/planets/rocky/:id", async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id);
    if (!planet) return res.status(404).send("Planet not found");
    res.render("show", { planet, category: "rocky" });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("App is running on port: 3000");
});
