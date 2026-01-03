function squareOf(a) {
  return a ** 2;
}

function squareOfRange(startOfTheRange, endOfTheRange) {
  for(let term = startOfTheRange; term <= endOfTheRange; term++) {
    console.log(squareOf(term));
  }
}

squareOfRange(1,10);