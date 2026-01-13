const readlineSync = require("readline-sync");

const nome = readlineSync.question("Digite o seu nome: ");
const idade = readlineSync.questionInt("Digite a sua idade: ");
const cidade = readlineSync.question("Digite a cidade em que voce nasceu: ");

console.log(`Olá ${nome}, voce tem ${idade} anos de idade e nasceu em ${cidade}`);