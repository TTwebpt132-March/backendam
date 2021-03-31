require("dotenv").config();
const bcrypt = require("bcryptjs");
exports.seed = async function (knex) {
  /*  knex.schema.createTable("users", (users) => {
    users.increments("user_id");
    users.string("user_username", 20).notNullable();
    users.string("user_password", 25).notNullable();
    users.string("user_email", 100).notNullable();
    users.timestamps(false, true); */

  knex("users").insert([
    {
      user_id: 1,
      user_username: "MaloryArcher",
      user_password: "guest",
      user_email: "malory@isis.com",
    },
    {
      user_id: 2,
      user_username: "SterlingArcher",
      user_password: "woodhouse",
      user_email: "sterling@isis.com",
    },
    {
      user_id: 3,
      user_username: "LanaKane",
      user_password: "Abbiejean123",
      user_email: "lana@isis.com",
    },
    {
      user_id: 4,
      user_username: "CyrilFiggis",
      user_password: "elcantador",
      user_email: "cyril@isis.com",
    },
  ]);
};
