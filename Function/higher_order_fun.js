function add(a, b) {
  return a + b;
}

function manipulation(x, y, func) {
  n = x + y;
  z = x - y;
  return function () {
    var m = func(x, y);
    return n * z * m;
  };
}
var multiply = manipulation(3, 4, add);
console.log(multiply());
