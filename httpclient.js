var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
  response.setEncoding('utf8');
  response.on('error', function(e){console.log(e);});
  response.on('data', function(d){console.log(d);});
});
