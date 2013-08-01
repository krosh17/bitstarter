var express = require('express');
var app = express();
app.use(express.logger());

var text=fs.readFile("index.html",String)


app.get('/', function(request, response) {
  response.send('Welcome back Shevaldos!'+text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
