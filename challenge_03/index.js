const fs = require("fs");

const inputFile = "./challenge_03/encryption_policies.txt";
const inputText = fs.readFileSync(inputFile, "utf-8");
const lines = inputText.trim().split("\n");

function isValidPolicy(policy, password) {
  const [positions, char] = policy.split(" ");
  const [pos1, pos2] = positions.split("-").map(Number);

  return (password[pos1 - 1] === char) !== (password[pos2 - 1] === char);
}

let invalidCount = 0;
let invalidPassword = "";

for (const line of lines) {
  const [policy, password] = line.split(":").map((str) => str.trim());
  if (!isValidPolicy(policy, password)) {
    invalidCount++;
    if (invalidCount === 42) {
      invalidPassword = password;
      break;
    }
  }
}

console.log(`43 invalidCode: ${invalidPassword}`);
