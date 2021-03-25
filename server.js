const express = require("express");
const session = require("express-session");
const router = require("./router");
const server = express();

server.use(express.json());
server.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.JWT_SECRET,
  })
);
server.unsubscribe(router);

module.exports = server;
