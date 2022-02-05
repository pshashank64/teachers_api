const express = require("express");
const Router  = express.Router();

const teachApi = require("../../../controllers/api/v1/teachers_api");

Router.get("/", teachApi.index);

module.exports = Router;