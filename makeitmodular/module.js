// fs.readdir(pathName, function(err, list){
//   list.forEach(function(item){
//     if(path.extname(item) === '.' + ext){
//       arr << item;
//     }
//   })
// })
//
// function filter(callback){
//   var arr = [];
//   fs.readdir(directory, ext, function(err, list){
//     list.forEach(function(item){
//       if(path.extname(item) === '.' + ext) {
//         arr << item;
//       }
//     })
//   })
//   return arr;
// }
var path = require('path');
var fs = require('fs');

var filterList = function(directory, ext, callback){
  fs.readdir(directory, function(err, list){
    if(err) return callback(err);
    var filtered = list.filter(function(file){
      return path.extname(file) === '.' + ext
    })
    return callback(null, filtered);
  })
}


module.exports = filterList;
