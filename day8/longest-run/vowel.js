const inputString = "quee";
const vowelString = "aeiou";
let countOfVowels = 0;
let isVowel = false;
let isPreviousLetterVowel = false;

for (let inedxOfTheString = 0; inedxOfTheString < inputString.length; inedxOfTheString++) {
    isVowel = false;

    for (let indexOfVowelString = 0; ((indexOfVowelString < vowelString.length) && (!isVowel)); indexOfVowelString++) {
        isVowel = (inputString[inedxOfTheString] === vowelString[indexOfVowelString]);
        countOfVowels = (isVowel && !isPreviousLetterVowel) ? countOfVowels + 1 : countOfVowels;
    }

    isPreviousLetterVowel = isVowel;
}

console.log(countOfVowels);

/*
i = 0 ; i < 4; i ++
iV = false
---> j = 0; j < 5 && (!iV); j++
     iV = ()
*/