function smallestOfTwoNumber(x, y) {
  return x < y ? x : y;
}

function smallestOfThreeNumber(x, y, z){
  return smallestOfTwoNumber(smallestOfTwoNumber(x, y), z);
}

function greatestOfTwoNumber(x, y) {
  return x > y ? x : y;
}

function greatestOfThreeNumbers(a, b, c) {
  return greatestOfTwoNumber(greatestOfTwoNumber(a, b), c);
}

function secondLargest(a, b, c){
  const greatest = greatestOfThreeNumbers(a, b, c);
  const smallest = smallestOfThreeNumber(a, b, c);
  const second = (a !== greatest && a !== smallest) ? a : ( b !== greatest && b !== smallest ? b : c );
  return second;
}

console.log(secondLargest(5,2,3));
