const fs = require("fs");

// Lee el archivo de entrada
const inputFile = "./challenge_03/encryption_policies.txt";
const inputText = fs.readFileSync(inputFile, "utf-8");
const lines = inputText.trim().split("\n");

// Función para verificar si una clave cumple con la política
function isValidPolicy(policy, password) {
  const [positions, char] = policy.split(" ");
  const [pos1, pos2] = positions.split("-").map(Number);

  // XOR para verificar que el carácter esté en una de las posiciones, pero no en ambas
  return (password[pos1 - 1] === char) !== (password[pos2 - 1] === char);
}

// Encontrar la 42ª clave inválida
let invalidCount = 0;
let invalidPassword = "";

for (const line of lines) {
  const [policy, password] = line.split(":").map((str) => str.trim());
  if (!isValidPolicy(policy, password)) {
    invalidCount++;
    console.log(`otra: ${password}`);
    if (invalidCount === 14) {
      invalidPassword = password;
      break;
    }
  }
}

// Imprime el resultado
console.log(`La 13ª clave inválida es: ${invalidPassword}`);
