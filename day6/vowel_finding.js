const meadow = "eat cake";
const meadowLength = meadow.length;

const islandRequirement = "aeiou";
const islandRequirementLength = islandRequirement.length;

let findingVowel = 0;
let vowelIsland = 0;

for(findingVowel = 0; findingVowel < meadowLength; findingVowel++){
  if( meadow[findingVowel] === "a" || meadow[findingVowel] === "e" || meadow[findingVowel] === "i" || meadow[findingVowel] === "o" || meadow[findingVowel] === "u" ){
    vowelIsland = vowelIsland + 1;
  }
}

console.log("Meadow length",meadowLength);

const infix = "\nVowel Islands :";
console.log(meadow,infix,vowelIsland);
