const db = require("../data/db-config");
/*
Project requirements: find all recipes, find single recipe by ID, create new recipe, update an existing recipe, delete an existing recipe.
*/
const find = () => {
  return db("recipes");
};
const findById = (recipe_id) => {
  return db("recipes").where({ recipe_id }).first();
};
const addRecipe = async (recipe) => {
  const [recipe_id] = await db("recipes").insert(recipe).returning("recipe_id");
  return findById(recipe_id);
};
const updateRecipe = async (recipe, id) => {
  const [recipe_id] = await db("recipes")
    .update(recipe)
    .where("recipe_id", id)
    .returning("recipe_id");
  return findById(recipe_id);
};
const deleteRecipe = (id) => {
  return db("recipes").where({ recipe_id: id }).del();
};
module.exports = {
  find,
  findById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
