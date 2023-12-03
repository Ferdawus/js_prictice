// it Retutrn the same result if given the same argument
// it does not cause any observable side effects

function sqr(n) {
  return n * n;
}
console.log(sqr(2));

var point = {
  x: 30,
  y: 20,
};

function printPoint(point) {
  point.x = 100;
  point.y = 200;
  console.log(point);
}
printPoint(point);
console.log(point);
