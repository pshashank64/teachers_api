const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number
    },
    email: {
        type: String
    },
    courseId: {
        type: Number
    }
    
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;