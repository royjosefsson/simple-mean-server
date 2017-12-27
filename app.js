// Express
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/client'));

// Body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes ======================================================================
require('./routes/car')(app); // load our car routes

app.listen(8189);
