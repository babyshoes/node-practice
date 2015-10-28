// var fs = require('fs');
// var path = process.argv[2];
// var ext = process.argv[3];
//
// fs.readdir(path, function(err, list){
//   list.forEach(function(item){
//     if(item.indexOf("."+ext) >= 0) console.log(item);
//   })
// })


var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(err, list){
  list.forEach(function(item){
    if(path.extname(item) === '.' + process.argv[3]) console.log(item);
  })
})
