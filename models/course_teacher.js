const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseId: {
        type: Number,
    },
    name: {
        type: String,
    },
    enrolled_students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        }
    ]
})

const Courses = mongoose.model("Course", courseSchema);

module.exports = Courses;