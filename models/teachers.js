const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name:{
        type: String,
    },
    desc: {
        type: String
    },
    courses_taken: {
        type: Number
    },
    batches: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Batches"
        }
    ]
})

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;