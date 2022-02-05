const express = require("express");
const db = require("./config/mongoose");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.static("assets"));

app.use("/", require("./routes"));

app.listen(3000, (err) => {
    if(err){
        console.log("Error in going live!");
        return;
    }
    console.log("Server is live!");
})