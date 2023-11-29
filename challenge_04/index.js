const fs = require("fs");

function checkFile(fileName) {
  const parts = fileName.split("-");

  if (parts.length !== 2) return "❌ False (Incorrect format)";

  const name = parts[0];
  const checksum = parts[1];

  // Check checksum length
  if (checksum.length !== 2) return "❌ False (Incorrect checksum length)";

  // Check checksum characters
  if (!/^[a-z]{2}$/.test(checksum))
    return "❌ False (Checksum contains disallowed characters)";

  // Check checksum order
  if (checksum !== name.slice(-2)) return "❌ False (Incorrect checksum)";

  return "✅ Real (Checksum is valid)";
}

const fileContent = fs.readFileSync(
  "./challenge_04/files_quarantine.txt",
  "utf-8"
);

const lines = fileContent.split("\n").filter(Boolean);

// Find the 33rd file
const fileNumber33 = lines[32];

// Check if the 33rd file is real or fake
const result = checkFile(fileNumber33);

// Extract the checksum of the 33rd file
const checksumFile33 = fileNumber33.split("-")[1];

console.log(`File name: ${fileNumber33}`);
console.log(`Checksum of file 33: ${checksumFile33}`);
