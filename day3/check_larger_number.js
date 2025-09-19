// Condition Statements : else if, switch, while, for
//truthiness
const num1 = 34;
const num2 = 45;
const num3 = 43;

if (num1 > num2 && num1 > num3 ){
  largerNumber = num1;
} else if (num2 > num3){
  largerNumber = num2;
} else {
  largerNumber = num3;
}
console.log(largerNumber);
