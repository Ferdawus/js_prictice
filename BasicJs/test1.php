<?php
function minimumSum($num) {
  $arr = str_split(strval($num));
  sort($arr);
  print_r($arr);
  echo implode("", $arr) . PHP_EOL;
  $sum = intval($arr[0] . $arr[2]) + intval($arr[1] . $arr[3]);

  return $sum;
}

// Example usage
$result = minimumSum(2932);
echo "Result: " . $result . PHP_EOL;
?>
2239 = 23 + 29 = 52
        29 +23 