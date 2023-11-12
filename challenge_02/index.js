const fs = require("fs");

function miniCompiler(program) {
  let value = 0;
  let output = "";

  for (const symbol of program) {
    if (symbol === "#") value += 1;
    if (symbol === "@") value -= 1;
    if (symbol === "*") value *= value;
    if (symbol === "&") output += value.toString();
  }

  return output;
}
const file = "./challenge_02/message_02.txt";

const output = miniCompiler(fs.readFileSync(file, "utf8"));
console.log(output);
