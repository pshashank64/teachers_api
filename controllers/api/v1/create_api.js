const Student = require("../../../models/students");
// const Batch = require("../../../models/batches");
// const Course = require("../../../models/course_teacher");

module.exports.createStudent = (req, res) => {
    Student.create(req.body, (err) => {
        if(err){console.log("Error n creating Student!", err); return}
        console.log("Data in student inserted!");
        return res.redirect("/");
    })
}