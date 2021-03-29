const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routers/auth-router");
const usersRouter = require("./routers/users-router");
const recipesRouter = require("./routers/recipe-router");
const private = require("./middleware/privateMiddleware");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth/", authRouter);
server.use("/api/users/", private, usersRouter);
server.use("/api/recipes/", private, recipesRouter);

/* eslint-disable */
server.get("/", (req, res, next) => {
  res.json({ message: "Welcome to the Server! It seems to be working!" });
});
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong with the server. Try again later.",
  });
});
/* eslint-enable */

module.exports = server;
