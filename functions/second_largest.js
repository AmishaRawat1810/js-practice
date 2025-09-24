/*
input       |     expectation

1 , 2 , 1         1
1 , 1 , 2         1
2 , 1 , 1         1

2 , 2 , 1         1
2 , 1 , 2         1
1 , 2 , 2         1

1 , 1 , 1         -1 (invalid)
*/

function minOfTwo(x, y) {
  return x < y ? x : ( x === y ? -1 : y);
}

function maxOfTwo(x, y) {
  return x >= y ? x : y;
}

function secondLargest(a, b, c) {
  return secondLargest = maxOfTwo(minOfTwo(a,b), minOfTwo(b,c));
}

console.log(secondLargest(1,2,1));
