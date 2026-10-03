/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor.*/
document.getElementById("exercicio10").addEventListener("click", function antecessor(){

alert("Custo do Carro");

let custoFabrica = parseInt(prompt("Digite o custo de fábrica do carro: "));
let custoFinal = custoFabrica + (custoFabrica * 28 / 100) + (custoFabrica * 45 / 100);
alert("O custo final é: " + custoFinal);
});