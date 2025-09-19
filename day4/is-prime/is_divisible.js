const input = 9;
let isDivisible = false;
let counter = 2;

if (input % counter === 0){
  isDivisible = true;
}
counter = counter + 1;

if (input % counter === 0){
  isDivisible = true;
}
counter = counter + 1;

if (input % counter === 0){
  isDivisible = true;
}
counter = counter + 1;

if (input % counter === 0){
  isDivisible = true;
}
counter = counter + 1;

if (input % counter === 0){
  isDivisible = true;
}
counter = counter + 1;

if (input % counter === 0){
  isDivisible = true;
}
counter = counter + 1;

console.log("Number is divisible :",isDivisible);
