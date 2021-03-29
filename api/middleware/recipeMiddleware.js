/* 
Project Requirement that will need middleware:
-1- Check for all required properties in the req.body (title, ingredients, instructions, and category are required)
-2- Check that an ID corresponds to an existing recipe in the database.
*/
const recipes = require("../models/recipe-model");

const checkRecipeData = (req, res, next) => {
  const { title, ingredients, instructions, category, user_id } = req.body;
  if (!Object.keys(req.body).length) {
    return res.status(409).json({
      message: "No data was sent to the server",
    });
  }
  if (!title || !ingredients || !instructions || !category || !user_id) {
    return res.status(409).json({
      message:
        "The following are required for the recipe: 'title', 'ingredients', 'instructions', 'category', and 'user_id'. There is also an optional 'recipe_source' that can be added.",
    });
  }
  next();
};
const checkRecipeId = async (req, res, next) => {
  try {
    const recipe = await recipes.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        message: "There was no recipe found with the ID provided.",
      });
    }
  } catch (err) {
    next(err);
  }
};
module.exports = {
  checkRecipeData,
  checkRecipeId,
};
