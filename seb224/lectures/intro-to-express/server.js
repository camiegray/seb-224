// Import Express
import express, { request } from "express"

// Create an Express app
const app = express();


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
// Listen for requests on port 3000
app.listen(3000, () => {
  console.log("Express app is running on port 3000");
});
