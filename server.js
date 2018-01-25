// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Static Directory
app.use(express.static("public"));

// Routes 


// Server Start
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});