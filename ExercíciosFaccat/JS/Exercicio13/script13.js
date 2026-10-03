/*Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média 
final é: 
 n1 * 2 + n2 * 3 + n3 * 5 
 mediafinal = -----------------------------------
 10*/
 document.getElementById("exercicio13").addEventListener("click", function antecessor(){

alert("Média Ponderada");
let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let n3 = Number(prompt("Digite a terceira nota:"));
let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
alert("A média final é: " + media);
 });