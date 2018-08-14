var router = require("express").Router();
var path = require("path");

// module.exports = function(app) {
//     app.get("/", function(req,res) {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     })
// }

router.route("/")
.get(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

router.route("/survey")
.get(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

module.exports = router