var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//routes are defined here
var properties = require('./routes/properties');
var prospects = require('./routes/prospects');
var agencies = require('./routes/agencies');


var app = express(); //Create the Express app

// Connect to our database
// Ideally you will obtain DB details from a config file
var dbName = 'hubdb';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// This is our route middleware
app.use('/api', properties);
app.use('/api', prospects);
app.use('/api', agencies);

app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
    console.log('hubapi listening on port ' + server.address().port);
});