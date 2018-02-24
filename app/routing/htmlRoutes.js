var path = require("path");


module.exports = function(app) {
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// This is a catch all, if no matching routes direct to home page
	app.get("*", function(req, res) {
	    res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};