// Do not rename a, d or n, use them as input for your program.
// While testing we will change its values.

const a = 2;
const d = 1;
const n = 8;

// Print the sum of first n terms of an AP where a is the first term and d is the common difference.
// Printing more than one output or printing anything other than simple interest might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
/* 
const sumOfAp = ((n / 2) * ((2 * a) + ((n - 1) * d)));
console.log(sumOfAp); */

let sumOfAp = a;
let nextTerm = a;

for(let start = 1; start < n; start++){
  nextTerm = nextTerm + d;
  sumOfAp = sumOfAp + nextTerm;
}
console.log(sumOfAp);