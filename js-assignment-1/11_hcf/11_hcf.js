// Do not rename a or b, use them as input for your program.
// While testing we will change their values.

const a = 4;
const b = 2;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let smallerValue = ( a > b ) ? b : a;
let hcf = 0;
let hasFactor = false;

while((smallerValue > 0) && (!hasFactor)){
  if((a % smallerValue === 0) && (b % smallerValue === 0)){
    hasFactor = true;
    hcf = smallerValue;
  }
  smallerValue = smallerValue - 1;
}
console.log(hcf);