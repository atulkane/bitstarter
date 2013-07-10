var fs = require('fs');

var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World from index.html');
  // still need to figure out how to read file 
   reponse.send(fs.readfile('./index.html', 'ascii'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
