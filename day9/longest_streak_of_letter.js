function isLetterSame(firstLetter, secondLetter) {
  return firstLetter === secondLetter;
}

function calculateFrequencyOfLetter(givenString, letterToCheck) {
  let maxStreak = 0;
  let currentStreak = 0;
}

function testFrequencyOfLetter(givenString, letterToCheck, expectedValue) {
  const frequencyOfTheLetter = calculateFrequencyOfLetter(givenString, letterToCheck);
  const checkValue = frequencyOfTheLetter === expectedValue ? "✅" : "❌";

  console.log(checkValue, frequencyOfTheLetter, expectedValue);
}

testFrequencyOfLetter("aaabbcc", "a", 3);
testFrequencyOfLetter("misssillss", "s", 3);