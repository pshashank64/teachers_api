const Student = require("../../../models/students");
const Batch = require("../../../models/batches");
const Course = require("../../../models/course_teacher");
const Teacher = require("../../../models/teachers");

module.exports.createStudent = (req, res) => {
    Student.create(req.body, (err) => {
        if(err){console.log("Error n creating Student!", err); return}
        console.log("Data in student inserted!");
        return res.redirect("/");
    })
}

module.exports.createBatch = (req, res) => {
    Batch.create(req.body, (err) => {
        if(err){console.log("Error n creating BATCH!", err); return}
        console.log("Data in BATCH inserted!");
        return res.redirect("/");
    })
}

module.exports.createCourse = (req, res) => {
    Course.create(req.body, (err) => {
        if(err){console.log("Error n creating course!", err); return}
        console.log("Data in course inserted!");
        return res.redirect("/");
    })
}

module.exports.createTeacher = (req, res) => {
    Teacher.create(req.body, (err) => {
        if(err){console.log("Error n creating teacher!", err); return}
        console.log("Data in teacher inserted!");
        return res.redirect("/");
    })
}