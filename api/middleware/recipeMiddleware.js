/* 
Project Requirement that will need middleware:
-1- Check for all required properties in the req.body (title, ingredients, instructions, and category are required)
-2- Check that an ID corresponds to an existing recipe in the database.
*/
const recipes = require("../models/recipe-model");

module.exports = {
  checkRecipeData,
  checkRecipeId,
};
