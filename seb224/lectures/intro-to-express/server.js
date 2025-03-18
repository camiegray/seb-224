// Import Express
import express from "express"
import morgan from "morgan"


// Create an Express app
const app = express();
app.use(morgan("dev"))

// Define routes here (we'll add them soon)

app.get("/home", (req, res) => {
  res.send (
    "<h1>Home Page</h1>"
  )

})

app.get("/", (req, res) => {
  res.send (
    "<h1>Hello World</h1>"
  )

})
app.get("/:id", (req, res) => {
  console.log(req.params)
  res.send(`<h1>id: ${req.params.id}</h1>`);
});


app.get("/greet/:name", (req, res) => {
  const {name} = req.params
  res.send(`<h1> greetings ${req.params.name} </h1>`)
})

// Listen for requests on port 3000
app.listen(3000, () => {
  console.log("Express app is running on port 3000");
});
