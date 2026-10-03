/* Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário.*/
document.getElementById("exercicio09").addEventListener("click", function antecessor(){

alert("Reajuste Salarial")

let salario = parseInt(prompt("Digite o salário atual:"));
let reajuste = parseInt(prompt("Digite o percentual do reajuste: "));
let novoSalario = salario + (salario * reajuste / 100);

alert("O novo salário é: " + novoSalario);
});