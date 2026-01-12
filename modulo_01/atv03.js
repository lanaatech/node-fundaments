const readlineSync = require("readline-sync");

const Celsius = readlineSync.questionFloat("Digite a temperatura em Celsius: ");

function converterParaFahrenheit(Celsius) {
    return (Celsius * 9/5) + 32;
}

console.log("A temperatura em Fahrenheit é: " + converterParaFahrenheit(Celsius));