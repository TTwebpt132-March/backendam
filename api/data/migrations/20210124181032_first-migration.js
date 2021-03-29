exports.up = async (knex) => {
  await knex.schema.createTable("users", (users) => {
    users.increments("user_id");
    users.string("user_username", 20).notNullable();
    users.string("user_password", 25).notNullable();
    users.string("user_email", 100).notNullable();
    users.timestamps(false, true);
  });
  await knex.schema.createTable("recipes", (table) => {
    table.increments("recipe_id");
    table.text("recipe_title").notNull();
    table.text("recipe_source");
    table.text("recipe_ingredients").notNull();
    table.text("recipe_instructions").notNull();
    table.text("recipe_category").notNull();
    table.text("recipe_photo_src"); //stretch goal
    table
      .integer("user_id")
      .references("user_id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("recipes");
  await knex.schema.dropTableIfExists("users");
};
