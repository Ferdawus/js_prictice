var arr = [3, 4, 8, 9, 20, 24, 50, 90, 10, 22, 41, 19];
var newArr = arr.filter(function (value) {
  return value % 2 === 0;
});

console.log(newArr);
// es6 version
var newArr1 = arr.filter((value) => {
  return value % 2 === 1;
});
console.log(newArr1);

// filer arr implement

function myFilter(arr, cb) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  myFilter(arr, (value) => {
    return value % 2 == 1;
  })
);
