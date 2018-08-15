var router = require("express").Router();
var path = require("path");

var userData = [
    {
        name: "James Sullivan",
        piclink: "https://data.whicdn.com/images/282707200/superthumb.jpg?t=1490730464",
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
        piclink: "https://viola.bz/wp-content/uploads/2011/11/Bond-woman-Monica-Bellucci-2-500x385.jpg",
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
        piclink: "https://vignette.wikia.nocookie.net/die-hard-scenario/images/a/aa/DHS-_Iko_Uwais_at_The_Raid_2_premiere.jpg/revision/latest/scale-to-width-down/250?cb=20140930014513",
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
        piclink: "https://i.pinimg.com/originals/4c/06/c7/4c06c704ec6e1017231326858fdcc0d1.jpg",
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
        bestMatch.piclink = userData[shortIndex].piclink;
        console.log(short);
        console.log("Latest Best Match: " + bestMatch.name);

    })
    .get(function (req, res) {
        res.json({userData, bestMatch});
    });

    var bestMatch = {
        name: "",
        piclink: ""
    };

    module.exports =
        router, bestMatch;