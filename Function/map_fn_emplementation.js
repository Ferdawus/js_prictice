var arr = [1, 2, 3, 4];

// var newArr = arr.map(function (value, index, arr) {
//   //   return Math.random() * 100;
//   return value * value;
// });
// console.log(arr);
// console.log(newArr);

function map(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    // var temp = arr[i] * arr[i];
    var temp = cb(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}
// console.log(map(arr));
// console.log(arr);
var qb = map(arr, function (value, i, arr) {
  return value * value * value;
});

var mten = map(arr, function (value) {
  return value * 10;
});
console.log(qb);
console.log(mten);
console.log(arr);
