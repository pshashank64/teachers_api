const express = require("express");
const Router  = express.Router();

const teachModifyApi = require("../../../controllers/api/v1/create_api");

Router.post("/", teachModifyApi.createStudent);

module.exports = Router;