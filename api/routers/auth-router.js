/* Project requirements: Register and Login a user (POST for each) with checkForData, checkUsername, checkLogin, and checkEmail Middleware */
const express = require("express");
const user = require("../models/users-model");
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
  checkForData(),
  checkUsername(),
  checkEmail(),
  async (req, res, next) => {
    try {
      const {
        username: user_username,
        password: user_password,
        email: user_email,
      } = req.body;
      const newUser = await user.add({
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
// Logging in an existing user with a POST request:
router.post("/login", checkLogin(), async (req, res, next) => {
  try {
    const { username: user_username } = req.body;
    await user.findBy({ user_username }).first();
    const token = jwt.sign(
      {
        userID: user.user_id,
        username: user.user_username,
      },
      process.env.SECRET_JWT
    );
    res.cookie("token", token);
    res.json({
      message: `${user.user_username} has been logged in!`,
      token: `${token}`,
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
