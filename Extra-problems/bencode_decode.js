const INVALID = "Invalid";

function isInvalidNum (num) {
  return isNaN(num);
}

function isInvalidString (input, string, length) {
  return string.length !== length;
}

function decodeByteString (input, start) {
  const colonIndex = input.indexOf(":", start);
  const length = +(input.slice(start, colonIndex)); //gives the length of the string
  if (isInvalidNum(length)) {
    return [INVALID];
  }
  const end = colonIndex + 1 + length;
  const decodedString = input.slice(colonIndex + 1, end); //slice the original string

  if (isInvalidString(input, decodedString, length)) {
    return [INVALID];
  }

  return [decodedString, end];
}

function decodeInteger (input, start) {
  const end = input.indexOf("e", start); // where the number ends
  const decodedInteger = +(input.slice(start + 1, end)); // slice to get the number
  if (isInvalidNum(decodedInteger)) {
    return [INVALID];
  }
  return [decodedInteger, end + 1]; //skip the 'e' as well
}

function decodeList (input, start) {
  const decodedList = [];
  let index = start + 1; //skip 'l'

  while (input[index] !== "e") {
    const [element, nextIndex] = callDecodeFor (input[index], input, index);
    if (element === INVALID) {
      return [INVALID];
    }
    decodedList.push(element);
    index = nextIndex;
  }

  if (input[index] !== "e") { //to check whether the last element is E
    return [INVALID];
  }

  return [decodedList, index + 1];
}

function callDecodeFor (firstElement, input, start = 0) {
  if (firstElement === "i") {
    return decodeInteger (input, start);
  }
  
  if (firstElement === "l") {
    return decodeList (input, start);
  }

  if (!isNaN(parseInt(firstElement))) {
    return decodeByteString(input, start);
  }
  return [INVALID];
}

function decode (inputValue) {
  const [result, index] = callDecodeFor (inputValue[0], inputValue, 0);
  console.log("INdex : ",index, "INPUT VALue : ",inputValue[index - 1]);
  
  return result;
}

function formatText (inputs, actualOutput, expectedOutput) {
  return `
  Inputs  : ${inputs}
  Actual  : ${actualOutput}
  Expected: ${expectedOutput}
  ----`;
}

function testCode (description, inputValue, expectedOutput) {
  const actualOutput = decode (inputValue);
  const isEqual = actualOutput.toString() === expectedOutput.toString();
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
  testCode ("Digit in Integer : positive, 1", "i1e", 1);
  testCode ("Digit in Integer : positive, 2", "i12e", 12);
  testCode ("Digit in Integer : positive, > 2", "i12345e", 12345);
  testCode ("Digit in Integer : negative, 1", "i-1e", -1);
  testCode ("Digit in Integer : negative, 2", "i-12e", -12);
  testCode ("Digit in Integer : negative, > 2", "i-1234e", -1234);
  testCode ("Invalid Integer : char in between", "i-123ad4e", INVALID);
  console.log('\n');
}

function testForString () {
  heading("TEST FOR BYTE STRINGS");
  testCode ("Char in string : 0", "0:", "");
  testCode ("Char in string : 1", "1:a", "a");
  testCode ("Char in string : 2", "2:ab", "ab");
  testCode ("Char in string : special", "6:%$#@!&", "%$#@!&");
  testCode ("INVALID String : < char than length passed", "4:abcde", INVALID);
  testCode ("INVALID String : > char than length passed", "4:abc", INVALID);
  console.log('\n');
}

function testForList () {
  heading("TEST FOR LISTS");
  testCode ("Elements in list : 1, integer", "li142aee", INVALID);
  testCode ("Elements in list : 2, integer (+,+)", "li1ei2ee", [1,2]);
  testCode ("Elements in list : 2, integer (-,-)", "li-1ei-2ee", [-1,-2]);
  testCode ("Elements in list : 2, integer (-,+)", "li-1ei2ee", [-1,2]);
  testCode ("Elements in list : 1, empty string", "l0:e", [""]);
  testCode ("Elements in list : 2, string", "l1:a5:helloe", ["a", "hello"]);
  testCode ("Invalid : length : 5, elements : 6", "l5:eeeeee", INVALID);
  testCode ("Elements in list : 2, nested string", "l1:al5:helloee", ["a", ["hello"]]);
  console.log('\n');
}

function main () {
  testForInteger ();
  testForString ();
  testForList ();
}

main ();
