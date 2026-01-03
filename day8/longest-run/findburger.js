function burger(string) {
  return countBurger(string, 0, 0);
}

function countBurger(string, index) {
  if (index >= string.length) {
    return 0;
  }

  meatIndex = findMeat(string, index);
  breadIndex = findBread(string, index);
}

function findMeat(string, index) {
  //
}

function findBread(string, index) {
  //
}

function consoleMessage(description, string, result, expectedResult) {
  const inputFragment = "[" + string + "]" + "\n";
  const actualFragment = "Result is " + result + "\n";
  const expectedFragment = "Expected is " + expectedResult + "\n";
  let checkValue = result === expectedResult || result !== NaN;
  const flag = checkValue ? "✅ " : "❌ ";
  let message = flag + description;

  if (!checkValue) {
    message = flag + description + inputFragment + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testBurger(description, string, expectedResult) {
  const result = burger(string);

  consoleMessage(description, string, result, expectedResult);
}

function testAll() {
  testBurger("Simple burger", "BMB", 1);
  testBurger("more than one burger", "BMBB", 2);
  testBurger("Only bread", "BB", 0);
  testBurger("Only meat", "MM", 0);
}

testAll();