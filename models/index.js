var express = require('express');
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/simple-mean-server", { useMongoClient: true });

mongoose.set("debug", true);

module.exports.Car = require("./car");
