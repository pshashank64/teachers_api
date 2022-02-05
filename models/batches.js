const mongoose = require("mongoose");

const bactchschema = new mongoose.Schema({
    courseId: {
        type: Number
    },
    name: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    }

})

const Batch = mongoose.Model("Batch", bactchschema);

module.exports = Batch;