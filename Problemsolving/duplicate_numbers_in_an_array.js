const numbers = [2, 5, 4, 5, 8, 10, 50, 4, 100];
const duplicats = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

console.log(duplicats);
