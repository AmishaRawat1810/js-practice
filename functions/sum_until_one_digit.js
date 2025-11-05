function calculatingSumOfDigits(numberValue) {
  let sumOfDigit = 0;
  let currentTerm = numberValue;

  while (currentTerm !== 0) {
    const remainder = currentTerm % 10;
    sumOfDigit = sumOfDigit + remainder;
    currentTerm = (currentTerm - remainder) / 10;
  }

  return sumOfDigit;
}

function sumDigitsUntilOneDigit(sumOfDigit) {
  while (sumOfDigit > 9) {
    sumOfDigit = calculatingSumOfDigits(sumOfDigit);
  }
  return sumOfDigit;
}

function sumOfDigitsInSingleDigit(numberValue) {
  let sumOfDigit = calculatingSumOfDigits(numberValue);

  if (sumOfDigit > 9) {
    sumOfDigit = sumDigitsUntilOneDigit(sumOfDigit);
  }

  return sumOfDigit;
}

function testSumOfDigitsInSingleDigit(numberValue, expectedValue) {
  const calculatedSum = sumOfDigitsInSingleDigit(numberValue);
  const checkValue = calculatedSum === expectedValue ? "✅" : "❌";

  console.log(checkValue, calculatedSum, expectedValue);
}

function testAll() {
  testSumOfDigitsInSingleDigit(942, 6);
  testSumOfDigitsInSingleDigit(132189, 6);
  testSumOfDigitsInSingleDigit(9, 9);
  testSumOfDigitsInSingleDigit(9145, 1);
}

testAll();
