var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    console.log(friendsArray);
    res.json(friendsArray);
  });

app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;
    console.log(friendsArray);
    console.log(newFriend);
    var scoresArray = [];
    var tDiff = 10000;
    var matchName = "";
    var matchImage= "";
    for(var i = 0; i < friendsArray.length-1; i++)
    {
    	var diff = 0;
      
		  console.log(friendsArray[i].name);
    	for(var j = 0; j < newFriend.scores.length; j++)
    	{
    		diff += (Math.abs(parseInt(newFriend.scores[j] - friendsArray[i].scores[j])));
        scoresArray.push(diff);
        //console.log(diff);
    	}
    	console.log(diff);
      console.log(scoresArray);
//new method for filter ES6.
      //scoresArray.push(diff);
      //diff = 0;

      if (diff <= tDiff) {
        console.log('Closest match found = ' + diff);
        console.log('Friend name = ' + friendsArray[i].name);
        console.log('Friend image = ' + friendsArray[i].photo);

        totalDifference = diff;
        matchName = friendsArray[i].name;
        matchImage = friendsArray[i].photo;
      }
    }
    
      friendsArray.push(newFriend);
      //var bestMatch = friendsArray[scoresArray.indexOf(Math.min.apply(null, scoresArray))];
      //console.log(bestMatch);
      //res.send(bestMatch);
      console.log(friendsArray);
      res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
      
  });


};

// var friendData = require('../data/friends.js');


// module.exports = function (app) {

//   app.get('/api/friends', function(req, res){
//     res.json(friendData);
//   })


//   app.post('/api/friends', function(req, res){
//     var newFriend = req.body;

//     for(var i = 0; i < newFriend.scores.length; i++) {
//       if(newFriend.scores[i] == "1 (Strongly Disagree)") {
//         newFriend.scores[i] = 1;
//       } else if(newFriend.scores[i] == "5 (Strongly Agree)") {
//         newFriend.scores[i] = 5;
//       } else {
//         newFriend.scores[i] = parseInt(newFriend.scores[i]);
//       }
//     }

//     var differencesArray = [];

//     for(var i = 0; i < friendData.length; i++) {

//       var comparedFriend = friendData[i];
//       var totalDifference = 0;
      
//       for(var k = 0; k < comparedFriend.scores.length; k++) {
//         var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
//         totalDifference += differenceOneScore;
//       }

//       differencesArray[i] = totalDifference;
//     }

//     var bestFriendNum = differencesArray[0];
//     var bestFriendIndex = 0;

//     for(var i = 1; i < differencesArray.length; i++) {
//       if(differencesArray[i] < bestFriendNum) {
//         bestFriendNum = differencesArray[i];
//         bestFriendIndex = i;
//       }
//     }

//     friendData.push(newFriend);
//     console.log(friendData);
//     res.json(friendData[bestFriendIndex]);
//   })
// }