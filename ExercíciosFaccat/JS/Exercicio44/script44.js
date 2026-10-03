/*Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido 
um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado 
da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA)*/
document.getElementById("exercicio44").addEventListener("click", function antecessor(){

alert("Divisão");

let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2;

do{
    valor2 = parseInt(prompt("Digite o segundo valor (não pode ser zero):"));
} while (valor2 === 0)

    let resultado = valor1 / valor2;

    alert("O resultado da divisão é: " + resultado);
});