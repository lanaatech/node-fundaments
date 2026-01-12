const readlineSync = require("readline-sync");

const n1 = readlineSync.questionInt("digite o primeiro numero: ");
const n2 = readlineSync.questionInt("digite o segundo numero: ");

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(n1, n2));