const express = require("express");
const Router  = express.Router();

const teachModifyApi = require("../../../controllers/api/v1/create_api");

Router.post("/create-student", teachModifyApi.createStudent);
Router.post("/create-batch", teachModifyApi.createBatch);
Router.post("/create-course", teachModifyApi.createCourse);
Router.post("/create-teacher", teachModifyApi.createTeacher);

module.exports = Router;