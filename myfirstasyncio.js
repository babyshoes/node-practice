// var fs = require('fs');
// var str = fs.readFile(process.argv[2]);
//
// function read(callback) {
//   fs.readFile(process.argv[2], function doneReading(err, data){
//     if(!err) {
//       var str = data.toString();
//       callback(str);
//     }
//   })
// }
//
//
// function countLineBreaks(text){
//   var count = text.split("\n").length - 1;
//   console.log(count);
// }
//
// read(countLineBreaks);

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function(err, contents){
  var lines = contents.split('\n').length - 1;
  console.log(lines);
})
