const Teacher = require("../../../models/teachers");

module.exports.index = (req, res) => {

    // Teacher.find({}, (err, data) => {
    //     if(err){console.log("Error in finding the data!", err); return}
    //     // if(data){
    //     //     return res.json(200, {data});
    //     // }
    //     if(data){
    //         Teacher.create({
    //             name: "Shashank"
    //         }, (err) => {
    //             if(err){console.log("not inserted!", err); return}
    //             console.log("Inserted teacher data!");
    //             return res.json(200, {data});
    //         })
    //     }
    // })
    // return res.json(200, {
    //     message: "Hello",
    //     teacher: []
    // })
    return res.render("index");
}