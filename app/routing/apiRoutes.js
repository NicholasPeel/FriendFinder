var friendsData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        var matchNum = 41;
        var match = [];

        for (let i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i]);
            console.log(matchNum);
            console.log(match);
            var total = 0;
            for (let j = 0; j < 10; j++) {
                var diff = parseInt(friendsData[i].scores[j]) - parseInt(req.body.scores[j]);
                console.log(diff);
                var abs = Math.abs(diff);
                console.log(abs);
                total += abs;
                console.log(total)
            }
            if (total === matchNum) {
                console.log("totoal = matchNum");
                match.push(friendsData[i]);

            }
            if (total < matchNum) {
                console.log("total < MatchNum");
                matchNum = total;
                console.log(matchNum);
                match = [];
                match.push(friendsData[i]);

            }
        }
        friendsData.push(req.body);
        res.json(match);
        match = [];
    });

};
