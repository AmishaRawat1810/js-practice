function rollDice() {
  const rolledNumber = Math.ceil(Math.random() * 6);
  return rolledNumber;
}

function display(text, value) {
  console.log(`${text} ${value}`);
}

function playAgain(response) {
  if (response) {
    return main();
  }
  return console.log("Thankyou for playing 👋🏻");
}

function play(chances) {
  const rolledNumber = rollDice();
  console.log(rolledNumber);

  for (let index = 1; index <= chances; index++) {
    const guess = parseInt(prompt("Guess the rolled number : "));
    if (guess === rolledNumber) {
      return display("\nYou guessed right !!! 🎉🎉🎉🎉\nYour guess ", guess);
    }
    display("\nTry again 🙁\n⚠️ Chances left : ", (chances - index));
  }

  console.clear()
  display("⚠️ No more chances left !!!\n\nAll of your guess were ❌❌❌❌\nRolled Number :", rolledNumber);
}

function main() {
  console.clear();
  play(3);
  console.clear();
  playAgain(confirm("Do you want to play again ? "));
}

main()
