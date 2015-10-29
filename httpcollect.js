// var http = require('http');
// var url = process.argv[2];
//
// http.get(url, function(response){
//   response.setEncoding('utf8');
//   response.on('error', console.error);
//   var arr = []
//   response.on('data', function(data){
//     arr.push(data);
//   });
//   response.on('end', function(){
//     var str = arr.join('');
//     console.log(str.length);
//     console.log(str);
//   });
// });

var http = require('http');
var bl = require('bl');
var url = process.argv[2];
http.get(url, function(response){
  response.pipe(bl(function(error, data){
    if(error) return console.error;
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }))
})
