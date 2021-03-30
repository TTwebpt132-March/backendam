/*
Project requirements:
[GET] all recipes in database - async
[GET] single recipe by ID - async
[POST] new recipe - async
[PUT] edit recipe by ID - async
[DELETE] a single recipe by ID - async
Middleware created: checkRecipeData, checkRecipeId
*/
const express = require("express");
const recipes = require("../models/recipe-model");
const {
  checkRecipeData,
  checkRecipeId,
} = require("../middleware/recipeMiddleware");
const router = express.Router();

//[GET] all recipes in database - async
router.get("/", async (req, res, next) => {
  try {
    const allRecipes = await recipes.find();
    return res.json(allRecipes);
  } catch (err) {
    next(err);
  }
});
//[GET] single recipe by ID - async
router.get("/:id", checkRecipeId, async (req, res, next) => {
  try {
    const singleRecipe = await recipes.findById(req.params.id);
    return res.json(singleRecipe);
  } catch (err) {
    next(err);
  }
});
//[POST] new recipe - async
router.post("/", checkRecipeData, async (req, res, next) => {
  try {
    const {
      title: recipe_title,
      source: recipe_source,
      ingredients: recipe_ingredients,
      instructions: recipe_instructions,
      category: recipe_category,
      photo: recipe_photo_src,
      user_id: user_id,
    } = req.body;
    const newRecipe = await recipes.addRecipe({
      recipe_title,
      recipe_source,
      recipe_ingredients,
      recipe_instructions,
      recipe_category,
      recipe_photo_src,
      user_id,
    });
    return res.json(newRecipe);
  } catch (err) {
    next(err);
  }
});
//[PUT] edit recipe by ID - async
router.put("/:id", checkRecipeId, checkRecipeData, async (req, res, next) => {
  try {
    const {
      title: recipe_title,
      source: recipe_source,
      ingredients: recipe_ingredients,
      instructions: recipe_instructions,
      category: recipe_category,
      photo: recipe_photo_src,
      user_id: user_id,
    } = req.body;
    const updatedRecipe = await recipes.updateRecipe(
      {
        recipe_title,
        recipe_source,
        recipe_ingredients,
        recipe_instructions,
        recipe_category,
        recipe_photo_src,
        user_id,
      },
      req.params.id
    );
    return res.json(updatedRecipe);
  } catch (err) {
    next(err);
  }
});
//[DELETE] a single recipe by ID - async
router.delete("/:id", checkRecipeId, async (req, res, next) => {
  try {
    const { id } = req.params;
    await recipes.deleteRecipe(id);
    return res.json({
      message: `The requested recipe has been deleted.`,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
