const readlineSync = require("readline-sync");

const anoNascimento = readlineSync.question("Digite seu ano de nascimento: ");

function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

console.log("Sua idade é: " + calcularIdade(anoNascimento));