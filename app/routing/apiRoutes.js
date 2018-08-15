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
        scores: ["1",
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
    .post(function (req, res) {
        userData.push(req.body);
        res.json(true);
        var latestIndex = userData.length - 1;
        var sumList = [];
        for (var i = 0; i < userData.length - 1; i++) {
            var sum = 0;
            for (var j = 0; j < 10; j++) {
                var distance = Math.abs(userData[i].scores[j] - userData[latestIndex].scores[j]);
                sum += distance;
            };
            console.log(sum + ", " + userData[i].name);
            sumList.push(sum);
        };

        // function bubbleSort(sumList) {
        //     var swapped;
        //     do {
        //         swapped = false;
        //         for (var i = 0; i < sumList.length - 1; i++) {
        //             if (sumList[i] > sumList[i + 1]) {
        //                 var temp = sumList[i];
        //                 sumList[i] = sumList[i + 1];
        //                 sumList[i + 1] = temp;
        //                 swapped = true;
        //             }
        //         }
        //     } while (swapped);
        // }

        // bubbleSort(sumList);

        console.log(sumList);
        var short = Math.min(...sumList);
        var shortIndex = sumList.indexOf(short);
        bestMatch.name = userData[shortIndex].name;
        console.log(short);
        console.log("Latest Best Match: " + bestMatch.name);

    })
    .get(function (req, res) {
        res.json({userData, bestMatch});
    });

    var bestMatch = {
        name: ""
    };

    module.exports =
        router, bestMatch;