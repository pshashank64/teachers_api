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

module.exports.createCourse = async (req, res) => {
    let students = await Student.find({courseId: req.body.courseId});
    Course.create({
        courseId: req.body.courseId,
        name: req.body.name,
        taught_by: req.body.taught_by,
        enrolled_students: students
    }, (err) => {
        if(err){console.log("Error n creating course!", err); return}
        console.log("Data in course inserted!");
        return res.redirect("/");
    })
}

module.exports.createTeacher = async (req, res) => {
    let Batches = await Batch.find({courseId: req.body.courses_taken});
    Teacher.create({
        id: req.body.id,
        name: req.body.name,
        desc: req.body.desc,
        courses_taken: req.body.courses_taken,
        batches: Batches
    }, (err) => {
        if(err){console.log("Error n creating teacher!", err); return}
        console.log("Data in teacher inserted!");
        return res.redirect("/");
    })
}