var net = require('net');
var port = process.argv[2];
var date = new Date();
var fullDate = date.getFullYear() + '-' + (Number(date.getMonth()) + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';

net.createServer(function(socket){
  socket.end(fullDate);
}).listen(port);
