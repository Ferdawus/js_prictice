var arr = [1, 2, 6, 10, 20];
// var sum = arr.reduce(function (prev, curr, currIndex) {
//   console.log(prev);
//   // console.log(curr);
//   // console.log(currIndex);
//   return prev + curr;
// }, 0);
// console.log(sum);

// var max = arr.reduce(function (prev, curr) {
//   return Math.max(prev, curr);
// }, 0);
// console.log(max);
function myReduce(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
    // console.log(arr[i], acc);
  }
  // console.log(acc);
  return acc;
}

var sum = myReduce(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);
console.log(sum);
var maxValue = myReduce(
  arr,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  0
);
console.log(maxValue);
var minValue = myReduce(
  arr,
  function (prev, curr) {
    return Math.min(prev, curr);
  },
  arr[0]
);
console.log(minValue);
