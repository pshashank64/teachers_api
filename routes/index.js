const express = require("express");

const homeCont = require("../controllers/index");

const Router = express.Router();

Router.get("/", homeCont.home);

Router.use("/api", require("./api"));

module.exports = Router;