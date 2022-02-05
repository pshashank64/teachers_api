const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    desc: {
        type: String
    },
    courses_taken: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Courses"
        }
    ],
    batches: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Batches"
        }
    ]
})

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;