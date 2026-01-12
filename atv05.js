const readlineSync = require("readline-sync");

const nome = readlineSync.question("Digite seu nome: ");
const sobrenome = readlineSync.question("Digite seu sobrenome: ");

console.log(`Olá, ${nome} ${sobrenome}! Seja bem-vindo(a)!`);