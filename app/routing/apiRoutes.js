var friends = require("../data/friends.js"); 
var path = require("path"); 
var totalDifference;

module.exports = function(app){
// friends.push(userData);  
    app.get("/api/friends", function(req,res){
        return res.json(friends);
    }); 

    app.post("/api/friends", function(req, res) {
        friends.push(req.body); //pushes new user info into friends.js file

        var match = {
            name: "",
            photo: "",
            scores: []
        };

        var compareResults = [];
        var closestMatch = [];
        var user;
        var difference;
        var numMatch;
        var finalMatch;

        /* Create an array of answers summed */
        function sumResults(numbers) {
            var sum = 0;
            for (var counter = 0; counter<numbers.length; counter++) { // loops through scores array
                sum += parseInt(numbers[counter]); // parseInt converts user scores to integers
            }
            compareResults.push(sum);           
        }

        /* Create an array of number differences */
        function closestNum(number) {
            difference = Math.abs(user - number);
            closestMatch.push(difference);            
        }

        /* Loop to send each character to a function to sum scores */
        for (var i=0; i<friends.length; i++) {
            sumResults(friends[i].scores);
        }

        user = compareResults.pop(); // store and remove the last item from array (user)

        /* Loop to send each character to a function to calculate number differences */
        for (var i=0; i<compareResults.length; i++) {
            closestNum(compareResults[i]); 
        }

        /* Calculate the index position of the closest match */
        numMatch = Math.min.apply(null, closestMatch); // find smallest number
        finalMatch = closestMatch.indexOf(numMatch); // find index position in array
        match.name = friends[finalMatch].name;
        match.photo = friends[finalMatch].photo;
        match.scores = friends[finalMatch].scores;

        // push match to the match varible for modal display
        friends.push(match);
        res.json(match);
    });
};