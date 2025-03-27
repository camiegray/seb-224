import { Router } from "express";
const router = Router();
import User from "../models/user.js";
import bcrypt from "bcrypt";

router.get("/sign-up", (req, res) => {
  res.render("auth/sign-up.ejs");
});

router.post("/sign-up", async (req, res) => {
  if (req.body.password !== req.body.confirmPassword) {
    return res.send("Password and Confirm Password must match");
  }

  const userInDatabase = await User.findOne({ username: req.body.username });
  if (userInDatabase) {
    return res.send("Username already taken.");
  }
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  // validation logic

  const user = await User.create({
    username: req.body.username,
    password: hashedPassword,
  });

  res.send(`Thanks for signing up ${user.username}`);
});

router.get("/sign-in", (req, res) => {
  res.render("auth/sign-in.ejs");
});

router.post("/sign-in", async (req, res) => {
  const userInDatabase = await User.findOne({ username: req.body.username });
  if (!userInDatabase) {
    return res.send("Login failed. Please try again.");
  }
  const validPassword = bcrypt.compareSync(
    req.body.password,
    userInDatabase.password
  );
  if (!validPassword) {
    return res.send("Login failed. Please try again.");
  }

  res.send("Request to sign in received!");
});

export default router;
