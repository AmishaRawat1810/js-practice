function display (text) {
  console.log(text)
}

function delayTheText (seconds) {
  const startTime = Date.now()
  while (Date.now() - startTime < seconds) {}
  console.clear()
}

function aboutGame () {
  const gameName = "\n\nThe Prisoner's Dilemma"
  const gameDescription = `
Imagine two friends, Alex 🥷 and Ben 🥷🏿, steal something together 💰. The police 🚓 catch them and put them in separate rooms, so they cannot talk to each other. 

A police officer 🕵️ goes to Alex 🥷 and says:
"You have two choices, Alex:

  1. Stay silent: If you don't talk 🤐 and your friend Ben also stays silent 🤐, both of you will go to jail ⛓️‍👮‍♂️ for only 1 year.
  2. Blame your friend: If you blame 🥷📢 Ben , but Ben stays silent 🤐, you will go free! Ben will go to jail ⛓️‍👮‍♂️ for 5 years.
  3. What if both blame each other? If both you 🥷 and Ben 🥷🏿 blame each other , both of you will go to jail ⛓️‍👮‍♂️ for 3 years." 

The officer tells the exact same thing to Ben.`

  const gameRule = `
Simple rules (for the player)

The rules are simple for each player. You are Alex. You have two choices

Choice 1: "Stay Silent 🤐" (Cooperate).
Choice 2: "Blame Your Friend 🗣️" (Betray).

You must make a choice. Your friend Ben is doing the same thing in another room.`

  const gameObjective = `
Simple objective :
Your personal objective is to get the shortest jail sentence possible. But you must choose without knowing what your friend will do.`

  display(`${underline(gameName, '-')}\n${gameDescription}`)
  delayTheText(30000)
  display(gameRule)
  delayTheText(12000)
  display(gameObjective)
  delayTheText(8000)
}

function main () {
  aboutGame();
  if (confirm('Do you want to see about the game again ?')) {
    delayTheText(2000)
    aboutGame();
  }

  display('GAME WILL START NOW')
}

main()
