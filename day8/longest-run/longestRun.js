function longestRun(string) {
  const trimString = string.trim();

  if (trimString === "") {
    return -1;
  }

  return longestTag(string, 0, 0);
}

function longestTag(trimString, streak, index, longestChar) {
  if (trimString.length <= index) {
    return streak + longestChar;
  }
  
  const max = charFrequency(trimString, trimString[index], index);
  
  if (max > streak) {
    streak = max;
    longestChar = trimString[index];
  }

  return longestTag(trimString, streak, index + 1, longestChar);
}

function charFrequency(string, char, index) {
  let streak = 0;

  if (index >= string.length) {
    return 0;
  }
  
  if (string[index] === char) {
    streak = streak + 1;
  }

  return streak + charFrequency(string, char, index + 1); 
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

function testLongestRun(description, string, expectedResult) {
  const result = longestRun(string);

  consoleMessage(description, string, result, expectedResult);
}

function testAll() {
  testLongestRun("String : 1-digit number", "1", 1);
  testLongestRun("String : 2-digit number", "12", 12);
  testLongestRun("String : 3-digit number", "123", 123);
  testLongestRun("String : 4-digit number", "1234", 1234);
}

testAll();

console.log(longestTag("aaa ab", 0, 0, ""));
console.log(longestTag("ababb", 0, 0, ""));
console.log(longestTag("abbbb", 0, 0, ""));
console.log(longestTag("    aabc", 0, 0, ""));
console.log(longestTag("   aab  ccc", 0, 0, ""));