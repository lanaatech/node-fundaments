const readlineSync = require("readline-sync"); 

const idade = readlineSync.questionInt("Digite sua idade: ");

if(idade < 18) {
    console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}