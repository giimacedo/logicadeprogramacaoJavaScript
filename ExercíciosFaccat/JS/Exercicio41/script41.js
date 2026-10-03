/*Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos 
exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo 
e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: 
 N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
Média_de_Aproveitamento = ---------------------------------------------------------
7 
A atribuição de conceitos obedece a tabela abaixo: 
Média de Aproveitamento Conceito 
> = 9,0 A 
> = 7,5 e < 9,0 B 
> = 6,0 e < 7,5 C 
< 6,0 D*/
document.getElementById("exercicio41").addEventListener("click", function antecessor(){

alert("Média e conceito");

let n1 = parseInt(prompt("Digite a primeira nota:"));
let n2 = parseInt(prompt("Digite a segunda nota:"));
let n3 = parseInt(prompt("Digite a terceira nota:"));
let mediaExercicios = parseInt(prompt("Digite a média dos exercícios:"));

let mediaAproveitamento =
    (n1 + n2 * 2 + n3 * 3 + mediaExercicios) / 7;
let conceito;

if (mediaAproveitamento >= 9) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5) {
    conceito = "B";
} else if (mediaAproveitamento >= 6) {
    conceito = "C";
} else {
    conceito = "D";
}

alert("Média de aproveitamento: " + mediaAproveitamento);
alert("Conceito: " + conceito);
});