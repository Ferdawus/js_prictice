// First Class function
function add(a, b) {
  return a + b;
}
// A function can be stored in a variable
var sum = add;
console.log(sum(3, 5));
// A function can be stored in a array
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](5, 8));
// A function can be stored in object
var obj = {
  sum: add,
};
console.log(obj);
console.log(obj.sum(7, 9));
// We can create function as need
