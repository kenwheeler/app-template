// Require our dependencies
var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  routes = require('./routes');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 1337;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Index Route
app.get('*', routes.route);

// Fire this bitch up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});