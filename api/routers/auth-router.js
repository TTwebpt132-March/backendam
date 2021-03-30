/* Project requirements: Register and Login a user (POST for each) with checkForData, checkUsername, checkLogin, and checkEmail Middleware */
require("dotenv").config();
const express = require("express");
const model = require("../models/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const {
  checkForData,
  checkLogin,
  checkUsername,
  checkEmail,
} = require("../middleware/authMiddleware");

//Create a new User (Register)
router.post(
  "/register",
  checkForData,
  checkUsername,
  checkEmail,
  async (req, res, next) => {
    try {
      const {
        username: user_username,
        password: user_password,
        email: user_email,
      } = req.body;
      const newUser = await model.addUser({
        user_username,
        user_password: await bcrypt.hash(user_password, process.env.HASH_LOOP),
        user_email,
      });
      return res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  }
);
// Logging in an existing model with a POST request:
router.post("/login", checkLogin, async (req, res, next) => {
  try {
    const { username: user_username } = req.body;
    const validUser = await model.findByUsername(user_username);
    if (!validUser) {
      return res.status(401).json({ message: "User does not exist" });
      //change to invalid credentials after testing - APN
    }
    //Testing: delete after and just use bcrypt:
    if (req.user_password !== validUser.user_password) {
      return res.status(401).json({
        message: `password does not match on file: ${validUser.user_password}`,
      }); //change to invalid credentials after testing - APN
    }
    const passwordValid = await bcrypt.compare(
      req.body.user_password,
      validUser.user_password
    );
    if (passwordValid === false) {
      return res.status(401).json({
        message: "invalid credentials provided",
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
      message: `${validUser.user_username} has been logged in!`,
      token: `${token}`,
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
