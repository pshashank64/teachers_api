const Student = require("../../../models/students");
const Batch = require("../../../models/batches");
const Course = require("../../../models/course_teacher");
const Teacher = require("../../../models/teachers");

module.exports.createStudent = (req, res) => {
    var mydata = new Student(req.body);
    mydata.save()
        .then(item => {
            res.send({
                "data": item,
                "status": 200,
                "message": "Student created"
            });
            console.log(item)
        })
        .catch(err => {
        res.status(400).send("unable to save student data to database");
        });
}

module.exports.createBatch = (req, res) => {
    var mydata = new Batch(req.body);
    mydata.save()
        .then(item => {
            res.send({
                "data": item,
                "status": 200,
                "message": "Batch created"
            });
            console.log(item)
        })
        .catch(err => {
        res.status(400).send("unable to save batch data to database");
        });
}

module.exports.createCourse = async (req, res) => {
    let students = await Student.find({courseId: req.body.courseId});
    var mydata = new Course({
        courseId: req.body.courseId,
        name: req.body.name,
        taught_by: req.body.taught_by,
        enrolled_students: students
    });
    mydata.save()
        .then(item => {
            res.send({
                "data": item,
                "status": 200,
                "message": "Course created"
            });
            console.log(item)
        })
        .catch(err => {
        res.status(400).send("unable to save course data to database");
        });
}

module.exports.createTeacher = async (req, res) => {
    let Batches = await Batch.find({courseId: req.body.courses_taken});
    var mydata = new Teacher({
        id: req.body.id,
        name: req.body.name,
        desc: req.body.desc,
        courses_taken: req.body.courses_taken,
        batches: Batches
    });
    mydata.save()
        .then(item => {
            res.send({
                "data": item,
                "status": 200,
                "message": "Teacher created"
            });
            console.log(item)
        })
        .catch(err => {
        res.status(400).send("unable to save teacher data to database");
        });
}