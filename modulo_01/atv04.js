const readlineSync = require("readline-sync");

const numero = readlineSync.questionInt("Digite um numero inteiro: ");

for(let i = numero; i >= 0; i--) {
    console.log(i);
}