import mongoose from "mongoose"
import "dotenv/config"
import express from "express"
import ejs from "ejs"
const app = express();
import router from "./controllers/auth.js"
import methodOverride from "method-override"
import morgan from "morgan"
import session from "express-session"
import mongstore from "connect-mongo"
// Set the port from environment variable or default to 3000


mongoose.connect(process.env.MONGODB_URI);


// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// Morgan for logging HTTP requests
app.use(morgan('dev'));
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
      }),
    })
  );
app.use("/auth", router);


app.get("/", (req, res) => {
    res.render("index.ejs", {
      user: req.session.user,
    });
  });
  app.get("/vip-lounge", (req, res) => {
    if (req.session.user) {
      res.send(`Welcome to the party ${req.session.user.username}.`);
    } else {
      res.send("Sorry, no guests allowed.");
    }
  });
  
app.listen(3000, () => {
    mongoose.connection.on("connected", () => {
        console.clear()
        console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
      });
      
    let port;
if (process.env.PORT) {
  port = process.env.PORT;
} else {
  port = 3000;
}
});
