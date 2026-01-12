const readlineSync = require("readline-sync");

const palavraOriginal = readlineSync.question("Digite uma palavra: ");

const palavraInvertida = palavraOriginal.split("").reverse().join("");

if(palavraOriginal === palavraInvertida) {
    console.log("A palavra é um palíndromo.");
} else {
    console.log("A palavra não é um palíndromo.");
}