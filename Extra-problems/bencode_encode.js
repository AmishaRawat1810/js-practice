function encodeList (inputValue) {
  let index = 0;
  let encodedList = "l";
  while (index < inputValue.length) {
    encodedList += encode (inputValue[index]);
    index++;
  }
  return encodedList.concat("e");
}

function encode (inputValue) {
  const inputType = typeof inputValue;
  if (inputType === "number") {
    return `i${inputValue}e`;
  }
  if (inputType === "string") {
    return `${inputValue.length}:${inputValue}`;
  }
  if (inputType === "object") {
    return encodeList (inputValue);
  }
}

function formatText (inputs, actualOutput, expectedOutput) {
  return `
  Inputs  : ${inputs}
  Actual  : ${actualOutput}
  Expected: ${expectedOutput}
  ----`;
}

function testCode (description, inputValue, expectedOutput) {
  const actualOutput = encode (inputValue);
  const isEqual = actualOutput === expectedOutput;
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[ ${inputValue}  ]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
}

function heading (text) {
  console.log(text);
  console.log("-".repeat(text.length));
}

function testForInteger () {
  heading("TEST FOR INTEGERS");
  testCode ("1 digit INTEGER", 1, "i1e");
  testCode ("1 digit Negative INTEGER", -1, "i-1e");
  testCode ("2 digit INTEGER", 12, "i12e");
  testCode ("2 digit Negative INTEGER", -12, "i-12e");
  testCode ("3 digit INTEGER", 123, "i123e");
  testCode ("3 digit Negative INTEGER", -123, "i-123e");
  testCode ("3+ digit INTEGER", 12345, "i12345e");
  testCode ("3- digit Negative INTEGER", -12345, "i-12345e");
  testCode ("All digits are same", 1111, "i1111e");
  console.log('\n');
}

function testForString () {
  heading("TEST FOR BYTE STRINGS");
  testCode ("Char in string : 0", "", "0:");
  testCode ("Char in string : 1", "a", "1:a");
  testCode ("Char in string : 2", "ab", "2:ab");
  testCode ("Char in string : < 3", "abcde", "5:abcde");
  testCode ("Char in string : special", "special!@#$chars", "16:special!@#$chars");
  console.log('\n');
}

function testForList () {
  heading("TEST FOR LISTS");
  testCode ("Empty List", [], "le");
  testCode ("List with 1 integer", [1], "li1ee");
  testCode ("List with < 2 integer", [1, 2, 3], "li1ei2ei3ee");
  testCode ("List with 1 character", ['a'], "l1:ae");
  testCode ("List with < 2 character", ["abcdef"], "l6:abcdefe");
  testCode ("List with 1 string, integer element", ["abcd", 1], "l4:abcdi1ee");
  testCode ("List with < 1 string, integer element",
    ["a", 1, "b", 3, "e", 4],
    "l1:ai1e1:bi3e1:ei4ee");
  console.log('\n');
}

function main () {
  testForInteger ();
  testForString ();
  testForList ();
}

main ();
