var filterList = require('./module');
var pathName = process.argv[2];
var ext = process.argv[3];

filterList(pathName, ext, function(err, data){
  data.forEach(function(item){
    console.log(item);
  });
});
