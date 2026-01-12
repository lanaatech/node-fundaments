const readlineSync = require("readline-sync");

const cor = readlineSync.question("Digite uma cor: ");
console.log("A sua cor favorita foi: " + cor);