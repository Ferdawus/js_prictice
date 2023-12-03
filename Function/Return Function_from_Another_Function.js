// function greet(msg) {
//   function greetings(name) {
//     return msg + "," + name + "!";
//   }
//   return greetings;
// }
// var gm = greet("Good Morning");
// var gn = greet("Good Night");
// console.log(gm("Ferdawus"));
// console.log(gn("Ferdawus"));

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      //   console.log(result);
      result = result * n;
    }
    return result;
  };
}
var base3 = base(3);
console.log(base3(3));
