var path = require("path");

module.exports = function(app){
	// a / in url sends viewer to /public/home.html
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    // a /survey sends viewer to /public/survery.html
    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
};