const express = require("express");

const homeCont = require("../controllers/index");

const Router = express.Router();

Router.get("/", homeCont.home);
Router.post("/form-student", homeCont.createS)
Router.post("/form-batch", homeCont.createB)
Router.post("/form-course", homeCont.createC)
Router.post("/form-teacher", homeCont.createT)

Router.use("/api", require("./api"));

module.exports = Router;