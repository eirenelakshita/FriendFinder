var router = require("express").Router();
var path = require("path");

var userData = [
    {
        name: "James Sullivan",
        piclink: "",
        scores: ["5",
            "4",
            "3",
            "2",
            "1",
            "2",
            "3",
            "4",
            "5",
            "2"]
    },
    {
        name: "Leah Hamilton",
        piclink: "",
        scores: ["5",
            "2",
            "4",
            "4",
            "2",
            "3",
            "3",
            "2",
            "4",
            "4"]
    },
    {
        name: "Kai",
        piclink: "",
        scores: ["5",
            "1",
            "1",
            "5",
            "5",
            "5",
            "1",
            "1",
            "5",
            "1"]
    },
    {
        name: "Yilian Ye",
        piclink: "",
        scores: ["5",
            "4",
            "3",
            "2",
            "5",
            "2",
            "3",
            "4",
            "1",
            "3"]
    }
];

router.route("/api/friendslist")
.post(function(req, res) {
    userData.push(req.body);
    console.log(userData);
    res.json(true);
})
.get(function(req, res) {
    res.json(userData);
});

module.exports = router;