function splitDigits(number) {
  let numberString = number.toString();
  let digitArray = numberString.split("").sort();
  //   let sum = 0;
  //   for (let i = 0; i < digitArray.length; i++) {
  //     digitArray[i] = parseInt(digitArray[i], 10);
  //   }
  return digitArray;
}
$num = 2932;
let digits = splitDigits($num);
console.log(digits);
