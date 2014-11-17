var express = require('express');
var exphbs = require('express-handlebars');
var http = require('http');

var app = express();
var port = process.env.PORT || 1337;

app.engine('handlebars', exphbs({ defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.disable('etag');

app.use("/", express.static(__dirname + "/public/"));

app.get('*', function(req,res){
  markup = 'test';
  state = {
    test: 2
  };
  res.render('index', {
    markup: markup,
    state: JSON.stringify(state)
  });
});

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});