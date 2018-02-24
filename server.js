var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setup for express
var app = express();
var PORT = process.env.PORT || 3000;

// Setup for express and body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

