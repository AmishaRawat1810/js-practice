function squareOf(number) {
  return number ** 2;
}

function squareOfRange(startOfTheRange, endOfTheRange) {
  for(let term = startOfTheRange; term <= endOfTheRange; term++) {
    console.log(squareOf(term));
  }
}

squareOfRange(1,10);
