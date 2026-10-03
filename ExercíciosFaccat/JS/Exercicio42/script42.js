/*Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para 
estar em condições, um dos seguintes requisitos deve ser satisfeito: 
 - Ter no mínimo 65 anos de idade. 
 - Ter trabalhado no mínimo 30 anos. 
 - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos. 
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano 
de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo 
de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'*/
document.getElementById("exercicio42").addEventListener("click", function antecessor(){

alert("Aposentadoria");

let codigo = parseInt(prompt("Digite o código do empregado:"));
let anoAtual = parseInt(prompt("Digite o ano atual:"));
let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
let anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa:"));
let idade = anoAtual - anoNascimento;
let tempoTrabalho = anoAtual - anoIngresso;
let aposentadoria;

if (
    idade >= 65 ||
    tempoTrabalho >= 30 ||
    (idade >= 60 && tempoTrabalho >= 25)
) {
    aposentadoria = "Requerer aposentadoria";
} else {
    aposentadoria = "Não requerer";
}

alert("Código: " + codigo);
alert("Idade: " + idade);
alert("Tempo de trabalho: " + tempoTrabalho);
alert(aposentadoria);
});