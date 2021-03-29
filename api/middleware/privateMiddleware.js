const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({
        message: "Token is required.",
      });
    }
    jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          message: "Valid token is required.",
        });
      }
      req.token = decoded;
      next();
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkToken,
  router,
};
