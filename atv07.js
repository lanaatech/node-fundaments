const readlineSync = require("readline-sync");

const nota1 = readlineSync.questionFloat("Digite a primeira nota: ");
const nota2 = readlineSync.questionFloat("Digite a segunda nota: ");
const nota3 = readlineSync.questionFloat("Digite a terceira nota: ");

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}   

console.log("A média das notas é: " + calcularMedia(nota1, nota2, nota3));