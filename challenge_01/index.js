const fs = require("fs");

function countOccurrences(message) {
  const words = message.toLowerCase().split(/\s+/);

  const counter = {};
  let result = "";

  words.forEach((word) => {
    word = word.replace(/[^a-zA-Z]/g, "");

    if (word) {
      counter[word] = (counter[word] || 0) + 1;
    }
  });

  for (const [word, count] of Object.entries(counter)) {
    result += word + count;
  }

  return result;
}

const file = "./challenge_01/message_01.txt";
const message = fs.readFileSync(file, "utf8");

console.log(countOccurrences(message));
