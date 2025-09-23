function greatestOfTwoNumber(x, y) {
  return x > y ? x : y;
}

function greatestOfThreeNumbers(a, b, c) {
  return greatestOfTwoNumber(greatestOfTwoNumber(a, b), c);
}

console.log(greatestOfThreeNumbers(2, 3, 6));
