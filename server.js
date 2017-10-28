var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var app = express();
var PORT =  process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});