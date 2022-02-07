const Batch = require("../../../models/batches");

module.exports.reschedule = async (req, res) => {
    let find_batch = await Batch.findOne({courseId: req.body.courseId})

    Batch.findOneAndUpdate(find_batch, {
        date: req.body.date,
        time: req.body.time
    }).then(() => {
        Batch.findOne({courseId: req.body.courseId}).then((item) => {
            res.send({
                "data": item,
                "satatus": 200,
                "message": "timetable rescheduled!"
            });
            console.log(item);
        });
    }).catch(err => {
        res.status(400).send("unable to reschedule the batch!");
    });
    

    // let find_batch = await Batch.findOne({courseId: req.body.courseId})
    // find_batch.updateOne({
    //     date: req.body.date,
    //     time: req.body.time
    // }, (err) => {
    //     if(err){console.log("Error in rescheduling the batch details!", err); return}
    //     console.log("batch updated!");
    //     return res.redirect("/");
    // })
}