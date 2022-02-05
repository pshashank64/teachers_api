const express = require("express");
const Router  = express.Router();

Router.use("/teachers/", require("./teachers"));
Router.use("/create/", require("./teachersModify"));

module.exports = Router;