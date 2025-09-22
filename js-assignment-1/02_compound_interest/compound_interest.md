**Compound Interest**

Example :

p = 10,000
r = 5% = 5 / 100
t= 2 years

1st year : p * r * t = ( 10,000 * 5 * 1 ) / 100 = 500
total amount = 10,000 + 500 = 10,500

2nd year : p * r * t = ( 10,500 * 5 * 1 ) / 100 = 525
total amound = 10,000 + 525 = 10,525

repeating....

SO THE LOOP WILL BE LIKE :
let newPrinciple = p;

for ( i = t; i > 0; i++){
  let interest = ( compound_interest * r ) / 100
  newPrinciple = newPrinciple + interest;
}

const !compoundInterest = newPrinciple - p;