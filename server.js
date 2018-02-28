var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setup for express
var app = express();
var PORT = process.env.PORT || 3000;

// Setup for express and body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("./app/public"));

// Points at our route js files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});
