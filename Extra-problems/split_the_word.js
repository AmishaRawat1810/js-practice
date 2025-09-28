function isVowel(letter) {
  return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}

function buildWord(word) {
  let result = "";

  while (word.length > 0) {
    let foundWord = "";
    let leftoverLetter = "";
    let expectedLetter = isVowel(word[0]) ? false : true;

    foundWord = word[0];

    for (let term = 1; term < word.length; term++) {
      const currentLetter = word[term];
      
      if (isVowel(currentLetter) === expectedLetter) {
        foundWord = foundWord + currentLetter;
        expectedLetter = !expectedLetter;
      } else {
        leftoverLetter = leftoverLetter + currentLetter;
      }
    }

    result = result === "" ? foundWord : result + "," + foundWord;
    word = leftoverLetter;
  }

  return result;
}

function testSplitting(string, expected) {
  const result = buildWord(string);
  const checkValue = result === expected ? '✅' : '❌';
  
  console.log(checkValue + ' [' + string + '] → [' + result + '] | expected [' + expected + ']');
}

function testAll() {
  testSplitting("apple", "ape,p,l");
  testSplitting("there", "tere,h");
  testSplitting("hello", "helo,l");
  testSplitting("abyss", "ab,y,s,s");
  testSplitting("this", "tis,h");
  testSplitting("a", "a");
  testSplitting("ab", "ab");
  testSplitting("ba", "ba");
  testSplitting("abe", "abe");
  testSplitting("abc", "ab,c");
  testSplitting("acb", "ac,b");
  testSplitting("cba", "ca,b");
  testSplitting("cab", "cab");
  testSplitting("abcd", "ab,c,d");
  testSplitting("bacd", "bac,d");
  testSplitting("bcad", "bad,c");
  testSplitting("abcde", "abe,c,d");
  testSplitting("bbaacdef", "bacef,bad");
  testSplitting("aaabbb", "ab,ab,ab");
  testSplitting("thoughtworks", "togor,huh,t,w,k,s");
}

testAll();
