const express = require("express");
const Router  = express.Router();

Router.use("/teachers/", require("./teachers"));
Router.use("/create/", require("./teachersModify"));
Router.use("/reschedule", require("./batch_reschedule"));

module.exports = Router;