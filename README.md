# Amanda's Backend:

Using Lambda's [build week template](https://github.com/LambdaSchool/build-week-scaffolding-node)

## Using Lambda's [build week template](https://github.com/LambdaSchool/build-week-scaffolding-node)

## [Product Vision Document](https://docs.google.com/document/d/1klgmWjCPXpTEiG7nOPODfYijZNtJ55v6Zmt4drLspSg/edit?usp=sharing)

## Login / Register User:

**Format for registering:**

```javascript
{
    username: "string", required, 3-20 characters,
    password: "string", required, 2-25 characters,
    email: "string", required, 100 characters max, requires a '@'
}
```

| ACTION              | METHOD | ROUTE                | REQUIRED                      |
| ------------------- | ------ | -------------------- | ----------------------------- |
| Register new User   | POST   | `/api/auth/register` | `{username, password, email}` |
| Login existing User | POST   | `/api/auth/login`    | `{username, password}`        |

## Users:

**Format in database:**

```javascript
{
    username: "string", required,
    password: "string", required,
    email: "string", required,
}
```

| ACTION                     | METHOD | ROUTE                    | REQUIRED                      |
| -------------------------- | ------ | ------------------------ | ----------------------------- |
| List all Users             | GET    | `/api/users`             | n/a                           |
| Find a single User         | GET    | `/api/users/:id`         | n/a                           |
| Edit a single User         | PUT    | `/api/users/:id`         | `{username, password, email}` |
| Delete a single User       | DELETE | `/api/users/:id`         | n/a                           |
| List all recipes by a User | GET    | `/api/users/:id/recipes` | n/a                           |

## Recipes:

**Format in database:**

```javascript
{
    title: "string" required,
    source: "string",
    ingredients: ["array", "here"], required,
    instructions: ["array", "here"], required,
    category: ["array", "here"], required,
    photo_src: "string of link"
}
```

| ACTION                       | METHOD | ROUTE              | REQUIRED                                        |
| ---------------------------- | ------ | ------------------ | ----------------------------------------------- |
| Gets all recipes             | GET    | `/api/recipes`     | n/a                                             |
| Read single recipe by ID     | GET    | `/api/recipes/:id` | n/a                                             |
| Create a new recipe          | POST   | `/api/recipes`     | `{tittle, ingredients, category, instructions}` |
| Update existing recipe by ID | PUT    | `/api/recipes/:id` | `{title, ingredients, category, instructions}`  |
| Delete existing recipe by ID | DELETE | `/api/recipes/:id` | n/a                                             |

## Backend Deployed on Heroku:

(https://secretfamrecipe132.herokuapp.com/)
