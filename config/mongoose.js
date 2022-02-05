const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/teachers_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to the database!"));

db.once("open", function(){
    console.log("Successfully connected to the database");
});

module.exports = db;