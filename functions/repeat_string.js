function repeatString(stringToRepeat, repeatCount) {
  let resultedString = "";
  for (let count = repeatCount; count > 0; count--) {
    resultedString = resultedString + stringToRepeat + " ";
  }
  return resultedString;
}

function testRepeatString(stringToRepeat, repeatCount, expectedValue) {
  const resultedString = repeatString(stringToRepeat, repeatCount);
  const checkValue = resultedString === expectedValue ? "✅" : "❌";

  console.log(checkValue, resultedString, expectedValue);
}

function testAll(){
  testRepeatString("hi", 2, "hi hi ");
  testRepeatString("bye", 3, "bye bye bye ");
  testRepeatString("ho!", 4, "ho! ho! ho! ho! ");
}

testAll();
