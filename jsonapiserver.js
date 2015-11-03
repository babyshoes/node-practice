var http = require('http');
var url = require('url');
var port = process.argv[2];

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
};

function unixtime(time) {
  return { unixtime : time.getTime() }
};

var server = http.createServer(function(req, res){
  var parsedurl = url.parse(req.url, true);
  var time = new Date(parsedurl.query.iso);
  var result;
  if(parsedurl.pathname === '/api/parsetime'){
    result = parsetime(time);
  }
  else if(parsedurl.pathname === '/api/unixtime'){
    result = unixtime(time);
  }
  if (result) {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
})

server.listen(port);
