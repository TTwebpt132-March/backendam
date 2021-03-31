const db = require("../data/db-config");
/* Project Needs:
find, findById, async findBy(any), async update, async add, delete, async findRecipesByUser
*/
const find = () => {
  return db("users");
};
const findById = (id) => {
  return db("users").select("*").where({ user_id: id }).first();
};
const findByUsername = async (username) => {
  const data = await db("users as u")
    .where("u.user_username", username)
    .select("*")
    .first();
  return data;
};
const findBy = (filter) => {
  return db("users").select("*").where(filter);
};
const updateUser = async (body, id) => {
  const [user_id] = await db("users")
    .update(body)
    .where("user_id", id)
    .returning("user_id");
  return findById(user_id);
};
const addUser = async (user) => {
  const [user_id] = await db("users").insert(user).returning("user_id");
  return findById(user_id);
};
const deleteUser = (user_id) => {
  return db("users").where({ user_id }).del();
};
const recipesByUser = async (id) => {
  const user = await db("users as u")
    .where("u.user_id", id)
    .select("u.user_id", "u.user_username")
    .debug();
  const recipes = await db("recipes as r").where("r.user_id", id).select("r.*");
  return {
    user_id: user[0].user_id,
    user_username: user[0].user_username,
    recipes: recipes.map((r) => {
      return {
        id: r.recipe_id,
        title: r.recipe_title,
        recipe_source: r.recipe_source,
        recipe_ingredients: r.recipe_ingredients,
        recipe_instructions: r.recipe_instructions,
        recipe_category: r.recipe_category,
        recipe_photo_src: r.recipe_photo_src,
      };
    }),
  };
};
module.exports = {
  find,
  findById,
  findByUsername,
  findBy,
  updateUser,
  addUser,
  deleteUser,
  recipesByUser,
};
