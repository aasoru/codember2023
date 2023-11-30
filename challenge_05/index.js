const fs = require("fs");

const file = "./challenge_05/database_attacked.txt";

function validateUser(id, username, email, age, location) {
  const idRegex = /^[a-zA-Z0-9]+$/;
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation
  if (
    !id.match(idRegex) ||
    !username.match(usernameRegex) ||
    !email.match(emailRegex)
  ) {
    return false;
  }

  if (age !== undefined && isNaN(parseInt(age))) return false;
  return true;
}

function getInvalidCharacters(data) {
  let invalidCharacters = "";

  data.forEach((entry) => {
    const { id, username, email, age, location } = entry;

    if (!validateUser(id, username, email, age, location))
      invalidCharacters += username[0];
  });

  return invalidCharacters;
}

fs.readFile(file, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const entries = data.split("\n").map((line) => {
    const [id, username, email, age, location] = line.split(",");
    return { id, username, email, age, location };
  });

  const invalidCharacters = getInvalidCharacters(entries);

  console.log("Solution:", invalidCharacters);
});
