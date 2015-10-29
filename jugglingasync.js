var http = require('http');
var bl = require('bl');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var arr = [];

http.get(url1, function(response){
  collectData(response);
  response.on('end', function(){
    http.get(url2, function(response){
      collectData(response);
      response.on('end', function(){
        http.get(url3, function(response){
          collectData(response);
          response.on('end', function(){
            arr.forEach(function(str){console.log(str)})
          })
        })
      })
    })
  })
})

function collectData(response){
  response.pipe(bl(function(err, data){
    if(err) return console.error;
    data = data.toString();
    arr.push(data);
  }))
}
