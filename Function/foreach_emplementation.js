var arr = [1, 2, 5, 7, 10, 34];

// var sum = 0;
// arr.forEach(function (value, index, arr) {
//   console.log(value, index, arr);
//   sum += value;
// });
// console.log(sum);
function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
forEach(arr, function (value, i, arr) {
  // console.log(value, i, arr);
});

forEach(arr, function (value, i, arr) {
  arr[i] = value + 5;
});
console.log(arr);
