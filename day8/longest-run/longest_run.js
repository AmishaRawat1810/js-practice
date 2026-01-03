const fenceOfLetters = "aaabb cccc"
const fenceLength = fenceOfLetters.length;
let longestRepeatedTag = "";
let longestRepeatedTagCount = 0;

for (let placeInFence = 0; placeInFence < fenceLength; placeInFence++) {
  let letterOFFence = fenceOfLetters[placeInFence];
  let tagCount = 0;
  for (let nextLetter = placeInFence + 1; nextLetter < fenceLength; nextLetter++) {

    if (fenceOfLetters[nextLetter] === letterOFFence) {
      tagCount = tagCount + 1;

    } else if (tagCount > longestRepeatedTagCount) {
      longestRepeatedTagCount = tagCount;
      longestRepeatedTag = fenceOfLetters[nextLetter];
      tagCount = 0;
    }
  }
}

const prefix = "fence :"
const postfix = "\nOutput :"
console.log(prefix,fenceOfLetters,postfix,longestRepeatedTag,longestRepeatedTagCount);