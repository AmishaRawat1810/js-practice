Input(smallcase letter only)    |   Expectation
"abcdef"                        |   "the password is : abcdef"
"amns"                          |   "the password is : amns"
"amnsd"                         |   "the password is : amnsd"



inputPassword -> abcd
validPasswordInput -> abcdefghijklmnopqrstuvwxyz
let isPasswordValid = false;

if (inputPassword[0] === any member of validPasswordInput){
  if(inputPassword[1] === any member of validPasswordInput){
    if(inputPassword[2] === any member of validPasswordInput)
    if (inputPassword[3] === any member of validPasswordInput){
      isPasswordValid = true;
    }
  }
}
countIndex = 0

loop : countIndex < inputPasswordLength
