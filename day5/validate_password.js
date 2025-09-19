const inputPassword = "abcd1f";
const inputPasswordLength = inputPassword.length;
const validPasswordInput = "abcdefghijklmnopqrstuvwxyz";
const validPasswordInputLength = validPasswordInput.length;

let countIndex = 0;
let isPasswordValid = false;

for(countIndex = 0; countIndex < inputPasswordLength; countIndex++){
  console.log(inputPassword[countIndex]);
  for(let countIndex = 0; countIndex < validPasswordInputLength; countIndex++){
    console.log(validPasswordInput[countIndex]);
  }
}

const prefix = "the password is :";
console.log(prefix,inputPassword);
