function simple(a, b, cb) {
  c = a + b;
  d = a - b;
  var result = cb(c, d);
  return result;
}

function sum(a, b) {
  return a + b;
}
// console.log(simple(5, 8));
var result = simple(5, 8, sum);
console.log(result);

var result1 = simple(5, 8, function () {
  console.log(c, d);
  return c - d;
});
console.log(result1);

var result2 = simple(5, 8, function () {
  return c * d;
});
console.log(result2);
