//Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.
document.getElementById("exercicio05").addEventListener("click", function antecessor(){

alert("Antecessor:");
let valor = parseInt(prompt("Digite um número:"));
let antecessor = (valor - 1)
alert("O antecessor é: " + antecessor);
});