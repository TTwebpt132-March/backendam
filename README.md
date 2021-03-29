# Amanda's Backend:

## Using Lambda's [build week template](https://github.com/LambdaSchool/build-week-scaffolding-node)

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

**Format:**
