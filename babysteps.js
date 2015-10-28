function add_inputs(arr) {
  var sum = 0;
  for(var i = 2; i < arr.length; i++){
    sum += +arr[i]
  }
  return sum;
}

console.log(add_inputs(process.argv));
