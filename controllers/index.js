module.exports.home = (req, res) => {
    res.render("links");
}

module.exports.createS = (req, res) => {
    res.render("student_form");
}

module.exports.createB = (req, res) => {
    res.render("batch_form");
}

module.exports.createC = (req, res) => {
    res.render("course_form");
}

module.exports.createT = (req, res) => {
    res.render("teacher_form");
}