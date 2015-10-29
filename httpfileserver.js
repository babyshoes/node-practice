var fs = require('fs');
var http = require('http');
var port = process.argv[2];
var filesrc = fs.createReadStream(process.argv[3]);

var server = http.createServer(function(req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  filesrc.pipe(res);
})
server.listen(port);
