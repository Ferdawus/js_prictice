var arr = [30, 2, 5, 76, 50, 80, 36, 10];
var person = [
  {
    name: "A",
    age: 20,
  },
  {
    name: "B",
    age: 10,
  },
  {
    name: "C",
    age: 26,
  },
];

// arr.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// arr.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(arr);

// person.sort(function (a, b) {
//   if (a.age > b.age) {
//     return 1;
//   } else if (a.age < b.age) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(person);

var res1 = arr.every(function (value) {
  // console.log(value);
  return value % 2 === 0;
});
console.log(res1);
// var res2 = arr.every(function (value) {
//   return value >= 0;
// });
// console.log(res2);
var res3 = arr.some(function (value) {
  // console.log(value);
  return value % 2 === 1;
});
console.log(res3);
