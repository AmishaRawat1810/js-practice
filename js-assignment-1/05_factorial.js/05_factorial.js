// Do not rename n, use it as input for your program.
// While testing we will change their values.

const n = 0;
// print factorial of n.
// Do not print anything else. Printing more than one output or printing anything other than factorial might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let factorial = 1;
for(let index = 1; index <= n; index++){
  factorial = factorial * index;
}
console.log(factorial);