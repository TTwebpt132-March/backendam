exports.seed = async function (knex) {
  /* await knex.schema.createTable("recipes", (table) => {
    table.increments("recipe_id");
    table.text("recipe_title").notNull();
    table.text("recipe_source");
    table.text("recipe_ingredients").notNull();
    table.text("recipe_instructions").notNull();
    table.text("recipe_category").notNull();
    table.text("recipe_photo_src"); //stretch goal
    table
      .integer("user_id")...*/
  await knex("recipes").insert([
    {
      recipe_id: 1,
      recipe_title: "Martini",
      recipe_source: "no",
      recipe_ingredients: [
        "2.5oz top-shelf gin",
        "0.5oz extra dry vermouth",
        "1 teaspoon olive juice",
        "exactly two pitted olives",
      ],
      recipe_instructions: [
        "chill martini glass in freezer",
        "add gin, vermouth, and olive juice to a shaker with ice",
        "shake vigorously, and pour into chilled glass",
        "garnish with the two olives",
        "repeat as necessary",
      ],
      recipe_category: ["cocktails", "drinks"],
      recipe_photo_src:
        "https://images-na.ssl-images-amazon.com/images/I/71XYmXGJSPL._RI_.jpg",
      user_id: 1,
    },
    {
      recipe_id: 2,
      recipe_title: "Eggs Woodhouse",
      recipe_source: "Woodhouse (and Binging with Babish)",
      recipe_ingredients: [
        "drizzle of olive oil",
        "1 cup spinach",
        "3 Tablespoons butter",
        "3 Tablespoons flour",
        "1/2 cups milk",
        "salt and pepper",
        "2 egg yolks",
        "squeeze of lemon juice",
        "1 stick melted butter",
        "2 warm artichoke hearts",
        "2 eggs",
        "sliced Ibérico ham",
        "black truffle",
        "sprinkle of paprika",
        "sprinkle of kashmiri saffron",
        "generous spoonful of beluga caviar (or white sturgeon caviar)",
      ],
      recipe_instructions: [
        "For the creamed spinach: In a pan, heat olive oil over medium-high heat. Cook spinach until bright green and wilted. In a saucepan, melt butter over medium-high heat. Add flour and whisk until combined. Slowly whisk in the milk. Continue whisking until the bechamel sauce thickens. Season the spinach with salt and pepper. Then, add the bechamel sauce and give it a good mix.",
        "For the Hollandaise: In the bottom of an immersion blender cup, place egg yolks and squeeze lemon on top. Blend together.Slowly drizzle in melted butter and continue to blend until sauce formed.",
        "For the Eggs Woodhouse: Plate 2 artichoke hearts on a bed of creamed spinach. To poach eggs: In a pot, heat water over medium-high heat until almost boiling. In a mesh sieve, swirl eggs before submerging them in the water. Keep the eggs moving and retrieve them after 3 ½ minutes. Place poached eggs on top of the artichokes. Liberally stack Ibérico ham on top of the poached eggs. Shave black truffle on top of the ham. Pour warm hollandaise over the entire dish. Top with a pinch of paprika and kashmiri saffron. Add a spoonful of caviar and enjoy.",
      ],
      recipe_category: ["breakfast"],
      recipe_photo_src:
        "https://64.media.tumblr.com/6e81ad539d79c3d23512e684cd32d203/tumblr_inline_p7jv6iKAw61ra0926_500.png",
      user_id: 2,
    },
    {
      recipe_id: 3,
      recipe_title: "The Lana Kane",
      recipe_source: "Erick Castro",
      recipe_ingredients: [
        "2 oz bourbon",
        "3/4 oz fresh lemon juice",
        "3/4 oz fresh orange juice",
        "1/2 oz honey syrup",
        "1/4 oz Falernum syrup",
        "1/4 oz St. Elizabeth Allspice Dram",
        "Orange wheel slice for garnish",
      ],
      recipe_instructions: [
        "Make the honey syrup: in a bowl, combine 1 cup honey and ½ cup water. Whisk together to incorporate.",
        "Pour all ingredients into a cocktail shaker filled with ice and shake to combine. Strain into a chilled Collins glass and garnish with an orange wheel.",
      ],
      recipe_category: ["drinks", "cocktails"],
      recipe_photo_src:
        "https://cocktailpartyapp.com/wp-content/uploads/Lana-Kane.png",
      user_id: 3,
    },
    {
      recipe_id: 4,
      recipe_title: "Stir Fry-day",
      recipe_source: "desperation",
      recipe_ingredients: [
        "olive oil",
        "red bell pepper",
        "yellow bell pepper",
        "sugar snap peas",
        "carrots",
        "mushrooms",
        "broccoli",
        "baby corn",
        "water chestnuts",
        "soy sauce",
        "garlic cloves",
        "ginger",
        "brown sugar",
        "sesame oil",
        "chicken broth",
        "cornstarch",
        "green onions",
      ],
      recipe_instructions: [
        "chop and cook veggies in a large skillet or wok with olive oil for 2-3 minutes",
        "in a small bowl whisk together soy sauce, minced garlic and ginger, brown sugar, sesame oil, chicken broth, and cornstarch",
        "pour sauce over the veggies and cook until thickened",
        "serve over rice and garnish with green onions",
      ],
      recipe_category: ["dinner", "chinese"],
      recipe_photo_src: "https://pbs.twimg.com/media/BF_LvGiCcAA_DLL.jpg",
      user_id: 4,
    },
  ]);
};
