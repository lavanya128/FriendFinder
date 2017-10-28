var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;
    var scoresArray = {};
    for(var i = 0; i < friendsArray.length-1; i++)
    {
    	var diff = 0;
      
		  console.log(friendsArray[i].name);
    	for(var j = 0; j < newFriend.scores.length; j++)
    	{
    		diff += (Math.abs(parseInt(newFriend.scores[j])) - parseInt(friendsArray[i].scores[j]));

    	}
    	console.log(diff);
//new method for filter ES6.
      scoresArray.push(diff);
      diff = 0;
    }
    
      var bestMatch = friendsArray[scoresArray.indexOf(Math.min.apply(null, scoresArray))];
    
      res.send(bestMatch);
      console.log(bestMatch);
  });


};