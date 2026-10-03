/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
de eleitores. */
document.getElementById("exercicio08").addEventListener("click", function antecessor(){


alert("Votos:")

let total = parseInt(prompt("Digite o número total de eleitores:"));
let votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
let votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

let percentualBrancos = (votosBrancos * 100) / total;
let percentualNulos = (votosNulos * 100) / total;
let percentualValidos = (votosValidos * 100) / total;
alert("Votos Brancos: " + percentualBrancos + "%");
alert("Votos Nulos: " + percentualNulos + "%");
alert("Votos Válidos: " + percentualValidos + "%");
});
