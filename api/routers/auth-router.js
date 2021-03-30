/* Project requirements: Register and Login a user (POST for each) with checkForData, checkUsername, checkLogin, and checkEmail Middleware */
require("dotenv").config();
const express = require("express");
const model = require("../models/users-model");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const router = express.Router();

//Create a new User (Register)
router.post("/register", async (req, res, next) => {
  try {
    const {
      username: user_username,
      password: user_password,
      email: user_email,
    } = req.body;
    const findUser = await model.findBy({ user_username }).first();
    if (findUser) {
      return res.status(409).json({
        message: "This username was already taken",
      });
    }
    const newUser = await model.addUser({
      user_username,
      user_password: await bcrypt.hash(user_password, 10),
      user_email,
    });
    return res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});
// Logging in an existing model with a POST request:
router.post("/login", async (req, res, next) => {
  try {
    const { username: user_username, password: user_password } = req.body;
    const findUser = await model.findByUsername(user_username);
    if (!findUser) {
      res
        .status(401)
        .json({ message: "Invalid credentials. (USER not Found)" });
    }
    const findPass = await bcrypt.compareSync(
      user_password,
      findUser.user_password
    );
    if (!findPass) {
      return res.status(401).json({
        message: `Invalid credentials. (PASSWORD doesn't match ${user_password} vs. ${findUser.user_password})`,
      });
    }
    const token = jwt.sign(
      {
        subject: req.user_username,
        user_id: req.user_id,
        expiresIn: "24h",
        successfulLogin: true,
      },
      process.env.SECRET_JWT
    );
    res.cookie("token", token);
    res.status(200).json({
      message: `${findUser.user_username} has been logged in!`,
      token: `${token}`,
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
