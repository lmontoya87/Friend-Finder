// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Set the default directory
app.use(express.static(__dirname + "/app/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// require the routing files
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// start PORT listening
app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});