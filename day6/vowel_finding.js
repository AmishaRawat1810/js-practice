const meadow = "eat cake";
const meadowLength = meadow.length;

const islandRequirement = "aeiou";
const islandRequirementLength = islandRequirement.length;

let isVowel = 0;
let vowelIsland = 0;

for(isVowel = 0; isVowel < meadowLength; isVowel++){
  if( meadow[isVowel] === "a" || meadow[isVowel] === "e" || meadow[isVowel] === "i" || meadow[isVowel] === "o" || meadow[isVowel] === "u" ){
    vowelIsland = vowelIsland + 1;
  }
}

console.log("Meadow length",meadowLength);

const infix = "\nVowel Islands :";
console.log(meadow,infix,vowelIsland);
