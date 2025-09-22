// Do not rename a or b, use them as input for your program.
// While testing we will change their values.
// a and b will be always 0 or greater.
const a = 0;
const b = 1;

// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let lcm = 0;
let hasMultiple = false;
let max = ( a > b ) ? a : b;

if( (a === 0) || (b === 0)){
  hasMultiple = true;
  lcm = undefined;
}

while(hasMultiple === false){
  if( (max % a === 0) && (max % b === 0)){
    lcm = max;
    hasMultiple = true;
  }
  max = max + 1;
}
console.log(lcm);