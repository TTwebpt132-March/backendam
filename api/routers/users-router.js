/*Project requirements: CRUD - USERS (create new user in auth-router)
GET all users, 
GET users by ID, 
PUT (update) a user by ID,
DELETE a user by ID
GET all recipes by a user's ID ** - for project's stretch goal
Middleware - none
*/
const express = require("express");
const users = require("../models/users-model");
const bcrypt = require("bcryptjs");

const router = express.Router();

//[GET] all users
router.get("/", async (req, res, next) => {
  try {
    const allUsers = await users.find();
    res.json(allUsers);
  } catch (err) {
    next(err);
  }
});
//[GET] single user by ID
router.get("/:id", async (req, res, next) => {
  try {
    const singleUser = await users.findById(req.params.id);
    res.json(singleUser);
  } catch (err) {
    next(err);
  }
});
//[PUT] update single user by ID
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      username: user_username,
      password: user_password,
      email: user_email,
    } = req.body;
    const updateUser = await users.updateUser({
      user_username,
      user_password: await bcrypt.hash(user_password, process.env.HASH_LOOP),
      user_email,
    });
    res.json(updateUser);
  } catch (err) {
    next(err);
  }
});
//[DELETE] single user by ID
router.delete("/:id", async (req, res, next) => {
  try {
    await users.deleteUser(req.params.id);
    res.json({
      message: `The requested user has been deleted.`,
    });
  } catch (err) {
    next(err);
  }
});
//[GET] all recipes by user's ID
router.get("/:id/recipes", async (req, res, next) => {
  try {
    const usersRecipes = await users.recipesByUser(req.params.id);
    res.json(usersRecipes);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
