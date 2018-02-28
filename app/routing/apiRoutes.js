var dogPals = require("../data/paw.js");

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(dogPals);
	});

	app.post("/api/friends", function(req, res){
		var indexNum = 0;
		var totalDiffArr = [];

		while(indexNum < dogPals.length){
			var dogs = dogPals[indexNum].score;
			var user = req.body.score;
			var diffArr = [];
			var totalDiff = 0;

			for(var x = 0; x < dogs.length; x++){
				var diff = Math.abs(dogs[x] - user[x]);
				totalDiff += diff;
			}
			totalDiffArr.push(totalDiff);
			indexNum++;
		}
		var min = Math.min.apply(null, totalDiffArr);
		var match = totalDiffArr.indexOf(min);

		res.json(dogPals[match]);
		dogPals.push(req.body);
	});
};
