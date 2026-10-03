/* Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
aluno é aprovado). Escrever também a média calculada. */
document.getElementById("exercicio17").addEventListener("click", function antecessor(){


alert("Média do aluno:");
let nota1 = parseInt(prompt("Digite a primeira nota:"));
let nota2 = parseInt(prompt("Digite a segunda nota: "));
let media = (nota1 + nota2) / 2;

alert("A média é: " + media);

if (media >= 6){
    alert("Aluno aprovado.");
} else{
    alert("Aluno não aprovado.");
}
});