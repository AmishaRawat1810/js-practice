console.log("\x1B[41m" + "hello"); //red, white
console.log("\x1B[42;31m" + "hello"); //green, red
console.log("\x1B[43m" + "\x1B[38;5;255m" + "hello"); //custom : mud color, white
console.log("\x1B[44m" + "\x1B[5;38;5;5m" + "hello"); //custom : blue, blink, rani color
console.log("\x1B[45m" + "\x1B[1;38;5;6m" + "hello"); //custom : red, bold, cyan
console.log("\x1B[46m" + "\x1B[1;38;5;7m" + "hello"); //custom : cyan, bold, white
console.log("\x1B[47m" + "\x1B[1;38;5;8m" + "hello"); //custom : white, bold, green
